import { useParams } from "react-router-dom";
import TeacherCard from "./TeacherCard";
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
import { useEffect, useState } from "react";
import { useMemberStore } from "./model/store";

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

export default function TeacherDetail() {
  const [lessons, setLessons] = useState(initialLessons);
  const [search, setSearch] = useState("");
  const { teacherId } = useParams();
  const [category, setCategory] = useState("all");
  const members = useMemberStore((state) => state.members);
  const getMemberById = useMemberStore((state) => state.getMemberById);
  const getTeachers = useMemberStore((state) => state.getTeachers);
  const teacher = getMemberById(teacherId!);

  useEffect(() => {
    if (!teacher) {
      getTeachers({ page: 1, limit: 8, search: { text: "" } });
    }
  }, [teacherId, members]);

  const filteredLessons = lessons.filter((item: any) => {
    const matchSearch = item.title.toLowerCase().includes(search.toLowerCase());
    const matchCategory =
      category === "all" || item.category.toLowerCase() === category;

    return matchSearch && matchCategory;
  });

  return (
    <div className="container">
      <h1 className="text-center lg:text-left text-2xl lg:text-3xl my-8 mt-10">
        - Teacher Detail -
      </h1>
      <div className="flex flex-col lg:flex-row items-start  lg:justify-between mb-10 gap-6">
        <TeacherCard teacher={teacher} />
        <div className="w-full">
          <div className="w-full grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5">
            {/* <LessonCard /> */}
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
