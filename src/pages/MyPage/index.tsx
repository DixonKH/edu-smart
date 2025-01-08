import { useState } from "react";
import { MdOutlinePlayLesson } from "react-icons/md";
import { MdPlayLesson } from "react-icons/md";
import { FaHeart } from "react-icons/fa6";
import { MdArticle } from "react-icons/md";
import { PiArticleNyTimes } from "react-icons/pi";
import { CgProfile } from "react-icons/cg";
import { IoMdLogOut } from "react-icons/io";
import MyLesson from "../../features/myPage/MyLesson";
import MyFavourites from "../../features/myPage/MyFavourites";
import MyProfile from "../../features/myPage/MyProfile";
import WriteArticle from "../../features/myPage/WriteArticle";
import AddLesson from "@/features/myPage/AddLesson";
import { useMemberStore } from "@/features/teachers/model/store";
import { MemberType } from "@/shared/enums/member.enum";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useNavigate } from "react-router-dom";
import { serverApi } from "@/shared/lib/config";

type Props = {};


const MyPage = (props: Props) => {
  const [showComponent, setShowComponent] = useState(6);
  const [nav, setNav] = useState(true);
  const currentUser = useMemberStore((state) => state.currentMember);
  const logout = useMemberStore((state) => state.logout);
  const navigate = useNavigate();

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

  const handleLogOut = () => {
    logout();
    navigate("/login");
  }

  return (
    <div className="lg:container md:px-10 sm:px-5 px-1 pt-[120px]">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-5 mt-12 mb-24">
        <div className="flex items-start justify-center w-full shadow-xl lg:w-1/4 px-2 border border-green rounded-lg py-3 lg:h-[820px]">
          <div className="w-full flex lg:flex-col items-center justify-center">
            <div className="hidden md:flex justify-center items-center mx-4">
              <div className="flex flex-col justify-center items-center gap-1">
                <div className="flex justify-center items-center rounded-full w-24 h-24 bg-green mb-2">
                  {currentUser?.memberImage === "" ? (
                    <p className="text-3xl text-white">
                      {currentUser.memberNick[0]}
                    </p>
                  ) : (
                    <img
                       src={`${serverApi}/${currentUser?.memberImage}`}
                      alt="User Avatar"
                      className=" border-2 m-3 border-green rounded-full w-24 h-24"
                    />
                  )}
                </div>
                <div>
                  <p className="flex justify-center text-xs md:text-xl font-bold">
                    {currentUser?.memberNick}
                  </p>
                  <p className="flex justify-center text-xs md:text-base">
                    {currentUser?.memberType}
                  </p>
                  <p className="hidden lg:flex justify-center text-xs md:text-base underline">
                    {currentUser?.memberPhone}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex lg:hidden justify-center items-center w-full overflow-hidden">
              <Carousel className="w-full">
                <CarouselContent>
                  <CarouselItem className="mx-auto basis-1/7 text-center sm:py-1 py-1 flex items-center justify-center  lg:p-1 md:p-2 ">
                    {currentUser?.memberType === MemberType.TEACHER && (
                      <div className=" mx-auto text-center sm:py-1 py-1 flex items-center justify-center  lg:p-1 md:p-2 ">
                        <button
                          onClick={() => setShowComponent(1)}
                          className="md:w-28 w-20 rounded-2xl lg:h-12 border border-green px-3 py-2 flex flex-col md:text-xl items-center justify-center gap-2 hover:bg-green hover:text-white  lg:rounded-lg group"
                        >
                          <MdOutlinePlayLesson className="md:text-3xl lg:text-2xl text-green group-hover:text-white transition-colors" />
                          Add Lesson
                        </button>
                      </div>
                    )}
                  </CarouselItem>
                  <CarouselItem className=" mx-auto basis-1/7 text-center sm:py-1 py-1 flex items-center justify-center  lg:p-1 md:p-2 ">
                    {currentUser?.memberType === MemberType.TEACHER && (
                      <button
                        onClick={() => setShowComponent(2)}
                        className=" lg:w-64 md:w-28 w-20 rounded-2xl lg:h-12 border border-green px-3 py-2 flex flex-col lg:flex-row md:text-xl items-center justify-center gap-2 hover:bg-green hover:text-white  lg:rounded-lg group"
                      >
                        <MdPlayLesson className="md:text-3xl lg:text-2xl text-green group-hover:text-white transition-colors" />
                        My Lesson
                      </button>
                    )}
                  </CarouselItem>
                  <CarouselItem className="mx-auto basis-1/7 text-center sm:py-1 py-1 flex items-center justify-center  lg:p-1 md:p-2">
                    <button
                      onClick={() => setShowComponent(3)}
                      className=" lg:w-64 md:w-28 w-20 rounded-2xl border border-green px-3 py-2 flex flex-col lg:flex-row md:text-xl items-center justify-center gap-2 hover:bg-green hover:text-white  lg:rounded-lg group"
                    >
                      <FaHeart className="md:text-2xl lg:text-xl text-green group-hover:text-white transition-colors" />
                      My Favourites
                    </button>
                  </CarouselItem>
                  <CarouselItem className="mx-auto basis-1/7 text-center sm:py-1 py-1 flex items-center justify-center  lg:p-1 md:p-2">
                    <button
                      onClick={() => setShowComponent(4)}
                      className=" lg:w-64 md:w-28 w-20 h-24 md:h-28 rounded-2xl border border-green px-3 py-2 flex flex-col lg:flex-row md:text-xl items-center justify-center gap-2 hover:bg-green hover:text-white  lg:rounded-lg group"
                    >
                      <MdArticle className="md:text-3xl lg:text-2xl text-green group-hover:text-white transition-colors" />
                      Articles
                    </button>
                  </CarouselItem>
                  <CarouselItem className="mx-auto basis-1/7 text-center sm:py-1 py-1 flex items-center justify-center  lg:p-1 md:p-2">
                    <button
                      onClick={() => setShowComponent(5)}
                      className=" lg:w-64 md:w-28 w-20 rounded-2xl border border-green px-3 py-2 flex flex-col lg:flex-row md:text-xl items-center justify-center gap-2 hover:bg-green hover:text-white  lg:rounded-lg group"
                    >
                      <PiArticleNyTimes className="md:text-3xl lg:text-2xl text-2xl text-green group-hover:text-white transition-colors" />
                      Write Articles
                    </button>
                  </CarouselItem>
                  <CarouselItem className="mx-auto basis-1/7 text-center sm:py-1 py-1 flex items-center justify-center  lg:p-1 md:p-2">
                    <button
                      onClick={() => setShowComponent(6)}
                      className=" lg:w-64 md:w-28 w-20 rounded-2xl border border-green px-3 py-2 flex flex-col lg:flex-row md:text-xl items-center justify-center gap-2 hover:bg-green hover:text-white  lg:rounded-lg group"
                    >
                      <CgProfile className="md:text-3xl text-2xl lg:text-2xl text-green group-hover:text-white transition-colors" />
                      My Profile
                    </button>
                  </CarouselItem>
                  <CarouselItem className="mx-auto basis-1/7 text-center sm:py-1 py-1 flex items-center justify-center  lg:p-1 md:p-2">
                    <button
                      onClick={() => setShowComponent(7)}
                      className=" lg:w-64 md:w-28 w-20 h-24 md:h:28 rounded-2xl border border-green px-3 py-2 flex flex-col lg:flex-row md:text-xl items-center justify-center gap-2 hover:bg-green hover:text-white  lg:rounded-lg group"
                    >
                      <IoMdLogOut className="md:text-3xl text-2xl lg:text-2xl text-green group-hover:text-white transition-colors" />
                      Logout
                    </button>
                  </CarouselItem>
                </CarouselContent>
              </Carousel>
            </div>
            <div className="hidden lg:flex lg:flex-col items-start justify-center gap-2">
              <p className="flex pt-4 pl-2 text-left sm:text-xl md:text-lg font-bold">
                Manage Listing:
              </p>
              {currentUser?.memberType === MemberType.TEACHER && (
                <div className=" mx-auto text-center sm:py-1 py-1 flex items-center justify-center  lg:p-1">
                  <button
                    onClick={() => setShowComponent(1)}
                    className="w-64 h-12 border border-green px-3 py-2 flex text-xl items-center justify-center gap-2 hover:bg-green hover:text-white rounded-lg group"
                  >
                    <MdOutlinePlayLesson className="text-3xl lg:text-2xl text-green group-hover:text-white transition-colors" />
                    Add Lesson
                  </button>
                </div>
              )}
              {currentUser?.memberType === MemberType.TEACHER && (
                <div className="mx-auto text-center sm:py-1 py-1 flex items-center justify-center  lg:p-1 md:p-2">
                  <button
                    onClick={() => setShowComponent(2)}
                    className="w-64 h-12 border border-green px-3 py-2 flex text-xl items-center justify-center gap-2 hover:bg-green hover:text-white rounded-lg group"
                  >
                    <MdPlayLesson className="text-3xl lg:text-2xl text-green group-hover:text-white transition-colors" />
                    My Lesson
                  </button>
                </div>
              )}
              <div className="mx-auto text-center sm:py-1 py-1 flex items-center justify-center  lg:p-1 md:p-2   ">
                <button
                  onClick={() => setShowComponent(3)}
                  className="w-64 h-12 border border-green px-3 py-2 flex text-xl items-center justify-center gap-2 hover:bg-green hover:text-white rounded-lg group"
                >
                  <FaHeart className="text-2xl lg:text-xl text-green group-hover:text-white transition-colors" />
                  My Favourites
                </button>
              </div>

              <p className="hidden pt-4 pl-2 lg:flex text-left sm:text-xl md:text-lg font-bold">
                Community:
              </p>
              <div className="mx-auto text-center sm:py-1 py-1 flex items-center justify-center  lg:p-1 md:p-2   ">
                <button
                  onClick={() => setShowComponent(4)}
                  className="w-64 h-12 border border-green px-3 py-2 flex text-xl items-center justify-center gap-2 hover:bg-green hover:text-white rounded-lg group"
                >
                  <MdArticle className="text-3xl lg:text-2xl text-green group-hover:text-white transition-colors" />
                  Articles
                </button>
              </div>
              <div className="mx-auto text-center sm:py-1 py-1 flex items-center justify-center  lg:p-1 md:p-2   ">
                <button
                  onClick={() => setShowComponent(5)}
                  className="w-64 h-12 border border-green px-3 py-2 flex text-xl items-center justify-center gap-2 hover:bg-green hover:text-white rounded-lg group"
                >
                  <PiArticleNyTimes className="text-3xl lg:text-2xl text-green group-hover:text-white transition-colors" />
                  Write Articles
                </button>
              </div>

              <p className="hidden pt-4 pl-2 lg:flex text-left sm:text-xl md:text-lg font-bold">
                Manage Account:
              </p>
              <div className="mx-auto text-center sm:py-1 py-1 flex items-center justify-center lg:p-1 md:p-2   ">
                <button
                  onClick={() => setShowComponent(6)}
                  className="w-64 h-12 border border-green px-3 py-2 flex text-xl items-center justify-center gap-2 hover:bg-green hover:text-white rounded-lg group"
                >
                  <CgProfile className="text-3xl lg:text-2xl text-green group-hover:text-white transition-colors" />
                  My Profile
                </button>
              </div>
              <div className="mx-auto text-center sm:py-1 py-1 flex items-center justify-center lg:p-1 md:p-2">
                <button
                  onClick={handleLogOut}
                  className="w-64 h-12 border border-green px-3 py-2 flex text-xl items-center justify-center gap-2 hover:bg-green hover:text-white rounded-lg group"
                >
                  <IoMdLogOut className="text-3xl lg:text-2xl text-green group-hover:text-white transition-colors" />
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-3/4 shadow-xl rounded-xl border border-green">
          <RenderComponent />
        </div>
      </div>
    </div>
  );
};

export default MyPage;
