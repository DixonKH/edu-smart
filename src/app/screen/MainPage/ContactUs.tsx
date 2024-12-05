import React from "react";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook, FaPinterest, FaStar, FaTwitter, FaYoutube } from "react-icons/fa6";
import { IoIosArrowRoundForward } from "react-icons/io";
import Line from "./Line";

type Props = {};

function ContactUs({}: Props) {
  return (
    <div>
      <div className="grid container grid-cols-2">
        <div>
          <div className="">
            <div className=" gap-4 pt-8 p-6">
              <p className="text-2xl text-black">- Contact Us -</p>
            </div>
            <div className="">
              <p className=" text-3xl   p-3 pl-10">
                Get your
                <span className="text-green1">Free Quote today </span>
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 p-5 gap-5">
            <div>
              <div className="p-3">
                <p>Your name*</p>
                <input
                  type="text"
                  className="border px-3 py-1 rounded-2xl w-full"
                  placeholder="Ex.John Doe"
                />
              </div>
              <div className="p-3">
                <p>Phone*</p>
                <input
                  type="text"
                  className="border px-3 py-1 rounded-2xl w-full"
                  placeholder="+82101234567"
                />
              </div>
            </div>
            <div>
              <div className="p-3">
                <p>Email*</p>
                <input
                  type="text"
                  className="border px-3 py-1 rounded-2xl w-full"
                  placeholder="example@example.com"
                />
              </div>
              <div className="p-3">
                <p>Service*</p>
                <select className="border px-3 py-1 rounded-2xl w-full">
                  <option value="1">Service 1</option>
                  <option value="2">Service 2</option>
                  <option value="3">Service 3</option>
                </select>
              </div>
            </div>
          </div>
          <div className="p-5">
            <p>Your Message*</p>
            <input
              type="text"
              className="border px-3 py-1 h-[50px] rounded-2xl w-full"
            />
          </div>
          <div>
            <div className="p-5 mx-auto">
              <button className="flex items-center drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]
                    object-cover justify-between border px-3 py-1 hover:bg-bgGreen hover:text-white bg-yellow rounded-2xl ">
                View all Services
                <IoIosArrowRoundForward />
              </button>
            </div>
          </div>
        </div>
        <div className="bg-green1 border rounded-3xl text-white">
          <div className="m-8">
            <p className="p-5 text-xl">Address</p>
            <p className="px-5 text-md">4517, Washington Ave. <br/>Manchester, Kentucky</p>
          </div>
          <div className="m-8">
            <p className="p-5 text-xl">Contact</p>
            <p className="px-5 text-md">Phone: +82101234567 <br/>Email: example@example.com</p>
          </div>
          <div className="m-8">
            <p className="p-5 text-xl">Open Time</p>
            <p className="px-5 text-md">
              Monday-Friday: 12:00 - 18:00 <br/> Saturday: 10:00 - 16:00 Sunday:
              Closed
            </p>
          </div>
          <div className="m-8">
            <p className="p-5 text-xl">Stay Connected</p>
            <div className="px-5 text-md">
              <div className="flex justify-start gap-8 items-center">
                <div className="flex items-center justify-center drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]
                    object-cover rounded-full w-10 h-10 bg-yellow">
                  <FaFacebook className="text-xl text-black" />
                </div>
                <div className="flex items-center justify-center drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]
                    object-cover rounded-full w-10 h-10 bg-yellow">
                  <FaTwitter className="text-xl text-black" />
                </div>
                <div className="flex items-center justify-center drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]
                    object-cover rounded-full w-10 h-10 bg-yellow">
                  <FaPinterest className="text-xl text-black" />
                </div>
                <div className="flex items-center justify-center drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]
                    object-cover rounded-full w-10 h-10 bg-yellow">
                  <FaInstagramSquare className="text-xl text-black" />
                </div>
                <div className="flex items-center justify-center drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]
                    object-cover rounded-full w-10 h-10 bg-yellow">
                  <FaYoutube className="text-xl text-black" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Line/>
    </div>
  );
}

export default ContactUs;
