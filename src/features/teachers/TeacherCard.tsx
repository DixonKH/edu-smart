import { FaInstagram, FaYoutube } from "react-icons/fa6";
import { FaBookReader } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { BsTelephoneFill } from "react-icons/bs";
import { FaTelegram } from "react-icons/fa";
import { Member } from "@/shared/types/member";
import userImgBg from "/public/images/user-bg.jpg";
import { serverApi } from "@/shared/lib/config";

interface TeacherDetailProps {
  teacher: Member | undefined;
};

export default function TeacherCard(props: TeacherDetailProps) {
  const { teacher } = props;

  console.log("teacherLink", teacher?.memberLinks?.telegram);
  

  
  return (
    <div className=" flex flex-col justify-start border rounded-md border-green px-4 py-6 gap-1">
      <div className="flex flex-col items-center justify-start gap-1">
        <h1 className="text-2xl font-bold">{teacher?.memberNick}</h1>
        <p className="text-sm text-slate-500">{teacher?.memberCategory} Teacher</p>
        <div className="w-32 h-32 my-2 rounded-full overflow-hidden">
          <img
            className="object-cover w-full h-full"
            src={teacher?.memberImage === "" ? userImgBg : `${serverApi}/${teacher?.memberImage}`}
            alt="Person"
          />
        </div>
        <p className="text-lg text-slate-800">About me</p>
        <p className="lg:w-72 text-md text-slate-500 text-center">
          {teacher?.memberDesc}
          
        </p>
      </div>
      <div className="mt-4 flex flex-col items-start justify-start gap-2 text-md">
        <p className="flex flex-row items-center justify-start gap-2 text-slate-600">
          <FaBookReader className="text-green text-lg" />
          Experience: {teacher?.memberExperience} years
        </p>
        <p className="flex flex-row items-center justify-start gap-2 text-slate-600">
          <FaLocationDot className="text-green text-lg" />
          Location: {teacher?.memberAddress}
        </p>
        <p className="flex flex-row items-center justify-start gap-2 text-slate-600">
          <BsTelephoneFill className="text-green text-lg" />
          Phone: {teacher?.memberPhone}
        </p>
        <div className="w-full flex flex-row items-center justify-center gap-6 mt-3">
          <p>
            <a href={teacher?.memberLinks?.telegram}>
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
  );
}
