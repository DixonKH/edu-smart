import { useEffect, useState } from "react";
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
import { useLessonStore } from "./model/store";
import { LessonInquiry } from "@/shared/types/lesson";
import { Direction } from "@/shared/enums/common.enum";
import { LessonCategory, LessonLevel } from "@/shared/enums/lesson.enum";
import LessonHeader from "./LessonHeader";

export default function Lessons() {
  const { t } = useTranslation();
  const getLessons = useLessonStore((state) => state.getLessons);
  const lessonsData = useLessonStore((state) => state.lessons);
  const [searchText, setSearchText] = useState("");
  const total = useLessonStore((state) =>
    state.metaCounter.length > 0 ? state.metaCounter[0].total : 0
  );
  const [lessons, setLessons] = useState<LessonInquiry>({
    page: 1,
    limit: 12,
    sort: "createdAt",
    direction: Direction.DESC,
    search: {
      lessonLevel: undefined,
      lessonCategory: undefined,
      text: "",
    },
  });

  useEffect(() => {
    const fetchLessons = async () => {
      await getLessons(lessons);
    };
    fetchLessons();
  }, [lessons]);

  useEffect(() => {
    if (searchText.length === 0) {
      setLessons((prev) => ({ ...prev, search: { text: "" } }));
      setLessons((prev) => ({ ...prev, search: { lessonLevel: undefined } }));
    }
  }, [searchText]);

  const sortingHandler = (value: string) => {
    switch (value) {
      case "recent":
        setLessons((prev) => {
          return { ...prev, sort: "createdAt", direction: Direction.DESC };
        });
        break;
      case "old":
        setLessons((prev) => {
          return { ...prev, sort: "updatedAt", direction: Direction.ASC };
        });
        break;
      case "view":
        setLessons((prev) => {
          return { ...prev, sort: "lessonViews", direction: Direction.DESC };
        });
        break;
      case "like":
        setLessons((prev) => {
          return { ...prev, sort: "lessonLikes", direction: Direction.DESC };
        });
        break;
      default:
        break;
    }
  };

  const categoryChangeHandler = (value: LessonCategory) => {
    setLessons((prev) => ({
      ...prev,
      page: 1,
      search: { ...prev.search, lessonCategory: value },
    }));
  };

  const levelChangeHandler = (value: any) => {
    setLessons((prev) => ({
      ...prev,
      page: 1,
      search: {
        ...prev.search,
        lessonLevel: value === "ALL" ? undefined : value,
      },
    }));
  };

  const handlePageChange = (newPage: number) => {
    setLessons((prev) => ({
      ...prev,
      page: newPage,
    }));
  };

  const totalPages = Math.ceil(total / lessons.limit);

  return (
    <>
      <LessonHeader />
      <div className="lg:container mt-10 px-16 lg:px-0">
        <div>
          <h1 className="text-xl text-center sm:text-center sm:text-2xl lg:text-left lg:text-3xl my-5">
            - {t("lesson_h1")} -
            <p className=" pt-2 text-sm sm:text-lg text-center lg:text-left">
              {t("lesson_p2")}
            </p>
          </h1>
          <div className="flex flex-col-reverse md:flex md:flex-row mt-4 gap-4 items-center justify-between w-full h-auto mb-5">
            <div className="flex items-center justify-between md:justify-start md:gap-5 w-full">
              <LessonFilter
                lessons={lessons}
                levelChangeHandler={levelChangeHandler}
              />
              <div className="flex items-center gap-2">
                <p>Sort by:</p>
                <Select
                  defaultValue="recent"
                  onValueChange={(value) => {
                    sortingHandler(value);
                  }}
                >
                  <SelectTrigger className="w-[130px] text-lg h-[45px] border-green3 rounded-3xl">
                    <SelectValue placeholder="Recently" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="recent">Recently</SelectItem>
                    <SelectItem value="old">Old</SelectItem>
                    <SelectItem value="view">Views</SelectItem>
                    <SelectItem value="like">Likes</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="sm:hidden lg:hidden fex-row gap-4 hidden items-center">
                <Select
                  defaultValue={lessons.search?.lessonCategory}
                  onValueChange={categoryChangeHandler}
                >
                  <SelectTrigger className="w-[140px] text-lg h-[45px] rounded-3xl border-green3">
                    <SelectValue placeholder="All Classes" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="ALL">All Classes</SelectItem>
                      <SelectItem value="ENGLISH">English</SelectItem>
                      <SelectItem value="KOREAN">Korean</SelectItem>
                      <SelectItem value="RUSSIAN">Russian</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className="sm:hidden lg:flex fex-row gap-4 hidden items-center">
                <Select
                  defaultValue={lessons.search?.lessonLevel}
                  onValueChange={levelChangeHandler}
                >
                  <SelectTrigger className="w-[150px] text-lg h-[45px] rounded-3xl border-green3">
                    <SelectValue placeholder="All Levels" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="ALL">All Levels</SelectItem>
                      <SelectItem value="BEGINNER">Beginner</SelectItem>
                      <SelectItem value="ELEMENTRY">Elementry</SelectItem>
                      <SelectItem value="INTERMEDIATE">Intermediate</SelectItem>
                      <SelectItem value="ADVANCED">Advanced</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="flex sm:flex w-full items-center justify-end">
              <input
                type="text"
                value={searchText}
                placeholder="Search..."
                className="border rounded-3xl border-green3 text-lg p-2 pl-4 w-5/6 outline-none "
                onChange={(e) => setSearchText(e.target.value)}
                onKeyDown={(e: any) => {
                  if (e.key === "Enter") {
                    setLessons((prev) => ({
                      ...prev,
                      search: { text: searchText },
                    }));
                  }
                }}
              />
              <button
                type="button"
                className="flex items-center justify-center bg-green lg:gap-2 lg:text-lg text-white p-2 px-4 rounded-3xl ml-2 w-wull cursor-pointer"
                onClick={(e) => e.preventDefault()}
              >
                <FaSearch /> Search
              </button>
            </div>
          </div>
          {lessonsData.length > 0 ? (
            <div className="grid justify-center grid-cols-1 md:grid-cols-3 lg:grid-cols-4 grid-flow-row gap-4 mt-4 w-full  h-auto mb-5">
              <LessonCard lessons={lessonsData} />
            </div>
          ) : (
            <div className="flex items-center justify-center w-full">
              <img
                src={"/icons/noimage-list.svg"}
                className="my-10 w-[300px] h-[300px]"
              />
            </div>
          )}
          {total >= 1 && (
            <div className="text-center text-lg mb-6 mt-4">
              Total{" "}
              <span className="bg-slate-400 text-white font-medium p-1 px-2 rounded-full">
                {total}
              </span>{" "}
              lessons available
            </div>
          )}
          {totalPages > 1 && (
            <div className="my-10">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        if (lessons.page > 1) {
                          handlePageChange(lessons.page - 1);
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
                        isActive={lessons.page === i + 1}
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
                        if (lessons.page < totalPages) {
                          handlePageChange(lessons.page + 1);
                        }
                      }}
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
