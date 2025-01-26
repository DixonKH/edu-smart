import { FaComments } from "react-icons/fa";
import { IoEye } from "react-icons/io5";
import { useTranslation } from "react-i18next";
import { useArticleStore } from "../community/model/store";
import { useMemberStore } from "../teachers/model/store";
import { serverApi } from "@/shared/lib/config";
import { useEffect, useState } from "react";
import { BoardArticleInquiry } from "@/shared/types/article";
import { useNavigate } from "react-router-dom";
import { formatTimeAgo } from "@/shared/lib/config";
import { Direction } from "@/shared/enums/common.enum";
import { BoardArticleCategory } from "@/shared/enums/article.enum";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Link } from "react-router-dom";

export default function myArticles() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const getArticles = useArticleStore((state) => state.getArticles);
  const articlesData = useArticleStore((state) => state.articles);
  const currentUser = useMemberStore((state) => state.currentMember);
  const [articles, setArticles] = useState<BoardArticleInquiry>({
    page: 1,
    limit: 6,
    sort: "createdAt",
    direction: Direction.DESC,
    search: {
      articleCategory: BoardArticleCategory.NEWS,
      text: "",
    },
  });

  useEffect(() => {
    const fetchArticles = async () => {
      await getArticles(articles);
    };
    fetchArticles();
  }, [articles]);

  const myArticles = articlesData.filter((articles) => {
    return articles.memberId === currentUser?._id;
  });

  const handleNavigate = (article: any) => {
    navigate("/mypage", {
      state: { component: "WriteArticle", article },
    });
  };

  const handlePageChange = (newPage: number) => {
    setArticles((prev) => ({
      ...prev,
      page: newPage,
    }));
  };

  const totalPages = Math.ceil(myArticles.length / articles.limit);

  return (
    <div className="p-3 px-4">
      <div className="flex justify-center items-center">
        <h1 className="text-2xl font-medium mt-2">My Articles</h1>
      </div>
      <div>
        {myArticles.length !== 0 ? (
          <>
            <div className="flex items-center justify-start flex-wrap">
              {myArticles.map((article: any) => {
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
                      <div className="border w-full border-green1 rounded-lg">
                        <div className="relative flex items-end justify-center">
                          <img
                            src={imgPath}
                            alt="VideContent"
                            className="object-cover w-full h-80 rounded-lg"
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
                          <p className="px-2 my-1 text-xl font-nunito font-bold text-center text-slate-600">
                            {article.articleTitle}
                          </p>
                          <p
                            className="text-sm w-full h-[37px] font-nunito text-center text-slate-500 overflow-hidden"
                            dangerouslySetInnerHTML={{
                              __html: article.articleContent,
                            }}
                          ></p>
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              handleNavigate(article);
                            }}
                            className="w-full text-white py-1 bg-green rounded-lg my-2"
                          >
                            Update
                          </button>
                          <div className="w-full h-[0.5px] bg-slate-200 my-1"></div>
                          <div className="flex items-center justify-between py-1">
                            <div className="flex items-center gap-2 text-sm text-slate-500">
                              <IoEye /> {article.articleViews}
                              <FaComments />
                              {article.articleComments} comments
                            </div>
                            <p className="text-sm font-nunito text-center text-slate-500">
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
            <div className="text-center text-md text-lg mb-6 mt-4">
              Total{" "}
              <span className="bg-red text-white rounded-full p-1 px-3">
                {myArticles.length}
              </span>{" "}
              articles available
            </div>
            <div className="text-center text-md text-lg mb-8 cursor-pointer">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious
                      onClick={(e) => {
                        e.preventDefault();
                        if (articles.page > 1) {
                          handlePageChange(articles.page - 1);
                        }
                      }}
                    />
                  </PaginationItem>
                  {[...Array(totalPages)].map((_, i) => (
                    <PaginationItem key={i}>
                      <PaginationLink
                        onClick={(e) => {
                          e.preventDefault();
                          handlePageChange(i + 1);
                        }}
                        isActive={articles.page === i + 1}
                      >
                        {i + 1}
                      </PaginationLink>
                    </PaginationItem>
                  ))}
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext
                      onClick={(e) => {
                        e.preventDefault();
                        if (articles.page < totalPages) {
                          handlePageChange(articles.page + 1);
                        }
                      }}
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
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
  );
}
