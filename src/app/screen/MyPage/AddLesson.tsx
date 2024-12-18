import React from "react";
import AddFiles from "./AddFiles";
import { IoIosArrowRoundForward } from "react-icons/io";

type Props = {};

const AddLesson = (props: Props) => {
  return (
    <div>
      <div>
        <div>
          <form>
            <div
              data-aos="fade-up"
              className="lg:container md:px-10 sm:px-5 px-1 shadow-xl border rounded-xl   border-green my-1 sm:my-2 gap-2 sm:gap-3 p-1 justify-around"
            >
              <div className="flex justify-center items-center">
                <h1 className="text-lg italic underline">
                  Here add your Lesson*
                </h1>
              </div>
              <div className="w-full flex md:flex-row flex-col justify-between ">
                <div className="lg:p-3 p-1 w-full">
                  <p className="">Teacher name*</p>
                  <input
                    type="text"
                    className="border px-3 py-1 rounded-2xl w-full p-2 lg:h-14  h-8 text-lg outline-none"
                    placeholder="Ex.John Doe"
                  />
                </div>
                <div className="lg:p-3 p-1 w-full">
                  <p>Phone*</p>
                  <input
                    type="number"
                    className="border px-3 py-1 rounded-2xl w-full p-2 lg:h-14  h-8 text-lg outline-none"
                    placeholder="+82101234567"
                  />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="lg:p-3 p-1 w-[50%]">
                  <p>Email*</p>
                  <input
                    type="email"
                    className="border px-3 py-1 rounded-2xl w-full outline-none p-2 lg:h-14  h-8 text-lg"
                    placeholder="Example@example.com"
                  />
                </div>
                <div className="w-[50%]">
                  <label className="lg:p-3 p-1">Category</label>
                  <div className="flex justify-center items-center">
                    <select className="border  px-3 py-1 rounded-2xl lg:h-14  h-8 w-full  p-2 text-lg outline-none ">
                      <option value="2">Beginner</option>
                      <option value="3">Elementry</option>
                      <option value="4">Intermediate</option>
                      <option value="5">Advanced</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="lg:p-3 p-1">
                <p>Description*</p>
                <textarea className="border px-3 py-1 rounded-2xl w-full outline-none p-2 h-28 text-lg" />
              </div>
              <div className="p-1">
                <label className="text-xs md:text-base">File</label>
                <AddFiles />
              </div>
              <div className="flex items-center justify-center gap-5 m-1">
                <label className="text-xs md:text-base">Availibility</label>
                <input
                  role="switch"
                  id="isAvailable"
                  className="sm:w-5 sm:h-5 w-4 h-4"
                  type="checkbox"
                ></input>
              </div>
              <div className="mx-auto text-center flex items-center justify-center  lg:p-3 md:p-2 text-xs md:text-base  ">
                <button className="flex items-center justify-between shadow-xl border lg:py-2 lg:px-3 py-1 px-2 text-lg hover:bg-bgGreen hover:text-white bg-yellow rounded-3xl">
                  + Add Lesson
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddLesson;
