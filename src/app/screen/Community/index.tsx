import React, { useState } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { MdCastForEducation } from "react-icons/md";
import FreeBoard from "./FreeBoard";
import CommunityDetail from "./CommunityDetail";
import News from "./News";

type Props = {};

const Community = (props: Props) => {
  const [showComponent, setShowComponent] = useState(1);

  const RenderComponent = () => {
    switch (showComponent) {
      case 1:
        return <FreeBoard />;
        break;
      case 2:
        return <CommunityDetail />;
        break;
      case 3:
        return <News />;
        break;
    }
  };

  return (
    <div className="lg:container md:px-10 sm:px-5 px-1">
      <div>
        <div>
          <div className=" items-center justify-between">
            <div>
              <div className="flex justify-start items-center pt-1  md:pt-5 lg:pb-6">
                <p className="lg:text-2xl md:text-xl text-base sm:text-xl text-black">
                  - News & Blog -
                </p>
              </div>
              <div className="lg:flex items-center justify-centerr">
                <p className=" lg:text-4xl md:text-3xl sm:text-2xl text-xl lg:p-5 md:p-2 p-1">
                  Our Latest
                  <span className="text-green1"> News & Blog</span>
                </p>
              </div>
            </div>
            <div>
              <div className="  flex justify-start lg:p-5 md:p-2 p-1 text-xs md:text-base  items-center lg:gap-5 md:gap-2 sm:gap-2 gap-1">
                <button
                  className="flex items-center justify-between drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]
                    object-cover border px-3 py-1 hover:bg-bgGreen hover:text-white bg-yellow rounded-2xl"
                >
                  View all Classes
                  <IoIosArrowRoundForward />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-5 md:grid-cols-3 ">
          <div className="flex items-start justify-center">
            <div className="col-span-1 h-[350px] lg:h-[330px] w-[300px] sm:h-[250px] md:w-[230px] py-5 border-green1 border m-2 rounded-xl">
              <div
                className="flex  mx-auto items-center justify-center rounded-full size-10 bg-yellow"
              >
                <div>
                  <MdCastForEducation className="text-xl  text-bgGreen" />
                </div>
              </div>
              <p
                className="md:text-2xl text-center text-xl sm:text-xl"
              >
                Edu-Smart
              </p>
              <div>
                <div className="mx-auto text-center  lg:p-3 md:p-2 p-1 text-xs md:text-base  ">
                  <button
                    onClick={() => setShowComponent(1)}
                    className=" w-[90%] border px-3 py-1 hover:bg-green hover:text-white border-green hover:italic rounded-sm"
                  >
                    Free Board
                  </button>
                </div>
                <div className="mx-auto text-center  lg:p-3 md:p-2 p-1 text-xs md:text-base  ">
                  <button
                    onClick={() => setShowComponent(2)}
                    className=" w-[90%] border px-3 py-1 hover:bg-green hover:text-white border-green hover:italic rounded-sm"
                  >
                    Recomendation
                  </button>
                </div>
                <div className="mx-auto text-center  lg:p-3 md:p-2 p-1 text-xs md:text-base  ">
                  <button
                    onClick={() => setShowComponent(2)}
                    className=" w-[90%] border px-3 py-1 hover:bg-green hover:text-white border-green hover:italic rounded-sm"
                  >
                    News
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-4 md:col-span-2">
            <RenderComponent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
