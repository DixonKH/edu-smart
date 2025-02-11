import React, { useEffect, useState } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";
import Line from "../../features/home/Line";
import { useTranslation } from "react-i18next";
import { useArticleStore } from "../community/model/store";
import { BoardArticleInquiry } from "@/shared/types/article";
import { IoEye } from "react-icons/io5";
import { FaComments } from "react-icons/fa6";
import { formatTimeAgo, serverApi } from "@/shared/lib/config";
import { Direction } from "@/shared/enums/common.enum";
import { BoardArticleCategory } from "@/shared/enums/article.enum";

const NewsAndBlog = () => {
  const { t } = useTranslation();
  const getArticles = useArticleStore((state) => state.getArticles);
  const articlesData = useArticleStore((state) => state.articles);
  const [articles, setArticles] = useState<BoardArticleInquiry>({
    page: 1,
    limit: 999,
    sort: "createdAt",
    direction: Direction.DESC,
  });
  
  console.log("articlesData", articlesData);
  

  useEffect(() => {
    const fetchArticles = async () => await getArticles(articles);
    fetchArticles();
  }, [articles]);

  const newArticles = articlesData.filter((article) => {
    return article.articleCategory === BoardArticleCategory.NEWS;
  }).slice(0, 3);

  console.log("newArticles", newArticles);
  

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
              <Link to="/community" className="flex items-center justify-between shadow-xl border px-4 p-2  hover:bg-bgGreen hover:text-white bg-yellow rounded-2xl">
                {t("news_btn")}
                <IoIosArrowRoundForward />
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full">
          {newArticles.length !== 0 ? (
            <>
              <div className="flex items-center justify-start flex-wrap mb-16">
                {newArticles.map((article: any) => {
                  const imgPath = `${serverApi}/${article?.articleImage}`;
                  const date = article?.createdAt;
                  const timeAgo = formatTimeAgo(date);
                  const dayOfMonth = date ? new Date(date).getDate() : "N/A";
                  const monthName = date
                    ? new Date(date).toLocaleString("en-US", { month: "long" })
                    : "N/A";
                  return (
                    <Link
                      to={`/community/${article._id}`}
                      key={article._id}
                      className="flex justify-center items-center w-full md:w-1/2 lg:w-1/3"
                    >
                      <div className="flex w-full items-center justify-center m-2">
                        <div className="border w-full border-green1 rounded-xl">
                          <div className="relative flex items-end justify-center">
                            <img
                              src={imgPath}
                              alt="VideContent"
                              className="object-cover w-full h-[450px] md:h-[480px] rounded-xl"
                            />
                            <div className="absolute w-16 h-16 top-3 right-4">
                              <div className=" bg-rose-700 w-full h-full rounded-xl flex flex-col items-center justify-center text-white">
                                <p className="text-xl font-nunito font-bold">
                                  {dayOfMonth}
                                </p>
                                <p className="text-sm font-nunito font-bold">
                                  {monthName.slice(0, 3)}
                                </p>
                              </div>
                            </div>
                            <div className="absolute px-4 py-1 bottom-0 left-0 bg-red rounded-tr-lg text-white">
                              <p className="text-lg font-nunito font-bold">
                                {article.articleCategory}
                              </p>
                            </div>
                          </div>
                          <div className="flex flex-col px-3 pb-1">
                            <p className="flex items-start border justify-center px-2 mt-2 pt-1 text-xl md:text-3xl font-bold text-center text-slate-600 h-20 overflow-hidden">
                              {article.articleTitle}
                            </p>
                            <div className="w-full h-[0.5px] bg-slate-200 my-1"></div>
                            <div className="flex items-center justify-between py-1">
                              <div className="flex items-center gap-2 text-md text-slate-500">
                                <IoEye /> {article.articleViews}
                                <FaComments />
                                {article.articleComments} comments
                              </div>
                              <p className="text-md font-nunito text-center text-slate-500">
                                {timeAgo}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </>
          ) : (
            <div className="flex items-center justify-center w-full">
              <img
                src={"/icons/noimage-list.svg"}
                style={{ width: 300, height: 300 }}
              />
            </div>
          )}
        </div>
      </div>
      <Line />
    </div>
  );
};

export default NewsAndBlog;
