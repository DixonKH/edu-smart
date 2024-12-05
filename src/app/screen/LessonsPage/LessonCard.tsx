import React from "react";
import { IoMdEye } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { FaBookReader } from "react-icons/fa";
import { IoReaderOutline } from "react-icons/io5";
import video from "/public/videos/lesson.mp4";
export default function LessonCard(props: any) {
  return (
    <>
      <div className="flex flex-col align-middle justify-items-start w-64 h-auto border-solid border rounded-lg">
        <div>
          {/* <img src="/images/teamgirls.jpg" alt="/" /> */}
          <video width="320" height="240" className="rounded-md" controls>
            <source src={video} type="video/mp4" />
          </video>
        </div>
        <div className="p-1 mt-1">
          <div className="flex flex-row items-center justify-between gap-4 w-full h-8 py-1 ">
            <div className="leading-5">
              <span className="inline-block text-green1"><IoReaderOutline /></span>
              {props.lesson.title}
            </div>
            <div>
              <IoMdEye className="text-slate-500 size-5" />
            </div>
          </div>
          <div className="flex flex-row items-center justify-between gap-4 w-full h-8 py-1 ">
            <div className="leading-4 text-sm">{props.lesson.desc} </div>
            <div className="text-[12px] text-slate-600">
              {props.lesson.create}
            </div>
          </div>
          <div className="flex items-center justify-between mt-2">
            <div className="flex flex-row items-center justify-start gap-1 text-slate-600 text-sm">
              <FaBookReader className="text-green1" />
              Teacher: {props.lesson.owner}
            </div>
            <CiHeart className="size-5" />
          </div>
        </div>
      </div>
    </>
  );
}
