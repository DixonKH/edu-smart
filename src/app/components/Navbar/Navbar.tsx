import NavbarItems from "./Navbar.json";
import { Link } from "react-router";
import { MdCastForEducation } from "react-icons/md";
import { IoPerson } from "react-icons/io5";
import { IoIosCall } from "react-icons/io";
import { FaMessage } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div >
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
        <div className="md:container lg:container">
          <div className="flex  lg:justify-between md:justify-start sm:justify-start  items-center p-2">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
