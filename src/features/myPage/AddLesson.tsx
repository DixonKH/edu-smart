import { LessonCategory, LessonLevel } from "@/shared/enums/lesson.enum";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FiUpload } from "react-icons/fi";
import { useLessonStore } from "../lessons/model/store";
import { useRef, useState } from "react";
import { LessonInput } from "@/shared/types/lesson";
import { useMemberStore } from "../teachers/model/store";
import axios from "axios";
import { Messages, serverApi } from "@/shared/lib/config";
import {
  sweetErrorHandling,
  sweetTopSmallSuccessAlert,
} from "@/shared/lib/sweetAlert";

export default function AddLesson() {
  const inputRef = useRef<any>(null);
  const currentMember = useMemberStore((state) => state.currentMember);
  const createLesson = useLessonStore((state) => state.createLesson);
  const [videoPreview, setVideoPreview] = useState<string | null>(null);
  const [lesson, setLesson] = useState<LessonInput>({
    lessonCategory: LessonCategory.KOREAN,
    lessonLevel: LessonLevel.BEGINNER,
    lessonTitle: "",
    lessonDesc: "",
    lessonVideo: "",
  });

  const uploadFile = async (file: File): Promise<string | null> => {
    if (!file) {
      console.error("No file selected");
      return null;
    }
    try {
      const formData = new FormData();
      formData.append("lessonVideo", file);

      const response = await axios.post(
        `${serverApi}/lessons/create`,
        formData
      );

      const result = response.data.lessonVideo;
      console.log("File uploaded successfully:", result);
      setLesson((prev) => {
        return {
          ...prev,
          lessonVideo: "",
        };
      });
      return result;
    } catch (err) {
      console.error("File upload failed in uploadLesson:", err);
      return null;
    }
  };

  const submitLesson = async () => {
    try {
      if (!lesson.lessonTitle || !lesson.lessonDesc || !lesson.lessonLevel) {
        throw new Error(Messages.error3);
      }
      let uploadedVideoUrl = null;
      const memberId = currentMember?._id || "";

      if (lesson.lessonVideo && typeof lesson.lessonVideo !== "string") {
        uploadedVideoUrl = await uploadFile(lesson.lessonVideo);
      }
      const lessonData = {
        ...lesson,
        lessonVideo: uploadedVideoUrl || lesson.lessonVideo,
      };
      await createLesson(memberId, lessonData);
      sweetTopSmallSuccessAlert("Lesson added successfully", 800);
      setLesson({
        lessonCategory: LessonCategory.KOREAN || undefined,
        lessonLevel: LessonLevel.BEGINNER || undefined,
        lessonTitle: "",
        lessonDesc: "",
        lessonVideo: "",
      });
      const fileInput = document.getElementById(
        "fileInput"
      ) as HTMLInputElement;
      if (fileInput) fileInput.value = "";
      setVideoPreview(null);
    } catch (err) {
      console.error("Failed to create lesson", err);
      if (axios.isAxiosError(err)) {
        console.error("AxiosError details:", err.response?.data || err.message);
      }
      sweetErrorHandling(err).then();
    }
  };

  const handleFileSelection = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (e.target.files && e.target.files.length > 0) {
      const selectedFile = e.target.files[0];
      setLesson((prev) => ({
        ...prev,
        lessonVideo: selectedFile,
      }));

      const reader = new FileReader();
      reader.onloadend = () => {
        setVideoPreview(reader.result as string);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  return (
    <div className="p-3 px-4">
      <div className="flex justify-center items-center mt-4">
        <h1 className="text-2xl font-medium">Add your Lesson</h1>
      </div>
      <form>
        <div className="w-full flex md:flex-row flex-col justify-between ">
          <div className="lg:p-3 p-1 w-full">
            <p className="font-semibold mb-1">Lesson Title</p>
            <input
              type="text"
              value={lesson.lessonTitle}
              onChange={(e) =>
                setLesson({ ...lesson, lessonTitle: e.target.value })
              }
              className="border px-3 py-1 rounded-2xl w-full p-2 h-14 text-lg outline-none"
              placeholder="Enter lesson title"
            />
          </div>
        </div>
        <div className="flex md:flex-row md:gap-6 gap-2 flex-col items-center justify-between">
          <div className="w-full">
            <p className="font-semibold mb-1">Category</p>
            <Select
              defaultValue={lesson.lessonCategory}
              onValueChange={(value) =>
                setLesson({
                  ...lesson,
                  lessonCategory: value as LessonCategory,
                })
              }
            >
              <SelectTrigger className="w-full h-14 rounded-2xl border">
                <SelectValue placeholder="ENGLISH" />
              </SelectTrigger>
              <SelectContent>
                {Object.values(LessonCategory).map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="w-full">
            <p className="font-semibold mb-1">Lesson level</p>
            <Select
              defaultValue={lesson.lessonLevel}
              onValueChange={(value) =>
                setLesson({ ...lesson, lessonLevel: value as LessonLevel })
              }
            >
              <SelectTrigger className="w-full h-14 rounded-2xl border">
                <SelectValue placeholder="BEGINNER" />
              </SelectTrigger>
              <SelectContent>
                {Object.values(LessonLevel).map((lesson) => (
                  <SelectItem key={lesson} value={lesson}>
                    {lesson}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="w-full mt-4">
          <p className="font-semibold mb-1">Description</p>
          <textarea
            value={lesson.lessonDesc}
            onChange={(e) =>
              setLesson({ ...lesson, lessonDesc: e.target.value })
            }
            rows={5}
            placeholder="Enter lesson description"
            className="border rounded-2xl w-full outline-none p-3 text-lg"
          />
        </div>
        <div className="w-full flex items-center justify-center my-3 border rounded-xl h-80">
          {!videoPreview ? (
            <button
              type="button"
              className=" cursor-pointer"
              onClick={() => inputRef.current?.click()}
            >
              <p className="font-semibold mb-1 text-slate-400">
                <FiUpload className="text-8xl text-slate-300" />
                Upload File
              </p>
              <input
                type="file"
                ref={inputRef}
                hidden
                id="fileInput"
                accept="video/*"
                onChange={handleFileSelection}
              />
            </button>
          ) : (
            <div className="w-[520px] flex items-center justify-center my-2">
              <video src={videoPreview} controls  width="100%" muted={false} className="rounded-lg" />
            </div>
          )}
        </div>
        <div className="flex items-center justify-end lg:p-3 md:p-2 text-xs md:text-base mt-4">
          <button
            type="button"
            onClick={submitLesson}
            className="w-48 border bg-green px-2 py-2 flex items-center justify-evenly text-white text-lg rounded-xl mr-4"
          >
            + Add Lesson
          </button>
        </div>
      </form>
    </div>
  );
}
