import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { MdCastForEducation } from "react-icons/md";

type Props = {};

const MyPage = (props: Props) => {
  return (
    <div className="lg:container md:px-10 sm:px-5 px-1">
      <div>
        <div>
            <div className="flex items-start justify-start">
            <div className="col-span-1 h-[350px] lg:h-[350px] w-[300px] sm:h-[250px] md:w-[230px] py-2 border-green1 border m-1 rounded-xl">
              <div
                className="flex drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] mx-auto
                    object-cover items-center justify-center rounded-full size-10 bg-yellow"
              >
                <div>
                  <MdCastForEducation className="text-xl  text-bgGreen" />
                </div>
              </div>
              <p
                className="md:text-2xl text-center text-xl sm:text-xl drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]
                    object-cover"
              >
                Edu-Smart
              </p>
              <div className="">
                <div className="  flex justify-start lg:p-3 md:p-2 p-1 text-xs md:text-base  items-center lg:gap-5 md:gap-2 sm:gap-2 gap-1">
                  <button
                    className="flex items-center justify-between mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]
                    object-cover border px-3 py-1 hover:bg-bgGreen hover:text-white bg-yellow rounded-xl"
                  >
                    Free Board
                    <IoIosArrowRoundForward />
                  </button>
                </div>
                <div className="  flex justify-start lg:p-3 md:p-2 p-1 text-xs md:text-base  items-center lg:gap-5 md:gap-2 sm:gap-2 gap-1">
                  <button
                    className="flex items-center justify-between text-center mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]
                    object-cover border px-3 py-1 hover:bg-bgGreen hover:text-white bg-yellow rounded-xl"
                  >
                    Recomendation
                  </button>
                </div>
                <div className="  flex justify-start lg:p-3 md:p-2 p-1 text-xs md:text-base  items-center lg:gap-5 md:gap-2 sm:gap-2 gap-1">
                  <button
                    className="flex items-center justify-between mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]
                    object-cover border px-3 py-1 hover:bg-bgGreen hover:text-white bg-yellow rounded-xl"
                  >
                    News
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPage;
