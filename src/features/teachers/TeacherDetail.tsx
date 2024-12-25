import React from "react";
import TeacherCard from "../../entities/TeacherCard";
import LessonCard from "../../features/lessons/LessonCard";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../../components/ui/pagination";

export default function TeacherDetail() {
  return (
    <div className="container">
      <h1 className="text-center lg:text-left text-2xl lg:text-3xl my-4">
        - Teacher Detail -
      </h1>
      <div className="flex flex-col lg:flex-row items-start  lg:justify-between mb-10 gap-6">
        <TeacherCard />
        <div className="w-full">
          <div className="w-full grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5">
            <LessonCard />
          </div>
          <div className="my-3">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>
      </div>
    </div>
  );
}
