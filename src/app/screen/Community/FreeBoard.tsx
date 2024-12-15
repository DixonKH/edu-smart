import React, { useState } from "react";
import { BsChatRightQuoteFill } from "react-icons/bs";
import { SlLike } from "react-icons/sl";
import Teaching from "/public/images/Teaching.jpg";
import { FaEye } from "react-icons/fa6";
import Community from "./Community.json";

type Props = {
  showComponent: Number;
  setShowComponent: (title: number) => void;
};

const FreeBoard = ({ showComponent, setShowComponent }: Props) => {
  function selectedId(id: number) {
    setShowComponent(id);
  }

  return (
    <div>
      <ul className="m-2 grid base:grid-cols-1  lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
        {Community.map((item, index) => (
          <li
            onClick={() => selectedId(item.id)}
            key={index}
            className="flex justify-center items-center"
          >
            <div className="border m-2 border-green1 bg-green rounded-lg ">
              <div className="relative p-3   flex items-end justify-center">
                <img
                  src={item.image}
                  alt="VideContent"
                  className="border-black hover:bg-background  drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]
                    object-cover w-[300px]  rounded-xl"
                />
                <div className="absolute  w-full px-5">
                  <div className=" bg-gray-100 border w-full   flex items-center justify-between   p-1 text-black ">
                    <div>
                      <p className="lg:p-1 md:p-0 p-1 text-xs md:text-sm  px-1 italic">
                        {item.name}
                      </p>
                    </div>
                    <div className="flex  justify-between items-center gap-1">
                      <div className="w-10 h-8">
                        <div className="absolute border rounded-full ">
                          <p className="text-[8px] text-center  border  px-2 rounded-full">
                            {item.seen}
                          </p>
                        </div>
                        <div
                          className="flex justify-center pt-3 drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]
                        object-cover items-end"
                        >
                          <FaEye className="text-xl relative bg-green border-white text-white border rounded-full" />
                        </div>
                      </div>

                      <div className="w-10 h-8">
                        <div className="absolute border rounded-full ">
                          <p className="text-[8px] text-center  border  px-2 rounded-full">
                            {item.likes}
                          </p>
                        </div>
                        <div
                          className="flex justify-center pt-3 drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]
                    object-cover items-end"
                        >
                          <SlLike className="text-xl relative bg-green border-white text-white border rounded-full" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex">
                <div>
                  <BsChatRightQuoteFill className="m-1 text-yellow text-xl" />
                </div>
                <p className="p-2 text-xs text-white md:text-sm lg:text-sm ">
                  {item.comments}<button className="px-2 text-black underline">Read more...</button>
                </p>
                <p className="lg:p-2 border-l-2 text-white border-black p-2 text-[10px]  text-center italic">
                  {item.date}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FreeBoard;
