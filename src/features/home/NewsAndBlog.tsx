import React from "react";
import Teaching from "/public/images/Teaching.jpg";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router";
import Line from "../../features/home/Line";
import { useTranslation } from "react-i18next";

type Props = {};

const NewsAndBlog = (props: Props) => {
  const { t } = useTranslation();
  return (
    <div>
      <div className="lg:container md:px-10 sm:px-5 px-1 mt-20">
        <div className=" items-center justify-between">
          <div className="lg:text-left text-center">
            <p className="lg:text-2xl md:text-xl text-base sm:text-xl text-black">
              - {t("news")} -
            </p>
            <div className="lg:flex items-center justify-centerr">
              <p className=" lg:text-4xl lg:font-medium md:text-3xl sm:text-2xl text-xl lg:p-5 md:p-2 sm:mb-4 lg:mb-0">
                <span className="text-green1"> {t("news_h1")}</span>
              </p>
            </div>
          </div>
          <div>
            <div className="flex justify-start lg:p-5 md:p-2 p-1 text-xs md:text-base  items-center lg:gap-5 md:gap-2 sm:gap-2 gap-1">
              <button className="flex items-center justify-between shadow-xl border px-4 p-2  hover:bg-bgGreen hover:text-white bg-yellow rounded-2xl">
                {t("news_btn")}
                <IoIosArrowRoundForward />
              </button>
            </div>
          </div>
        </div>
        <div className="md:grid grid-cols-3 mb-10">
          <div className="m-5 border shadow-xl rounded-xl p-3 pb-8 cursor-pointer hover:shadow-xl transition-all duration-300 hover:bg-green hover:text-white">
            <div className="realtive  flex items-end justify-center">
              <img
                src={Teaching}
                alt="VideContent"
                className="border-black rounded-xl"
              />
              <div className="absolute  gap-2">
                <div className="lg:flex items-center   justify-between">
                  <div className="gap-2   p-1 text-white  ">
                    <p className="text-sm  border px-1 rounded-xl">Beginner</p>
                  </div>
                  <div className="gap-2  p-1 text-white  ">
                    <p className="text-sm border px-1 rounded-xl">Elementry</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-5">
              <p className="text-xl bold mx-auto  text-center">Final Result</p>
              <p className="text-md bold mx-auto m-3 text-center">
                Lorem Ipsum is Lorem Ipsum is simply dummy text of the printing
                and typesetting industry.
              </p>
            </div>
            <div className="flex justify-center">
              <div
                className=" font-nunito drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]
                    object-cover px-3 "
              >
                <Link
                  className="hover:border-green1 border-black border-b-2 "
                  to=""
                >
                  {" "}
                  {t("news_more")}...
                </Link>
              </div>
            </div>
          </div>
          <div className="m-5 border shadow-xl rounded-xl p-3 pb-8 cursor-pointer hover:shadow-xl transition-all duration-300 hover:bg-green hover:text-white">
            <div className="realtive flex items-end justify-center">
              <img
                src={Teaching}
                alt="VideContent"
                className="border-black rounded-xl"
              />
              <div className="absolute  gap-2">
                <div className="lg:flex items-center   justify-between">
                  <div className="gap-2   p-1 text-white  ">
                    <p className="text-sm  border px-1 rounded-xl">Beginner</p>
                  </div>
                  <div className="gap-2  p-1 text-white  ">
                    <p className="text-sm border px-1 rounded-xl">Elementry</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-5">
              <p className="text-xl bold mx-auto  text-center">Final Result</p>
              <p className="text-md bold mx-auto m-3 text-center">
                Lorem Ipsum is Lorem Ipsum is simply dummy text of the printing
                and typesetting industry.
              </p>
            </div>
            <div className="flex justify-center">
              <div
                className=" font-nunito drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]
                    object-cover px-3 "
              >
                <Link
                  className="hover:border-green1 border-black border-b-2 hover:text-green1"
                  to=""
                >
                  {" "}
                  {t("news_more")}...
                </Link>
              </div>
            </div>
          </div>
          <div className="m-5 border shadow-xl rounded-xl p-3 pb-8 cursor-pointer hover:shadow-xl transition-all duration-300 hover:bg-green hover:text-white">
            <div className="realtive  flex items-end justify-center">
              <img
                src={Teaching}
                alt="VideContent"
                className="border-black rounded-xl"
              />
              <div className="absolute  gap-2">
                <div className="lg:flex  items-center  justify-between">
                  <div className="gap-2   p-1 text-white  ">
                    <p className="text-sm  border px-1 rounded-xl">Beginner</p>
                  </div>
                  <div className="gap-2  p-1 text-white  ">
                    <p className="text-sm border px-1 rounded-xl">Elementry</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-5">
              <p className="text-xl bold mx-auto  text-center">Final Result</p>
              <p className="text-md bold mx-auto m-3 text-center">
                Lorem Ipsum is Lorem Ipsum is simply dummy text of the printing
                and typesetting industry.
              </p>
            </div>
            <div className="flex justify-center">
              <div
                className=" font-nunito drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]
                    object-cover px-3 "
              >
                <Link
                  className="hover:border-green1 border-black border-b-2 hover:text-green1"
                  to=""
                >
                  {" "}
                  {t("news_more")}...
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Line />
    </div>
  );
};

export default NewsAndBlog;
