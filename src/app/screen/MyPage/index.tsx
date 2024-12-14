import React, { useState } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
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
import Login from "./Login";
import MyFavourites from "./MyFavourites";

type Props = {};

const MyPage = (props: Props) => {
  const [showComponent, setShowComponent] = useState(1);

  const RenderComponent = () => {
    switch (showComponent) {
      case 1:
        return <AddLesson />;
        break;
      case 2:
        return <MyLesson />;
        break;
      case 3:
        return <MyFavourites/>
        break;
    }
  };
  return (
    <div className="lg:container md:px-10 sm:px-5 px-1">
      <div>
        <div className="grid lg:grid-cols-5 md:grid-cols-3 ">
          <div className="flex items-start justify-center">
            <div className="col-span-1  md:h-[630px] sm:h-[500px]  h-[500px] lg:h-[630px] w-[300px] sm:w-[200px]  md:w-[230px] py-5 border-green1 border m-2 rounded-xl">
              <div className="flex  mx-auto items-center justify-center rounded-full size-10 bg-yellow">
                <div>
                  <MdCastForEducation className="text-xl  text-bgGreen" />
                </div>
              </div>
              <p className="md:text-2xl text-center text-xl sm:text-xl">
                Edu-Smart
              </p>

              <div>
                <p className="md:text-2xl pt-4 pl-2 flex text-center lg:text-xl sm:text-xl italic">
                  Manage Listing:
                </p>
                <div className="mx-auto text-center sm:py-1 py-1 flex items-center justify-center  lg:p-3 md:p-2 text-xs md:text-base  ">
                  <button
                    onClick={() => setShowComponent(1)}
                    className=" w-[90%] border border-green px-3 py-1 flex items-center justify-evenly hover:italic hover:bg-green hover:text-white  rounded-sm"
                  >
                    <MdOutlinePlayLesson />
                    Add Lesson
                  </button>
                </div>
                <div className="mx-auto text-center sm:py-1 py-1 flex items-center justify-center  lg:p-3 md:p-2 text-xs md:text-base  ">
                  <button
                    onClick={() => setShowComponent(2)}
                    className=" w-[90%] border border-green px-3 py-1 flex items-center justify-evenly hover:italic hover:bg-green hover:text-white  rounded-sm"
                  >
                    <MdPlayLesson />
                    My Lesson
                  </button>
                </div>
                <div className="mx-auto text-center sm:py-1 py-1 flex items-center justify-center  lg:p-3 md:p-2 text-xs md:text-base  ">
                  <button
                    onClick={() => setShowComponent(3)}
                    className=" w-[90%] border border-green px-3 py-1 flex items-center justify-evenly hover:italic hover:bg-green hover:text-white  rounded-sm"
                  >
                    <FaHeart />
                    My Favourites
                  </button>
                </div>
              </div>
              <div>
                <p className="md:text-2xl pt-4 pl-2 flex text-center lg:text-xl sm:text-xl italic">
                  Community:
                </p>
                <div className="mx-auto text-center sm:py-1 py-1 flex items-center justify-center  lg:p-3 md:p-2 text-xs md:text-base  ">
                  <button
                    onClick={() => setShowComponent(1)}
                    className=" w-[90%] border border-green px-3 py-1 flex items-center justify-evenly hover:italic hover:bg-green hover:text-white  rounded-sm"
                  >
                    <MdArticle />
                    Articles
                  </button>
                </div>
                <div className="mx-auto text-center sm:py-1 py-1 flex items-center justify-center  lg:p-3 md:p-2 text-xs md:text-base  ">
                  <button
                    onClick={() => setShowComponent(1)}
                    className=" w-[90%] border border-green px-3 py-1 flex items-center justify-evenly hover:italic hover:bg-green hover:text-white  rounded-sm"
                  >
                    <PiArticleNyTimes />
                    Write Articles
                  </button>
                </div>
              </div>
              <div>
                <p className="md:text-2xl pt-4 pl-2 flex text-center lg:text-xl sm:text-xl italic">
                  Manage Account:
                </p>
                <div className="mx-auto text-center sm:py-1 py-1 flex items-center justify-center lg:p-3 md:p-2 text-xs md:text-base  ">
                  <button
                    onClick={() => setShowComponent(1)}
                    className=" w-[90%] border border-green px-3 py-1 flex items-center justify-evenly hover:italic hover:bg-green hover:text-white  rounded-sm"
                  >
                    <CgProfile />
                    My Profile
                  </button>
                </div>
                <div className="mx-auto text-center sm:py-1 py-1 flex items-center justify-center lg:p-3 md:p-2 text-xs md:text-base  ">
                  <button
                    onClick={() => setShowComponent(1)}
                    className=" w-[90%] border border-green px-3 py-1 flex items-center justify-evenly hover:italic hover:bg-green hover:text-white  rounded-sm"
                  >
                    <IoMdLogOut />
                    Logout
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
      <Login />
    </div>
  );
};

export default MyPage;
