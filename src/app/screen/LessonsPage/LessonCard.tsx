import React from "react";
import { IoMdEye } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
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
            <div className="leading-5">{props.lesson.title}</div>
            <div>
              <IoMdEye className="text-slate-500 size-5" />
            </div>
          </div>
          <div className="flex flex-row items-center justify-between gap-4 w-full h-8 py-1 ">
            <div className="leading-5">{props.lesson.desc} </div>
            <div className="text-sm text-slate-600">{props.lesson.create}</div>
          </div>
          <div className="flex items-center justify-between mt-2">
            <span className="text-slate-600 text-sm">
              Teacher: {props.lesson.owner}
            </span>
            <CiHeart className="size-5" />
          </div>
        </div>
      </div>
    </>
  );
}