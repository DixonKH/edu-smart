import React from "react";
import { FaStar } from "react-icons/fa6";
import { IoIosArrowRoundForward } from "react-icons/io";
import { SiTicktick } from "react-icons/si";

type Props = {};

const PricingTable = (props: Props) => {
  return (
    <div>
      <div className="p-5 bg-background">
        <div className=" lg:container md:px-10 sm:px-5 px-1">
          <div className="flex justify-start items-center pt-1  md:pt-5 lg:pb-6">
            <p className="lg:text-2xl md:text-xl text-base sm:text-xl text-black">
              - Our Pricing Table -
            </p>
          </div>
          <div className="lg:flex items-center justify-centerr">
            <p className=" lg:text-4xl md:text-3xl sm:text-2xl text-xl lg:p-5 md:p-2 p-1">
              <span className="text-green1"> Our Pricing</span>Model
            </p>
          </div>
        </div>
        <div className="lg:container md:px-10 sm:px-5 px-1">
          <div className="grid md:grid-cols-3 gap-5">
            <div
              className="hover:bg-green1 drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]
                    object-cover  border-black border rounded-3xl hover:text-white"
            >
              <div className="m-3">
                <p className="lg:text-2xl md:text-xl text-base sm:text-xl text-black">
                  Basic
                </p>
                <p className="px-3 text-md">
                  <span className="lg:text-5xl md:text-3xl base:text-2xl sm:text-xl text-lg">
                    $99
                  </span>{" "}
                  /Service
                </p>
              </div>
              <div className="pl-4 ">
                <div className=" flex justify-start my-1 sm:my-2  items-center">
                  <div className="flex items-center justify-center rounded-full w-6 h-6 bg-yellow">
                    <SiTicktick className="text-sm text-white" />
                  </div>
                  <p className="  p-1 text-xs md:text-base bold mx-auto  text-center">
                    Lorem Ips incorrectly called
                  </p>
                </div>
                <div className="  flex justify-start my-1 sm:my-2  items-center">
                  <div className="flex items-center justify-center rounded-full w-6 h-6 bg-yellow">
                    <SiTicktick className="text-sm text-white" />
                  </div>
                  <p className="  p-1 text-xs md:text-base bold mx-auto ß text-center">
                    Lorem Ips incorrectly called
                  </p>
                </div>
                <div className=" flex justify-start my-1 sm:my-2  items-center">
                  <div className="flex items-center justify-center rounded-full w-6 h-6 bg-yellow">
                    <SiTicktick className="text-sm text-white" />
                  </div>
                  <p className="  p-1 text-xs md:text-base bold mx-auto ß text-center">
                    Lorem Ips incorrectly called
                  </p>
                </div>
                <div className=" flex justify-start my-1 sm:my-2  items-center">
                  <div className="flex items-center justify-center rounded-full w-6 h-6 bg-yellow">
                    <SiTicktick className="text-sm text-white" />
                  </div>
                  <p className="  p-1 text-xs md:text-base bold mx-auto ß text-center">
                    Lorem Ips incorrectly called
                  </p>
                </div>
                <div className=" flex justify-start my-1 sm:my-2  items-center">
                  <div className="flex items-center justify-center rounded-full w-6 h-6 bg-yellow">
                    <SiTicktick className="text-sm text-white" />
                  </div>
                  <p className="  p-1 text-xs md:text-base bold mx-auto ß text-center">
                    Lorem Ips incorrectly called
                  </p>
                </div>
                <div className=" flex justify-start my-1 sm:my-2  items-center">
                  <div className="flex items-center justify-center rounded-full w-6 h-6 bg-yellow">
                    <SiTicktick className="text-sm text-white" />
                  </div>
                  <p className="  p-1 text-xs md:text-base bold mx-auto ß text-center">
                    Lorem Ips incorrectly called
                  </p>
                </div>
                <div className=" flex justify-start my-1 sm:my-2  items-center">
                  <div className="flex items-center justify-center rounded-full w-6 h-6 bg-yellow">
                    <SiTicktick className="text-sm text-white" />
                  </div>
                  <p className="  p-1 text-xs md:text-base bold mx-auto ß text-center">
                    Lorem Ips incorrectly called
                  </p>
                </div>
                <div className=" flex justify-start my-1 sm:my-2  items-center">
                  <div className="flex items-center justify-center rounded-full w-6 h-6 bg-yellow">
                    <SiTicktick className="text-sm text-white" />
                  </div>
                  <p className="  p-1 text-xs md:text-base bold mx-auto ß text-center">
                    Lorem Ips incorrectly called
                  </p>
                </div>
              </div>
              <div className="">
                <div className="flex items-center justify-center px-3 text-md">
                  <div className="  flex justify-start lg:p-5 md:p-2 p-1 text-xs md:text-base  items-center lg:gap-5 md:gap-2 sm:gap-2 gap-1">
                    <button
                      className="flex items-center justify-between drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]
                    object-cover border px-3 py-1 hover:bg-bgGreen hover:text-white bg-yellow rounded-2xl"
                    >
                      View all Services
                      <IoIosArrowRoundForward />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-center">
                <div
                  className="flex drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]
                    object-cover items-center gap-2 absolute px-1 z-30 bg-yellow  boder rounded-xl"
                >
                  <div className="flex items-center justify-center rounded-full w-6 h-6 bg-bgGreen">
                    <FaStar className="text-sm text-white" />
                  </div>
                  <p className="text-sm">Most Popular</p>
                </div>
              </div>
              <div
                className="hover:bg-green1 drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]
                    object-cover  border-black border rounded-3xl hover:text-white"
              >
                <div className="m-3">
                  <p className="lg:text-2xl md:text-xl text-base sm:text-xl text-black">
                    Basic
                  </p>
                  <p className="px-3 text-md">
                    <span className="lg:text-5xl md:text-3xl base:text-2xl sm:text-xl text-lg">
                      $199
                    </span>{" "}
                    /Service
                  </p>
                </div>
                <div className="pl-4 ">
                  <div className=" flex justify-start my-1 sm:my-2  items-center">
                    <div className="flex items-center justify-center rounded-full w-6 h-6 bg-yellow">
                      <SiTicktick className="text-sm text-white" />
                    </div>
                    <p className="  p-1 text-xs md:text-base bold mx-auto  text-center">
                      Lorem Ips incorrectly called
                    </p>
                  </div>
                  <div className="  flex justify-start my-1 sm:my-2  items-center">
                    <div className="flex items-center justify-center rounded-full w-6 h-6 bg-yellow">
                      <SiTicktick className="text-sm text-white" />
                    </div>
                    <p className="  p-1 text-xs md:text-base bold mx-auto  text-center">
                      Lorem Ips incorrectly called
                    </p>
                  </div>
                  <div className=" flex justify-start my-1 sm:my-2  items-center">
                    <div className="flex items-center justify-center rounded-full w-6 h-6 bg-yellow">
                      <SiTicktick className="text-sm text-white" />
                    </div>
                    <p className="  p-1 text-xs md:text-base bold mx-auto ß text-center">
                      Lorem Ips incorrectly called
                    </p>
                  </div>
                  <div className=" flex justify-start my-1 sm:my-2  items-center">
                    <div className="flex items-center justify-center rounded-full w-6 h-6 bg-yellow">
                      <SiTicktick className="text-sm text-white" />
                    </div>
                    <p className="  p-1 text-xs md:text-base bold mx-auto ß text-center">
                      Lorem Ips incorrectly called
                    </p>
                  </div>
                  <div className=" flex justify-start my-1 sm:my-2  items-center">
                    <div className="flex items-center justify-center rounded-full w-6 h-6 bg-yellow">
                      <SiTicktick className="text-sm text-white" />
                    </div>
                    <p className="  p-1 text-xs md:text-base bold mx-auto ß text-center">
                      Lorem Ips incorrectly called
                    </p>
                  </div>
                  <div className=" flex justify-start my-1 sm:my-2  items-center">
                    <div className="flex items-center justify-center rounded-full w-6 h-6 bg-yellow">
                      <SiTicktick className="text-sm text-white" />
                    </div>
                    <p className="  p-1 text-xs md:text-base bold mx-auto ß text-center">
                      Lorem Ips incorrectly called
                    </p>
                  </div>
                  <div className=" flex justify-start my-1 sm:my-2  items-center">
                    <div className="flex items-center justify-center rounded-full w-6 h-6 bg-yellow">
                      <SiTicktick className="text-sm text-white" />
                    </div>
                    <p className="  p-1 text-xs md:text-base bold mx-auto ß text-center">
                      Lorem Ips incorrectly called
                    </p>
                  </div>
                  <div className=" flex justify-start my-1 sm:my-2  items-center">
                    <div className="flex items-center justify-center rounded-full w-6 h-6 bg-yellow">
                      <SiTicktick className="text-sm text-white" />
                    </div>
                    <p className="  p-1 text-xs md:text-base bold mx-auto ß text-center">
                      Lorem Ips incorrectly called
                    </p>
                  </div>
                </div>
                <div className="">
                  <div className="flex items-center justify-center px-3 text-md">
                    <div className="  flex justify-start lg:p-5 md:p-2 p-1 text-xs md:text-base  items-center lg:gap-5 md:gap-2 sm:gap-2 gap-1">
                      <button
                        className="flex items-center justify-between drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]
                    object-cover border px-3 py-1 hover:bg-bgGreen hover:text-white bg-yellow rounded-2xl"
                      >
                        View all Services
                        <IoIosArrowRoundForward />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="hover:bg-green1 drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]
                    object-cover  border-black border rounded-3xl hover:text-white"
            >
              <div className="m-3">
                <p className="lg:text-2xl md:text-xl text-base sm:text-xl text-black">
                  Basic
                </p>
                <p className="px-3 text-md">
                  <span className="lg:text-5xl md:text-3xl base:text-2xl sm:text-xl text-lg">
                    $299
                  </span>{" "}
                  /Service
                </p>
              </div>
              <div className="pl-4 ">
                <div className=" flex justify-start my-1 sm:my-2  items-center">
                  <div className="flex items-center justify-center rounded-full w-6 h-6 bg-yellow">
                    <SiTicktick className="text-sm text-white" />
                  </div>
                  <p className=" p-1 text-xs md:text-base bold mx-auto  text-center">
                    Lorem Ips incorrectly called
                  </p>
                </div>
                <div className="  flex justify-start my-1 sm:my-2  items-center">
                  <div className="flex items-center justify-center rounded-full w-6 h-6 bg-yellow">
                    <SiTicktick className="text-sm text-white" />
                  </div>
                  <p className=" p-1 text-xs md:text-base bold mx-auto ß text-center">
                    Lorem Ips incorrectly called
                  </p>
                </div>
                <div className=" flex justify-start my-1 sm:my-2  items-center">
                  <div className="flex items-center justify-center rounded-full w-6 h-6 bg-yellow">
                    <SiTicktick className="text-sm text-white" />
                  </div>
                  <p className=" p-1 text-xs md:text-base bold mx-auto ß text-center">
                    Lorem Ips incorrectly called
                  </p>
                </div>
                <div className=" flex justify-start my-1 sm:my-2  items-center">
                  <div className="flex items-center justify-center rounded-full w-6 h-6 bg-yellow">
                    <SiTicktick className="text-sm text-white" />
                  </div>
                  <p className=" p-1 text-xs md:text-base bold mx-auto ß text-center">
                    Lorem Ips incorrectly called
                  </p>
                </div>
                <div className=" flex justify-start my-1 sm:my-2  items-center">
                  <div className="flex items-center justify-center rounded-full w-6 h-6 bg-yellow">
                    <SiTicktick className="text-sm text-white" />
                  </div>
                  <p className=" p-1 text-xs md:text-base bold mx-auto ß text-center">
                    Lorem Ips incorrectly called
                  </p>
                </div>
                <div className=" flex justify-start my-1 sm:my-2  items-center">
                  <div className="flex items-center justify-center rounded-full w-6 h-6 bg-yellow">
                    <SiTicktick className="text-sm text-white" />
                  </div>
                  <p className=" p-1 text-xs md:text-base bold mx-auto ß text-center">
                    Lorem Ips incorrectly called
                  </p>
                </div>
                <div className=" flex justify-start my-1 sm:my-2  items-center">
                  <div className="flex items-center justify-center rounded-full w-6 h-6 bg-yellow">
                    <SiTicktick className="text-sm text-white" />
                  </div>
                  <p className=" p-1 text-xs md:text-base bold mx-auto ß text-center">
                    Lorem Ips incorrectly called
                  </p>
                </div>
                <div className=" flex justify-start my-1 sm:my-2  items-center">
                  <div className="flex items-center justify-center rounded-full w-6 h-6 bg-yellow">
                    <SiTicktick className="text-sm text-white" />
                  </div>
                  <p className=" p-1 text-xs md:text-base bold mx-auto ß text-center">
                    Lorem Ips incorrectly called
                  </p>
                </div>
              </div>
              <div className="">
                <div className="flex items-center justify-center px-3 text-md">
                  <div className="  flex justify-start lg:p-5 md:p-2 p-1 text-xs md:text-base  items-center lg:gap-5 md:gap-2 sm:gap-2 gap-1">
                    <button
                      className="flex items-center justify-between drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]
                    object-cover border px-3 py-1 hover:bg-bgGreen hover:text-white bg-yellow rounded-2xl"
                    >
                      View all Services
                      <IoIosArrowRoundForward />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingTable;
