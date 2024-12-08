import { IoMdEye } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { FaInstagram, FaStar, FaYoutube } from "react-icons/fa6";
import { MdMarkEmailUnread } from "react-icons/md";
import { FaBookReader } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { BsPatchExclamationFill } from "react-icons/bs";
import { BsTelephoneFill } from "react-icons/bs";
import { FaTelegram } from "react-icons/fa";
import video from "/videos/lesson.mp4";
import LessonReview from "./LessonReview";
import Person from "/public/images/person1.jpg";
import { IoReaderOutline } from "react-icons/io5";

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
        <div className=" flex flex-col justify-start border mt-3 rounded-md border-green px-4 py-6 gap-1">
          <div className="flex flex-col items-center justify-start gap-1">
            <h1 className="text-2xl font-bold">Jahongir B.</h1>
            <p className="text-sm text-slate-500">English Teacher</p>
            <div className="w-32 h-32 my-2 rounded-full overflow-hidden">
              <img
                className="object-cover w-full h-full"
                src={Person}
                alt="Person"
              />
            </div>
            <p className="text-lg text-slate-800">About me</p>
            <p className="lg:w-72 text-md text-slate-500 text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a
              consectetur felis. Sed id sagittis neque, vel facilisis nunc.
              Donec consequat, enim vel tristique fermentum, arcu lectus semper
              velit, vel facilisis arcu eros vel velit.
            </p>
          </div>
          <div className="mt-4 flex flex-col items-start justify-start gap-2 text-md">
            <p className="flex flex-row items-center justify-start gap-2 text-slate-600">
              <FaBookReader className="text-green text-lg" />
              Experience: 10 years
            </p>
            <p className="flex flex-row items-center justify-start gap-2 text-slate-600">
              <FaLocationDot className="text-green text-lg" />
              Location: Tashkent
            </p>
            <p className="flex flex-row items-center justify-start gap-2 text-slate-600">
              <MdMarkEmailUnread className="text-green text-lg" />
              Mail: example@gmail.com
            </p>
            <p className="flex flex-row items-center justify-start gap-2 text-slate-600">
              <BsTelephoneFill className="text-green text-lg" />
              Phone: +998991234567
            </p>
            <div className="w-full flex flex-row items-center justify-center gap-6 mt-3">
              <p>
                <a href="https://t.me/example">
                  <FaTelegram className="text-green size-6 lg:size-8" />
                </a>
              </p>
              <p>
                <a href="https://www.instagram.com/example">
                  <FaInstagram className="text-green size-6 lg:size-8" />
                </a>
              </p>
              <p>
                <a href="https://www.youtube.com/example">
                  <FaYoutube className="text-green size-6 lg:size-8" />
                </a>
              </p>
            </div>
          </div>
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
