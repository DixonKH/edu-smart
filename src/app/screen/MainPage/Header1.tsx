import React from "react";
import { FaBook } from "react-icons/fa6";
import { IoIosArrowRoundForward } from "react-icons/io";
import HeaderImg from "./../../../../public/images/Header1.png";
import graphic from "./../../../../public/images/graph.png";

interface MainHeaderImageProps {
  
}

type Props = {};

const Header: React.FC<MainHeaderImageProps> = ({}) => {
  return (
    <div>
      <div className="lg:container md:px-10 sm:px-5 px-1">
        <div className="grid sm:grid-cols-1 pt-[80px]  md:grid-cols-2">
          <div className="lg:px-5 px-2 my-5 lg:py-10">
            <div className="flex justify-center md:justify-start items-center lg:gap-4 md:gap-1 gap-1 pt-1  md:pt-5 lg:pb-6">
              <div
                className="md:flex drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]
                    object-cover  items-center justify-center rounded-full p-2 bg-bgGreen hidden"
              >
                <FaBook className="md:text-xl lg:text-xl sm:text-xl text-base text-white" />
              </div>
              <p className="lg:text-2xl md:text-xl text-center md:text-left text-xl">
                The best educational platform in Uzbekistan.
              </p>
            </div>
            <p className="lg:text-4xl md:text-3xl sm:text-2xl text-center md:text-left text-xl md:p-2 p-1">
              <span className="text-bgGreen">Professional</span> and{" "}
              <span className="text-bgGreen">Affordable</span> Education
              Provider
            </p>
            <p className="text-gray-600 my-2 md:p-2 p-1 text-md text-center md:text-left md:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
              quam et sapien sed magna placerat. Donec vel neque et nunc gravida
              ultricies. Vivamus sed diam non, Vivamus sed diam non, Vivamus sed
              diam non
            </p>
            <div className="flex md:justify-start justify-center lg:p-5 md:p-2 p-1 text-xs md:text-base items-center lg:gap-5 md:gap-2 sm:gap-2 gap-1">
              <button
                className="flex md:text-xl text-base items-center justify-between border px-4 p-2 hover:bg-bgGreen hover:text-white bg-yellow rounded-2xl "
              >
                Explore more
                <IoIosArrowRoundForward />
              </button>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="lg:p-5 md:p-3 sm:p-2 p-1  flex md:items-center relative">
              <div className="realtive pl-10 sm:w-[350px]  w-[500px] flex items-center justify-center  z-20">
                <img
                  src={HeaderImg}
                  alt="Main image"
                  className="bg-contain z-20 drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]
            object-cover "
                />
                <img
                  src={graphic}
                  alt="Main image"
                  className="bg-contain absolute bottom-4 z-2 w-[450px] h-[450px]"
                /> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
