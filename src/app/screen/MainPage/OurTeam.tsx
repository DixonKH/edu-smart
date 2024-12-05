import React from "react";
import { FaStar } from "react-icons/fa6";
import VideContent from "../../../public/images/videocontent.png";
import Person1 from "/public/images/person1.jpg";

type Props = {};

const OurTeam = (props: Props) => {
  return (
    <div>
      <div>
        <div className="container">
          <div className="flex justify-center items-center gap-4 pt-8 p-6">
            <p className="text-3xl text-black">- Our Team -</p>
          </div>
          <div className="flex items-center justify-center">
            <p className=" text-4xl   p-3 pl-10">
              Meet our
              <span className="text-green1"> Professional Team</span>
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="grid grid-cols-3">
          <div
            className=" m-5 py-5  bg-background rounded-xl drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]
                    object-cover"
          >
            <div className=" ">
              <div className="mx-auto">
                <div className="flex justify-end items-center gap-2 absolute px-1 z-40 bg-bgGreen ml-3 mt-10  rounded-xl">
                  <div className="flex items-center justify-center rounded-full w-6 h-6 bg-yellow">
                    <FaStar className="text-sm text-white" />
                  </div>
                </div>

                <div className="realtive mx-auto p-5   z-30">
                  <img
                    src={Person1}
                    alt="VideContent"
                    className="border-black rounded-2xl "
                  />
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
          <div
            className=" m-5 py-5  bg-background rounded-xl drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]
                    object-cover"
          >
            <div className=" ">
              <div className="mx-auto">
                <div className="flex justify-end items-center gap-2 absolute px-1 z-40 bg-bgGreen ml-3 mt-10  rounded-xl">
                  <div className="flex items-center justify-center rounded-full w-6 h-6 bg-yellow">
                    <FaStar className="text-sm text-white" />
                  </div>
                </div>

                <div className="realtive mx-auto p-5   z-30">
                  <img
                    src={Person1}
                    alt="VideContent"
                    className="border-black rounded-2xl "
                  />
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
          <div>
            <div
              className=" m-5 py-5  bg-background rounded-xl drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]
                    object-cover"
            >
              <div className=" ">
                <div className="mx-auto">
                  <div className="flex justify-end items-center gap-2 absolute px-1 z-40 bg-bgGreen ml-3 mt-10  rounded-xl">
                    <div className="flex items-center justify-center rounded-full w-6 h-6 bg-yellow">
                      <FaStar className="text-sm text-white" />
                    </div>
                  </div>

                  <div className="realtive mx-auto p-5   z-30">
                    <img
                      src={Person1}
                      alt="VideContent"
                      className="border-black rounded-2xl   "
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
