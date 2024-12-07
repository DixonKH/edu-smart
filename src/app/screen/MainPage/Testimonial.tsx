import React from "react";
import { FaStar } from "react-icons/fa6";
import { MdOutlineHomeRepairService } from "react-icons/md";
import { SiMicrosoftteams } from "react-icons/si";
import VideoContent from "/public/images/videocontent.png";
import Person from "/public/images/person0.jpg";
import Person1 from "/public/images/person1.jpg";
import { RiDoubleQuotesL } from "react-icons/ri";
import { IoStarSharp } from "react-icons/io5";
import Line from "./Line";
type Props = {};

const Testimonial = (props: Props) => {
  return (
    <div>
      <div className="lg:container md:px-10 sm:px-5 px-1">
        <div className="flex justify-start items-center pt-1  md:pt-5 lg:pb-6">
          <p className="lg:text-2xl md:text-xl text-base sm:text-xl text-black">
            - Testimonial -
          </p>
        </div>
        <div className="lg:flex items-center justify-centerr">
          <p className=" lg:text-4xl md:text-3xl sm:text-2xl text-xl lg:p-5 md:p-2 p-1">
            What our
            <span className="text-green1"> Clients Say</span>
          </p>
        </div>
      </div>
      <div className="lg:container md:px-10 sm:px-5 px-1">
        <div className="grid md:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1  gap-5">
          <div
            className=" lg:m-5 lg:py-5  md:m-3 md:py-3 sm:m-1 sm:py-1  bg-bgGreen    hover:bg-background rounded-xl drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]
                    object-cover"
          >
            <div className=" ">
              <div className="lg:flex items-center justify-start">
                <div className="">
                  <div className="relative flex justify-evenly gap-5 mx-auto p-5   z-30">
                    <div className="">
                      <div className="flex justify-end items-center gap-2 absolute px-1 z-40 bg-bgGreen   rounded-xl">
                        <div className="flex items-center justify-center rounded-full w-6 h-6 bg-yellow">
                          <FaStar className="text-sm text-white" />
                        </div>
                      </div>
                      <img
                        src={Person}
                        alt="VideContent"
                        className="border-black sm:w-[130px] sm:h-[130px] w-[100px] md:w-[200px] base:w-[200px] md:h-[200px] lg:w-[130px] lg:h-[130px] base:h-[200px] h-[100px] rounded-sm drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]
                        object-cover"
                      />
                    </div>
                    <div className="flex items-center justify-center">
                      <RiDoubleQuotesL className="text-7xl lg:hidden sm:flex md:hidden border bg-yellow rounded-full ml-5"></RiDoubleQuotesL>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="lg:p-3 p-1 text-xl">Lasile Alexander</p>
                  <p className="lg:p-3 p-1 text-md">CEO, Software Company</p>
                  <div className="sm:flex flex base:justify-evenly items-center justify-between">
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
                    <p className="m-2 text-2xl">5.0</p>
                  </div>
                </div>
                <div>
                  <RiDoubleQuotesL className="sm:hidden    hidden text-7xl border bg-yellow rounded-full"></RiDoubleQuotesL>
                </div>
              </div>
              <div className=" text-center text-bold text-black">
                <p className="lg:p-5 md:p-2 p-1 text-xs md:text-base bold mx-auto m-3 text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  non quam et sapien sed magna placerat. Vivamus sed diam nonum
                  et justo er
                </p>
              </div>
            </div>
          </div>
          <div
            className=" lg:m-5 lg:py-5  md:m-3 md:py-3 sm:m-1 sm:py-1 bg-bgGreen    hover:bg-background rounded-xl drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]
                    object-cover"
          >
            <div className=" ">
              <div className="lg:flex justify-start items-center">
                <div className="">
                  <div className="relative flex justify-evenly gap-5 mx-auto p-5   z-30">
                    <div className="">
                      <div className="flex justify-end items-center gap-2 absolute px-1 z-40 bg-bgGreen   rounded-xl">
                        <div className="flex items-center justify-center rounded-full w-6 h-6 bg-yellow">
                          <FaStar className="text-sm text-white" />
                        </div>
                      </div>
                      <img
                        src={Person1}
                        alt="VideContent"
                        className="border-black sm:w-[130px] sm:h-[130px] w-[100px] md:w-[200px] base:w-[200px] md:h-[200px] lg:w-[130px] lg:h-[130px] base:h-[200px] h-[100px] rounded-sm drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]
                        object-cover"
                      />
                    </div>
                    <div className="flex items-center justify-center">
                      <RiDoubleQuotesL className="text-7xl lg:hidden sm:flex md:hidden border bg-yellow rounded-full ml-5"></RiDoubleQuotesL>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="lg:p-3 p-1 text-xl">Lasile Alexander</p>
                  <p className="lg:p-3 p-1 text-md">CEO, Software Company</p>
                  <div className="sm:flex flex base:justify-evenly items-center justify-between">
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
                    <p className="m-2 text-2xl">5.0</p>
                  </div>
                </div>
                <div>
                  <RiDoubleQuotesL className="sm:hidden md:hidden  lg:hidden hidden text-7xl border bg-yellow rounded-full"></RiDoubleQuotesL>
                </div>
              </div>
              <div className=" text-center text-bold text-black">
                <p className="lg:p-5 md:p-2 p-1 text-xs md:text-base bold mx-auto m-3 text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  non quam et sapien sed magna placerat. Vivamus sed diam nonum
                  et justo er
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Line />
    </div>
  );
};

export default Testimonial;
