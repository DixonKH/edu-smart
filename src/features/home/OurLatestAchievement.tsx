import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

import { useTranslation } from "react-i18next";
import Line from "./Line";
import { useArticleStore } from "../community/model/store";
import { BoardArticleInquiry } from "@/shared/types/article";
import { Direction } from "@/shared/enums/common.enum";
import { BoardArticleCategory } from "@/shared/enums/article.enum";
import { serverApi } from "@/shared/lib/config";

const OurLatestAhievement = () => {
  const { t } = useTranslation();
  const articles = useArticleStore((state) => state.articles);
  const getArticles = useArticleStore((state) => state.getArticles);
  const [articleData, setArticleData] = useState<BoardArticleInquiry>({
    page: 1,
    limit: 999,
    direction: Direction.DESC,
  });

  useEffect(() => {
    const fetchArticles = async () => await getArticles(articleData);
    fetchArticles();
  }, [articleData]);

  const freeArticles = articles.filter((article) => {
    return article.articleCategory === BoardArticleCategory.FREE;
  });

  return (
    <>
      <div className=" md:px-10 sm:px-5 mb-20">
        <div className="w-full md:flex md:flex-col lg:flex-row items-center justify-between">
          <div className="w-full text-center lg:p-0  md:px-10 mb-5 mt-20">
            <div className="text-center pt-1  md:pt-5">
              <p className="lg:text-2xl md:text-xl text-base sm:text-xl text-black">
                - {t("our_achievement")} -
              </p>
            </div>
            <p className="lg:text-4xl md:text-3xl sm:text-2xl text-xl md:p-2 ml-2 mt-1 font-medium w-full ">
              <span className="text-green1"> {t("our_achievement_h1")} </span>
            </p>
          </div>
        </div>
        <Carousel
          plugins={[Autoplay({ delay: 5000, stopOnInteraction: false })]}
          opts={{ loop: true }}
          className="md:px-0 sm:px-0 px-1"
        >
          <CarouselContent className="flex items-center w-full justify-start gap-6 md:gap-3 my-8 pl-8">
            {freeArticles.map((article) => {
              const imgPath = `${serverApi}/${article?.articleImage}`;
              return (
                <CarouselItem
                  key={article._id}
                  className="flex flex-col items-center justify-center px-0 w-full h-[540px] pb-3 md:basis-1/2 lg:basis-1/4 bg-white text-white rounded-xl hover:shadow-2xl hover:scale-85 transition-all duration-300 cursor-pointer"
                >
                  <img
                    src={imgPath}
                    alt="VideContent"
                    className="w-full h-full rounded-3xl object-full hover:scale-105 transition-all duration-300"
                  />
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </Carousel>
      </div>
      <Line />
    </>
  );
};

export default OurLatestAhievement;
