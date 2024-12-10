import NavbarItems from "./Navbar.json";
import { Link } from "react-router";
import { MdCastForEducation, MdPriceChange } from "react-icons/md";
import { IoLogInOutline, IoPerson } from "react-icons/io5";
import { IoIosArrowRoundForward, IoIosCall, IoMdSearch } from "react-icons/io";
import {
  FaBook,
  FaCartShopping,
  FaLocationArrow,
  FaMessage,
} from "react-icons/fa6";
import { FaFacebook, FaMobileAlt } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import { RiTeamFill } from "react-icons/ri";
import TeamGirls from "/public/images/teamgirls.jpg";

import MainImage from "/public/images/mainpageimage.jpg";
import Line from "@/app/screen/MainPage/Line";

type Props = {};

const Navbar = (props: Props) => {
  const [nav, setNav] = useState(true);
  const handleNav = () => setNav(!nav);

  return (
    <div>
      <div className="bg-green1 fixed z-50 w-[100%] hidden lg:flex md:flex sm:hidden">
        <div className="lg:container md:px-10 w-[100%]  sm:px-5 px-1 ">
          <div className=" md:flex flex lg:flex  justify-between  items-center ">
            <div className="flex justify-between items-center gap-3 p-1">
              <div className="flex items-center justify-start">
                <div className="flex items-center  justify-between rounded-full w-5 h-5 bg-green1">
                  <IoIosCall className="text-xl  text-yellow" />
                </div>
                <p className="text-white">+82101234567</p>
              </div>
              <div className="flex items-center justify-start">
                <div className="flex items-center  justify-between rounded-full w-5 h-5 bg-green1">
                  <FaMessage className="text-xl px-1 text-yellow" />
                </div>
                <p className="text-white">example@gmail.com</p>
              </div>
            </div>
            <div className="flex justify-end items-center">
              <div className="flex justify-evenly items-center gap-4 py-2 px-4">
                <div className="flex items-center  justify-center rounded-full w-5 h-5 bg-green1">
                  <FaFacebook className="text-xl text-yellow" />
                </div>
                <div className="flex items-center justify-center rounded-full w-5 h-5 bg-green1">
                  <FaTwitter className="text-xl text-yellow" />
                </div>
                <div className="flex items-center justify-center rounded-full w-5 h-5 bg-green1">
                  <FaPinterest className="text-xl text-yellow" />
                </div>
                <div className="flex items-center justify-center rounded-full w-5 h-5 bg-green1">
                  <FaInstagramSquare className="text-xl text-yellow" />
                </div>
                <div className="flex items-center justify-center rounded-full w-5 h-5 bg-green1">
                  <FaYoutube className="text-xl text-yellow" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:bg-background md:bg-background shadow-xl border-b border-green1 bg-green1  z-40 lg:pt-10 md:pt-10 fixed w-full sm:bg-green1">
        <div className="lg:container md:px-10 sm:px-5 px-1">
          <div className="flex  lg:justify-between md:justify-between  items-center p-2">
            <div className="flex justify-between items-center w-full">
              <div className="flex items-center  justify-start">
                <div>
                  <Link
                    to="/"
                    className="flex justify-between items-center gap-3"
                  >
                    <div
                      className="flex drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]
                    object-cover items-center justify-center rounded-full size-10 bg-yellow"
                    >
                      <MdCastForEducation className="text-xl text-bgGreen" />
                    </div>
                    <p
                      className="md:text-2xl text-xl text-white lg:text-black md:text-black sm:text-xl drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]
                    object-cover"
                    >
                      Edu-Smart
                    </p>
                  </Link>
                </div>
              </div>
              <div className="hidden sm:hidden md:flex  lg:flex justify-end items-center">
                <div className="sm:flex  justify-end items-center gap-5">
                  <ul className="md:flex  items-center gap-5 md:gap-2 text-xl">
                    {NavbarItems.map((item, index) => (
                      <li
                        className=" font-nunito  drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]
                    object-cover px-3 "
                        key={index}
                      >
                        <Link
                          className="hover:border-green1 md:text-sm text-xl sm:text-xl lg:text-xl hover:border-b-2 hover:text-green1"
                          to={item.link}
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="mypage"
                    className="flex drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]
                    object-cover items-center justify-between gap-2 bg-yellow py-1 px-3 rounded-xl hover:border-green1 hover:border-b-2 hover:text-green1"
                  >
                    <IoPerson className="text-xl text-bgGreen" />
                    <span className="text-black md:text-sm text-xl lg:text-xl sm:text-xl font-semibold">
                      My Page
                    </span>
                  </Link>
                </div>
              </div>
              <div className="flex items-center lg:hidden  md:hidden justify-end">
                <div
                  className="drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]
                    object-cover text-white"
                  onClick={handleNav}
                >
                  {!nav ? (
                    <AiOutlineClose className="lg:hidden " size={20} />
                  ) : (
                    <AiOutlineMenu className="lg:hideen" size={20} />
                  )}
                </div>
              </div>
            </div>
            <div
              className={
                !nav
                  ? `fixed z-50  left-0 drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]
                    object-cover top-[9.5%] w-full sm:w-full base:w-[50%]  text-black   bg-green/20 
                backdrop-blur-xl h-[80%] border-b rounded-b-md border-green ease-in-out duration-300`
                  : "fixed top-[-90%]"
              }
            >
              <div className="flex mt-5  items-center text-center justify-center">
                <ul className="pt-15 px-8 w-[70%]  text-white bg-bgGreen font-bold-100">
                  {NavbarItems.map((item) => (
                    <li
                      key={item?.id}
                      className="p-4 border-b-2   border-gray-900"
                    >
                      <Link to={item.link}>{item.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-full p-2">
                <div className="flex justify-center items-center">
                  <div className="flex justify-evenly items-center gap-4 py-2 px-4">
                    <div className="flex items-center  justify-center rounded-full w-7 h-7 bg-green1">
                      <FaFacebook className="text-xl text-yellow" />
                    </div>
                    <div className="flex items-center justify-center rounded-full w-7 h-7 bg-green1">
                      <FaTwitter className="text-xl text-yellow" />
                    </div>
                    <div className="flex items-center justify-center rounded-full w-7 h-7 bg-green1">
                      <FaPinterest className="text-xl text-yellow" />
                    </div>
                    <div className="flex items-center justify-center rounded-full w-7 h-7 bg-green1">
                      <FaInstagramSquare className="text-xl text-yellow" />
                    </div>
                    <div className="flex items-center justify-center rounded-full w-7 h-7 bg-green1">
                      <FaYoutube className="text-xl text-yellow" />
                    </div>
                  </div>
                </div>
                <div className="   text-white bg-bgGreen mt-6 p-3">
                  <div className="flex  items-center gap-3">
                    <FaLocationArrow />
                    <p>example@gmail.com</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaMobileAlt />
                    <p>+821234567</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
                The best educational platform in Uzbekistan.
              </p>
            </div>
            <p className="lg:text-4xl md:text-3xl sm:text-2xl text-xl lg:p-5 md:p-2 p-1">
              <span className="text-bgGreen">Professional</span> Affordable{" "}
              <br />
              Education Provider
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
                  src={MainImage}
                  alt="Main image"
                  className="border drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]
                    object-cover rounded-full"
                />
              </div>
              <div className="absolute sm:pt-[130px] pt-[80px] md:pt-[150px]  sm:w-[100px] w-[80px] flex items-end justify-end  z-30">
                <img
                  src={TeamGirls}
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
      <Line />
    </div>
  );
};

export default Navbar;
