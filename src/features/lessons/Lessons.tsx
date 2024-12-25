import { useState } from "react";
import LessonCard from "../../features/lessons/LessonCard";
import LessonFilter from "../../features/lessons/LessonFilter";
import { FaSearch } from "react-icons/fa";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useTranslation } from "react-i18next";

interface Lesson {
  id: number;
  title: string;
  category: "BEGINNER" | "ELEMENTRY" | "INTERMADIATE" | "ADVANCED";
  desc: string;
  create: string;
  owner: string;
  view: string;
  like: string;
}

const initialLessons: any = [
  {
    id: 1,
    title: "Koreys Alifbosi va ularning qollanish usullari",
    category: "BEGINNER",
    desc: "This is the Desc",
    create: "12/07/2024",
    owner: "Meloboyev A",
    view: "2",
    like: "true",
  },
  {
    id: 2,
    title: "Lesson 2",
    category: "ELEMENTRY",
    desc: "This is the Desc",
    create: "13/07/2024",
    owner: "Abdurakhmonov B",
    view: "3",
    like: "true",
  },
  {
    id: 3,
    category: "INTERMEDIATE",
    title: "Lesson 3",
    desc: "This is the Desc",
    create: "12/06/2024",
    owner: "Xasanov D",
    view: "5",
    like: "false",
  },
  {
    id: 4,
    title: "Lesson 4",
    category: "ADVANCED",
    desc: "This is the Desc",
    create: "1/07/2024",
    owner: "Abdurakhmonov B",
    view: "3",
    like: "true",
  },
  {
    id: 5,
    title: "Lesson 5",
    category: "ELEMENTRY",
    desc: "This is the Desc",
    create: "12/03/2024",
    owner: "Abdurakhmonov B",
    view: "1",
    like: "false",
  },
  {
    id: 6,
    title: "Lesson 3",
    category: "BEGINNER",
    desc: "This is the Desc",
    create: "11/07/2024",
    owner: "Xasanov D",
    view: "5",
    like: "false",
  },
  {
    id: 7,
    title: "Lesson 4",
    category: "BEGINNER",
    desc: "This is the Desc",
    create: "1/07/2024",
    owner: "Abdurakhmonov B",
    view: "3",
    like: "true",
  },
  {
    id: 8,
    title: "Lesson 5",
    category: "BEGINNER",
    desc: "This is the Desc",
    create: "2/07/2024",
    owner: "Abdurakhmonov B",
    view: "1",
    like: "false",
  },
];

export default function Lessons() {
  const { t } = useTranslation();
  const [category, setCategory] = useState("all");
  const [search, setSearch] = useState("");
  const [sortType, setSortType] = useState("recently");
  const [lessons, setLessons] = useState(initialLessons);

  const filteredLessons = lessons.filter((item: any) => {
    const matchSearch = item.title.toLowerCase().includes(search.toLowerCase());
    const matchCategory =
      category === "all" || item.category.toLowerCase() === category;

    return matchSearch && matchCategory;
  });

  return (
    <div className="container mt-10">
      <div>
        <h1 className="text-xl text-center sm:text-center sm:text-2xl lg:text-left lg:text-3xl my-5">
          - {t("lesson_h1")} -
          <p className=" pt-2 text-sm sm:text-lg text-center lg:text-left">
            {t("lesson_p2")}
          </p>
        </h1>
        <div className="flex flex-col-reverse md:flex md:flex-row mt-4 gap-4 items-center justify-between w-full h-auto mb-5">
          <div className="flex items-center justify-between md:justify-start md:gap-5 w-full">
            <LessonFilter />
            <div className="sm:hidden lg:flex fex-row gap-4 hidden items-center">
              <p>Category:</p>
              <Select defaultValue={category} onValueChange={setCategory}>
                <SelectTrigger className="w-[150px] text-lg h-[45px]">
                  <SelectValue placeholder="Select a fruit" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="all">All</SelectItem>
                    <SelectItem value="beginner">Beginner</SelectItem>
                    <SelectItem value="elementry">Elementry</SelectItem>
                    <SelectItem value="intermediate">Intermediate</SelectItem>
                    <SelectItem value="advanced">Advanced</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center gap-2">
              <p>Sort by:</p>
              <Select defaultValue="Recently">
                <SelectTrigger className="w-[130px] text-lg h-[45px]">
                  <SelectValue placeholder="Recently" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Recently">Recently</SelectItem>
                  <SelectItem value="Old">Old</SelectItem>
                  <SelectItem value="Views">Views</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <form className="flex sm:flex w-full items-center justify-end">
            <input
              type="text"
              placeholder="Search"
              className="border rounded-lg text-lg p-2 w-5/6 outline-none "
              onChange={(e) => setSearch(e.target.value)}
            />
            <button
              type="submit"
              className="flex items-center justify-center bg-green lg:gap-2 lg:text-lg text-white p-2 rounded-lg ml-2 w-wull"
              onClick={(e) => e.preventDefault()}
              disabled={search.trim() === ""}
            >
              <FaSearch /> Search
            </button>
          </form>
        </div>
        <div className="grid justify-center ms:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 grid-flow-row gap-4 mt-4 w-full  h-auto mb-5">
          <LessonCard lessons={filteredLessons} />;
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
