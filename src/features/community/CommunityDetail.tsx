import React, { useCallback, useEffect, useState } from "react";
import { IoEye } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { IoMdHeart } from "react-icons/io";
import { FaComments } from "react-icons/fa";
import { useParams } from "react-router";
import moment from "moment";
import { useArticleStore } from "./model/store";
import { serverApi } from "@/shared/lib/config";
import { useMemberStore } from "../teachers/model/store";
import { sweetTopSmallSuccessAlert } from "@/shared/lib/sweetAlert";

const CommunityDetail = () => {
  const { communityId } = useParams();
  const currentMember = useMemberStore(state => state.currentMember);
  const newArticle = useArticleStore(state => state.newArticle);
  const getArticle = useArticleStore(state => state.getArticle);
  const likeTargetArticle = useArticleStore(state => state.likeTargetArticle);

  useEffect(() => {
    if(communityId && currentMember) {
      getArticle(currentMember._id, communityId);
    }
  }, [communityId, currentMember]);

  const handleLike = async (e: any) => {
    e.preventDefault();
   try {
      if (currentMember && communityId) {
        await likeTargetArticle(currentMember._id, communityId);
        sweetTopSmallSuccessAlert("Liked article successfully", 700);
      }
    } catch (error) {
      console.log("Error liking article:", error);
   }
  }

  console.log("newArticle", newArticle);
  

  const imgPath = `${serverApi}/${newArticle?.articleImage}`;
  const date = newArticle?.createdAt;
  const formattedDate = date ? moment(date).format("DD/MM/YY") : "N/A";


  return (
    <div className="mt-40 container flex flex-col">
      <div className="text-3xl md:text-4xl text-center lg:text-left font-bold text-slate-600 p-2 mb-4 w-full">Community Detail</div>
      <div className="flex items-start lg:flex-row flex-col justify-between gap-4">
        <div className="w-full lg:w-1/3 flex flex-col">
          <div className="w-full h-[480px]">
            <img
              src={imgPath}
              alt="kitten"
              className="object-full w-full h-full rounded-2xl"
            />
          </div>
        </div>
        <div className="w-full lg:w-2/3 flex flex-col border rounded-2xl">
          <div className="w-full h-[480px] flex flex-col justify-between px-2">
            <div>
              <div className="text-3xl md:text-4xl text-green font-bold p-2 flex items-center justify-between">
                { newArticle?.articleTitle}
                {newArticle?.articleLikes ? (
                  <IoMdHeart
                    onClick={(e) => handleLike(e)}
                    className="text-red text-3xl"
                  />
                ) : (
                  <CiHeart
                    onClick={(e) => handleLike(e)}
                    className="text-red text-3xl"
                  />
                )}
              </div>
              <div className="text-slate-600 text-2xl p-2 overflow-y-scroll h-[360px]"  dangerouslySetInnerHTML={{
                            __html: newArticle?.articleContent || "",
                          }} > 
              </div>
            </div>
            <div className="flex items-center justify-between border-t pt-2 border-bgGreen">
              <div className="flex items-center justify-start p-2">
                <IoEye className="text-green text-lg md:text-2xl" />
                <span className="ml-2 text-slate-600 text-lg md:text-2xl">{newArticle?.articleViews}</span>
              </div>
              <div className="flex items-center">
                <div className="flex items-center justify-start p-2">
                  <FaComments className="text-green text-lg md:text-2xl" />
                  <span className="ml-2 text-slate-600 text-lg md:text-2xl">
                    {newArticle?.articleComments} <span className="text-gray-600 hidden md:inline">comments</span>
                  </span>
                </div>
                <div>
                  <div className="flex items-center justify-start p-2">
                    <span className="ml-2 text-slate-600 text-lg md:text-2xl">
                     {formattedDate}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="text-3xl md:text-4xl font-bold text-slate-600 p-2 mt-6 mb-1">Comments</div>
        <div className="flex flex-col items-start justify-between border gap-2 rounded-2xl mb-8">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-yellow rounded-full flex items-center justify-center">
              <div>
                <img
                  src="https://randomuser.me/api/portraits/lego/1.jpg"
                  alt="kitten"
                  className="object-full w-full h-full rounded-full"
                />
              </div>
            </div>
            <div>
              <div className="text-xl md:text-2xl font-bold text-slate-600">John Doe</div>
              <div className="text-md md:text-xl text-slate-600">2 days ago</div>
            </div>
          </div>
          <div className="w-full rounded-2xl items-start">
            <p className="p-4 rounded-2xl text-xl w-full outline-none text-slate-700" >Hi this is very useful</p>
          </div>
        </div>
        <div className="flex w-full h-48 border rounded-2xl items-start mb-8">
          <textarea placeholder="Enter your comment" className="p-4 rounded-2xl text-xl w-full h-48 outline-none" ></textarea>
        </div>
      </div>
    </div>
  );
};

export default CommunityDetail;
