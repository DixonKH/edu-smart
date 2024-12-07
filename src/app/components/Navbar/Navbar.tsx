import NavbarItems from "./Navbar.json";
import { Link } from "react-router";
import { MdCastForEducation } from "react-icons/md";
import { IoLogInOutline, IoPerson } from "react-icons/io5";
import { IoIosCall, IoMdSearch } from "react-icons/io";
import { FaCartShopping, FaLocationArrow, FaMessage } from "react-icons/fa6";
import { FaFacebook, FaMobileAlt } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";

type Props = {};

const Navbar = (props: Props) => {
  const [nav, setNav] = useState(true);
  const handleNav = () => setNav(!nav);

  return (
    <div>
      <div className="bg-green1 hidden lg:flex md:flex sm:hidden">
        <div className="container ">
          <div className=" flex justify-between items-center ">
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
      <div className="lg:bg-background md:bg-background bg-green1 sm:bg-green1">
        <div className="md:container lg:container m-1">
          <div className="flex  lg:justify-between md:justify-start  items-center p-2">
            <div>
              <Link to="/" className="flex justify-between items-center gap-3">
                <div
                  className="flex drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]
                    object-cover items-center justify-center rounded-full size-10 bg-yellow"
                >
                  <MdCastForEducation className="text-xl text-bgGreen" />
                </div>
                <p
                  className="md:text-2xl text-xl sm:text-xl drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]
                    object-cover"
                >
                  Edu-Smart
                </p>
              </Link>
            </div>
            <div className="hidden sm:hidden md:hidden lg:flex">
              <div className="sm:flex justify-between items-center gap-5">
                <ul className="md:flex items-center justify-between gap-5 text-xl">
                  {NavbarItems.map((item, index) => (
                    <li
                      className=" font-nunito drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]
                    object-cover px-3 "
                      key={index}
                    >
                      <Link
                        className="hover:border-green1 hover:border-b-2 hover:text-green1"
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
                  <span className="text-black text-xl font-semibold">
                    My Page
                  </span>
                </Link>
              </div>
            </div>
            <div className="">
              <div className="" onClick={handleNav}>
                {!nav ? (
                  <AiOutlineClose className="" size={20} />
                ) : (
                  <AiOutlineMenu className="" size={20} />
                )}
              </div>
            </div>
            <div
              className={
                !nav
                  ? "fixed z-50   right-0 top-0 w-[50%] h-[95%] border-l rounded-l-md border-l-gray-900 bg-orange-600 ease-in-out duration-300"
                  : "fixed left-[-100%]"
              }
            >
              <div
                className="flex items-center justify-between pt-4 pr-4"
                onClick={handleNav}
              >
                <div className="flex items-center pl-2 justify-evenly w-full">
                  <div className="flex gap-3">
                    { (
                      <div className="pl-1">
                        <button
                         
                          className="bg-gradient-to-r  w-10  sm:visible from-orange-700 to-orange-500 transition-all
                    duration-200 text-white py-1 px-3 rounded-full 
                    items-center  group"
                        >
                          <IoLogInOutline
                            className="text-base text-white  drop-shadow-sm
                    cursor-pointer"
                          ></IoLogInOutline>
                        </button>
                      </div>
                    )}
                    {(
                      <div className="pl-1">
                        <button
                          
                          className="bg-gradient-to-r w-10    sm:visible  from-orange-700 to-orange-500 transition-all
                    duration-200 text-white py-1 px-3 rounded-full 
                    items-center group"
                        >
                          <IoLogInOutline
                            className="text-base text-white  drop-shadow-sm
                    cursor-pointer"
                          ></IoLogInOutline>
                        </button>
                      </div>
                    )}
                    {/* {ctx.isLoggedIn && ( */}

                    <div
                      className="{
                        
                      }"
                    >
                      <div className="block">
                        <button
                         
                          className="bg-gradient-to-r w-10   sm:visible  from-orange-700 to-orange-500 transition-all
                    duration-200 text-white py-1 px-3 rounded-full 
                    items-center group"
                        >
                          <span className="group-hover:block hidden transition-all duration-200">
                            My cart
                          </span>

                          <FaCartShopping
                            className="text-base text-white  drop-shadow-sm
                    cursor-pointer"
                          ></FaCartShopping>
                        </button>
                        <div className="flex items-center">
                          <button className="border-green-950   w-[20px] h-[20px] text-sm bg-green-600 rounded-full absolute z-50">
                            
                          </button>
                        </div>
                      </div>
                    </div>
                    {/* )} */}
                  </div>
                  {!nav ? (
                    <div className="pl-5">
                      <AiOutlineClose
                        className="text-base text-white  drop-shadow-sm
                    cursor-pointer"
                        size={20}
                      />
                    </div>
                  ) : (
                    <div>
                      <AiOutlineMenu
                        className="text-base text-white  drop-shadow-sm
                    cursor-pointer"
                        size={20}
                      />
                    </div>
                  )}
                </div>
              </div>
              <div className="relative group mx-2  py-5 flex justify-between items-center group  sm:block">
                <input
                  type="text"
                  placeholder="search"
                  className="w-full rounded-md border border-gray-300
                        focus:outline-none focus:border-1 focus:border-orange-600
                        dark:border-gray-500 
                        dark:bg-gray-800"
                ></input>
                <IoMdSearch
                  className="text-gray-500 group-hover:text-orange-600
                        absolute top-1/2 -translate-y-1/2 right-3"
                />
              </div>
              <div className="flex  items-center text-center justify-center">
                <ul className="pt-15 px-8 border rounded-xl text-white bg-gray-700 font-bold-100">
                  {NavbarItems.map((item) => (
                    <li
                      key={item?.id}
                      className="p-4 border-t-2   border-gray-900"
                    >
                      <Link to={item.link}>{item.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-full p-2">
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
                <div className=" border rounded-xl  text-white bg-gray-700 mt-6 p-3">
                  <div className="flex  items-center gap-3">
                    <FaLocationArrow />
                    <p>Busan, South Korea</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaMobileAlt />
                    <p>+821028301155</p>
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

export default Navbar;
