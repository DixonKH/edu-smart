import React from "react";
import { FaEye } from "react-icons/fa6";
import { SlLike } from "react-icons/sl";
import { IoIosArrowRoundForward } from "react-icons/io";
import Community from "./Community.json";
import { useParams } from "react-router";
import CommunityHeader from "./CommunityHeader";
import Line from "../home/Line";


type Props = {};

const CommunityDetail = () => {
  const { communityId } = useParams<{ communityId: string }>();

  let cName = "";
  let image = "";
  let comments = "";
  let seen = 0;
  let date = "";
  let likes = 0;

  Community.filter((item) => item.id === Number(communityId)).forEach(
    (item, index) => {
      cName = item.name;
      image = item.image;
      comments = item.comments;
      seen = item.seen;
      date = item.date;
      likes = item.likes;
    }
  );

  return (
    <div className="">
      <CommunityHeader />
      <Line />
      <ul className=" lg:container md:px-10 sm:px-5 px-1">
        <li className="">
          <div className="p-2 mx-auto border">
            <div>
              <p className="lg:p-1 md:p-0 p-1 text-xs md:text-sm  px-1 italic bold">
                <span>" </span>
                {comments}
                <span> "</span>
              </p>
            </div>
            <div className="lg:flex md:flex sm:flex flex items-center justify-between">
              <div className="flex items-center justify-between gap-2">
                <div>
                  <img
                    src={image}
                    alt="UserImage"
                    className="rounded-full w-10 h-10"
                  />
                  <p className="lg:p-1 md:p-0 p-1 text-xs md:text-sm  px-1 bold">
                    {cName}
                  </p>
                </div>
                <p className="lg:p-2 border-l-2 border-black p-2 text-[10px]  text-center italic">
                  {date}
                </p>
              </div>
              <div className="flex  justify-start items-start gap-1">
                <div className="w-10 h-8">
                  <div className="absolute border rounded-full ">
                    <p className="text-[8px] text-center  border  px-2 rounded-full">
                      {seen}
                    </p>
                  </div>
                  <div
                    className="flex justify-center pt-3 drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]
                        object-cover items-end"
                  >
                    <FaEye className="text-xl relative bg-green1 border-white text-white border rounded-full" />
                  </div>
                </div>

                <div className="w-10 h-8">
                  <div className="absolute border rounded-full ">
                    <p className="text-[8px] text-center  border  px-2 rounded-full">
                      {likes}
                    </p>
                  </div>
                  <div
                    className="flex justify-center pt-3 drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]
                    object-cover items-end"
                  >
                    <SlLike className="text-xl relative bg-green1 border-white text-white border rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mx-5 my-3">
            <div className="border p-2">
              <p>
                Comments <span>(Count)</span>
              </p>
              <input
                type="text"
                placeholder="Write a comment..."
                className="border w-full p-2 rounded-md"
              />
              <div className="flex justify-center lg:p-3 md:p-2 p-1 text-xs  lg:text-base  items-center lg:gap-5 md:gap-2 sm:gap-2 gap-1">
                <button className="flex items-center  justify-between border border-black px-3 py-1 hover:bg-bgGreen hover:text-white bg-yellow rounded-2xl ">
                  Sending Comment
                  <IoIosArrowRoundForward />
                </button>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default CommunityDetail;
