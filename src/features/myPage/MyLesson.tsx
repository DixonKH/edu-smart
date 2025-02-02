import { IoReaderOutline } from "react-icons/io5";
import { IoMdEye, IoMdHeart } from "react-icons/io";
import { FaBookReader } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { useMemberStore } from "../teachers/model/store";
import { useLessonStore } from "../lessons/model/store";
import { useEffect, useState } from "react";
import { serverApi } from "@/shared/lib/config";
import { Link } from "react-router-dom";
import moment from "moment";
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

const MyLesson = () => {
  const currentMember = useMemberStore((state) => state.currentMember);
  const allLessons = useLessonStore((state) => state.allLessons);
  const getAllLessons = useLessonStore((state) => state.getAllLessons);
  const [currentPage, setCurrentPage] = useState(1);
  const lessonsPerPage = 6;

  useEffect(() => {
    if (currentMember) {
      getAllLessons();
    }
  }, [currentMember, getAllLessons]);

  const myLessons = allLessons.filter((lesson) => {
    return lesson.memberId === currentMember?._id;
  });

  const totalLessons = myLessons.length;
  const totalPages = Math.ceil(totalLessons / lessonsPerPage);
  const startIdx = (currentPage - 1) * lessonsPerPage;
  const endIdx = startIdx + lessonsPerPage;
  const paginatedLessons = myLessons.slice(startIdx, endIdx);

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <div className="p-3 px-4">
      <div className="flex justify-center items-center">
        <h1 className="text-2xl font-medium my-2">My Lessons</h1>
      </div>
      <div className="grid base:grid-cols-1 gap-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
        {paginatedLessons.map((lesson) => {
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
      {totalLessons !== 0 && (
        <div className="text-center text-md text-lg mb-6 mt-8">
        Total{" "}
        <span className="bg-red text-white rounded-full p-1 px-3">
          {totalLessons}
        </span>{" "}
        articles available
      </div>
      )}
      {totalPages > 1 && (
        <div className="text-center text-md text-lg mb-8 cursor-pointer">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  onClick={(e) => {
                    e.preventDefault();
                    if (currentPage > 1) {
                      handlePageChange(currentPage - 1);
                    }
                  }}
                />
              </PaginationItem>
              {[...Array(totalPages)].map((_, i) => (
                <PaginationItem key={i}>
                  <PaginationLink
                    onClick={(e) => {
                      e.preventDefault();
                      handlePageChange(i + 1);
                    }}
                    isActive={currentPage === i + 1}
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
                  onClick={(e) => {
                    e.preventDefault();
                    if (currentPage < totalPages) {
                      handlePageChange(currentPage + 1);
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

export default MyLesson;
