import React from "react";
import { MdOutlineHomeRepairService } from "react-icons/md";
import { SiMicrosoftteams } from "react-icons/si";
import { FaBook } from "react-icons/fa6";
import { FaSmile } from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";

type Props = {};

function OurProcess({}: Props) {
  return (
    <div className="mb-2">
      <div className="container">
      <div>
        <div className="flex justify-center items-center gap-4 pt-8 p-6">
          <p className="text-3xl text-black">- Our Process -</p>
        </div>
        <div className="flex items-center justify-center">
          <p className=" text-4xl   p-3 pl-10">
            <span className="text-green1">Here's How We </span>Teach
          </p>
        </div>
      </div>
      <div className="grid grid-cols-4 pt-5 gap-5">
        <div>
          <div className=" flex  items-start justify-evenly">
            <div className=" relative z-40 flex justify-end items-start  text-white p-4">
              <div
                className="border rounded-full bg-green1  drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]
                    object-cover"
              >
                <MdOutlineHomeRepairService className="text-7xl p-3"></MdOutlineHomeRepairService>
              </div>
              <div className="absolute z-50 bg-yellow border text-xl rounded-full">
                <p>01</p>
              </div>
            </div>
          </div>
          <p className="text-xl bold mx-auto m-5 text-center">Book Courses</p>
          <p className="text-md bold mx-auto m-3 text-center">
            Lorem Ipsum is Lorem Ipsum is simply dummy text of the printing and
            typesetting industry.
          </p>
        </div>
        <div>
          <div className=" flex  items-start justify-evenly">
            <div className=" relative z-40 flex justify-end items-start  text-white p-4">
              <div
                className="border rounded-full bg-green1 drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]
                    object-cover"
              >
                <SiMicrosoftteams className="text-7xl p-3"></SiMicrosoftteams>
              </div>
              <div className="absolute z-50 bg-yellow border text-xl rounded-full">
                <p>02</p>
              </div>
            </div>
          </div>
          <p className="text-xl bold mx-auto m-5 text-center">Team Contact</p>
          <p className="text-md bold mx-auto m-3 text-center">
            Lorem Ipsum is Lorem Ipsum is simply dummy text of the printing and
            typesetting industry.
          </p>
        </div>
        <div>
          <div className=" flex  items-start justify-evenly">
            <div className=" relative z-40 flex justify-end items-start  text-white p-4">
              <div
                className="border rounded-full bg-green1 drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]
                    object-cover"
              >
                <FaBook className="text-7xl p-3"></FaBook>
              </div>
              <div className="absolute z-50 bg-yellow border text-xl rounded-full">
                <p>03</p>
              </div>
            </div>
          </div>
          <p className="text-xl bold mx-auto m-5 text-center">Interview</p>
          <p className="text-md bold mx-auto m-3 text-center">
            Lorem Ipsum is Lorem Ipsum is simply dummy text of the printing and
            typesetting industry.
          </p>
        </div>
        <div>
          <div className=" flex  items-start justify-evenly">
            <div className=" relative z-40 flex justify-end items-start  text-white p-4">
              <div
                className="border rounded-full bg-green1 drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]
                    object-cover"
              >
                <FaSmile className="text-7xl p-3"></FaSmile>
              </div>
              <div className="absolute z-50 bg-yellow border text-xl rounded-full">
                <p>04</p>
              </div>
            </div>
          </div>
          <p className="text-xl bold mx-auto m-5 text-center">Final Result</p>
          <p className="text-md bold mx-auto m-3 text-center">
            Lorem Ipsum is Lorem Ipsum is simply dummy text of the printing and
            typesetting industry.
          </p>
        </div>
      </div>
      </div>
      <div className="bg-green1">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <p className="ml-5 pl-5 pb-5 text-8xl text-yellow">|</p>
              </div>
              <p className="text-4xl  text-white p-5">
                <span className="text-yellow flex items-center justify-center">
                  Book Affordable Courses:
                </span>
                Save Time And Money With Us!
              </p>
            </div>
            <div className="p-5 mx-auto">
              <button
                className="flex items-center justify-between border px-3 drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]
                    object-cover py-1 hover:bg-bgGreen hover:text-white bg-yellow rounded-2xl "
              >
                View all Services
                <IoIosArrowRoundForward />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurProcess;
