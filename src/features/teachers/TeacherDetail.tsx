import { useParams } from "react-router-dom";
import TeacherCard from "./TeacherCard";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../../components/ui/pagination";
import { useEffect, useState } from "react";
import { useMemberStore } from "./model/store";
import { useLessonStore } from "../lessons/model/store";
import { LessonInquiry } from "@/shared/types/lesson";
import TeacherLessons from "./TeacherLessons";
import { Direction } from "@/shared/enums/common.enum";

export default function TeacherDetail() {
  const { teacherId } = useParams();
  const members = useMemberStore((state) => state.members);
  const getMemberById = useMemberStore((state) => state.getMemberById);
  const getTeachers = useMemberStore((state) => state.getTeachers);
  const teacher = getMemberById(teacherId!);
  const allLessons = useLessonStore((state) => state.allLessons);
  const getAllLessons = useLessonStore((state) => state.getAllLessons);
  const [currentPage, setCurrentPage] = useState(1);
  const lessonsPerPage = 6; 

  useEffect(() => {
    if (!teacher) {
      getTeachers({ page: 1, limit: 8, search: { text: "" } });
    }
  }, [teacherId, members]);

  useEffect(() => {
    if (teacher) {
      getAllLessons();
    }
  }, [teacher, getAllLessons]);

  console.log("allLessons", allLessons);
  

  const teacherLessons = allLessons.filter((lesson) => {
    return lesson.memberId === teacher?._id;
  });
  
  const totalLessons = teacherLessons.length;
  const totalPages = Math.ceil(totalLessons / lessonsPerPage);
  const startIdx = (currentPage - 1) * lessonsPerPage;
  const endIdx = startIdx + lessonsPerPage;
  const paginatedLessons = teacherLessons.slice(startIdx, endIdx);

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };


  return (
    <div className="container">
      <h1 className="text-center lg:text-left text-2xl lg:text-3xl my-8 mt-10">
        - Teacher Detail -
      </h1>
      <div className="flex flex-col lg:flex-row items-start  lg:justify-between mb-10 gap-6">
        <TeacherCard teacher={teacher} />
        <div className="w-full">
          <div className="w-full grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5">
            <TeacherLessons teacherLessons={paginatedLessons} />
          </div>
          {totalPages > 1 && (
            <div className="my-3">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" 
                  onClick={(e) => {
                    e.preventDefault();
                      handlePageChange(currentPage - 1);
                  }} />
                </PaginationItem>
                {[...Array(totalPages)].map((_, i) => (
                <PaginationItem key={i}>
                  <PaginationLink
                    className={`hidden md:flex ${
                      currentPage === i + 1 ? "bg-gray-300" : ""
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      handlePageChange(i + 1);
                    }}
                  >
                    {i + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" onClick={(e) => {
                    e.preventDefault();
                    if (currentPage < totalPages) {
                      handlePageChange(currentPage + 1);
                    }
                  }} />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
          )}
        </div>
      </div>
    </div>
  );
}
