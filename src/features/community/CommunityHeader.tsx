import React from "react";
import { FaBook } from "react-icons/fa6";
import { IoIosArrowRoundForward } from "react-icons/io";
import HeaderImg from "../../../public/images/Header6.png";
import Graph from "../../../public/images/graph2.png";

interface MainHeaderImageProps {}

type Props = {};

const Header: React.FC<MainHeaderImageProps> = ({}) => {
  return (
    <div>
      <div className="lg:container md:px-10 sm:px-5 px-1">
        <div className="grid sm:grid-cols-1 pt-[80px]  md:grid-cols-2">
          <div className="lg:px-5 px-2 py-3 lg:py-10">
            <div className="flex justify-start items-center lg:gap-4 md:gap-1 gap-1 pt-1  md:pt-5 lg:pb-6">
              <div
                className="flex drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]
                    object-cover  items-center justify-center rounded-full p-2 bg-bgGreen"
              >
                <FaBook className="md:text-xl lg:text-xl sm:text-xl  text-base text-white" />
              </div>
              <p className="lg:text-2xl md:text-xl text-base sm:text-xl">
                Get in touch with our Community
              </p>
            </div>
            <p className="lg:text-4xl md:text-3xl sm:text-2xl text-xl lg:p-5 md:p-2 p-1">
              <span className="text-bgGreen">Skill Sharing</span> Band
            </p>
            <p className="text-gray-600 lg:p-5 md:p-2 p-1 text-xs md:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
              quam et sapien sed magna placerat. Donec vel neque et nunc gravida
              ultricies. Vivamus sed diam non
            </p>
            <div className="flex justify-start lg:p-5 md:p-2 p-1 text-xs md:text-base  items-center lg:gap-5 md:gap-2 sm:gap-2 gap-1">
              <button
                className="flex drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]
                    object-cover items-center  justify-between border px-3 py-1 hover:bg-bgGreen hover:text-white bg-yellow rounded-2xl "
              >
                Explore more
                <IoIosArrowRoundForward />
              </button>
              <button
                className="px-3 drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]
                    object-cover py-1 border-b-2 border-black"
              >
                View all services
              </button>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="lg:p-5 md:p-3 sm:p-2 p-1  flex md:items-center">
              <div className="absolute z-20 pl-0">
                <img
                  src={Graph}
                  alt="Main image"
                  className="lg:w-[700px] lg:h-[600px] md:h-[400px] md:w-[400px] base:pb-10 base:h-[400px] base:w-[500px] lg:pb-[10px] md:pb-[30px] sm:pl-[30px] sm:h-[200px] sm:w-[500px] h-[250px] w-[400px]  drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]"
                ></img>
              </div>
              <div className="relative   flex items-center justify-center  z-20">
                <img
                  src={HeaderImg}
                  alt="Main image"
                  className="bg-contain sm:ml-[50px]  pb-[60px] lg:pl-[80px] pl-[50px] md:pr-0 lg:h-[350px] lg:w-[600px] base:h-[300px] base:w-[400px]  md:h-[230px] md:w-[300px] sm:h-[200px] sm:w-[300px] h-[210px] w-[300px] drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]
            object-cover "
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
