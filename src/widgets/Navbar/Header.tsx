import React from "react";
import { FaBook } from "react-icons/fa6";
import { IoIosArrowRoundForward } from "react-icons/io";


interface MainHeaderImageProps {
  header: Number;
}

type Props = {
  header: Number;
};

const Header: React.FC<MainHeaderImageProps> = ({ header }) => {
  

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
                {}
              </p>
            </div>
            <p className="lg:text-4xl md:text-3xl sm:text-2xl text-xl lg:p-5 md:p-2 p-1">
              <span className="text-bgGreen">{}</span> {}
            </p>
            <p className="text-gray-600 lg:p-5 md:p-2 p-1 text-xs md:text-base">
              {}
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
           

              <div className="realtive pl-10 sm:w-[350px]   w-[250px] flex items-center justify-center  z-20">
                <img
                 
                  alt="Main image"
                  className="bg-contain   drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]
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
