import React from "react";

type Props = {};

const AddLesson = (props: Props) => {
  return (
    <div>
      <div>
        <div>
          <form>
            <div
              data-aos="fade-up"
              className="lg:container md:px-10 sm:px-5 px-1 shadow-xl border rounded-xl grid sm:grid-cols-2  border-green my-1 sm:my-2 gap-2 sm:gap-3 p-1 justify-around"
            >
              <div className="p-1 ">
                <label className="text-xs sm:text-xl">Lesson</label>
                <input
                  type="text"
                  placeholder="Name of Lesson"
                  className="sm:w-full w-[100%] text-xs sm:text-xl rounded-sm border border-gray-300
                        focus:outline-none focus:border-1 focus:border-green"
                />
              </div>
              <div className="p-1">
                <label className="text-xs sm:text-xl">
                  Description
                </label>
                <input
                  type="text"
                  placeholder="Description of Lesson"
                  className="sm:w-full w-[100%] text-xs sm:text-xl rounded-sm border border-gray-300
                        focus:outline-none focus:border-1 focus:border-green"
                />
              </div>
              <div className="p-1">
                <label className="text-xs sm:text-xl">Category</label>
                <select
                  className="sm:w-full w-[100%] text-xs sm:text-xl rounded-sm border border-gray-300
                        focus:outline-none focus:border-1 focus:border-green"
                >
                  <option value="elementary">Elementary</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
                </select>
              </div>
              <div className="p-1">
                <label className="text-xs sm:text-xl">File</label>
                <input
                  type="file"
                  placeholder="Lesson File"
                  className="sm:w-full w-[100%] text-xs sm:text-xl rounded-sm border border-gray-300
                        focus:outline-none focus:border-1 focus:border-green"
                />
              </div>
              <div className="flex items-center justify-center gap-5">
                <label className="text-xs sm:text-xl">Availibility</label>
                <input
                  role="switch"
                  id="isAvailable"
                  className="sm:w-5 sm:h-5 w-4 h-4"
                  type="checkbox"
                ></input>
              </div>
              <div className="mx-auto text-center flex items-center justify-center  lg:p-3 md:p-2 text-xs md:text-base  ">
                <button className=" w-[200px] border border-green px-3 py-1 flex items-center justify-evenly hover:italic hover:bg-green hover:text-white  rounded-sm">
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
