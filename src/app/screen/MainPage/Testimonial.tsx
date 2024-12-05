import React from "react";
import { FaStar } from "react-icons/fa6";
import { MdOutlineHomeRepairService } from "react-icons/md";
import { SiMicrosoftteams } from "react-icons/si";
import VideoContent from "/public/images/videocontent.png";
import Person from "/public/images/person0.jpg";
import Person1 from "/public/images/person1.jpg";
import { RiDoubleQuotesL } from "react-icons/ri";
import { IoStarSharp } from "react-icons/io5";
type Props = {};

const Testimonial = (props: Props) => {
  return (
    <div>
      <div>
        <div className="flex justify-center items-center gap-4 pt-8 p-6">
          <p className="text-3xl text-black">- Testimonial -</p>
        </div>
        <div className="flex items-center justify-center">
          <p className=" text-4xl   p-3 pl-10">
            What our
            <span className="text-green1"> Clients Say</span>
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-5">
        <div
          className=" m-5 py-5  bg-bgGreen  hover:bg-background rounded-xl drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]
                    object-cover"
        >
          <div className=" ">
            <div className="flex justify-start items-center">
              <div className="">
                <div className="flex justify-end items-center gap-2 absolute px-1 z-40 bg-bgGreen ml-3 mt-10  rounded-xl">
                  <div className="flex items-center justify-center rounded-full w-6 h-6 bg-yellow">
                    <FaStar className="text-sm text-white" />
                  </div>
                </div>

                <div className="realtive mx-auto p-5   z-30">
                  <img
                    src={Person}
                    alt="VideContent"
                    className="border-black w-[100px] h-[100px] rounded-sm drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]
                    object-cover"
                  />
                </div>
              </div>
              <div>
                <p className="p-3 text-xl">Lasile Alexander</p>
                <p className="p-3 text-md">CEO, Software Company</p>
                <div className="flex items-center justify-between">
                  <IoStarSharp
                    className="m-2 text-yellow text-2xl drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]
                    object-cover"
                  />
                  <IoStarSharp
                    className="m-2 text-yellow text-2xl drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]
                    object-cover"
                  />
                  <IoStarSharp
                    className="m-2 text-yellow text-2xl drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]
                    object-cover"
                  />
                  <IoStarSharp
                    className="m-2 text-yellow text-2xl drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]
                    object-cover"
                  />
                  <IoStarSharp
                    className="m-2 text-yellow text-2xl drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]
                    object-cover"
                  />
                  <p className="m-2 text-2xl">
                    5.0
                  </p>
                </div>
              </div>
              <div>
                <RiDoubleQuotesL className="text-7xl border bg-yellow rounded-full ml-5"></RiDoubleQuotesL>
              </div>
            </div>
            <div className=" text-bold text-black">
              <p className="mx-10 py-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
                quam et sapien sed magna placerat. Vivamus sed diam nonum et justo er 
              </p>
            </div>
          </div>
        </div>
        <div
          className=" m-5 py-5  bg-bgGreen  hover:bg-background rounded-xl drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]
                    object-cover"
        >
          <div className=" ">
            <div className="flex justify-start items-center">
              <div className="">
                <div className="flex justify-end items-center gap-2 absolute px-1 z-40 bg-bgGreen ml-3 mt-10  rounded-xl">
                  <div className="flex items-center justify-center rounded-full w-6 h-6 bg-yellow">
                    <FaStar className="text-sm text-white" />
                  </div>
                </div>

                <div className="realtive mx-auto p-5   z-30">
                  <img
                    src={Person1}
                    alt="VideContent"
                    className="border-black w-[100px] h-[100px] rounded-sm drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]
                    object-cover"
                  />
                </div>
              </div>
              <div>
                <p className="p-3 text-xl">Jenny Wilson</p>
                <p className="p-3 text-md">Manager, Hotel</p>
                <div className="flex items-center justify-between">
                  <IoStarSharp
                    className="m-2 text-yellow text-2xl drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]
                    object-cover"
                  />
                  <IoStarSharp
                    className="m-2 text-yellow text-2xl drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]
                    object-cover"
                  />
                  <IoStarSharp
                    className="m-2 text-yellow text-2xl drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]
                    object-cover"
                  />
                  <IoStarSharp
                    className="m-2 text-yellow text-2xl drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]
                    object-cover"
                  />
                  <IoStarSharp
                    className="m-2 text-yellow text-2xl drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]
                    object-cover"
                  />
                  <p className="m-2 text-2xl">
                    5.0
                  </p>
                </div>
              </div>
              <div>
                <RiDoubleQuotesL className="text-7xl border bg-yellow rounded-full ml-5"></RiDoubleQuotesL>
              </div>
            </div>
            <div className=" text-bold text-black">
              <p className="mx-10 py-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
                quam et sapien sed magna placerat. Vivamus sed diam nonum et justo er 
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className=" gap-5 bg-green1 my-4 py-3 ">
        <div className="flex justify-between items-center mx-5">
          <div className="flex justify-start items-center gap-2   px-1  ">
            <div className="flex items-center justify-center rounded-full w-6 h-6 bg-bgGreen">
              <FaStar className="text-3xl text-yellow" />
            </div>
            <p className="text-xl">Lorem Ipsum</p>
          </div>
          <div className="flex justify-start items-center gap-2  px-1   ">
            <div className="flex items-center justify-center rounded-full w-6 h-6 bg-bgGreen">
              <FaStar className="text-xl text-yellow" />
            </div>
            <p className="text-xl">Lorem Ipsum</p>
          </div>
          <div className="flex justify-start items-center gap-2   px-1 ">
            <div className="flex items-center justify-center rounded-full w-6 h-6 bg-bgGreen">
              <FaStar className="text-xl text-yellow" />
            </div>
            <p className="text-xl">Lorem Ipsum</p>
          </div>
          <div className="flex justify-start items-center gap-2   px-1  ">
            <div className="flex items-center justify-center rounded-full w-6 h-6 bg-bgGreen">
              <FaStar className="text-xl text-yellow" />
            </div>
            <p className="text-xl">Lorem Ipsum</p>
          </div>
          <div className="flex justify-start items-center gap-2   px-1 ">
            <div className="flex items-center justify-center rounded-full w-6 h-6 bg-bgGreen">
              <FaStar className="text-xl text-yellow" />
            </div>
            <p className="text-xl">Lorem Ipsum</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
