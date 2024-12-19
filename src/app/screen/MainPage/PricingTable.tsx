import React from "react";
import { FaStar } from "react-icons/fa6";
import { IoIosArrowRoundForward } from "react-icons/io";
import { SiTicktick } from "react-icons/si";
import { useTranslation } from "react-i18next";

type Props = {};

const PricingTable = (props: Props) => {
  const { t } = useTranslation();
  return (
    <div>
      <div className="p-5 bg-background mt-20">
        <div className=" lg:container md:px-10 sm:px-5 text-center lg:text-left px-1 mb-2">
          <p className="lg:text-2xl md:text-xl text-base sm:text-xl text-black">
            - {t("price")} -
          </p>
          <p className=" lg:text-4xl md:text-3xl sm:text-2xl text-xl lg:p-5 md:p-2 font-medium">
            <span className="text-green1"> {t("price_h1")}</span>
          </p>
        </div>
        <div className="container md:px-10 sm:px-5 px-1">
          <div className="grid grid-cols-1 md:grid-flow-row lg:grid-cols-3 justify-center items-start gap-8">
            <div
              className="hover:bg-orange w-full shadow-xl border rounded-3xl p-5 hover:text-white hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              <div className="m-3">
                <p className="lg:text-2xl md:text-xl text-base sm:text-xl">
                  {t("price_basic")}
                </p>
                <p className="px-3 text-md my-2">
                  <span className="lg:text-5xl md:text-3xl base:text-2xl sm:text-xl text-lg">
                    $99
                  </span>{" "}
                  /in a month
                </p>
              </div>
              <div className="pl-4">
                <div className=" flex justify-start my-1 sm:my-2  items-center">
                  <div className="flex items-center justify-center rounded-full w-6 h-6 bg-bgGreen">
                    <SiTicktick className="text-sm text-white" />
                  </div>
                  <p className="p-1 ml-2 text-lg md:text-base bold">
                    Lorem Ips incorrectly called large
                  </p>
                </div>
                <div className=" flex justify-start my-1 sm:my-2  items-center">
                  <div className="flex items-center justify-center rounded-full w-6 h-6 bg-bgGreen">
                    <SiTicktick className="text-sm text-white" />
                  </div>
                  <p className="  p-1 ml-2 text-lg md:text-base bold">
                    Lorem Ips incorrectly called small desc
                  </p>
                </div>
                <div className=" flex justify-start my-1 sm:my-2  items-center">
                  <div className="flex items-center justify-center rounded-full w-6 h-6 bg-bgGreen">
                    <SiTicktick className="text-sm text-white" />
                  </div>
                  <p className="  p-1 ml-2 text-lg md:text-base bold">
                    Lorem Ips incorrectly called medium
                  </p>
                </div>
                <div className=" flex justify-start my-1 sm:my-2  items-center">
                  <div className="flex items-center justify-center rounded-full w-6 h-6 bg-bgGreen">
                    <SiTicktick className="text-sm text-white" />
                  </div>
                  <p className="  p-1 ml-2 text-lg md:text-base bold">
                    Lorem Ips incorrectly called
                  </p>
                </div>
                <div className=" flex justify-start my-1 sm:my-2  items-center">
                  <div className="flex items-center justify-center rounded-full w-6 h-6 bg-bgGreen">
                    <SiTicktick className="text-sm text-white" />
                  </div>
                  <p className="  p-1 ml-2 text-lg md:text-base bold">
                    Lorem Ips incorrectly called table 
                  </p>
                </div>
                <div className=" flex justify-start my-1 sm:my-2  items-center">
                  <div className="flex items-center justify-center rounded-full w-6 h-6 bg-bgGreen">
                    <SiTicktick className="text-sm text-white" />
                  </div>
                  <p className="  p-1 ml-2 text-lg md:text-base bold">
                    Lorem Ips incorrectly called
                  </p>
                </div>
                <div className=" flex justify-start my-1 sm:my-2  items-center">
                  <div className="flex items-center justify-center rounded-full w-6 h-6 bg-bgGreen">
                    <SiTicktick className="text-sm text-white" />
                  </div>
                  <p className="  p-1 ml-2 text-lg md:text-base bold">
                    Lorem Ips incorrectly called form range
                  </p>
                </div>
                <div className=" flex justify-start my-1 sm:my-2  items-center">
                  <div className="flex items-center justify-center rounded-full w-6 h-6 bg-bgGreen">
                    <SiTicktick className="text-sm text-white" />
                  </div>
                  <p className="  p-1 ml-2 text-lg md:text-base bold">
                    Lorem Ips incorrectly called
                  </p>
                </div>
              </div>
              <div className="">
                <div className="flex items-center justify-center px-3 text-md">
                  <div className="  flex justify-start lg:p-5 md:p-2 p-1 text-xs md:text-base  items-center lg:gap-5 md:gap-2 sm:gap-2 gap-1">
                    <button
                      className="flex items-center justify-between px-4 py-2 border-2 bg-white border-bgGreen text-black rounded-2xl shadow-xl shadow-bgGreen hover:bg-white"
                      >
                      {t("price_btn")}
                      <IoIosArrowRoundForward />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full">
              <div className="flex items-center justify-center">
                <div
                  className="flex shadow-xl items-center gap-2 px-4 py-2 absolute z-30 bg-yellow rounded-3xl"
                >
                  <div className="flex items-center justify-center rounded-full w-6 h-6 bg-bgGreen">
                    <FaStar className="text-sm text-white" />
                  </div>
                  <p className="text-md font-medium">{t("price_popular")}</p>
                </div>
              </div>
              <div
                className="hover:bg-blue border shadow-xl rounded-3xl hover:text-white hover:scale-105 p-5 transition-all duration-300 cursor-pointer"
              >
                <div className="m-3">
                  <p className="lg:text-2xl md:text-xl text-base sm:text-xl my-2">
                    {t("price_premium")}
                  </p>
                  <p className="px-3 text-md">
                    <span className="lg:text-5xl md:text-3xl base:text-2xl sm:text-xl text-lg">
                      $199
                    </span>{" "}
                    /in a month
                  </p>
                </div>
                <div className="pl-4 ">
                  <div className=" flex justify-start my-1 sm:my-2  items-center">
                    <div className="flex items-center justify-center rounded-full w-6 h-6 bg-bgGreen">
                      <SiTicktick className="text-sm text-white" />
                    </div>
                    <p className="  p-1 ml-2 text-lg md:text-base bold">
                      Lorem Ips incorrectly called
                    </p>
                  </div>
                  <div className="  flex justify-start my-1 sm:my-2  items-center">
                    <div className="flex items-center justify-center rounded-full w-6 h-6 bg-bgGreen">
                      <SiTicktick className="text-sm text-white" />
                    </div>
                    <p className="  p-1 ml-2 text-lg md:text-base bold">
                      Lorem Ips incorrectly called
                    </p>
                  </div>
                  <div className=" flex justify-start my-1 sm:my-2  items-center">
                    <div className="flex items-center justify-center rounded-full w-6 h-6 bg-bgGreen">
                      <SiTicktick className="text-sm text-white" />
                    </div>
                    <p className="  p-1 ml-2 text-lg md:text-base bold">
                      Lorem Ips incorrectly called
                    </p>
                  </div>
                  <div className=" flex justify-start my-1 sm:my-2  items-center">
                    <div className="flex items-center justify-center rounded-full w-6 h-6 bg-bgGreen">
                      <SiTicktick className="text-sm text-white" />
                    </div>
                    <p className="  p-1 ml-2 text-lg md:text-base bold">
                      Lorem Ips incorrectly called
                    </p>
                  </div>
                  <div className=" flex justify-start my-1 sm:my-2  items-center">
                    <div className="flex items-center justify-center rounded-full w-6 h-6 bg-bgGreen">
                      <SiTicktick className="text-sm text-white" />
                    </div>
                    <p className="  p-1 ml-2 text-lg md:text-base bold">
                      Lorem Ips incorrectly called
                    </p>
                  </div>
                  <div className=" flex justify-start my-1 sm:my-2  items-center">
                    <div className="flex items-center justify-center rounded-full w-6 h-6 bg-bgGreen">
                      <SiTicktick className="text-sm text-white" />
                    </div>
                    <p className="  p-1 ml-2 text-lg md:text-base bold">
                      Lorem Ips incorrectly called
                    </p>
                  </div>
                  <div className=" flex justify-start my-1 sm:my-2  items-center">
                    <div className="flex items-center justify-center rounded-full w-6 h-6 bg-bgGreen">
                      <SiTicktick className="text-sm text-white" />
                    </div>
                    <p className="  p-1 ml-2 text-lg md:text-base bold">
                      Lorem Ips incorrectly called
                    </p>
                  </div>
                  <div className=" flex justify-start my-1 sm:my-2  items-center">
                    <div className="flex items-center justify-center rounded-full w-6 h-6 bg-bgGreen">
                      <SiTicktick className="text-sm text-white" />
                    </div>
                    <p className="  p-1 ml-2 text-lg md:text-base bold">
                      Lorem Ips incorrectly called
                    </p>
                  </div>
                </div>
                <div className="">
                  <div className="flex items-center justify-center px-3 text-md">
                    <div className="  flex justify-start lg:p-5 md:p-2 p-1 text-xs md:text-base  items-center lg:gap-5 md:gap-2 sm:gap-2 gap-1">
                      <button
                      className="flex items-center justify-between px-4 py-2 border-2 bg-white border-bgGreen text-black rounded-2xl shadow-xl shadow-bgGreen hover:bg-white"
                      >
                        {t("price_btn")}
                        <IoIosArrowRoundForward />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="hover:bg-red w-full shadow-xl p-5 border rounded-3xl hover:text-white hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              <div className="m-3">
                <p className="lg:text-2xl md:text-xl text-base sm:text-xl">
                  {t("price_gold")}
                </p>
                <p className="px-3 text-md my-2">
                  <span className="lg:text-5xl md:text-3xl base:text-2xl sm:text-xl text-lg">
                    $299
                  </span>{" "}
                  /in a month
                </p>
              </div>
              <div className="pl-4 ">
                <div className=" flex justify-start my-1 sm:my-2  items-center">
                  <div className="flex items-center justify-center rounded-full w-6 h-6 bg-bgGreen">
                    <SiTicktick className="text-sm text-white" />
                  </div>
                  <p className=" p-1 ml-2 text-lg md:text-base bold">
                    Lorem Ips incorrectly called flex
                  </p>
                </div>
                <div className="  flex justify-start my-1 sm:my-2  items-center">
                  <div className="flex items-center justify-center rounded-full w-6 h-6 bg-bgGreen">
                    <SiTicktick className="text-sm text-white" />
                  </div>
                  <p className=" p-1 ml-2 text-lg md:text-base bold">
                    Lorem Ips incorrectly called medium
                  </p>
                </div>
                <div className=" flex justify-start my-1 sm:my-2  items-center">
                  <div className="flex items-center justify-center rounded-full w-6 h-6 bg-bgGreen">
                    <SiTicktick className="text-sm text-white" />
                  </div>
                  <p className=" p-1 ml-2 text-lg md:text-base bold">
                    Lorem Ips incorrectly called rounded
                  </p>
                </div>
                <div className=" flex justify-start my-1 sm:my-2  items-center">
                  <div className="flex items-center justify-center rounded-full w-6 h-6 bg-bgGreen">
                    <SiTicktick className="text-sm text-white" />
                  </div>
                  <p className=" p-1 ml-2 text-lg md:text-base bold">
                    Lorem Ips incorrectly called
                  </p>
                </div>
                <div className=" flex justify-start my-1 sm:my-2  items-center">
                  <div className="flex items-center justify-center rounded-full w-6 h-6 bg-bgGreen">
                    <SiTicktick className="text-sm text-white" />
                  </div>
                  <p className=" p-1 ml-2 text-lg md:text-base bold">
                    Lorem Ips incorrectly called
                  </p>
                </div>
                <div className=" flex justify-start my-1 sm:my-2  items-center">
                  <div className="flex items-center justify-center rounded-full w-6 h-6 bg-bgGreen">
                    <SiTicktick className="text-sm text-white" />
                  </div>
                  <p className=" p-1 ml-2 text-lg md:text-base bold">
                    Lorem Ips incorrectly called flexible
                  </p>
                </div>
                <div className=" flex justify-start my-1 sm:my-2  items-center">
                  <div className="flex items-center justify-center rounded-full w-6 h-6 bg-bgGreen">
                    <SiTicktick className="text-sm text-white" />
                  </div>
                  <p className=" p-1 ml-2 text-lg md:text-base bold">
                    Lorem Ips incorrectly cal
                  </p>
                </div>
                <div className=" flex justify-start my-1 sm:my-2  items-center">
                  <div className="flex items-center justify-center rounded-full w-6 h-6 bg-bgGreen">
                    <SiTicktick className="text-sm text-white" />
                  </div>
                  <p className=" p-1 ml-2 text-lg md:text-base bold">
                    Lorem Ips incorrectly called small
                  </p>
                </div>
              </div>
              <div className="">
                <div className="flex items-center justify-center px-3 text-md">
                  <div className="  flex justify-start lg:p-5 md:p-2 p-1 text-xs md:text-base  items-center lg:gap-5 md:gap-2 sm:gap-2 gap-1">
                    <button
                      className="flex items-center justify-between px-4 py-2 border-2 bg-white border-bgGreen text-black rounded-2xl shadow-xl shadow-bgGreen hover:bg-white"
                    >
                      {t("price_btn")}
                      <IoIosArrowRoundForward />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingTable;
