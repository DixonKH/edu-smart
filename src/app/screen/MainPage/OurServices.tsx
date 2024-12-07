import { FaStar } from "react-icons/fa6";
import VideContent from "/public/images/videocontent.png";
import { IoIosArrowRoundForward } from "react-icons/io";

type Props = {};

const OurServices = (props: Props) => {
  return (
    <div className=" bg-green1">
      <div className="lg:container md:px-10 sm:px-5 px-1">
        <div className="sm:inline-block md:flex  items-center justify-between">
          <div>
            <div className="flex justify-start items-center pt-1  md:pt-5 lg:pb-66">
              <p className="lg:text-2xl md:text-xl text-base sm:text-xl text-white">
                - Our Services -
              </p>
            </div>
            <p className="text-white lg:text-4xl md:text-3xl sm:text-2xl text-xl lg:p-5 md:p-2 p-1">
              <span className="text-yellow ">Your Top Choice</span> for <br />
              learning Korean
            </p>
          </div>
          <div className="lg:mt-[200px] flex justify-start lg:p-5 md:p-2 p-1 text-xs md:text-base  items-center lg:gap-5 md:gap-2 sm:gap-2 gap-1">
            <button
              className="flex items-center drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]
                    object-cover justify-between border px-3 py-1 hover:bg-bgGreen hover:text-white bg-yellow rounded-2xl "
            >
              View all Services
              <IoIosArrowRoundForward />
            </button>
          </div>
        </div>
        <div className="grid md:grid-cols-3 xs:grid-cols-1 base:grid-cols-2 sm:grid-cols-1 grid-cols-1">
          <div
            className=" m-5 py-5  bg-bgGreen  hover:bg-background rounded-xl drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]
                    object-cover"
          >
            <div className=" ">
              <div className="mx-2 text-bold text-black">
                <div className="flex items-center justify-center">
                  <p className="mx-3 base:p-2 py-3 lg:text-2xl md:text-xl text-base sm:text-xl">
                    House Cleaning
                  </p>
                </div>
                <p className="lg:p-5 base:p-2 md:p-2 p-3 sm:text-lg text-xs base:text-base md:text-base">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  non quam et sapien sed magna placerat.
                </p>
              </div>
              <div className="mx-auto flex justify-center">
                <div className="flex justify-end mx-auto  items-center gap-2 absolute px-1 z-40 bg-bgGreen ml-3 mt-10 rounded-xl">
                  <div className="flex items-center justify-center rounded-full w-6 h-6 bg-yellow">
                    <FaStar className="text-sm text-white" />
                  </div>
                </div>

                <div className="relative mx-auto  p-5  z-30">
                  <img
                    src={VideContent}
                    alt="VideContent"
                    className="border-black base:w-[200px] rounded-2xl drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]
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
              <div className="mx-2 text-bold text-black">
                <div className="flex items-center justify-center">
                  <p className="mx-3 base:p-2 py-3 lg:text-2xl md:text-xl text-base sm:text-xl">
                    House Cleaning
                  </p>
                </div>
                <p className="lg:p-5 base:p-2 md:p-2 p-3 text-xs sm:text-lg base:text-base md:text-base">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  non quam et sapien sed magna placerat.
                </p>
              </div>
              <div className="mx-auto flex justify-center">
                <div className="flex justify-end mx-auto  items-center gap-2 absolute px-1 z-40 bg-bgGreen ml-3 mt-10 rounded-xl">
                  <div className="flex items-center justify-center rounded-full w-6 h-6 bg-yellow">
                    <FaStar className="text-sm text-white" />
                  </div>
                </div>

                <div className="relative mx-auto  p-5  z-30">
                  <img
                    src={VideContent}
                    alt="VideContent"
                    className="border-black base:w-[200px] rounded-2xl drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]
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
              <div className="mx-2 text-bold text-black">
                <div className="flex items-center justify-center">
                  <p className="mx-3 base:p-2 py-3 lg:text-2xl md:text-xl text-base sm:text-xl">
                    House Cleaning
                  </p>
                </div>
                <p className="lg:p-5 base:p-2 md:p-2 p-3 sm:text-lg text-xs base:text-base md:text-base">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  non quam et sapien sed magna placerat.
                </p>
              </div>
              <div className="mx-auto flex justify-center">
                <div className="flex justify-end mx-auto  items-center gap-2 absolute px-1 z-40 bg-bgGreen ml-3 mt-10 rounded-xl">
                  <div className="flex items-center justify-center rounded-full w-6 h-6 bg-yellow">
                    <FaStar className="text-sm text-white" />
                  </div>
                </div>

                <div className="relative mx-auto  p-5  z-30">
                  <img
                    src={VideContent}
                    alt="VideContent"
                    className="border-black base:w-[200px] rounded-2xl drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]
                    object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
