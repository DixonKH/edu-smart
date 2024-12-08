import LessonCard from "./LessonCard";
import LessonFilter from "./LessonFilter";
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
      category: "Beginner",
      desc: "This is the Desc",
      create: "12/07/2024",
      owner: "Meloboyev A",
      view: "2",
      like: "true",
    },
    {
      id: 2,
      title: "Lesson 2",
      category: "Elementry",
      desc: "This is the Desc",
      create: "12/07/2024",
      owner: "Abdurakhmonov B",
      view: "3",
      like: "true",
    },
    {
      id: 3,
      category: "Intermediate",
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
      category: "Advanced",
      desc: "This is the Desc",
      create: "12/07/2024",
      owner: "Abdurakhmonov B",
      view: "3",
      like: "true",
    },
    {
      id: 5,
      title: "Lesson 5",
      category: "Elementry",
      desc: "This is the Desc",
      create: "12/07/2024",
      owner: "Abdurakhmonov B",
      view: "1",
      like: "false",
    },
    {
      id: 6,
      title: "Lesson 3",
      category: "Beginner",
      desc: "This is the Desc",
      create: "12/07/2024",
      owner: "Xasanov D",
      view: "5",
      like: "false",
    },
    {
      id: 7,
      title: "Lesson 4",
      category: "Beginner",
      desc: "This is the Desc",
      create: "12/07/2024",
      owner: "Abdurakhmonov B",
      view: "3",
      like: "true",
    },
    {
      id: 8,
      title: "Lesson 5",
      category: "Elementry",
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
        <h1 className="text-xl text-center sm:text-center sm:text-2xl lg:text-left lg:text-3xl my-5">
          - Our Teacher's Lessons -
          <p className=" pt-2 text-sm sm:text-lg text-center lg:text-left">
            We are offering various lessons to help you learn Korean. Please
            choose your favorite subject and level.
          </p>
        </h1>
        <div className="flex flex-col-reverse md:flex md:flex-row mt-4 gap-4 items-center justify-between w-full h-auto mb-5">
          <div className="flex items-center justify-between md:justify-start md:gap-5 w-full">
            <LessonFilter />
            <div className="sm:hidden lg:flex fex-row gap-4 hidden">
              <select className="border rounded-lg p-2 w-48 text-lg outline-none ">
                <option value="1">Category</option>
                <option value="2">Beginner</option>
                <option value="3">Elementry</option>
                <option value="4">Intermediate</option>
                <option value="5">Advanced</option>
              </select>
            </div>
            <div>
              <select className="w-32 border rounded-lg p-2 lg:w-48 sm:w-full text-lg outline-none ">
                <option value="1">Sort by</option>
                <option value="2">Recently added</option>
                <option value="3">Old</option>
                <option value="4">More viewed</option>
              </select>
            </div>
          </div>

          <form className="flex sm:flex w-full items-center justify-end">
            <input
              type="text"
              placeholder="Search"
              className="border rounded-lg text-lg p-2 w-5/6 outline-none "
            />
            <button
              type="submit"
              className="flex items-center justify-center bg-green1 lg:gap-2 lg:text-lg text-white p-2 rounded-lg ml-2 w-wull"
            >
              <FaSearch /> Search
            </button>
          </form>
        </div>
        <div className="grid justify-center ms:grid-cols-1 md:grid-cols-2 lg:grid-cols-5 grid-flow-row gap-4 mt-4 w-full  h-auto mb-5">
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
