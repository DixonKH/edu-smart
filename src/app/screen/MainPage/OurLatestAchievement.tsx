import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import Teaching from "/public/images/Teaching.jpg";
import Line from "./Line";
import { useTranslation } from 'react-i18next';

const courses = [
  {
    id: 1,
    image: Teaching,
    title: "Korean Language",
    description: "Our Korean Language Class",
  },
  {
    id: 2,
    image: Teaching,
    title: "Korean Language",
    description: "Our Korean Language Class",
  },
  {
    id: 3,
    image: Teaching,
    title: "Korean Language",
    description: "Our Korean Language Class",
  },
  { 
    id: 4,
    image: Teaching,
    title: "Korean Language",
    description: "Our Korean Language Class",
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
              <button
                className="flex items-center justify-between shadow-xl2 shadow-slate-500 text-sm lg:text-lg p-2 border px-3 hover:bg-bgGreen hover:text-white bg-yellow rounded-3xl "
              >
                {t("our_achievement_btn")}
                <IoIosArrowRoundForward />
              </button>
            </div>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
            {courses.map((course) => (
              <div key={course.id} className="relative p-4 flex items-end justify-center">
                <img
                  src={course.image}
                  alt="VideContent"
                className="w-full rounded-3xl object-cover hover:scale-105 transition-all duration-300"
              />
              <div className="absolute w-4/5 bottom-8 gap-2 cursor-pointer">
                <div className="rounded-xl flex items-center justify-between p-4 bg-white text-black ">
                  <div>
                    <p className="lg:p-1 md:p-0 p-1 text-xs md:text-lg font-medium  px-1 ">
                      {t(`${course.title}`)}
                    </p>
                    <p className="lg:p-1 md:p-0 p-1 text-lg italic">
                      {t(`${course.description}`)}
                    </p>
                  </div>
                  <div>
                    <IoIosArrowRoundForward className="text-5xl bg-green shadow-xl2 shadow-slate-500 hover:bg-yellow hover:scale-105 transition-all duration-300 text-white border rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Line />
    </>
  );
};

export default OurLatestAhievement;
