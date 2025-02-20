import { IoMdEye, IoMdHeart } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { BsPatchExclamationFill } from "react-icons/bs";
import { IoReaderOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa6";
import { FaBookReader } from "react-icons/fa";
import LessonReview from "@/entities/LessonReview";
import { Link, Navigate, useParams } from "react-router-dom";
import { useMemberStore } from "../teachers/model/store";
import { useLessonStore } from "./model/store";
import { useEffect, useState } from "react";
import { serverApi } from "@/shared/lib/config";
import moment from "moment";
import Jeonbuk from "/public/images/jeonbuk.png";
import LessonOwner from "./LessonOwner";
import { sweetTopSmallSuccessAlert } from "@/shared/lib/sweetAlert";
import { Direction } from "@/shared/enums/common.enum";
import { LessonInquiry } from "@/shared/types/lesson";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function ChoosenLesson() {
  const { lessonId } = useParams();
  const currentMember = useMemberStore((state) => state.currentMember);
  const currentLesson = useLessonStore((state) => state.currentLesson);
  const getLesson = useLessonStore((state) => state.getLesson);
  const likeTargetLesson = useLessonStore((state) => state.likeTargetLesson);
  const getLessons = useLessonStore((state) => state.getLessons);
  const lessons = useLessonStore((state) => state.lessons);
  const [lessonsData, setLessonsData] = useState<LessonInquiry>({
    page: 1,
    limit: 12,
    sort: "createdAt",
    direction: Direction.DESC,
  });

  if (!currentMember) {
    return <Navigate to="/login" replace />; // Redirect to login if not authenticated
  }

  useEffect(() => {
    if (lessonId && currentMember) {
      getLesson(currentMember._id, lessonId);
    }
  }, [lessonId, currentMember, getLesson]);

  useEffect(() => {
    const fetchLessons = async () => {
      await getLessons(lessonsData);
    };
    fetchLessons();
  }, [lessonId, currentMember, getLessons]);

  console.log("currentLesson:", currentLesson);

  const relatedLessons = lessons.filter((lesson) => {
    const lessonTitle = lesson.lessonTitle;
    const splitedTitle = lessonTitle?.toLowerCase().split(" ");

    const currentLessonTitle = currentLesson?.lessonTitle
      ?.toLowerCase()
      .split(" ");

    if (currentLessonTitle?.length !== undefined) {
      const result =
        currentLessonTitle[0] === splitedTitle[0] ||
        currentLessonTitle[0] === splitedTitle[1] ||
        currentLessonTitle[0] === splitedTitle[2] ||
        currentLessonTitle[0] === splitedTitle[3] ||
        currentLessonTitle[1] === splitedTitle[0] ||
        currentLessonTitle[1] === splitedTitle[1] ||
        currentLessonTitle[1] === splitedTitle[2] ||
        currentLessonTitle[1] === splitedTitle[3] ||
        currentLessonTitle[2] === splitedTitle[0] ||
        currentLessonTitle[2] === splitedTitle[1] ||
        currentLessonTitle[2] === splitedTitle[2] ||
        currentLessonTitle[2] === splitedTitle[3];

      return result;
    }
    return false;
  });

  const finalResult = relatedLessons.filter((lesson) => {
    return lesson._id !== currentLesson?._id;
  });

  const handleLikeToggle = async (e: any) => {
    e.preventDefault();
    try {
      if (currentMember && lessonId) {
        await likeTargetLesson(currentMember._id, lessonId);
        sweetTopSmallSuccessAlert("Liked lesson successfully", 700);
      }
    } catch (err) {
      console.log("Error liking lesson:", err);
    }
  };

  const videoPath = `${serverApi}/${currentLesson?.lessonVideo}`;
  const date = currentLesson?.updatedAt;
  const formattedDate = date ? moment(date).format("YYYY-MM-DD") : "N/A";

  return (
    <div className="lg:container mt-28 md:mt-40 md:px-16 px-8 mb-16">
      <div className="lg:flex flex-col lg:flex-row items-start justify-between gap-3 mb-8">
        <div className="lg:w-3/4 flex flex-col items-start justify-start">
          <div className="w-full flex flex-row items-center mb-4">
            <div className="text-2xl text-center md:text-left md:text-3xl font-medium">
              {currentLesson?.lessonTitle}
            </div>
          </div>
          <div className="my-4 w-full">
            {currentLesson?.lessonVideo ? (
              <video
                key={currentLesson?._id}
                className="w-full rounded-md"
                controls
              >
                <source src={videoPath} type="video/mp4" />
              </video>
            ) : (
              <p className="w-full flex items-center justify-center h-[240px] md:h-[460px] lg:h-[520px] border bg-slate-200 rounded-md">
                <img
                  src={Jeonbuk}
                  alt=""
                  className="w-32 md:w-48 filter grayscale"
                />
              </p>
            )}
          </div>
          <div className="w-full mt-4">
            <div className="flex py-2 flex-row items-center justify-between">
              <h2 className="text-xl md:text-3xl">Lesson Description</h2>
              <div className="flex gap-2">
                <span className="flex items-center gap-1 text-xl">
                  <IoMdEye className="text-slate-500 md:text-2xl" />
                  {currentLesson?.lessonViews}{" "}
                  <span className="hidden md:flex">Views</span>
                </span>
                <span className="ml-2 flex items-center text-xl text-slate-800">
                  {currentLesson?.lessonLikes ? (
                    <IoMdHeart
                      onClick={(e) => handleLikeToggle(e)}
                      className="text-red text-3xl cursor-pointer"
                    />
                  ) : (
                    <CiHeart
                      onClick={(e) => handleLikeToggle(e)}
                      className="text-red text-3xl cursor-pointer"
                    />
                  )}
                  {currentLesson?.lessonLikes}
                  <span className="hidden md:flex ml-1">Likes</span>
                </span>
              </div>
            </div>
            <p className="md:text-xl py-4 w-full px-2">
              {currentLesson?.lessonDesc}
            </p>
            <span
              className={`leading-4 md:text-xl overflow-hidden p-1 px-2 rounded ${
                currentLesson?.lessonLevel === "BEGINNER"
                  ? "bg-red text-white"
                  : currentLesson?.lessonLevel === "ELEMENTRY"
                  ? "bg-orange text-white"
                  : currentLesson?.lessonLevel === "INTERMEDIATE"
                  ? "bg-blue text-white"
                  : currentLesson?.lessonLevel === "ADVANCED"
                  ? "bg-bgGreen text-white"
                  : "bg-orange text-white"
              }`}
            >
              {currentLesson?.lessonLevel}
            </span>
            <div className="flex flex-col md:flex-row items-center justify-between gap-2 mt-5">
              <p className="flex flex-row items-center justify-start gap-1">
                <FaStar className="text-yellow text-lg" />
                <FaStar className="text-yellow" />
                <FaStar className="text-yellow" />
                <FaStar className="text-yellow" />
                <FaStar className="text-yellow" />
                <span className="ml-1 text-2xl md:text-3xl font-bold">4.5</span>
                <span className="italic text-slate-500">(123 views)</span>
              </p>
              <p className="flex items-center justify-start gap-1 text-xl text-slate-500">
                <BsPatchExclamationFill className="text-yellow text-sm md:text-2xl" />
                <p className="flex">
                  Last updated:
                  <span className="ml-4 text-lg md:text-xl italic text-slate-500">
                    {formattedDate}
                  </span>
                </p>
              </p>
            </div>
          </div>
          <LessonReview />
        </div>
        <div className="mt-16 lg:1/4">
          {currentLesson && <LessonOwner currentLesson={currentLesson} />}
        </div>
      </div>
      {finalResult.length > 0 && (
        <div>
          <h1 className="text-3xl font-bold mb-4 mt-10">Related Videos</h1>
        </div>
      )}
      {finalResult.length > 0 && (
        <Carousel className="w-full flex my-4">
          <CarouselContent className="flex items-center justify-start gap-4 w-full pl-6">
            {finalResult.map((lesson) => {
              const videoPath = `${serverApi}/${lesson?.lessonVideo}`,
                date = lesson?.createdAt,
                formattedDate = date
                  ? moment(date).format("DD/MM/YYYY")
                  : "N/A";
              return (
                <CarouselItem
                  key={lesson._id}
                  className={`flex flex-col items-between pl-0 h-68 md:basis-1/3 lg:basis-1/4 border rounded-md`}
                >
                  <div className="">
                    <Link to={`/lessons/${lesson._id}`} className="full">
                      {lesson?.lessonVideo ? (
                        <video className="h-40 w-[980px]  rounded-md" controls>
                          <source
                            src={videoPath}
                            type="video/mp4"
                            className="w-full object-cover"
                          />
                        </video>
                      ) : (
                        <div className="w-full flex items-center justify-center h-40 border bg-slate-200 rounded-md">
                          <img
                            src={Jeonbuk}
                            alt=""
                            className="w-20 mx-44 filter grayscale"
                          />
                        </div>
                      )}
                    </Link>
                    <div className="px-2 mt-1">
                      <div className="flex flex-row items-center justify-between gap-4 h-8 py-1 ">
                        <div className="leading-5">
                          <span className="inline-block text-green1">
                            <IoReaderOutline />
                          </span>
                          {lesson.lessonTitle}
                        </div>
                        <div>
                          <IoMdEye className="text-slate-500 size-5" />
                        </div>
                      </div>
                      <div className="flex flex-row items-center justify-between gap-4 w-full h-8 py-1 ">
                        <div
                          className={`leading-4 text-sm overflow-hidden p-1 px-2 rounded ${
                            lesson.lessonLevel === "BEGINNER"
                              ? "bg-red text-white"
                              : lesson.lessonLevel === "ELEMENTRY"
                              ? "bg-orange text-white"
                              : lesson.lessonLevel === "INTERMEDIATE"
                              ? "bg-blue text-white"
                              : lesson.lessonLevel === "ADVANCED"
                              ? "bg-bgGreen text-white"
                              : "bg-orange text-white"
                          }`}
                        >
                          {lesson.lessonLevel}
                        </div>
                        <div className="text-[12px] text-slate-600">
                          {formattedDate}
                        </div>
                      </div>
                      <div className="flex items-center justify-between mt-2 pb-2">
                        <div className="flex flex-row items-center justify-start gap-1 text-slate-600 text-sm">
                          <FaBookReader className="text-bgGreen" />
                          Teacher: {lesson?.memberData?.memberNick}
                        </div>
                        {lesson?.lessonLikes ? (
                          <IoMdHeart className="text-red text-xl cursor-pointer" />
                        ) : (
                          <CiHeart className="text-red text-xl cursor-pointer" />
                        )}
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious className="hidden lg:flex" />
          <CarouselNext className="hidden lg:flex" />
        </Carousel>
      )}
    </div>
  );
}
