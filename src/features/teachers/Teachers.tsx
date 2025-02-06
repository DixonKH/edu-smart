import { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { IoSearchCircleSharp } from "react-icons/io5";
import { useTranslation } from "react-i18next";
import { useMemberStore } from "./model/store";
import { MemberInquery } from "@/shared/types/member";
import { Direction } from "@/shared/enums/common.enum";
import userImgBg from "/public/images/user-bg.jpg";
import { Link, useNavigate } from "react-router-dom";
import { serverApi } from "@/shared/lib/config";
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

export default function Teachers() {
  const { t } = useTranslation();
  const getTeachers = useMemberStore((state) => state.getTeachers);
  const members = useMemberStore((state) => state.members);
  const total = useMemberStore((state) =>
    state.metaCounter.length > 0 ? state.metaCounter[0].total : 0
  );
  const [searchText, setSearchText] = useState<string>("");
  const [searchTeachers, setSearchTeachers] = useState<MemberInquery>({
    page: 1,
    limit: 8,
    sort: "createdAt",
    search: {},
    direction: Direction.DESC,
  });

  useEffect(() => {
    const fetchTeachers = async () => {
      await getTeachers(searchTeachers);
    };
    fetchTeachers();
  }, [searchTeachers]);

  useEffect(() => {
    if (searchText === "") {
      setSearchTeachers((prev) => ({
        ...prev,
        search: { text: "" },
      }));
    }
  }, [searchText]);

  const sortingHandler = (value: string) => {
    switch (value) {
      case "recent":
        setSearchTeachers((prev) => {
          return { ...prev, sort: "createdAt", direction: Direction.DESC };
        });
        break;
      case "old":
        setSearchTeachers((prev) => {
          return { ...prev, sort: "updatedAt", direction: Direction.ASC };
        });
        break;
      default:
        break;
    }
  };

  const handlePageChange = (newPage: number) => {
    setSearchTeachers((prev) => ({
      ...prev,
      page: newPage,
    }));
  };

  const totalPages = Math.ceil(total / searchTeachers.limit);

  return (
    <div className="container mt-8">
      <h1 className="text-center lg:text-3xl md:text-2xl text-xl lg:text-left mb-4">
        - {t("teacher_p1")} -
      </h1>
      <p className="text-gray-600 text-center lg:text-left text-lg">
        {t("teacher_p2")}
      </p>
      <div className="flex flex-row sm:flex-row-reverse items-center justify-between my-3 mt-6">
        <div className="sm:hidden md:block relative">
          <input
            type="text"
            value={searchText}
            placeholder="Search"
            className="w-full p-2 px-4 outline-none rounded-3xl border border-gray-300"
            onChange={(e: any) => setSearchText(e.target.value)}
            onKeyDown={(e: any) => {
              if (e.key === "Enter") {
                console.log("Enter key pressed, searchTextHandler called!");
                setSearchTeachers({
                  ...searchTeachers,
                  search: { text: searchText },
                });
              }
            }}
          />
          <IoSearchCircleSharp className="absolute right-[0.5px] top-[0.5px] size-10 cursor-pointer text-green" />
        </div>
        <div className="flex flex-row items-center gap-2">
          <p className="text-md text-gray-600">Sort by:</p>
          <Select
            defaultValue="recent"
            onValueChange={(value) => {
              console.log("Selected value:", value);
              sortingHandler(value);
            }}
          >
            <SelectTrigger className="w-[100px] outline-none rounded-2xl p-3">
              <SelectValue placeholder="recent" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="recent">Recent</SelectItem>
                <SelectItem value="old">Old</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      {members.length > 0 ? (
        <div className="grid w-full h-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          {members.map((teacher: any) => {
            const imgPath = `${serverApi}/${teacher?.memberImage}`;
            return (
              <div
                key={teacher._id}
                className="flex flex-col items-center justify-start pb-3 h-auto border-2 bg-green text-white rounded-xl hover:shadow-2xl cursor-pointer"
              >
                <div className="w-full h-80 mb-2 relative">
                  <Link to={`/ourteachers/${teacher._id}`}>
                    <img
                      className="h-full w-full object-cover rounded-xl"
                      src={teacher.memberImage === "" ? userImgBg : imgPath}
                      alt={teacher.memberNick}
                    />
                  </Link>
                  <p className="flex items-center gap-1 text-md text-white absolute bottom-6 bg-green p-2 rounded-r-lg">
                    <FaStar className="text-yellow" />
                    {teacher.memberExperience} {t("team_exp")}
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center w-full h-auto">
                  <h1 className="text-2xl font-bold">{teacher.memberNick}</h1>
                  <p className="text-md text-white">
                    {teacher.memberCategory} {t("team_teacher")}
                  </p>
                </div>
              </div>
            );
          })}
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
        <div className="text-center text-md text-lg mb-8">
          Total {total} teachers available
        </div>
      )}
      {totalPages > 1 && (
        <div className="text-center text-md text-lg mb-8">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    if (searchTeachers.page > 1) {
                      handlePageChange(searchTeachers.page - 1);
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
                    isActive={searchTeachers.page === i + 1}
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
                    if (searchTeachers.page < totalPages) {
                      handlePageChange(searchTeachers.page + 1);
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
}
