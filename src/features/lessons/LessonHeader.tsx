import student from "/images/student.png";
import { FaBook } from "react-icons/fa6";
import graphic from "/public/images/graph.png";
import {useTranslation} from "react-i18next";
import Line from "../home/Line";

export default function LessonHeader() {
  const { t } = useTranslation();
  return (
    <>
      <div className="flex flex-col lg:flex-row items-center justify-between mt-28 pt-4 w-full h-auto container gap-6">
        <div className="lg:w-2/4 relative">
          <div className="absolute -z-10 pl-0 lg:top-20 md:top-8 left-12">
            <img
              src={graphic}
              alt="Main image"
              className="object-contain rotate-24"
            ></img>
          </div>
          <img src={student} alt="student" className="w-full z-20" />
        </div>
        <div className="lg:w-2/4">
          <div className="lg:flex justify-center md:justify-start hidden items-center lg:gap-4 md:gap-1 gap-1 pt-1  md:pt-5 lg:pb-6">
            <div
              className="md:flex shadow-xl2 items-center justify-center rounded-full p-2 bg-green hidden"
            >
              <FaBook className="md:text-xl lg:text-xl sm:text-xl text-base text-white" />
            </div>
            <p className="lg:text-2xl md:text-xl text-center md:text-left text-xl">
              {t("lesson")}
            </p>
          </div>
          <h1 className="lg:text-5xl text-2xl lg:text-left text-center font-bold text-green2 mb-4 lg:mt-0 mt-8">
            {t("lesson_title")}
          </h1>
          <p className="lg:text-xl sm:text-md text-gray-600 lg:text-left text-center lg:mb-0 mb-4 w-full">
            {t("lesson_p")}
          </p>
        </div>
      </div>
      <Line />
    </>
  );
}
