import React from "react";
import { BsChatRightQuoteFill } from "react-icons/bs";
import { SlLike } from "react-icons/sl";
import Teaching from "/public/images/Teaching.jpg";
import { FaEye } from "react-icons/fa6";

type Props = {};

const FreeBoard = (props: Props) => {
  return (
    <div>
      <div className="m-2 grid base:grid-cols-1  lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
        <div className="flex justify-center items-center">
          <div className="border m-2 border-green1 bg-bgGreen rounded-lg ">
            <div className="relative p-3   flex items-end justify-center">
              <img
                src={Teaching}
                alt="VideContent"
                className="border-black hover:bg-background  drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]
                    object-cover w-[500px]  rounded-3xl"
              />
              <div className="absolute  w-full px-5">
                <div className=" bg-gray-100 border w-full rounded-xl  flex items-center justify-between   p-1 text-black ">
                  <div>
                    <p className="lg:p-1 md:p-0 p-1 text-xs md:text-sm  px-1 italic">
                      Johnny Wilson
                    </p>
                  </div>
                  <div className="flex  justify-between items-center gap-1">
                    <div className="w-10 h-8">
                      <div className="absolute border rounded-full ">
                        <p className="text-[8px] text-center  border  px-2 rounded-full">
                          1
                        </p>
                      </div>
                      <div
                        className="flex justify-center pt-3 drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]
                        object-cover items-end"
                      >
                        <FaEye className="text-xl relative bg-green1 border-white text-white border rounded-full" />
                      </div>
                    </div>

                    <div className="w-10 h-8">
                      <div className="absolute border rounded-full ">
                        <p className="text-[8px] text-center  border  px-2 rounded-full">
                          1
                        </p>
                      </div>
                      <div
                        className="flex justify-center pt-3 drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]
                    object-cover items-end"
                      >
                        <SlLike className="text-xl relative bg-green1 border-white text-white border rounded-full" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex">
              <div>
                <BsChatRightQuoteFill className="m-1 text-xl" />
              </div>
              <p className="p-2 text-xs md:text-sm lg:text-sm ">
                Perfectly teaching method
              </p>
              <p className="lg:p-2 border-l-2 border-black p-2 text-[10px]  text-center italic">
                12.01.25
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="border m-2 border-green1 bg-bgGreen rounded-lg ">
            <div className="relative p-3   flex items-end justify-center">
              <img
                src={Teaching}
                alt="VideContent"
                className="border-black hover:bg-background  drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]
                    object-cover w-[500px]  rounded-3xl"
              />
              <div className="absolute  w-full px-5">
                <div className=" bg-gray-100 border w-full rounded-xl  flex items-center justify-between   p-1 text-black ">
                  <div>
                    <p className="lg:p-1 md:p-0 p-1 text-xs md:text-sm  px-1 italic">
                      Johnny Wilson
                    </p>
                  </div>
                  <div className="flex  justify-between items-center gap-1">
                    <div className="w-10 h-8">
                      <div className="absolute border rounded-full ">
                        <p className="text-[8px] text-center  border  px-2 rounded-full">
                          1
                        </p>
                      </div>
                      <div
                        className="flex justify-center pt-3 drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]
                        object-cover items-end"
                      >
                        <FaEye className="text-xl relative bg-green1 border-white text-white border rounded-full" />
                      </div>
                    </div>

                    <div className="w-10 h-8">
                      <div className="absolute border rounded-full ">
                        <p className="text-[8px] text-center  border  px-2 rounded-full">
                          1
                        </p>
                      </div>
                      <div
                        className="flex justify-center pt-3 drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]
                    object-cover items-end"
                      >
                        <SlLike className="text-xl relative bg-green1 border-white text-white border rounded-full" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex">
              <div>
                <BsChatRightQuoteFill className="m-1 text-xl" />
              </div>
              <p className="p-2 text-xs md:text-sm lg:text-sm ">
                Perfectly teaching method
              </p>
              <p className="lg:p-2 border-l-2 border-black p-2 text-[10px]  text-center italic">
                12.01.25
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="border m-2 border-green1 bg-bgGreen rounded-lg ">
            <div className="relative p-3   flex items-end justify-center">
              <img
                src={Teaching}
                alt="VideContent"
                className="border-black hover:bg-background  drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]
                    object-cover w-[500px]  rounded-3xl"
              />
              <div className="absolute  w-full px-5">
                <div className=" bg-gray-100 border w-full rounded-xl  flex items-center justify-between   p-1 text-black ">
                  <div>
                    <p className="lg:p-1 md:p-0 p-1 text-xs md:text-sm  px-1 italic">
                      Johnny Wilson
                    </p>
                  </div>
                  <div className="flex  justify-between items-center gap-1">
                    <div className="w-10 h-8">
                      <div className="absolute border rounded-full ">
                        <p className="text-[8px] text-center  border  px-2 rounded-full">
                          1
                        </p>
                      </div>
                      <div
                        className="flex justify-center pt-3 drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]
                    object-cover items-end"
                      >
                        <FaEye className="text-xl relative bg-green1 border-white text-white border rounded-full" />
                      </div>
                    </div>

                    <div className="w-10 h-8">
                      <div className="absolute border rounded-full ">
                        <p className="text-[8px] text-center  border  px-2 rounded-full">
                          1
                        </p>
                      </div>
                      <div
                        className="flex justify-center pt-3 drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]
                    object-cover items-end"
                      >
                        <SlLike className="text-xl relative bg-green1 border-white text-white border rounded-full" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex">
              <div>
                <BsChatRightQuoteFill className="m-1 text-xl" />
              </div>
              <p className="p-2 text-xs md:text-sm lg:text-sm ">
                Perfectly teaching method
              </p>
              <p className="lg:p-2 border-l-2 border-black p-2 text-[10px]  text-center italic">
                12.01.25
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="border m-2 border-green1 bg-bgGreen rounded-lg ">
            <div className="relative p-3   flex items-end justify-center">
              <img
                src={Teaching}
                alt="VideContent"
                className="border-black hover:bg-background  drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]
                    object-cover w-[500px]  rounded-3xl"
              />
              <div className="absolute  w-full px-5">
                <div className=" bg-gray-100 border w-full rounded-xl  flex items-center justify-between   p-1 text-black ">
                  <div>
                    <p className="lg:p-1 md:p-0 p-1 text-xs md:text-sm  px-1 italic">
                      Johnny Wilson
                    </p>
                  </div>
                  <div className="flex  justify-between items-center gap-1">
                    <div className="w-10 h-8">
                      <div className="absolute border rounded-full ">
                        <p className="text-[8px] text-center  border  px-2 rounded-full">
                          1
                        </p>
                      </div>
                      <div
                        className="flex justify-center pt-3 drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]
                    object-cover items-end"
                      >
                        <FaEye className="text-xl relative bg-green1 border-white text-white border rounded-full" />
                      </div>
                    </div>

                    <div className="w-10 h-8">
                      <div className="absolute border rounded-full ">
                        <p className="text-[8px] text-center  border  px-2 rounded-full">
                          1
                        </p>
                      </div>
                      <div
                        className="flex justify-center pt-3 drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]
                    object-cover items-end"
                      >
                        <SlLike className="text-xl relative bg-green1 border-white text-white border rounded-full" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex">
              <div>
                <BsChatRightQuoteFill className="m-1 text-xl" />
              </div>
              <p className="p-2 text-xs md:text-sm lg:text-sm ">
                Perfectly teaching method
              </p>
              <p className="lg:p-2 border-l-2 border-black p-2 text-[10px]  text-center italic">
                12.01.25
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="border m-2 border-green1 bg-bgGreen rounded-lg ">
            <div className="relative p-3   flex items-end justify-center">
              <img
                src={Teaching}
                alt="VideContent"
                className="border-black hover:bg-background  drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]
                    object-cover w-[500px]  rounded-3xl"
              />
              <div className="absolute  w-full px-5">
                <div className=" bg-gray-100 border w-full rounded-xl  flex items-center justify-between   p-1 text-black ">
                  <div>
                    <p className="lg:p-1 md:p-0 p-1 text-xs md:text-sm  px-1 italic">
                      Johnny Wilson
                    </p>
                  </div>
                  <div className="flex  justify-between items-center gap-1">
                    <div className="w-10 h-8">
                      <div className="absolute border rounded-full ">
                        <p className="text-[8px] text-center  border px-2 rounded-full">
                          1
                        </p>
                      </div>
                      <div
                        className="flex justify-center pt-3 drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]
                    object-cover items-end"
                      >
                        <FaEye className="text-xl relative bg-green1 border-white text-white border rounded-full" />
                      </div>
                    </div>

                    <div className="w-10 h-8">
                      <div className="absolute border rounded-full ">
                        <p className="text-[8px] text-center  border  px-2 rounded-full">
                          1
                        </p>
                      </div>
                      <div
                        className="flex justify-center pt-3 drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]
                    object-cover items-end"
                      >
                        <SlLike className="text-xl relative bg-green1 border-white text-white border rounded-full" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex">
              <div>
                <BsChatRightQuoteFill className="m-1 text-xl" />
              </div>
              <p className="p-2 text-xs md:text-sm lg:text-sm ">
                Perfectly teaching method
              </p>
              <p className="lg:p-2 border-l-2 border-black p-2 text-[10px]  text-center italic">
                12.01.25
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreeBoard;