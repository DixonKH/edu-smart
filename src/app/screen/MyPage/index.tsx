import React, { useState } from "react";
import { MdCastForEducation } from "react-icons/md";
import { MdOutlinePlayLesson } from "react-icons/md";
import { MdPlayLesson } from "react-icons/md";
import { FaHeart } from "react-icons/fa6";
import { MdArticle } from "react-icons/md";
import { PiArticleNyTimes } from "react-icons/pi";
import { CgProfile } from "react-icons/cg";
import { IoMdLogOut } from "react-icons/io";
import AddLesson from "./AddLesson";
import MyLesson from "./MyLesson";
import Login from "../SignupLogin/Login";
import MyFavourites from "./MyFavourites";
import MyProfile from "./MyProfile";
import Validation from "./Validation";
import WriteArticle from "./WriteArticle";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

type Props = {};

const MyPage = (props: Props) => {
  const [showComponent, setShowComponent] = useState(1);
  const [nav, setNav] = useState(true);

  const RenderComponent = () => {
    switch (showComponent) {
      case 1:
        return <AddLesson />;
        break;
      case 2:
        return <MyLesson />;
        break;
      case 3:
        return <MyFavourites />;
        break;
      case 4:
        return <MyFavourites />;
        break;
      case 5:
        return <WriteArticle />;
        break;
      case 6:
        return <MyProfile />;
        break;
    }
  };
  const handleNav = () => setNav(!nav);
  return (
    <div className="lg:container md:px-10 sm:px-5 px-1 pt-[150px]">
      <div>
        <div className="grid lg:grid-cols-5 base:grid-cols-2 md:grid-cols-3 ">
          <div
            className="fixed z-30 flex lg:hidden base:hidden md:hidden justify-end items-center  right-[5%]  bottom-[5%] w-[%] drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]
                    object-cover text-black cursor-pointer "
            onClick={handleNav}
          >
            {!nav ? (
              <AiOutlineClose className="lg:hidden border rounded-full bg-green border-green w-[30px] h-[30px] p-1 backdrop-blur-2xl" />
            ) : (
              <AiOutlineMenu className="lg:hideen border rounded-full bg-green border-green w-[30px] h-[30px] p-1 backdrop-blur-2xl" />
            )}
          </div>
          <div
            className={
              !nav
                ? `lg:hidden base:hidden md:hidden fixed z-30  left-0 h-[86%]  top-[10%] w-[85%] text-black bg-green/30
                backdrop-blur-2xl border-b rounded-b-md ease-in-out duration-500 cursor-pointer`
                : "lg:relative lg:top-0 base:relative base:top-0 md:relative md:top-0 fixed bottom-[-120%] sm:fixed sm:bottom-[-120%]"
            }
          >
            <div className="flex items-start justify-center">
              <div
                className="col-span-1  md:h-[660px] sm:h-[590px]  h-[600px] lg:h-[580px] w-full 
            sm:w-[250px]  md:w-[230px] py-5 border-green1 lg:border md:border 
            border-t border-b m-2 lg:rounded-xl md:rounded-xl"
              >
                {/* <div className="flex  mx-auto items-center justify-center rounded-full size-10 bg-yellow">
                  <div>
                    <MdCastForEducation className="text-xl  text-bgGreen" />
                  </div>
                </div>
                <p className="md:text-2xl text-center text-xl sm:text-xl">
                  Edu-Smart
                </p> */}

                <div>
                  <p className=" pt-4 pl-2 flex text-center lg:text-xl sm:text-xl italic">
                    Manage Listing:
                  </p>
                  <div className="mx-auto text-center sm:py-1 py-1 flex items-center justify-center  lg:p-1 md:p-2  ">
                    <button
                      onClick={() => setShowComponent(1)}
                      className=" w-[90%] border border-green px-3 py-2 flex items-center justify-evenly hover:italic hover:bg-green hover:text-white  rounded-sm"
                    >
                      <MdOutlinePlayLesson />
                      Add Lesson
                    </button>
                  </div>
                  <div className="mx-auto text-center sm:py-1 py-1 flex items-center justify-center  lg:p-1 md:p-2   ">
                    <button
                      onClick={() => setShowComponent(2)}
                      className=" w-[90%] border border-green px-3 py-2 flex items-center justify-evenly hover:italic hover:bg-green hover:text-white  rounded-sm"
                    >
                      <MdPlayLesson />
                      My Lesson
                    </button>
                  </div>
                  <div className="mx-auto text-center sm:py-1 py-1 flex items-center justify-center  lg:p-1 md:p-2   ">
                    <button
                      onClick={() => setShowComponent(3)}
                      className=" w-[90%] border border-green px-3 py-2 flex items-center justify-evenly hover:italic hover:bg-green hover:text-white  rounded-sm"
                    >
                      <FaHeart />
                      My Favourites
                    </button>
                  </div>
                </div>
                <div>
                  <p className=" pt-4 pl-2 flex text-center  italic">
                    Community:
                  </p>
                  <div className="mx-auto text-center sm:py-1 py-1 flex items-center justify-center  lg:p-1 md:p-2   ">
                    <button
                      onClick={() => setShowComponent(4)}
                      className=" w-[90%] border border-green px-3 py-2 flex items-center justify-evenly hover:italic hover:bg-green hover:text-white  rounded-sm"
                    >
                      <MdArticle />
                      Articles
                    </button>
                  </div>
                  <div className="mx-auto text-center sm:py-1 py-1 flex items-center justify-center  lg:p-1 md:p-2   ">
                    <button
                      onClick={() => setShowComponent(5)}
                      className=" w-[90%] border border-green px-3 py-2 flex items-center justify-evenly hover:italic hover:bg-green hover:text-white  rounded-sm"
                    >
                      <PiArticleNyTimes />
                      Write Articles
                    </button>
                  </div>
                </div>
                <div>
                  <p className=" pt-4 pl-2 flex text-center  italic">
                    Manage Account:
                  </p>
                  <div className="mx-auto text-center sm:py-1 py-1 flex items-center justify-center lg:p-1 md:p-2   ">
                    <button
                      onClick={() => setShowComponent(6)}
                      className=" w-[90%] border border-green px-3 py-2 flex items-center justify-evenly hover:italic hover:bg-green hover:text-white  rounded-sm"
                    >
                      <CgProfile />
                      My Profile
                    </button>
                  </div>
                  <div className="mx-auto text-center sm:py-1 py-1 flex items-center justify-center lg:p-1 md:p-2   ">
                    <button
                      onClick={() => setShowComponent(7)}
                      className=" w-[90%] border border-green px-3 py-2 flex items-center justify-evenly hover:italic hover:bg-green hover:text-white  rounded-sm"
                    >
                      <IoMdLogOut />
                      Logout
                    </button>
                  </div>
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

export default MyPage;
