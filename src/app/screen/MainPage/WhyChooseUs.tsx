import React from "react";
import { FaStar } from "react-icons/fa6";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoIosPricetags } from "react-icons/io";
import { BiLogoMicrosoftTeams } from "react-icons/bi";
import { FaBagShopping } from "react-icons/fa6";
import { BsAwardFill } from "react-icons/bs";
import Line from "./Line";
import Teaching from "/public/images/Teaching.jpg";

type Props = {};

const WhyChooseUs = (props: Props) => {
  return (
    <div className="">
      <div className="lg:container md:px-10 sm:px-5 px-1">
        <div className="md:flex items-center justify-between">
          <div>
            <div className="flex justify-start items-center pt-1  md:pt-5 lg:pb-6">
              <p className="lg:text-2xl md:text-xl text-base sm:text-xl text-black">
                - Why Choose Us -
              </p>
            </div>
            <p className="lg:text-4xl md:text-3xl sm:text-2xl text-xl lg:p-5 md:p-2 p-1">
              <span className="text-green1">Why choose </span>our <br />
              efficient learning Center
            </p>
          </div>
          <div className="lg:mt-[200px] flex justify-start lg:p-5 md:p-2 p-1 text-xs md:text-base  items-center lg:gap-5 md:gap-2 sm:gap-2 gap-1">
            <button
              className="flex items-center justify-between drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]
                    object-cover border px-3 py-1 hover:bg-bgGreen hover:text-white bg-yellow rounded-2xl "
            >
              Get a Quote
              <IoIosArrowRoundForward />
            </button>
          </div>
        </div>
        <div className="grid md:grid-cols-1 base:grid-cols-1 lg:grid-cols-2 ">
          <div className="md:flex base:flex justify-center items-center">
            <div className="m-10">
              <div
                className="flex items-center drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] md:text-sm lg:text-sm text-xs sm:text-xs 
                    object-cover justify-start gap-2 absolute px-1 z-30 bg-yellow  boder rounded-xl"
              >
                <div className="flex items-center justify-center rounded-full w-6 h-6 bg-bgGreen">
                  <FaStar className="text-sm text-white" />
                </div>
                <p className="text-sm">See this Example</p>
              </div>

              <div className="realtive pl-10  flex items-end justify-center">
                <img
                  src={Teaching}
                  alt="VideContent"
                  className="border-black base:w-[400px] sm:w-[300px] rounded-lg"
                />
                <div className="absolute sm:hidden hidden base:hidden md:hidden lg:block  gap-2">
                  <div className="md:flex items-center  justify-between">
                    <div className="gap-2   p-1 text-white  ">
                      <p className="text-sm  border px-1 rounded-xl">
                        House Cleaning
                      </p>
                    </div>
                    <div className="gap-2  p-1 text-white  ">
                      <p className="text-sm border px-1 rounded-xl">
                        Kitchen Cleaning
                      </p>
                    </div>
                    <div className="gap-2  p-1 text-white  ">
                      <p className="text-sm border px-1 rounded-xl">
                        Glass Cleaning
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="gap-2  p-1 text-white  ">
                      <p className="text-sm border px-1 rounded-xl">
                        Office Cleaning
                      </p>
                    </div>
                    <div className="gap-2  p-1 text-white  ">
                      <p className="text-sm border px-1 rounded-xl">
                        Carpet Cleaning
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 p-2">
            <div className=" flex items-center justify-center">
              <div className="">
                <div className="">
                  <IoIosPricetags className="lg:text-5xl text-2xl sm:text-2xl md:text-3xl mx-auto" />
                </div>
                <p className=" md:p-2 p-1 text-sm md:text-lg bold mx-auto  text-center">
                  Affordable price
                </p>
                <p className="lg:p-3 md:p-2 p-1 text-xs md:text-base bold mx-auto m-3 text-center">
                  Lorem Ipsum is Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry.
                </p>
              </div>
            </div>
            <div className=" flex items-center justify-center">
              <div>
                <div>
                  <BiLogoMicrosoftTeams className="lg:text-5xl text-2xl sm:text-2xl md:text-3xl mx-auto" />
                </div>
                <p className=" md:p-2 p-1 text-sm md:text-lg bold mx-auto  text-center">
                  Professional Team
                </p>
                <p className="lg:p-3 md:p-2 p-1 text-xs md:text-base bold mx-auto m-3 text-center">
                  Lorem Ipsum is Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry.
                </p>
              </div>
            </div>
            <div className=" flex items-center justify-center">
              <div>
                <div>
                  <FaBagShopping className="lg:text-5xl text-2xl sm:text-2xl md:text-3xl mx-auto" />
                </div>
                <p className="  md:p-2 p-1 text-sm md:text-lg bold mx-auto  text-center">
                  10+ years Experience
                </p>
                <p className="lg:p-3 md:p-2 p-1 text-xs md:text-base bold mx-auto m-3 text-center">
                  Lorem Ipsum is Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry.
                </p>
              </div>
            </div>
            <div className=" flex items-center justify-center">
              <div>
                <div className="">
                  <BsAwardFill className="lg:text-5xl text-2xl sm:text-2xl md:text-3xl mx-auto" />
                </div>
                <p className=" md:p-2 p-1 text-sm md:text-lg bold mx-auto  text-center">
                  Award Winning
                </p>
                <p className="lg:p-3 md:p-2 p-1 text-xs md:text-base bold mx-auto m-3 text-center">
                  Lorem Ipsum is Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry.
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

export default WhyChooseUs;
