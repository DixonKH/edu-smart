import React from "react";
import { FaStar } from "react-icons/fa6";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoIosPricetags } from "react-icons/io";
import { BiLogoMicrosoftTeams } from "react-icons/bi";
import { FaBagShopping } from "react-icons/fa6";
import { BsAwardFill } from "react-icons/bs";
import Line from "./Line";
import Teaching from "/public/images/Teaching.jpg";

const WhyChooseUs = () => {
  return (
    <div className="">
      <div className="md:container my-20">
        <div className="flex flex-col items-center justify-center mb-6">
          <div className="w-full flex flex-col gap-2 text-center lg:text-left">
            <p className="lg:text-2xl md:text-xl text-base sm:text-xl text-black">
              - Why Choose Us -
            </p>
            <p className="lg:text-4xl md:text-3xl sm:text-2xl ml-4 text-xl font-medium">
              <span className="text-green1">Why choose </span>our efficient
              learning Center
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-1 base:grid-cols-1 lg:grid-cols-2 gap-5 cursor-pointer">
          <div className="w-full md:flex base:flex justify-center items-center">
            <div className="realtive w-full flex items-end justify-center p-2">
              <img
                src={Teaching}
                alt="VideContent"
                className="border-black object-cover rounded-xl"
              />
              <div className="absolute sm:hidden hidden base:hidden md:hidden lg:block gap-2 mb-3">
                <div className="md:flex items-center justify-between gap-2">
                  <div className="gap-2 p-1 text-white">
                    <p className="text-lg border p-1 px-2 rounded-xl hover:bg-green hover:scale-105 hover:transition-all duration-300">
                      Beginner
                    </p>
                  </div>
                  <div className="gap-2 p-1 text-white">
                    <p className="text-lg border p-1 px-2 rounded-xl hover:bg-green hover:scale-105 hover:transition-all duration-300">
                      Elementry
                    </p>
                  </div>
                  <div className="gap-2 p-1 text-white">
                    <p className="text-lg border p-1 px-2 rounded-xl hover:bg-green hover:scale-105 hover:transition-all duration-300">
                      Intermediate
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <div className="gap-2 p-1 text-white ">
                    <p className="text-lg border p-1 px-2 rounded-xl hover:bg-green hover:scale-105 hover:transition-all duration-300">
                      Advanced
                    </p>
                  </div>
                  <div className="gap-2 p-1 text-white ">
                    <p className="text-lg border p-1 px-2 rounded-xl hover:bg-green hover:scale-105 hover:transition-all duration-300">
                      Expert
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 p-2 gap-2">
            <div className="flex flex-col items-center justify-center hover:rounded-xl hover:shadow-xl p-2 transition-all duration-300">
              <div className="">
                <IoIosPricetags className="lg:text-6xl text-2xl md:text-5xl text-blue" />
              </div>
              <p className="text-md md:text-lg font-bold text-center mt-4 text-blue">
                Affordable price
              </p>
              <p className="text-md md:text-base bold text-center p-2">
                Lorem Ipsum is Lorem Ipsum is simply dummy text of the printing
                and typesetting industry.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center hover:rounded-xl hover:shadow-xl p-2 transition-all duration-300">
              <div className="flex flex-col items-center justify-center">
                <div>
                  <BiLogoMicrosoftTeams className="lg:text-5xl text-2xl md:text-3xl text-red" />
                </div>
                <p className="text-md md:text-lg font-bold text-center mt-4 text-red">
                  Professional Team
                </p>
                <p className="text-md md:text-base bold text-center p-2">
                  Lorem Ipsum is Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center hover:rounded-xl hover:shadow-xl p-2 transition-all duration-300">
              <div className="flex flex-col items-center justify-center">
                <div>
                  <FaBagShopping className="lg:text-5xl text-2xl md:text-3xl text-green" />
                </div>
                <p className="text-md md:text-lg font-bold text-center mt-4 text-green">
                  10+ years Experience
                </p>
                <p className="text-md md:text-base bold text-center p-2">
                  Lorem Ipsum is Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center hover:rounded-xl hover:shadow-xl p-2 transition-all duration-300">
              <div className="flex flex-col items-center justify-center">
                <div className="">
                  <BsAwardFill className="lg:text-5xl text-2xl md:text-3xl text-yellow" />
                </div>
                <p className="text-md md:text-lg font-bold text-center mt-4 text-yellow">
                  Award Winning
                </p>
                <p className="text-md md:text-base bold text-center p-2">
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
