import React from 'react';
import { FaInstagram, FaYoutube } from "react-icons/fa6";
import { MdMarkEmailUnread } from "react-icons/md";
import { FaBookReader } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { BsTelephoneFill } from "react-icons/bs";
import { FaTelegram } from "react-icons/fa";
import Person from "/images/person1.jpg";

export default function TeacherCard() {
  return (
    <div className=" flex flex-col justify-start border rounded-md border-green px-4 py-6 gap-1">
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
  )
}
