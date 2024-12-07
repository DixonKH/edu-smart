import React from "react";
import { IoSend } from "react-icons/io5";
import { FaEnvelope } from "react-icons/fa";

type Props = {};

const OurNewsletter = (props: Props) => {
  return (
    <div className="lg:container md:px-10 sm:px-5 px-1">
      <div>
        <div>
          <div className="flex justify-center items-center gap-4 pt-8 p-6">
            <p className="text-3xl text-black">- Faqs -</p>
          </div>
          <div className="flex items-center justify-center">
            <p className=" text-4xl   p-5  pl-10">
              Stay Update with
              <span className="text-green1">
                {" "}
                Our Courses <br /> Tips & Offers!{" "}
              </span>
              Subscribe Now!
            </p>
          </div>
        </div>
        <div className="flex justify-center gap-5 items-center m-10 p-3 ">
          <FaEnvelope
            className="text-2xl drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]
                    object-cover text-black w-[100px] h-[50px]  rounded-full bg-green1"
          />
          <input
            className="rounded-full drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]
                    object-cover  w-[350px] h-[50px] border border-black  bg-white"
            type="text"
            placeholder=" Enter Email address"
          ></input>
          <IoSend
            className="text-2xl drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]
                    object-cover text-black w-[100px] h-[50px]  rounded-full hover:bg-green1 bg-yellow"
          />
        </div>
      </div>
    </div>
  );
};

export default OurNewsletter;
