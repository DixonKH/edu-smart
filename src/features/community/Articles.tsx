import { Link } from "react-router-dom";
import { FaComments } from "react-icons/fa";
import { BoardArticle, BoardArticleInquiry } from "@/shared/types/article";
import { IoEye } from "react-icons/io5";
import { serverApi } from "@/shared/lib/config";
import { formatTimeAgo } from "@/shared/lib/config";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

type ArticleProps = {
  articlesData: BoardArticle[];
  articles: BoardArticleInquiry;
  total: number;
  totalPages: number;
  handlePageChange(newPage: number): void;
};

const Articles = (props: ArticleProps) => {
  const { articlesData, articles, total, totalPages, handlePageChange } = props;

  return (
    <div className="w-full">
      {articlesData.length !== 0 ? (
        <>
          <div className="flex items-center justify-start flex-wrap">
            {articlesData.map((article: any) => {
              const imgPath = article?.articleImage;
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
                        <p className="px-2 my-1 text-xl font-nunito font-bold text-center text-slate-600 h-12 overflow-hidden">
                          {article.articleTitle}
                        </p>
                        <p
                          className="text-sm w-full h-[38px] font-nunito text-center text-slate-500 overflow-hidden"
                          dangerouslySetInnerHTML={{
                            __html: article.articleContent,
                          }}
                        ></p>
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
          <div className="text-center text-lg mb-6 mt-4">
            Total{" "}
            <span className="bg-slate-400 text-white font-medium p-1 px-2 rounded-full">
              {total}
            </span>{" "}
            articles available
          </div>
          <div className="text-center text-md text-lg mb-8 cursor-pointer flex">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    href="#"
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
                      className="hidden md:flex"
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
                    href="#"
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
  );
};

export default Articles;
