import { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { IoSearchCircleSharp } from "react-icons/io5";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useTranslation } from "react-i18next";
import { useMemberStore } from "./model/store";
import { MemberInquery } from "@/shared/types/member";

export default function Teachers() {
  const { t } = useTranslation();
  const getTeachers = useMemberStore((state) => state.getTeachers);
  const members = useMemberStore((state) => state.members);
  const [searchText, setSearchText] = useState<string>("");
  const [searchTeachers, setSearchTeachers] = useState<MemberInquery>({
    page: 1,
    limit: 8,
    sort: "createdAt",
    search: {},
  });

  useEffect(() => {
    const fetchTeachers = async () => {
      await getTeachers(searchTeachers);
    };
    fetchTeachers();
  }, [searchTeachers]);

  useEffect(() => {
    console.log("Updated members:", members);
   // Log members
  }, [members]);

  useEffect(() => {
    if (searchText === "") {
      setSearchTeachers((prev) => ({
        ...prev,
        search: { text: "" },
      }));
    }
  }, [searchText]);


  console.log("searchTeachers:", searchText);
  console.log("searchTeachers:", searchTeachers);
  

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
                console.log(
                  "Enter key pressed, searchTextHandler called!"
                );
                setSearchTeachers({ ...searchTeachers, search: { text: searchText }} )
              }
            }}
          />
          <IoSearchCircleSharp className="absolute right-[0.5px] top-[0.5px] size-10 cursor-pointer text-green" />
        </div>
        <div className="flex flex-row items-center gap-2">
          <p className="text-md text-gray-600">Sort by:</p>
          <Select defaultValue="recent">
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
      <div className="grid w-full h-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
        {members.map((teacher: any) => (
          <div
            key={teacher.id}
            className="flex flex-col items-center justify-start pb-3 h-auto border-2 bg-green text-white rounded-xl hover:shadow-2xl cursor-pointer"
          >
            <div className="w-full h-80 mb-2 relative">
              <img
                className="h-full w-full object-cover rounded-xl"
                src={teacher.image}
                alt={teacher.memberNick}
              />
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
        ))}
      </div>
      <div className="text-center text-md text-lg mb-8">
        Total {members.length} teachers available
      </div>
    </div>
  );
}
