import React from "react";
import { IoReaderOutline } from "react-icons/io5";
import { IoMdEye } from "react-icons/io";
import { FaBookReader } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import Video from "../../../public/videos/lesson.mp4";

type Props = {};

const MyLesson = (props: Props) => {
  return (
    <div>
      <div className="flex justify-center items-center">
          <h1 className="text-lg italic underline">My Lessons</h1>
        </div>
      <div className="m-2 grid base:grid-cols-1  lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
        <div className="flex flex-col align-middle justify-between items-start w-full h-auto border-solid border rounded-lg">
          <div>
            <video className="rounded-md" controls>
              <source src={Video} type="video/mp4" />
            </video>
          </div>
          <div className="p-1 mt-1 w-full">
            <div className="flex flex-row items-center justify-between gap-4 w-full h-8 py-1 ">
              <div className="leading-5">
                <span className="inline-block text-green1">
                  <IoReaderOutline />Lesson
                </span>
              </div>
              <div>
                <IoMdEye className="text-slate-500 size-5" />
              </div>
            </div>
            <div className="flex flex-row items-center justify-between gap-4 w-full h-8 py-1 ">
              <div className={`leading-4 text-sm overflow-hidden p-1 px-2 rounded ${"Beginner" === "Beginner" ? "bg-yellow" : "bg-green"}`}>
              Beginner 
              </div>
              <div className="text-[12px] text-slate-600">12.07.2024</div>
            </div>
            <div className="flex items-center justify-between mt-2">
              <div className="flex flex-row items-center justify-start gap-1 text-slate-600 text-sm">
                <FaBookReader className="text-green1" />
                Teacher: Lorem Ipsum
              </div>
              <CiHeart className="size-5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyLesson;
