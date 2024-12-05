import LessonCard from "./LessonCard";
import { FaSearch } from "react-icons/fa";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export default function Lessons() {
  const lessons: any = [
    {
      id: 1,
      title: "Koreys Alifbosi va ularning qollanish usullari",
      desc: "This is the Desc",
      create: "12/07/2024",
      owner: "Meloboyev A",
      view: "2",
      like: "true",
    },
    {
      id: 2,
      title: "Lesson 2",
      desc: "This is the Desc",
      create: "12/07/2024",
      owner: "Abdurakhmonov B",
      view: "3",
      like: "true",
    },
    {
      id: 3,
      title: "Lesson 3",
      desc: "This is the Desc",
      create: "12/07/2024",
      owner: "Xasanov D",
      view: "5",
      like: "false",
    },
    {
      id: 4,
      title: "Lesson 4",
      desc: "This is the Desc",
      create: "12/07/2024",
      owner: "Abdurakhmonov B",
      view: "3",
      like: "true",
    },
    {
      id: 5,
      title: "Lesson 5",
      desc: "This is the Desc",
      create: "12/07/2024",
      owner: "Abdurakhmonov B",
      view: "1",
      like: "false",
    },
    {
      id: 6,
      title: "Lesson 3",
      desc: "This is the Desc",
      create: "12/07/2024",
      owner: "Xasanov D",
      view: "5",
      like: "false",
    },
    {
      id: 7,
      title: "Lesson 4",
      desc: "This is the Desc",
      create: "12/07/2024",
      owner: "Abdurakhmonov B",
      view: "3",
      like: "true",
    },
    {
      id: 8,
      title: "Lesson 5",
      desc: "This is the Desc",
      create: "12/07/2024",
      owner: "Abdurakhmonov B",
      view: "1",
      like: "false",
    },
  ];
  return (
    <div className="container">
      <div>
        <h1 className="text-3xl my-4">
          - Our Teacher's Lessons -
          <p className="text-lg">
            We are offering various lessons to help you learn Korean. Please
            choose your favorite subject and level.
          </p>
        </h1>
        <div className="flex flex-row mt-4 gap-4 items-center justify-between w-full h-auto mb-5">
          <div>
            <select className="border rounded-lg p-2 w-48 text-lg outline-none ">
              <option value="1">Category</option>
              <option value="2">Genereal Korean</option>
              <option value="3">Topic I</option>
              <option value="4">Topic II</option>
            </select>
          </div>
          <div>
            <select className="border rounded-lg p-2 w-48 text-lg outline-none ">
              <option value="1">Sort by</option>
              <option value="2">Recently added</option>
              <option value="3">Old</option>
              <option value="4">More viewed</option>
            </select>
          </div>
          <form className="flex w-full items-center justify-end">
            <input
              type="text"
              placeholder="Search"
              className="border rounded-lg text-lg p-2 w-5/6 outline-none "
            />
            <button
              type="submit"
              className=" flex items-center justify-center bg-green1 gap-2 text-lg text-white p-2 rounded-lg ml-2 w-32"
            >
              <FaSearch /> Search
            </button>
          </form>
        </div>
        <div className="flex flex-row gap-x-9 gap-y-4 pl-1 mt-4 flex-wrap items-center justify-items-start w-full  h-auto mb-5">
          {lessons.map((lesson: any) => {
            return <LessonCard key={lesson.id} lesson={lesson} />;
          })}
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
  );
}
