import React from "react";
import { FaBook } from "react-icons/fa6";
import { IoIosArrowRoundForward } from "react-icons/io";
import { MdPriceChange } from "react-icons/md";
import { RiTeamFill } from "react-icons/ri";
import TeamGirls from "/public/images/teamgirls.jpg";
import MainImage from "/public/images/mainpageimage.jpg";
import HeaderData from "./Header.json";

interface MainHeaderImageProps {
  header: Number;
}

type Props = {
  header: Number;
};

const Header: React.FC<MainHeaderImageProps> = ({ header }) => {
  console.log(header);
  let backgroundImage1 = "";
  let backgroundImage2 = "";
  let title = "";
  let paragraph1 = "";
  let paragraph2 = "";
  let text = "";
  HeaderData.filter((item) => item.id === header).forEach((item) => {
    backgroundImage1 = item.imageUrl1 || "";
    backgroundImage2 = item.imageUrl2 || "";
    title = item.title || "";
    paragraph1 = item.paragraph1 || "";
    paragraph2 = item.paragraph2 || "";
    text = item.text || "";
  });

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
                {title}
              </p>
            </div>
            <p className="lg:text-4xl md:text-3xl sm:text-2xl text-xl lg:p-5 md:p-2 p-1">
              <span className="text-bgGreen">{paragraph1}</span> {paragraph2}
            </p>
            <p className="text-gray-600 lg:p-5 md:p-2 p-1 text-xs md:text-base">
              {text}
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
              <div
                className="flex justify-center lg:items-start drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]
            object-cover md:text-sm lg:text-sm text-xs sm:text-xs items-center gap-2 absolute lg:mt-5 md:mt-3 sm:mt-2 px-1 z-30 bg-yellow   rounded-xl"
              >
                <div className="flex items-center justify-center rounded-full w-6 h-6 bg-bgGreen">
                  <RiTeamFill className="text-sm text-white" />
                </div>
                <p className="">Professional Teams</p>
              </div>

              <div className="realtive pl-10 sm:w-[350px] w-[250px] flex items-start  z-20">
                <img
                  src={backgroundImage1}
                  alt="Main image"
                  className="border drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]
            object-cover rounded-full"
                />
              </div>
              <div className="absolute sm:pt-[130px] pt-[80px] md:pt-[150px]  sm:w-[100px] w-[80px] flex items-end justify-end  z-30">
                <img
                  src={backgroundImage2}
                  alt="Main image"
                  className="border drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]
            object-cover rounded-full"
                />
              </div>
              <div className=" absolute z-30 lg:pl-[300px] lg:pt-[200px]  sm:pl-[220px] pl-[150px] pt-[110px] sm:pt-[180px] ">
                <div
                  className="flex justify-start drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]
            object-cover md:text-sm lg:text-sm text-xs sm:text-xs items-center gap-2  bg-yellow px-1  boder rounded-xl"
                >
                  <div className="flex items-center justify-center rounded-full w-6 h-6 bg-bgGreen">
                    <MdPriceChange className="text-xl text-yellow" />
                  </div>
                  <p className="">Affordable Price</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
