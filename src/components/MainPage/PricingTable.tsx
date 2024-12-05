import React from "react";
import { FaStar } from "react-icons/fa6";
import { IoIosArrowRoundForward } from "react-icons/io";
import { SiTicktick } from "react-icons/si";

type Props = {};

const PricingTable = (props: Props) => {
  return (
    <div>
      <div className="p-5 bg-background">
        <div className="container ">
          <div className="flex justify-center items-center gap-4 pt-8 p-6">
            <p className="text-3xl text-black">- Pricing Table -</p>
          </div>
          <div className="flex items-center justify-center">
            <p className=" text-4xl   p-5  pl-10">
              <span className="text-green1"> Our Pricing</span>Model
            </p>
          </div>
        </div>
        <div className="container">
          <div className="grid grid-cols-3 gap-5">
            <div
              className="hover:bg-green1 drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]
                    object-cover  border-black border rounded-3xl hover:text-white"
            >
              <div className="m-5">
                <p className="p-3 text-xl">Basic</p>
                <p className="px-3 text-md">
                  <span className="text-5xl">$99</span> /Service
                </p>
              </div>
              <div className="pl-4 ">
                <div className="m-3 flex justify-start items-center">
                  <div className="flex items-center justify-center rounded-full w-6 h-6 bg-yellow">
                    <SiTicktick className="text-sm text-white" />
                  </div>
                  <p className="px-3 text-md">Lorem Ips incorrectly called</p>
                </div>
                <div className="m-3  flex justify-start items-center">
                  <div className="flex items-center justify-center rounded-full w-6 h-6 bg-yellow">
                    <SiTicktick className="text-sm text-white" />
                  </div>
                  <p className="px-3 text-md">Lorem Ips incorrectly called</p>
                </div>
                <div className="m-3 flex justify-start items-center">
                  <div className="flex items-center justify-center rounded-full w-6 h-6 bg-yellow">
                    <SiTicktick className="text-sm text-white" />
                  </div>
                  <p className="px-3 text-md">Lorem Ips incorrectly called</p>
                </div>
                <div className="m-3 flex justify-start items-center">
                  <div className="flex items-center justify-center rounded-full w-6 h-6 bg-yellow">
                    <SiTicktick className="text-sm text-white" />
                  </div>
                  <p className="px-3 text-md">Lorem Ips incorrectly called</p>
                </div>
                <div className="m-3 flex justify-start items-center">
                  <div className="flex items-center justify-center rounded-full w-6 h-6 bg-yellow">
                    <SiTicktick className="text-sm text-white" />
                  </div>
                  <p className="px-3 text-md">Lorem Ips incorrectly called</p>
                </div>
                <div className="m-3 flex justify-start items-center">
                  <div className="flex items-center justify-center rounded-full w-6 h-6 bg-yellow">
                    <SiTicktick className="text-sm text-white" />
                  </div>
                  <p className="px-3 text-md">Lorem Ips incorrectly called</p>
                </div>
                <div className="m-3 flex justify-start items-center">
                  <div className="flex items-center justify-center rounded-full w-6 h-6 bg-yellow">
                    <SiTicktick className="text-sm text-white" />
                  </div>
                  <p className="px-3 text-md">Lorem Ips incorrectly called</p>
                </div>
                <div className="m-3 flex justify-start items-center">
                  <div className="flex items-center justify-center rounded-full w-6 h-6 bg-yellow">
                    <SiTicktick className="text-sm text-white" />
                  </div>
                  <p className="px-3 text-md">Lorem Ips incorrectly called</p>
                </div>
              </div>
              <div className="m-5">
                <div className="px-3 text-md">
                  <div className="p-5 mx-auto">
                    <button
                      className="flex items-center drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]
                    object-cover justify-center w-[300px] border px-3 py-1 hover:bg-bgGreen hover:text-white bg-yellow rounded-2xl "
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
                    object-cover items-center gap-2 absolute px-1 z-40 bg-yellow  boder rounded-xl"
                >
                  <div className="flex items-center justify-center rounded-full w-6 h-6 bg-bgGreen">
                    <FaStar className="text-sm text-white" />
                  </div>
                  <p className="text-sm">Most Popular</p>
                </div>
              </div>
              <div
                className="hover:bg-green1 border drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]
                    object-cover  border-black relative rounded-3xl hover:text-white"
              >
                <div className="m-5">
                  <p className="p-3 text-xl">Standard</p>
                  <p className="px-3 text-md">
                    <span className="text-5xl">$199</span> /Service
                  </p>
                </div>

                <div className="pl-4 ">
                  <div className="m-3 flex justify-start items-center">
                    <div className="flex items-center justify-center rounded-full w-6 h-6 bg-yellow">
                      <SiTicktick className="text-sm text-white" />
                    </div>
                    <p className="px-3 text-md">Lorem Ips incorrectly called</p>
                  </div>
                  <div className="m-3  flex justify-start items-center">
                    <div className="flex items-center justify-center rounded-full w-6 h-6 bg-yellow">
                      <SiTicktick className="text-sm text-white" />
                    </div>
                    <p className="px-3 text-md">Lorem Ips incorrectly called</p>
                  </div>
                  <div className="m-3 flex justify-start items-center">
                    <div className="flex items-center justify-center rounded-full w-6 h-6 bg-yellow">
                      <SiTicktick className="text-sm text-white" />
                    </div>
                    <p className="px-3 text-md">Lorem Ips incorrectly called</p>
                  </div>
                  <div className="m-3 flex justify-start items-center">
                    <div className="flex items-center justify-center rounded-full w-6 h-6 bg-yellow">
                      <SiTicktick className="text-sm text-white" />
                    </div>
                    <p className="px-3 text-md">Lorem Ips incorrectly called</p>
                  </div>
                  <div className="m-3 flex justify-start items-center">
                    <div className="flex items-center justify-center rounded-full w-6 h-6 bg-yellow">
                      <SiTicktick className="text-sm text-white" />
                    </div>
                    <p className="px-3 text-md">Lorem Ips incorrectly called</p>
                  </div>
                  <div className="m-3 flex justify-start items-center">
                    <div className="flex items-center justify-center rounded-full w-6 h-6 bg-yellow">
                      <SiTicktick className="text-sm text-white" />
                    </div>
                    <p className="px-3 text-md">Lorem Ips incorrectly called</p>
                  </div>
                  <div className="m-3 flex justify-start items-center">
                    <div className="flex items-center justify-center rounded-full w-6 h-6 bg-yellow">
                      <SiTicktick className="text-sm text-white" />
                    </div>
                    <p className="px-3 text-md">Lorem Ips incorrectly called</p>
                  </div>
                  <div className="m-3 flex justify-start items-center">
                    <div className="flex items-center justify-center rounded-full w-6 h-6 bg-yellow">
                      <SiTicktick className="text-sm text-white" />
                    </div>
                    <p className="px-3 text-md">Lorem Ips incorrectly called</p>
                  </div>
                </div>
                <div className="m-5">
                  <div className="px-3 text-md">
                    <div className="p-5 mx-auto">
                      <button
                        className="flex items-center  drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]
                    object-cover justify-center w-[300px] border px-3 py-1 hover:bg-bgGreen hover:text-white bg-yellow rounded-2xl "
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
              className="hover:bg-green1 border drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]
                    object-cover  border-black rounded-3xl hover:text-white"
            >
              <div className="m-5">
                <p className="p-3 text-xl">Premium</p>
                <p className="px-3 text-md">
                  <span className="text-5xl">$299</span> /Service
                </p>
              </div>
              <div className="pl-4 ">
                <div className="m-3 flex justify-start items-center">
                  <div className="flex items-center justify-center rounded-full w-6 h-6 bg-yellow">
                    <SiTicktick className="text-sm text-white" />
                  </div>
                  <p className="px-3 text-md">Lorem Ips incorrectly called</p>
                </div>
                <div className="m-3  flex justify-start items-center">
                  <div className="flex items-center justify-center rounded-full w-6 h-6 bg-yellow">
                    <SiTicktick className="text-sm text-white" />
                  </div>
                  <p className="px-3 text-md">Lorem Ips incorrectly called</p>
                </div>
                <div className="m-3 flex justify-start items-center">
                  <div className="flex items-center justify-center rounded-full w-6 h-6 bg-yellow">
                    <SiTicktick className="text-sm text-white" />
                  </div>
                  <p className="px-3 text-md">Lorem Ips incorrectly called</p>
                </div>
                <div className="m-3 flex justify-start items-center">
                  <div className="flex items-center justify-center rounded-full w-6 h-6 bg-yellow">
                    <SiTicktick className="text-sm text-white" />
                  </div>
                  <p className="px-3 text-md">Lorem Ips incorrectly called</p>
                </div>
                <div className="m-3 flex justify-start items-center">
                  <div className="flex items-center justify-center rounded-full w-6 h-6 bg-yellow">
                    <SiTicktick className="text-sm text-white" />
                  </div>
                  <p className="px-3 text-md">Lorem Ips incorrectly called</p>
                </div>
                <div className="m-3 flex justify-start items-center">
                  <div className="flex items-center justify-center rounded-full w-6 h-6 bg-yellow">
                    <SiTicktick className="text-sm text-white" />
                  </div>
                  <p className="px-3 text-md">Lorem Ips incorrectly called</p>
                </div>
                <div className="m-3 flex justify-start items-center">
                  <div className="flex items-center justify-center rounded-full w-6 h-6 bg-yellow">
                    <SiTicktick className="text-sm text-white" />
                  </div>
                  <p className="px-3 text-md">Lorem Ips incorrectly called</p>
                </div>
                <div className="m-3 flex justify-start items-center">
                  <div className="flex items-center justify-center rounded-full w-6 h-6 bg-yellow">
                    <SiTicktick className="text-sm text-white" />
                  </div>
                  <p className="px-3 text-md">Lorem Ips incorrectly called</p>
                </div>
              </div>
              <div className="m-5">
                <div className="px-3 text-md">
                  <div className="p-5 mx-auto">
                    <button
                      className="flex items-center drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]
                    object-cover justify-center w-[300px] border px-3 py-1 hover:bg-bgGreen hover:text-white bg-yellow rounded-2xl "
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
