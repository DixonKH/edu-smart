import React from "react";
import { FaBook } from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";

type Props = {};

const MainPage = (props: Props) => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="p-5 w-1/2">
          <div className="flex justify-start items-center gap-4">
            <div className="flex items-center justify-center rounded-full w-10 h-10 bg-bgGreen">
              <FaBook className="text-xl text-white" />
            </div>
            <p className="text-2xl">The best educational platform in Uzbekistan.</p>
          </div>
          <p className="text-4xl p-5"> 
            <span className="text-bgGreen">Professional</span> Affordable <br/>Education Provider
          </p>
          <p className="text-gray-600 p-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
            quam et sapien sed magna placerat. Donec vel neque et nunc gravida
            ultricies. Vivamus sed diam non
          </p>
          <button className="flex items-center justify-between border- rounded-2xl ">
            Explore more
            <IoIosArrowRoundForward />
          </button>
          <button></button>
        </div>
        <div className="p-5 w-1/2">

          a.ksjdnkj
        </div>
      </div>
    </div>
  );
};

export default MainPage;
