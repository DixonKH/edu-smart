import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa6";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useTranslation } from "react-i18next";
import { useMemberStore } from "../teachers/model/store";
import { serverApi } from "@/shared/lib/config";
import { MemberInquery } from "@/shared/types/member";

const OurTeam = () => {
  const { t } = useTranslation();
  const teachers = useMemberStore((state) => state.members);
  const getTeachers = useMemberStore((state) => state.getTeachers);
  const total = useMemberStore((state) =>
    state.metaCounter.length > 0 ? state.metaCounter[0].total : 0
  );
  const [teachersData, setTeachersData] = useState<MemberInquery>({
    page: 1,
    limit: 99,
    search: { text: "" },
  });

  useEffect(() => {
    getTeachers(teachersData);
  }, [teachersData]);

  return (
    <div className="lg:container">
      <div>
        <div className="sm:text-center lg:text-left md:px-10 mb-4 lg:mb-0 px-1 mt-20">
          <p className="lg:text-2xl md:text-xl text-base sm:text-xl text-black">
            - {t("team")} -
          </p>
          <p className=" lg:text-4xl md:text-3xl sm:text-2xl text-xl lg:p-5 p-2 -mt-2 font-medium">
            <span className="text-green1">
              {} {t("team_h1")}
            </span>
          </p>
        </div>
      </div>
      <Carousel className="md:px-10 sm:px-5 px-1">
        <CarouselContent className="flex items-center w-full justify-start pl-4 h-auto gap-5 my-8">
          {teachers.map((teacher: any) => {
              const imgPath = `${serverApi}/${teacher.memberImage}`;
            return (
              <CarouselItem
                key={teacher._id}
                className="flex flex-col items-center justify-start px-0 w-full pb-3 md:basis-1/3 lg:basis-1/4 h-auto border-2 bg-green text-white rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                <div className="w-full h-80 mb-2 relative">
                  <img
                    className="h-full w-full object-cover rounded-xl"
                    src={imgPath}
                    alt={""}
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
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious className="hidden lg:flex" />
        <CarouselNext className="hidden lg:flex" />
      </Carousel>
    </div>
  );
};

export default OurTeam;
