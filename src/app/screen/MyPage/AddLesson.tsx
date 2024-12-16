import React from "react";
import AddFiles from "./AddFiles";


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
                    className="border px-3 py-1 rounded-2xl w-full p-2 h-14 text-lg outline-none"
                    placeholder="Ex.John Doe"
                  />
                </div>
                <div className="lg:p-3 p-1 w-full">
                  <p>Phone*</p>
                  <input
                    type="number"
                    className="border px-3 py-1 rounded-2xl w-full p-2 h-14 text-lg outline-none"
                    placeholder="+82101234567"
                  />
                </div>
              </div>
              <div className="lg:p-3 p-1">
                <p>Email*</p>
                <input
                  type="email"
                  className="border px-3 py-1 rounded-2xl w-full outline-none p-2 h-14 text-lg"
                  placeholder="Example@example.com"
                />
              </div>
              <label className="lg:p-3 p-1">Category</label>
              <div className="sm:hidden lg:flex fex-row gap-4 hidden">
                <select className="border  px-3 py-1 rounded-2xl    h-14 w-full  p-2 text-lg outline-none ">
                  <option value="2">Beginner</option>
                  <option value="3">Elementry</option>
                  <option value="4">Intermediate</option>
                  <option value="5">Advanced</option>
                </select>
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
                <button className=" w-[200px] sm:w-[150px] border border-green px-3 py-1 flex items-center justify-evenly hover:italic hover:bg-green hover:text-white  rounded-sm">
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
