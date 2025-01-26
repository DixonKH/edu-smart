import { useEffect, useState } from "react";
import { MdCastForEducation } from "react-icons/md";
import Articles from "../../features/community/Articles";
import { TfiWrite } from "react-icons/tfi";
import CommunityHeader from "../../features/community/CommunityHeader";
import Line from "../../features/home/Line";
import { useNavigate } from "react-router-dom";
import { useArticleStore } from "@/features/community/model/store";
import { BoardArticleInquiry } from "@/shared/types/article";
import { Direction } from "@/shared/enums/common.enum";
import { BoardArticleCategory } from "@/shared/enums/article.enum";
import { IoSearchCircleSharp } from "react-icons/io5";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Community = () => {
  const navigate = useNavigate();
  const getArticles = useArticleStore((state) => state.getArticles);
  const articlesData = useArticleStore((state) => state.articles);
  const [searchText, setSearchText] = useState("");
  const total = useArticleStore((state) =>
    state.metaCounter.length > 0 ? state.metaCounter[0].total : 0
  );
  const [articles, setArticles] = useState<BoardArticleInquiry>({
    page: 1,
    limit: 9,
    sort: "createdAt",
    direction: Direction.DESC,
    search: {
      articleCategory: undefined,
      text: "",
    },
  });

  useEffect(() => {
    const fetchArticles = async () => {
      await getArticles(articles);
    };
    fetchArticles();
  }, [articles]);

  useEffect(() => {
    if (searchText.length === 0) {
      setArticles((prev) => ({ ...prev, search: { text: "" } }));
    }
  }, [searchText]);

  const handleNavigate = () => {
    navigate("/mypage", { state: { component: "WriteArticle" } });
  };

  const handlePageChange = (newPage: number) => {
    setArticles((prev) => ({
      ...prev,
      page: newPage,
    }));
  };

  const sortingHandler = (value: string) => {
    switch (value) {
      case "recent":
        setArticles((prev) => {
          return { ...prev, sort: "createdAt", direction: Direction.DESC };
        });
        break;
      case "old":
        setArticles((prev) => {
          return { ...prev, sort: "updatedAt", direction: Direction.ASC };
        });
        break;
      default:
        break;
    }
  };

  const categoryChangeHandler = (value: BoardArticleCategory) => {
    articles.page = 1;
    if (articles.search) {
      articles.search.articleCategory = value;
    }
    setArticles({ ...articles });
  };

  const totalPages = Math.ceil(total / articles.limit);

  return (
    <div>
      <CommunityHeader />
      <Line />
      <div className="lg:container md:px-10 sm:px-5 px-1">
        <div>
          <div className="flex items-center justify-between">
            <div>
              <p className="lg:text-2xl md:text-xl text-base sm:text-xl text-black">
                - News & Blog -
              </p>
              <p className=" lg:text-4xl md:text-3xl sm:text-2xl text-xl lg:p-4 md:p-2 p-1 font-medium">
                Our Latest
                <span className="text-green1"> News & Blog</span>
              </p>
            </div>
            <div>
              <div className="  flex justify-start lg:p-5 md:p-2 p-1 text-xs md:text-base  items-center lg:gap-5 md:gap-2 sm:gap-2 gap-1">
                <button
                  onClick={handleNavigate}
                  className="flex items-center justify-between px-3 py-2 hover:bg-green text-white bg-yellow rounded-2xl"
                >
                  Write An Article
                  <TfiWrite className="m-1" />
                </button>
              </div>
            </div>
          </div>
          <div className="flex w-full items-center justify-center lg:justify-end my-3">
            <div className=" w-full lg:w-[75%] flex items-center justify-center lg:justify-between">
              <div className="md:block relative w-full md:w-[40%]">
                <input
                  type="text"
                  value={searchText}
                  placeholder="Search..."
                  className="w-full p-2 px-10 outline-none rounded-3xl border border-gray-300"
                  onChange={(e: any) => setSearchText(e.target.value)}
                  onKeyDown={(e: any) => {
                    if (e.key === "Enter") {
                      console.log(
                        "Enter key pressed, searchTextHandler called!"
                      );
                      setArticles({
                        ...articles,
                        search: { text: searchText },
                      });
                    }
                  }}
                />
                <IoSearchCircleSharp className="absolute left-[0.5px] top-[0.5px] size-10 cursor-pointer text-green" />
              </div>
              <div className="hidden lg:flex flex-row items-center gap-2">
                <p className="text-md text-gray-600">Sort by:</p>
                <Select
                  defaultValue="recent"
                  onValueChange={(value) => {
                    console.log("Selected value:", value);
                    sortingHandler(value);
                  }}
                >
                  <SelectTrigger className="w-[100px] outline-none rounded-2xl p-3">
                    <SelectValue placeholder="recent" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="recent">Recent</SelectItem>
                      <SelectItem value="old">Old</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between">
            <div className="flex items-start justify-center w-full lg:w-1/4">
              <div className="col-span-1 w-full lg:w-72 py-5 border-green border rounded-xl mb-6">
                <div className="flex  mx-auto items-center justify-center rounded-full size-10 bg-yellow">
                  <div>
                    <MdCastForEducation className="text-xl  text-bgGreen" />
                  </div>
                </div>
                <p className="md:text-2xl text-center text-xl sm:text-xl">
                  Edu-Smart
                </p>
                <div className="flex flex-col md:flex-row lg:flex-col w-full">
                  <div className="mx-auto text-center  lg:p-3 md:p-2 p-1 text-xs md:text-xl w-full ">
                    <button
                      className={`w-[90%] border p-3 ${
                        articles.search?.articleCategory ===
                        BoardArticleCategory.NEWS
                          ? "bg-green text-white"
                          : "hover:bg-green hover:text-white"
                      } border-green rounded-xl`}
                      onClick={() =>
                        categoryChangeHandler(BoardArticleCategory.NEWS)
                      }
                    >
                      News
                    </button>
                  </div>
                  <div className="mx-auto text-center  lg:p-3 md:p-2 p-1 text-xs md:text-xl w-full">
                    <button
                      className={`w-[90%] border p-3 ${
                        articles.search?.articleCategory ===
                        BoardArticleCategory.RECOMMEND
                          ? "bg-green text-white"
                          : "hover:bg-green hover:text-white"
                      }  border-green rounded-xl`}
                      onClick={() =>
                        categoryChangeHandler(BoardArticleCategory.RECOMMEND)
                      }
                    >
                      Recomendation
                    </button>
                  </div>
                  <div className="mx-auto text-center  lg:p-3 md:p-2 p-1 text-xs md:text-xl w-full">
                    <button className={`w-[90%] border p-3 ${
                        articles.search?.articleCategory ===
                        BoardArticleCategory.FREE
                          ? "bg-green text-white"
                          : "hover:bg-green hover:text-white"
                      }  border-green rounded-xl`}
                      onClick={() =>
                        categoryChangeHandler(BoardArticleCategory.FREE)
                      }>
                      Free Board
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-full lg:w-3/4">
              <Articles
                articlesData={articlesData}
                totalPages={totalPages}
                total={total}
                articles={articles}
                handlePageChange={handlePageChange}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
