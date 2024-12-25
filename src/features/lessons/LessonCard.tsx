
import { IoMdEye } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { FaBookReader } from "react-icons/fa";
import { IoReaderOutline } from "react-icons/io5";
import video from "/videos/lesson.mp4";

export default function LessonCard(props: any) {
  return (
    <>
      {
        props.lessons.map((lesson: any) => {
          return (
            <div key={lesson.id} className="flex flex-col align-middle justify-items-start w-full h-auto border-solid border rounded-lg cursor-pointer">
        <div className="w-full h-auto">
          <video className="rounded-md" controls>
            <source src={video} type="video/mp4" />
          </video>
        </div>
        <div className="p-2 mt-1">
          <div className="flex flex-row items-start justify-between gap-4 w-full h-8 mb-2">
            <div className="leading-5">
              <span className="inline-block text-green mr-1"><IoReaderOutline /></span>
              {lesson.title}
            </div>
            <div>
              <IoMdEye className="text-slate-500 size-5" />
            </div>
          </div>
          <div className="flex flex-row items-center justify-between gap-4 w-full h-8 py-1 ">
            <div className={`leading-4 text-sm overflow-hidden p-1 px-2 rounded ${lesson.category === "BEGINNER" ? "bg-red text-white" : lesson.categoty === "ELEMENTARY" ? "bg-green text-white" : lesson.category === "INTERMEDIATE" ? "bg-blue text-white" : lesson.category === "ADVANCED" ? "bg-bgGreen text-white" : "bg-orange text-white"}`}>
              {lesson.category} 
              </div>
            <div className="text-[12px] text-slate-600">
              {lesson.create}
            </div>
          </div>
          <div className="flex items-center justify-between mt-2">
            <div className="flex flex-row items-center justify-start gap-1 text-slate-600 text-sm">
              <FaBookReader className="text-green" />
              Teacher: {lesson.owner}
            </div>
            <CiHeart className="size-5" />
          </div>
        </div>
      </div>
          )
        })
      }
    </>
  );
}
