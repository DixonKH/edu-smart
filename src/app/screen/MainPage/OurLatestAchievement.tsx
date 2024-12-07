import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import Teaching from "/public/images/Teaching.jpg";
import { FaStar } from "react-icons/fa6";
import Line from "./Line";

type Props = {};

const OurLatestAhievement = (props: Props) => {
  return (
    <div>
      <div className="lg:container md:mx-10 sm:mx-5 mx-1">
        <div>
          <div className="md:flex items-center justify-between">
            <div>
              <div className="flex justify-start items-center pt-1  md:pt-5 lg:pb-6">
                <p className="lg:text-2xl md:text-xl text-base sm:text-xl text-black">
                  - Our Latest Achievements -
                </p>
              </div>
              <p className="lg:text-4xl md:text-3xl sm:text-2xl text-xl lg:p-5 md:p-2 p-1">
                <span className="text-green1">Explore our Portfolio </span>
                <br />
                of featured Classes
              </p>
            </div>
            <div className="lg:mt-[200px] flex justify-start lg:p-5 md:p-2 p-1 text-xs md:text-base  items-center lg:gap-5 md:gap-2 sm:gap-2 gap-1">
              <button
                className="flex items-center justify-between drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]
                    object-cover border px-3 py-1 hover:bg-bgGreen hover:text-white bg-yellow rounded-2xl "
              >
                View all Classes
                <IoIosArrowRoundForward />
              </button>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-3">
            <div className="realtive p-5   flex items-end justify-center">
              <img
                src={Teaching}
                alt="VideContent"
                className="border-black hover:bg-background  drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]
                    object-cover w-[400px] rounded-3xl"
              />
              <div className="absolute  gap-2">
                <div className="  border rounded-xl flex items-center justify-between  bg-white p-1 text-black ">
                  <div>
                    <p className="lg:p-1 md:p-0 p-1 text-xs md:text-base  px-1 ">
                      - Office Cleaning
                    </p>
                    <p className="lg:p-1 md:p-0 p-1 text-xs md:text-base">
                      Software Company Office
                    </p>
                  </div>
                  <div>
                    <IoIosArrowRoundForward className="text-4xl border-black border rounded-full" />
                  </div>
                </div>
              </div>
            </div>
            <div className="realtive p-5  flex items-end justify-center">
              <img
                src={Teaching}
                alt="VideContent"
                className="border-black w-[400px] hover:bg-background  drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]
                    object-cover rounded-3xl"
              />
              <div className="absolute   gap-2">
                <div className=" border rounded-xl flex items-center justify-between  bg-white p-1 text-black  ">
                  <div>
                    <p className="lg:p-1 md:p-0 p-1 text-xs md:text-base  px-1 ">
                      - Office Cleaning
                    </p>
                    <p className="lg:p-1 md:p-0 p-1 text-xs md:text-base">
                      Software Company Office
                    </p>
                  </div>
                  <div>
                    <IoIosArrowRoundForward className="text-4xl border-black border rounded-full" />
                  </div>
                </div>
              </div>
            </div>
            <div className="realtive p-5  flex items-end justify-center">
              <img
                src={Teaching}
                alt="VideContent"
                className="border-black w-[400px] hover:bg-background  drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]
                    object-cover rounded-3xl"
              />
              <div className="absolute   gap-2">
                <div className=" border rounded-xl flex items-center justify-between  bg-white p-1 text-black  ">
                  <div>
                    <p className="lg:p-1 md:p-0 p-1 text-xs md:text-base  px-1 ">
                      - Office Cleaning
                    </p>
                    <p className="lg:p-1 md:p-0 p-1 text-xs md:text-base">
                      Software Company Office
                    </p>
                  </div>
                  <div>
                    <IoIosArrowRoundForward className="text-4xl border-black border rounded-full" />
                  </div>
                </div>
              </div>
            </div>
            <div className="realtive p-5  flex items-end justify-center">
              <img
                src={Teaching}
                alt="VideContent"
                className="border-black w-[400px] hover:bg-background  drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]
                    object-cover rounded-3xl"
              />
              <div className="absolute   gap-2">
                <div className="  border rounded-xl flex items-center justify-between  bg-white p-1 text-black   ">
                  <div>
                    <p className="lg:p-1 md:p-0 p-1 text-xs md:text-base  px-1 ">
                      - Office Cleaning
                    </p>
                    <p className="lg:p-1 md:p-0 p-1 text-xs md:text-base">
                      Software Company Office
                    </p>
                  </div>
                  <div>
                    <IoIosArrowRoundForward className="text-4xl border-black border rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Line />
    </div>
  );
};

export default OurLatestAhievement;
