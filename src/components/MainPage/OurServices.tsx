import { FaStar } from "react-icons/fa6";
import VideContent from "../../../public/images/videocontent.png";
import { IoIosArrowRoundForward } from "react-icons/io";

type Props = {};

const OurServices = (props: Props) => {
  return (
    <div className=" bg-green1">
      <div className="flex items-center justify-between">
        <div>
          <div className="flex justify-start items-center gap-4 pt-8 p-6">
            <p className="text-3xl text-white">- Our Services -</p>
          </div>
          <p className="text-4xl text-white p-5 pl-10">
            <span className="text-yellow">Your Top Choice</span> for <br />
            learning Korean
          </p>
        </div>
        <div className="p-5 mt-[200px]">
          <button
            className="flex items-center drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]
                    object-cover justify-between border px-3 py-1 hover:bg-bgGreen hover:text-white bg-yellow rounded-2xl "
          >
            View all Services
            <IoIosArrowRoundForward />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-3">
        <div
          className=" m-5 py-5  bg-bgGreen  hover:bg-background rounded-xl drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]
                    object-cover"
        >
          <div className=" ">
            <div className=" text-bold text-black">
              <p className="mx-10 text-xl py-3">House Cleaning</p>
              <p className="mx-10 py-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
                quam et sapien sed magna placerat.
              </p>
            </div>
            <div className="mx-auto">
              <div className="flex justify-end mx-auto  items-center gap-2 absolute px-1 z-40 bg-bgGreen ml-3 mt-10 rounded-xl">
                <div className="flex items-center justify-center rounded-full w-6 h-6 bg-yellow">
                  <FaStar className="text-sm text-white" />
                </div>
              </div>

              <div className="realtive mx-auto  p-5  z-30">
                <img
                  src={VideContent}
                  alt="VideContent"
                  className="border-black rounded-2xl drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]
                    object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className=" m-5 py-5  bg-bgGreen  hover:bg-background rounded-xl drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]
                    object-cover"
        >
          <div className=" ">
            <div className=" text-bold text-black">
              <p className="mx-10 text-xl py-3">House Cleaning</p>
              <p className="mx-10 py-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
                quam et sapien sed magna placerat.
              </p>
            </div>
            <div className="mx-auto">
              <div className="flex justify-end  items-center gap-2 absolute px-1 z-40 bg-bgGreen ml-3 mt-10  rounded-xl">
                <div className="flex items-center  justify-center rounded-full w-6 h-6 bg-yellow">
                  <FaStar className="text-sm  text-white" />
                </div>
              </div>

              <div className="realtive  mx-auto  p-5  z-30">
                <img
                  src={VideContent}
                  alt="VideContent"
                  className="border-black rounded-2xl drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]
                    object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className=" m-5 py-5  bg-bgGreen  hover:bg-background rounded-xl drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]
                    object-cover"
        >
          <div className=" ">
            <div className=" text-bold text-black">
              <p className="mx-10 text-xl py-3">House Cleaning</p>
              <p className="mx-10 py-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
                quam et sapien sed magna placerat.
              </p>
            </div>
            <div className="mx-auto">
              <div className="flex justify-end items-center gap-2 absolute px-1 z-40 bg-bgGreen ml-3 mt-10  rounded-xl">
                <div className="flex items-center justify-center rounded-full w-6 h-6 bg-yellow">
                  <FaStar className="text-sm text-white" />
                </div>
              </div>

              <div className="realtive mx-auto p-5   z-30">
                <img
                  src={VideContent}
                  alt="VideContent"
                  className="border-black rounded-2xl drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]
                    object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
