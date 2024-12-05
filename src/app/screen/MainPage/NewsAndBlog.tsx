import React from "react";
import { FaStar } from "react-icons/fa6";
import Teaching from "/public/images/Teaching.jpg";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router";
import Line from "./Line";

type Props = {};

const NewsAndBlog = (props: Props) => {
  return (
    <div>
      <div className="container">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex justify-start items-center gap-4 pt-8 p-6">
              <p className="text-3xl text-black">- News & Blog -</p>
            </div>
            <p className="text-4xl  p-3 pl-10">
              Our Latest
              <br />
              <span className="text-green1">News & Blog </span>
            </p>
          </div>
          <div className="p-5">
            <button
              className="flex items-center justify-between border drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]
                    object-cover px-3 py-1 hover:bg-bgGreen hover:text-white bg-yellow rounded-2xl "
            >
              View all Classes
              <IoIosArrowRoundForward />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-3">
          <div className="m-5">
            <div className="realtive  flex items-end justify-center">
              <img
                src={Teaching}
                alt="VideContent"
                className="border-black rounded-xl"
              />
              <div className="absolute   gap-2">
                <div className="flex items-center  justify-between">
                  <div className="gap-2   p-1 text-white  ">
                    <p className="text-sm  border px-1 rounded-xl">
                      House Cleaning
                    </p>
                  </div>
                  <div className="gap-2  p-1 text-white  ">
                    <p className="text-sm border px-1 rounded-xl">
                      Kitchen Cleaning
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-5">
              <p className="text-xl bold mx-auto  text-center">Final Result</p>
              <p className="text-md bold mx-auto m-3 text-center">
                Lorem Ipsum is Lorem Ipsum is simply dummy text of the printing
                and typesetting industry.
              </p>
            </div>
            <div className="flex justify-center">
              <div
                className=" font-nunito drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]
                    object-cover px-3 "
              >
                <Link
                  className="hover:border-green1 border-black border-b-2 hover:text-green1"
                  to=""
                >
                  {" "}
                  Read More...
                </Link>
              </div>
            </div>
          </div>
          <div className="m-5">
            <div className="realtive   flex items-end justify-center">
              <img
                src={Teaching}
                alt="VideContent"
                className="border-black rounded-xl"
              />
              <div className="absolute   gap-2">
                <div className="flex items-center  justify-between">
                  <div className="gap-2   p-1 text-white  ">
                    <p className="text-sm  border px-1 rounded-xl">
                      House Cleaning
                    </p>
                  </div>
                  <div className="gap-2  p-1 text-white  ">
                    <p className="text-sm border px-1 rounded-xl">
                      Kitchen Cleaning
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-5">
              <p className="text-xl bold mx-auto  text-center">Final Result</p>
              <p className="text-md bold mx-auto m-3 text-center">
                Lorem Ipsum is Lorem Ipsum is simply dummy text of the printing
                and typesetting industry.
              </p>
            </div>
            <div className="flex justify-center">
              <div
                className=" font-nunito drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]
                    object-cover px-3 "
              >
                <Link
                  className="hover:border-green1 border-black border-b-2 hover:text-green1"
                  to=""
                >
                  {" "}
                  Read More...
                </Link>
              </div>
            </div>
          </div>
          <div className="m-5">
            <div className="realtive  flex items-end justify-center">
              <img
                src={Teaching}
                alt="VideContent"
                className="border-black rounded-xl"
              />
              <div className="absolute   gap-2">
                <div className="flex items-center  justify-between">
                  <div className="gap-2   p-1 text-white  ">
                    <p className="text-sm  border px-1 rounded-xl">
                      House Cleaning
                    </p>
                  </div>
                  <div className="gap-2  p-1 text-white  ">
                    <p className="text-sm border px-1 rounded-xl">
                      Kitchen Cleaning
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-5">
              <p className="text-xl bold mx-auto  text-center">Final Result</p>
              <p className="text-md bold mx-auto m-3 text-center">
                Lorem Ipsum is Lorem Ipsum is simply dummy text of the printing
                and typesetting industry.
              </p>
            </div>
            <div className="flex justify-center">
              <div
                className=" font-nunito drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]
                    object-cover px-3 "
              >
                <Link
                  className="hover:border-green1 border-black border-b-2 hover:text-green1"
                  to=""
                >
                  {" "}
                  Read More...
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Line />
    </div>
  );
};

export default NewsAndBlog;
