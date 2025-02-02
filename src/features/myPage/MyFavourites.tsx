import { useLessonStore } from "../lessons/model/store";
import { useEffect, useState } from "react";
import { OrdinaryInquiry } from "@/shared/types/lesson";
import { useMemberStore } from "../teachers/model/store";
import { serverApi } from "@/shared/lib/config";
import { FaBookReader } from "react-icons/fa";
import { IoMdEye, IoMdHeart } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import moment from "moment";
import { Link } from "react-router-dom";
import { IoReaderOutline } from "react-icons/io5";
import Jeonbuk from "/public/images/jeonbuk.png";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const MyFavourites = () => {
  const favoriteLessons = useLessonStore((state) => state.favoriteLessons);
  const currentMember = useMemberStore((state) => state.currentMember);
  const getFavoriteLessons = useLessonStore(
    (state) => state.getFavoriteLessons
  );
  const total = useLessonStore((state) =>
    state.metaCounter.length > 0 ? state.metaCounter[0].total : 0
  );
  const [lessonInquiry, setLessonInquiry] = useState<OrdinaryInquiry>({
    page: 1,
    limit: 9,
  });

  useEffect(() => {
    if (favoriteLessons.length === 0 && currentMember) {
      getFavoriteLessons(currentMember._id, lessonInquiry);
    }
  }, [lessonInquiry]);

  const handlePageChange = (newPage: number) => {
    setLessonInquiry((prev) => ({
      ...prev,
      page: newPage,
    }));
  };

  const totalPages = Math.ceil(total / lessonInquiry.limit);

  console.log("favoriteLessons", favoriteLessons);

  return (
    <div className="p-3 px-4">
      <div className="flex justify-center items-center">
        <h1 className="text-2xl font-medium my-2">My Favourites</h1>
      </div>
      <div className="grid base:grid-cols-1 gap-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
        {favoriteLessons.map((lesson) => {
          const videoPath = `${serverApi}/${lesson?.lessonVideo}`;
          const date = lesson?.createdAt;
          const formattedDate = date
            ? moment(date).format("MMM d, yyyy")
            : "N/A";
          return (
            <div
              key={lesson._id}
              className="flex flex-col items-between justify-start w-full border-solid border rounded-lg cursor-pointer"
            >
              <Link
                to={`/lessons/${lesson._id}`}
                className="relative w-full h-52 lg:h-48"
              >
                {lesson?.lessonVideo ? (
                  <video
                    key={lesson._id}
                    className="absolute top-0 left-0 rounded-md w-full h-full"
                    controls
                  >
                    <source src={videoPath} type="video/mp4" />
                  </video>
                ) : (
                  <p className="w-full flex items-center justify-center h-full border bg-slate-200 rounded-md">
                    <img
                      src={Jeonbuk}
                      alt=""
                      className="w-32 filter grayscale"
                    />
                  </p>
                )}
              </Link>
              <div className="p-2 mt-1">
                <div className="flex flex-row items-start justify-between gap-4 w-full h-8 mb-2">
                  <div className="text-md font-bold text-left w-full h-12 overflow-hidden">
                    <span className="inline-block text-green mr-1">
                      <IoReaderOutline />
                    </span>
                    {lesson.lessonTitle}
                  </div>
                  <div className="flex flex-row items-center justify-start gap-1">
                    <IoMdEye className="text-slate-500 size-5" />
                    {lesson.lessonViews}
                  </div>
                </div>
                <div className="flex flex-row items-center justify-between gap-4 w-full h-8 py-1 mt-5">
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
                  <div className="text-sm font-semibold text-slate-600">
                    {formattedDate}
                  </div>
                </div>
                <div className="h-[0.5px] w-full bg-slate-300"></div>
                <div className="flex items-center justify-between mt-2">
                  <div className="flex flex-row items-center justify-start gap-1 text-slate-500 text-md font-medium">
                    <FaBookReader className="text-green" />
                    Teacher: {lesson.memberData?.memberNick}
                  </div>
                  <div className="flex flex-row items-center justify-start gap-1">
                    {lesson?.lessonLikes ? (
                      <IoMdHeart className="text-red text-xl cursor-pointer" />
                    ) : (
                      <CiHeart className="text-red text-xl cursor-pointer" />
                    )}
                    {lesson?.lessonLikes}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {total > 1 && (
        <div className="mt-7 mb-2">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    if (lessonInquiry.page > 1) {
                      handlePageChange(lessonInquiry.page - 1);
                    }
                  }}
                />
              </PaginationItem>
              {[...Array(totalPages)].map((_, i) => (
                <PaginationItem key={i}>
                  <PaginationLink
                    className="hidden md:flex"
                    onClick={(e) => {
                      e.preventDefault();
                      handlePageChange(i + 1);
                    }}
                    isActive={lessonInquiry.page === i + 1}
                  >
                    {i + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    if (lessonInquiry.page < totalPages) {
                      handlePageChange(lessonInquiry.page + 1);
                    }
                  }}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      )}
    </div>
  );
};

export default MyFavourites;
