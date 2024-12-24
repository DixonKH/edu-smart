import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import Teaching from "/public/images/Teaching.jpg";
import Line from "./Line";
import { MdGrade } from "react-icons/md";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useTranslation } from "react-i18next";

const courses = [
  {
    id: 1,
    image: Teaching,
    title: "John Smith",
    description: "Level: 5",
  },
  {
    id: 2,
    image: Teaching,
    title: "Jane Smith",
    description: "Level: 5",
  },
  {
    id: 3,
    image: Teaching,
    title: "Will Smith",
    description: "Level: 6",
  },
  {
    id: 4,
    image: Teaching,
    title: "Emily Browning",
    description: "Level: 6",
  },
];

const OurLatestAhievement = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="lg:container md:px-10 sm:px-5 mb-20">
        <div className="md:flex md:flex-col lg:flex-row items-center justify-between">
          <div className="text-center lg:text-left lg:p-0  md:px-10 mb-5 mt-20">
            <div className="text-center lg:text-left pt-1  md:pt-5">
              <p className="lg:text-2xl md:text-xl text-base sm:text-xl text-black">
                - {t("our_achievement")} -
              </p>
            </div>
            <p className="lg:text-4xl md:text-3xl sm:text-2xl text-xl md:p-2 ml-2 mt-1 font-medium w-full ">
              <span className="text-green1"> {t("our_achievement_h1")} </span>
            </p>
          </div>
          <div className="lg:mt-[200px] md:self-start lg:self-center flex justify-start lg:p-5 md:p-2 p-1 text-xs md:text-base  items-center lg:gap-5 md:gap-2 sm:gap-2 gap-1">
            <button className="flex items-center justify-between shadow-xl2 shadow-slate-500 text-sm lg:text-lg p-2 border px-3 hover:bg-bgGreen hover:text-white bg-yellow rounded-3xl ">
              {t("our_achievement_btn")}
              <IoIosArrowRoundForward />
            </button>
          </div>
        </div>
        <Carousel className="md:px-0 sm:px-0 px-1">
          <CarouselContent className="flex items-center w-full justify-center h-auto gap-5 mb-8">
            {courses.map((course) => (
              <CarouselItem
                key={course.id}
                className="flex flex-col items-center justify-center px-0 w-full pb-3 md:basis-1/3 base:basis-2/4 lg:basis-1/4 h-auto border-2 bg-white text-white rounded-xl hover:shadow-2xl hover:scale-85 transition-all duration-300 cursor-pointer"
              >
                <img
                  src={course.image}
                  alt="VideContent"
                  className="w-[350px] h-[350px] rounded-3xl object-cover hover:scale-105 transition-all duration-300"
                />
                <div className="absolute flex items-end justify-center w-full h-full  bottom-8 gap-2 cursor-pointer">
                  <div className="rounded-full w-[280px] h-[70px] base:w-[250px] md:h-[80px] lg:w-[280px] lg:h-[60px] md:w-[220px] flex items-center justify-between p-4 bg-black/45 text-black ">
                    <div className="flex justify-center items-center">
                      <MdGrade className="text-3xl text-yellow" />
                    </div>
                    <div>
                      <p className="lg:p-1 md:p-0 p-1 text-white text-xs md:text-lg font-medium  px-1 ">
                        {t(`${course.title}`)}
                      </p>
                      <p className="lg:p-1 md:p-0 p-1 text-white text-lg italic">
                        {t(`${course.description}`)}
                      </p>
                    </div>
                    <div>
                      <img
                        src="/public/images/person1.jpg"
                        alt="Right Arrow"
                        className="w-20 h-20 rounded-full"
                      />
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden lg:flex" />
          <CarouselNext className="hidden lg:flex" />
        </Carousel>
      </div>
      <Line />
    </>
  );
};

export default OurLatestAhievement;
