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
              <div className="p-1 ">
                <label className="text-xs md:text-base">Lesson</label>
                <input
                  type="text"
                  placeholder="Name of Lesson"
                  className="sm:w-full w-[100%] text-xs md:text-base rounded-sm border border-gray-300
                        focus:outline-none focus:border-1 focus:border-green"
                />
              </div>
              <div className="flex  items-center">
                <div className="p-1 w-[50%]">
                  <label className="text-xs md:text-base">Description</label>
                  <input
                    type="text"
                    placeholder="Description of Lesson"
                    className="sm:w-full w-[100%] text-xs md:text-base rounded-sm border border-gray-300
                        focus:outline-none focus:border-1 focus:border-green"
                  />
                </div>
                <div className="p-1 w-[50%]">
                  <label className="text-xs md:text-base">Category</label>
                  <select
                    className="sm:w-full w-[100%] text-xs md:text-base rounded-sm border border-gray-300
                        focus:outline-none focus:border-1 focus:border-green"
                  >
                    <option value="beginner">Beginner</option>
                    <option value="elementary">Elementary</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                  </select>
                </div>
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
