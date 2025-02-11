import React from "react";
import { FaBook } from "react-icons/fa6";
import Man from "../../../public/images/man.png";
import Graph from "../../../public/images/graph.png";

interface MainHeaderImageProps {}

type Props = {};

const Header: React.FC<MainHeaderImageProps> = ({}) => {
  return (
    <div>
      <div className="lg:container md:px-10 sm:px-5 px-1 mt-24 mb-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="lg:px-5 px-2 py-3 lg:py-10">
            <div className="flex justify-start items-center lg:gap-4 md:gap-1 gap-1 pt-1  md:pt-5 lg:pb-6">
              <div className="hidden lg:flex shadow-xl items-center justify-center rounded-full p-2 bg-green">
                <FaBook className="lg:text-xl sm:text-xl  text-base text-white" />
              </div>
              <p className="w-full text-center lg:text-left lg:text-2xl md:text-xl text-base sm:text-xl">
                Get in touch with our Community
              </p>
            </div>
            <p className="w-full text-center lg:text-left lg:text-4xl font-medium md:text-3xl text-2xl sm:text-3xl">
              <span className="text-green">Skill Sharing</span> Band
            </p>
            <p className="text-gray-600 p-4 text-sm md:text-xl text-center lg:text-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
              quam et sapien sed magna placerat. Donec vel neque et nunc gravida
              ultricies. Vivamus sed diam non
            </p>
          </div>
          <div className="flex justify-center items-center">
            <div className="w-full relative lg:p-5 md:p-3 sm:p-2 p-1  flex md:items-center">
              <div className="hidden md:flex w-[340px] absolute -z-10 pl-0 lg:top-16 md:top-8 lg:-left-10">
                <img src={Graph} alt="Main image" className="rotate-90 w-full"></img>
              </div>
              <img src={Man} alt="student" className="w-80 z-20" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
