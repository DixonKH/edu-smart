import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import Teaching from "/public/images/Teaching.jpg";
import { FaStar } from "react-icons/fa6";

type Props = {};

const OurLatestAhievement = (props: Props) => {
  return (
    <div>
      <div>
        <div className="flex items-center justify-between">
          <div>
            <div className="flex justify-start items-center gap-4 pt-8 p-6">
              <p className="text-3xl text-black">- Our Latest Achievements -</p>
            </div>
            <p className="text-4xl  p-3 pl-10">
              <span className="text-green1">Explore our Portfolio </span>
              <br />
              of featured Classes
            </p>
          </div>
          <div className="p-5 mt-[200px]">
            <button className="flex items-center justify-between border drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]
                    object-cover px-3 py-1 hover:bg-bgGreen hover:text-white bg-yellow rounded-2xl ">
              View all Classes
              <IoIosArrowRoundForward />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="realtive p-5   flex items-end justify-center">
            <img
              src={Teaching}
              alt="VideContent"
              className="border-black hover:bg-background  drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]
                    object-cover w-[400px] rounded-3xl"
            />
            <div className="absolute  gap-2">
              <div className="gap-10  border rounded-xl flex items-center justify-between  bg-white p-1 text-black  m-2 ">
                <div>
                  <p className="text-lg  px-1 ">- Office Cleaning</p>
                  <p className="text-xl">Software Company Office</p>
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
              <div className="gap-10  border rounded-xl flex items-center justify-between  bg-white p-1 text-black  m-2 ">
                <div>
                  <p className="text-lg  px-1 ">- Office Cleaning</p>
                  <p className="text-xl">Software Company Office</p>
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
              <div className="gap-10  border rounded-xl flex items-center justify-between  bg-white p-1 text-black  m-2 ">
                <div>
                  <p className="text-lg  px-1 ">- Office Cleaning</p>
                  <p className="text-xl">Software Company Office</p>
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
              <div className="gap-10  border rounded-xl flex items-center justify-between  bg-white p-1 text-black  m-2 ">
                <div>
                  <p className="text-lg  px-1 ">- Office Cleaning</p>
                  <p className="text-xl">Software Company Office</p>
                </div>
                <div>
                  <IoIosArrowRoundForward className="text-4xl border-black border rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" gap-5 bg-green1 my-1 py-3 ">
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

export default OurLatestAhievement;
