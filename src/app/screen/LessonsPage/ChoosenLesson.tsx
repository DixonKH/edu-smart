import { IoMdEye } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { FaStar } from "react-icons/fa6";
import { BsPatchExclamationFill } from "react-icons/bs";
import video from "/videos/lesson.mp4";
import LessonReview from "./LessonReview";

export default function ChoosenLesson() {
  return (
    <div className="container mt-5">
      <div className="flex items-center justify-between">
        <div className="w-3/4 flex flex-col items-start justify-start">
          <div className="w-full flex flex-row items-center justify-between">
            <div className="text-2xl">
              Korean Alifbosi va ularning qo'llanmasi
            </div>
            <div className="flex gap-2">
              <span className="flex items-center gap-1">
                <IoMdEye className="text-slate-500 size-6" />3
              </span>
              <span className="ml-2 flex items-center">
                <CiHeart className="size-6 mr-1" /> 2
              </span>
            </div>
          </div>
          <div className="my-4">
            <video className="rounded-md" controls>
              <source src={video} type="video/mp4" />
            </video>
          </div>
          <div>
            <h2 className="text-2xl my-2">Lesson Description</h2>
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a
              consectetur felis. Sed id sagittis neque, vel facilisis nunc.
              Donec consequat, enim vel tristique fermentum, arcu lectus semper
              velit, vel facilisis arcu eros vel velit. Lorem ipsum dolor sit
              amet consectetur, adipisicing elit. Repudiandae temporibus ducimus
              assumenda culpa voluptatem a quisquam ipsum asperiores eos nihil?
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a
              consectetur felis. Sed id sagittis neque, vel facilisis nunc.
              Donec consequat, enim vel tristique fermentum, arcu lectus semper
              velit, vel facilisis arcu eros vel velit. Lorem ipsum dolor sit
              amet consectetur, adipisicing elit. Repudiandae temporibus ducimus
              assumenda culpa voluptatem a quisquam ipsum asperiores eos nihil?
            </p>
            <div className="flex flex-row items-center justify-between gap-2">
              <p className="flex flex-row items-center justify-start gap-1">
                <FaStar className="text-yellow text-lg" />
                <FaStar className="text-yellow" />
                <FaStar className="text-yellow" />
                <FaStar className="text-yellow" />
                <FaStar className="text-yellow" />
                <span className="ml-1 text-2xl font-bold">4.5</span>
                <span className="italic text-slate-500">(123 views)</span>
              </p>
              <p className="flex items-center justify-start gap-1">
                <BsPatchExclamationFill className="text-yellow" />
                <p>Last updated: <span className="ml-4 italic text-slate-500">2024-01-01</span></p>
              </p>
            </div>
          </div>
          <LessonReview />
        </div>
        <div className="">2</div>
      </div>
      <div>Realited Videos</div>
      <div>Videoooooos</div>
    </div>
  );
}
