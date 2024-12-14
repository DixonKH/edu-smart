import React from "react";
import { FaInstagramSquare } from "react-icons/fa";
import {
  FaFacebook,
  FaPinterest,
  FaStar,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { IoIosArrowRoundForward } from "react-icons/io";
import Line from "./Line";

type Props = {};

function ContactUs({}: Props) {
  return (
    <div>
      <div className="grid my-20 lg:container md:px-10 sm:px-5 px-1 md:grid-cols-2 gap-5">
        <div className="w-full flex flex-col">
          <div className="text-center md:text-left">
            <div className=" flex justify-start items-center pt-1  md:pt-5 lg:pb-6">
              <p className="lg:text-2xl md:text-xl text-base text-center md:text-left w-full sm:text-xl text-black">
                - Contact Us -
              </p>
            </div>
            <div className="g:flex items-center justify-cente">
              <p className=" lg:text-4xl md:text-3xl sm:text-2xl text-xl lg:p-5 md:p-2 p-1 font-medium">
                Get your
                <span className="text-green1">Free Quote today </span>
              </p>
            </div>
          </div>
          <div className="w-full flex md:flex-row flex-col justify-between ">
            <div className="lg:p-3 p-1 w-full">
              <p className="">Your name*</p>
              <input
                type="text"
                className="border px-3 py-1 rounded-2xl w-full p-2 h-14 text-lg outline-none"
                placeholder="Ex.John Doe"
              />
            </div>
            <div className="lg:p-3 p-1 w-full">
              <p>Phone*</p>
              <input
                type="text"
                className="border px-3 py-1 rounded-2xl w-full p-2 h-14 text-lg outline-none"
                placeholder="+82101234567"
              />
            </div>
          </div>
          <div className="lg:p-3 p-1">
            <p>Email*</p>
            <input
              type="text"
              className="border px-3 py-1 rounded-2xl w-full outline-none p-2 h-14 text-lg"
              placeholder="Example@example.com"
            />
          </div>
          <div className="lg:p-3 p-1">
            <p>Your Message*</p>
            <textarea className="border px-3 py-1 rounded-2xl w-full outline-none p-2 h-48 text-lg" />
          </div>
          <div className="  flex justify-start lg:p-5 md:p-2 p-1 text-xs md:text-base  items-center lg:gap-5 md:gap-2 sm:gap-2 gap-1">
            <button
              className="flex items-center justify-between shadow-xl border p-2 px-3 text-lg hover:bg-bgGreen hover:text-white bg-yellow rounded-3xl"
            >
              View all Services
              <IoIosArrowRoundForward />
            </button>
          </div>
        </div>
        <div className="bg-green1 border rounded-3xl text-white text-lg">
          <div className="lg:m-8">
            <p className="p-5 text-2xl">Address</p>
            <p className="px-5 text-md text-slate-300">
              4517, Washington Ave. <br />
              Manchester, Kentucky
            </p>
          </div>
          <div className="lg:m-8">
            <p className="p-5 text-2xl">Contact</p>
            <p className="px-5 text-md text-slate-300">
              Phone: +82101234567 <br />
              Email: example@example.com
            </p>
          </div>
          <div className="lg:m-8">
            <p className="p-5 text-2xl">Open Time</p>
            <p className="px-5 text-md text-slate-300">
              Monday-Friday: 12:00 - 18:00 <br /> Saturday: 10:00 - 16:00
              Sunday: Closed
            </p>
          </div>
          <div className="lg:m-8">
            <p className="lg:p-5 p-3 text-2xl font-medium">Stay Connected</p>
            <div className="p-5 text-md">
              <div className="flex  justify-center lg:gap-8 md:gap-5 sm:gap-3 gap-3 items-center">
                <div
                  className="flex items-center justify-center drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]
                    object-cover rounded-full w-10 h-10 bg-yellow"
                >
                  <FaFacebook className="text-xl text-black" />
                </div>
                <div
                  className="flex items-center justify-center drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]
                    object-cover rounded-full w-10 h-10 bg-yellow"
                >
                  <FaTwitter className="text-xl text-black" />
                </div>
                <div
                  className="flex items-center justify-center drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]
                    object-cover rounded-full w-10 h-10 bg-yellow"
                >
                  <FaPinterest className="text-xl text-black" />
                </div>
                <div
                  className="flex items-center justify-center drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]
                    object-cover rounded-full w-10 h-10 bg-yellow"
                >
                  <FaInstagramSquare className="text-xl text-black" />
                </div>
                <div
                  className="flex items-center justify-center drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]
                    object-cover rounded-full w-10 h-10 bg-yellow"
                >
                  <FaYoutube className="text-xl text-black" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Line />
    </div>
  );
}

export default ContactUs;
