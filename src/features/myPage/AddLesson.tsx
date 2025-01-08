import { LessonCategory, LessonLevel } from "@/shared/enums/lesson.enum";
import AddFiles from "../../features/myPage/AddFiles";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Props = {};

const AddLesson = (props: Props) => {
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
              className="border px-3 py-1 rounded-2xl w-full p-2 lg:h-14  h-8 text-lg outline-none"
              placeholder="Ex.John Doe"
            />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="lg:p-3 p-1 w-full">
            <p className="font-semibold mb-1">Lesson level</p>
            <Select
            // defaultValue={memberData.memberCategory}
            //  onValueChange={handleSelectChange}
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
          <div className="w-full">
            <p className="font-semibold mb-1">Category</p>
            <Select
            // defaultValue={memberData.memberCategory}
            //  onValueChange={handleSelectChange}
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
        </div>
        <div className="lg:p-3 p-1">
          <p className="font-semibold mb-1">Description</p>
          <textarea
            rows={5}
            className="border px-3 py-1 rounded-2xl w-full outline-none p-2 text-lg"
          />
        </div>
        <div className="p-1">
          <p className="font-semibold mb-1">Upload File</p>
          <AddFiles />
        </div>
        <div className="flex items-center justify-end lg:p-3 md:p-2 text-xs md:text-base mt-4">
          <button className="w-48 border bg-green px-2 py-2 flex items-center justify-evenly text-white text-lg rounded-xl mr-4">
            + Add Lesson
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddLesson;
