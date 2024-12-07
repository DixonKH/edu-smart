import React from "react";
import { FaStar } from "react-icons/fa6";
import VideContent from "../../../public/images/videocontent.png";
import Person1 from "/public/images/person1.jpg";

type Props = {};

const OurTeam = (props: Props) => {
  return (
    <div>
      <div>
        <div className="lg:container md:mx-10 sm:mx-5 mx-1">
          <div className="flex justify-start items-center pt-1  md:pt-5 lg:pb-6">
            <p className="lg:text-2xl md:text-xl text-base sm:text-xl text-black">
              - Our Team -
            </p>
          </div>
          <div className="lg:flex items-center justify-centerr">
            <p className=" lg:text-4xl md:text-3xl sm:text-2xl text-xl lg:p-5 md:p-2 p-1">
              What our
              <span className="text-green1"> Clients Say</span>
            </p>
          </div>
        </div>
      </div>
      <div className="lg:container md:mx-10 sm:mx-5 mx-1">
        <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 grid-cols-1">
          <div
            className=" m-5 py-5  bg-background rounded-xl drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]
                    object-cover"
          >
            <div className=" ">
              <div className="mx-auto flex justify-center items-center">
                <div className=" ">
                  <div className="flex justify-end items-center gap-2 absolute px-1 z-40 bg-bgGreen   rounded-xl">
                    <div className="flex items-center justify-center rounded-full w-6 h-6 bg-yellow">
                      <FaStar className="text-sm text-white" />
                    </div>
                  </div>
                  <img
                    src={Person1}
                    alt="VideContent"
                    className="border-black sm:w-[130px] p-2 sm:h-[130px] w-[100px] md:w-[200px] base:w-[200px] md:h-[200px] lg:w-[130px] lg:h-[130px] base:h-[200px] h-[100px] rounded-sm drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]
                        object-cover"
                  />
                </div>
              </div>
            </div>
            <div className=" text-bold text-black">
              <div className="flex justify-center items-center">
                <p className="mx-10 text-xl py-3">--* Jenny Wilson *--</p>
              </div>

              <div className="flex justify-center items-center">
                <p className="mx-10 py-3">Lorem ipsum</p>
              </div>
            </div>
          </div>
          <div
            className=" m-5 py-5  bg-background rounded-xl drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]
                    object-cover"
          >
            <div className=" ">
              <div className="mx-auto flex justify-center items-center">
                <div className=" ">
                  <div className="flex justify-end items-center gap-2 absolute px-1 z-40 bg-bgGreen   rounded-xl">
                    <div className="flex items-center justify-center rounded-full w-6 h-6 bg-yellow">
                      <FaStar className="text-sm text-white" />
                    </div>
                  </div>
                  <img
                    src={Person1}
                    alt="VideContent"
                    className="border-black sm:w-[130px] p-2 sm:h-[130px] w-[100px] md:w-[200px] base:w-[200px] md:h-[200px] lg:w-[130px] lg:h-[130px] base:h-[200px] h-[100px] rounded-sm drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]
                        object-cover"
                  />
                </div>
              </div>
            </div>
            <div className=" text-bold text-black">
              <div className="flex justify-center items-center">
                <p className="mx-10 text-xl py-3">--* Jenny Wilson *--</p>
              </div>

              <div className="flex justify-center items-center">
                <p className="mx-10 py-3">Lorem ipsum</p>
              </div>
            </div>
          </div>
          <div>
            <div
              className=" m-5 py-5  bg-background rounded-xl drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]
                    object-cover"
            >
              <div className=" ">
                <div className="mx-auto flex justify-center items-center">
                  <div className=" ">
                    <div className="flex justify-end items-center gap-2 absolute px-1 z-40 bg-bgGreen   rounded-xl">
                      <div className="flex items-center justify-center rounded-full w-6 h-6 bg-yellow">
                        <FaStar className="text-sm text-white" />
                      </div>
                    </div>
                    <img
                      src={Person1}
                      alt="VideContent"
                      className="border-black sm:w-[130px] p-2 sm:h-[130px] w-[100px] md:w-[200px] base:w-[200px] md:h-[200px] lg:w-[130px] lg:h-[130px] base:h-[200px] h-[100px] rounded-sm drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]
                        object-cover"
                    />
                  </div>
                </div>
              </div>
              <div className=" text-bold text-black">
                <div className="flex justify-center items-center">
                  <p className="mx-10 text-xl py-3">--* Jenny Wilson *--</p>
                </div>

                <div className="flex justify-center items-center">
                  <p className="mx-10 py-3">Lorem ipsum</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
