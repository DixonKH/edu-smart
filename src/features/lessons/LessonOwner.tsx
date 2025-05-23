import { FaInstagram, FaYoutube } from "react-icons/fa6";
import { FaBookReader } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { BsTelephoneFill } from "react-icons/bs";
import { FaTelegram } from "react-icons/fa";
import userImgBg from "/public/images/user-bg.jpg";
import { serverApi } from "@/shared/lib/config";
import { Lesson } from "@/shared/types/lesson";


interface LessonOwnerProps {
    currentLesson: Lesson;
};
export default function LessonOwner(props: LessonOwnerProps) {
    const  teacher = props.currentLesson?.memberData;
  return (
    <div className="flex flex-col md:flex-row lg:flex-col items-center justify-center lg:justify-start border rounded-md border-green px-4 py-6 gap-1 md:gap-16 lg:gap-1">
      <div className="flex flex-col items-center justify-start gap-1">
        <h1 className="text-2xl font-bold">{teacher?.memberNick}</h1>
        <p className="text-sm text-slate-500">{teacher?.memberCategory} Teacher</p>
        <div className="w-32 h-32 my-0 lg:my-2 rounded-full overflow-hidden">
          <img
            className="object-cover w-full h-full"
            src={teacher?.memberImage === "" ? userImgBg : `${serverApi}/${teacher?.memberImage}`}
            alt="Person"
          />
        </div>
        <p className="text-lg text-slate-800">About me</p>
        <p className="w-84 md:w-72 mb-6 md:mb-0 text-md md:text-xl text-slate-500 text-center">
          {teacher?.memberDesc}
        </p>
      </div>
      <div className="lg:mt-4 flex flex-col items-start justify-start gap-2 md:text-xl">
        <p className="flex flex-row items-center justify-start gap-2 text-slate-600">
          <FaBookReader className="text-green text-xl" />
          Experience: {teacher?.memberExperience} years
        </p>
        <p className="flex flex-row items-center justify-start gap-2 text-slate-600">
          <FaLocationDot className="text-green text-xl" />
          Location: {teacher?.memberAddress}
        </p>
        <p className="flex flex-row items-center justify-start gap-2 text-slate-600">
          <BsTelephoneFill className="text-green text-xl" />
          Phone: {teacher?.memberPhone}
        </p>
        <div className="w-full flex flex-row items-center justify-center gap-6 mt-3">
          <p>
            <a href={teacher?.memberLinks?.instagram}>
              <FaTelegram className="text-green size-6 lg:size-8 hover:text-yellow" />
            </a>
          </p>
          <p>
            <a href={teacher?.memberLinks?.instagram}>
              <FaInstagram className="text-green size-6 lg:size-8 hover:text-yellow" />
            </a>
          </p>
          <p>
            <a href={teacher?.memberLinks?.youtube}>
              <FaYoutube className="text-green size-6 lg:size-8 hover:text-yellow" />
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
