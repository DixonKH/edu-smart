import { IoMdEye } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { FaStar } from "react-icons/fa6";
import { MdMarkEmailUnread } from "react-icons/md";
import { FaBookReader } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { BsPatchExclamationFill } from "react-icons/bs";
import { BsTelephoneFill } from "react-icons/bs";
import video from "/videos/lesson.mp4";
import LessonReview from "./LessonReview";
import Person from "/public/images/person1.jpg";

export default function ChoosenLesson() {
  return (
    <div className="container mt-5">
      <div className="flex items-start justify-between gap-4">
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
        <div className="flex flex-col justify-start border mt-2 rounded-md p-4 gap-1">
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
            <p className="w-64 text-sm text-slate-500 text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a
              consectetur felis. Sed id sagittis neque, vel facilisis nunc.
              Donec consequat, enim vel tristique fermentum, arcu lectus semper
              velit, vel facilisis arcu eros vel velit.
            </p>
          </div>
          <div className="flex flex-col items-start justify-start gap-2 text-sm">
            <p className="flex flex-row items-center justify-start gap-1 text-slate-600">
              <FaBookReader className="text-green" />
              Experience: 10 years
            </p>
            <p className="flex flex-row items-center justify-start gap-1 text-slate-600">
              <FaLocationDot className="text-green" />
              Location: Tashkent
            </p>
            <p className="flex flex-row items-center justify-start gap-1 text-slate-600">
              <MdMarkEmailUnread className="text-green" />
              Mail: example@gmail.com
            </p>
            <p className="flex flex-row items-center justify-start gap-1 text-slate-600">
              <BsTelephoneFill className="text-green" />
              Phone: +998991234567
            </p>
            <div className="w-full flex flex-row items-center justify-center gap-8 mt-3">
              <p>
                <a
                  href="https://t.me/example"
                  className="text-white bg-green p-1 px-2 rounded-lg"
                >
                  Telegram
                </a>
              </p>
              <p>
                <a
                  href="https://www.instagram.com/example"
                  className="text-white bg-green p-1 px-2 rounded-lg"
                >
                  Instagram
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>Realited Videos</div>
      <div>Videoooooos</div>
    </div>
  );
}
