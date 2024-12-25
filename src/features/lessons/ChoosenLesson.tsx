import { IoMdEye } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { BsPatchExclamationFill } from "react-icons/bs";
import video from "/videos/lesson.mp4";
import { IoReaderOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa6";
import { FaBookReader } from "react-icons/fa";
import LessonReview from "@/entities/LessonReview";
import TeacherCard from "@/entities/TeacherCard";

export default function ChoosenLesson() {
  return (
    <div className="container mt-5">
      <div className="lg:flex  items-start justify-between gap-3">
        <div className="lg:w-3/4 flex flex-col items-start justify-start">
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
            <p className="text-md">
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
            <div className="flex flex-row items-center justify-between gap-2 mt-5">
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
                <p>
                  Last updated:{" "}
                  <span className="ml-4 italic text-slate-500">2024-01-01</span>
                </p>
              </p>
            </div>
          </div>
          <LessonReview />
        </div>
        <div className="mt-7">
        <TeacherCard />
        </div>
      </div>
      <div>
        <h1 className="text-3xl font-bold mb-4 mt-10">Related Videos</h1>
      </div>
      <div className="flex flex-row gap-x-9 gap-y-4 pl-1 mt-4 flex-wrap items-center justify-items-start w-full h-auto mb-5">
        <div className="flex flex-col align-middle justify-items-start w-64 h-auto border-solid border rounded-lg">
          <div>
            <video width="320" height="240" className="rounded-md" controls>
              <source src={video} type="video/mp4" />
            </video>
          </div>
          <div className="p-1 mt-1">
            <div className="flex flex-row items-center justify-between gap-4 w-full h-8 py-1 ">
              <div className="leading-5">
                <span className="inline-block text-green1">
                  <IoReaderOutline />
                </span>
                Koareyscha ranglar
              </div>
              <div>
                <IoMdEye className="text-slate-500 size-5" />
              </div>
            </div>
            <div className="flex flex-row items-center justify-between gap-4 w-full h-8 py-1 ">
              <div
                className={`leading-4 text-sm overflow-hidden p-1 px-2 rounded ${
                  "Beginner" === "Beginner" ? "bg-yellow" : "bg-green"
                }`}
              >
                Elementry
              </div>
              <div className="text-[12px] text-slate-600">24/05/24</div>
            </div>
            <div className="flex items-center justify-between mt-2">
              <div className="flex flex-row items-center justify-start gap-1 text-slate-600 text-sm">
                <FaBookReader className="text-green1" />
                Teacher: Jahongir B.
              </div>
              <CiHeart className="size-5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
