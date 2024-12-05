
import React from "react";
import { FaBook } from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";
import MainImage from "/public/images/mainpageimage.jpg";
import { RiTeamFill } from "react-icons/ri";
import { MdPriceChange } from "react-icons/md";
import TeamGirls from "/public/images/teamgirls.jpg";
import { FaStar } from "react-icons/fa6";
import AboutUs from "./AboutUs";
import OurServices from "./OurServices";
import WhyChooseUs from "./WhyChooseUs";
import OurLatestAhievement from "./OurLatestAchievement";
import OurProcess from "./OurProcess";
import ContactUs from "./ContactUs";
import Testimonial from "./Testimonial";
import OurLatestAchievement from "./OurLatestAchievement";
import Line from "./Line";
import OurTeam from "./OurTeam";
import PricingTable from "./PricingTable";
import NewsAndBlog from "./NewsAndBlog";
import Faqs from "./Faqs";
import OurNewsletter from "./OurNewsletter";

type Props = {};

const MainPage = (props: Props) => {
  return (
    <div>
      <div className="flex justify-between container items-center">
        <div className="px-5 w-1/2 py-10">
          <div className="flex justify-start items-center gap-4 pt-8 pb-6">
            <div
              className="flex drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]
                    object-cover  items-center justify-center rounded-full w-10 h-10 bg-bgGreen"
            >
              <FaBook className="text-xl  text-white" />
            </div>
            <p className="text-2xl ">
              The best educational platform in Uzbekistan.
            </p>
          </div>
          <p className="text-4xl p-5">
            <span className="text-bgGreen">Professional</span> Affordable <br />
            Education Provider
          </p>
          <p className="text-gray-600 p-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
            quam et sapien sed magna placerat. Donec vel neque et nunc gravida
            ultricies. Vivamus sed diam non
          </p>
          <div className="flex justify-start items-center gap-5 p-4">
            <button
              className="flex drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]
                    object-cover items-center justify-between border px-3 py-1 hover:bg-bgGreen hover:text-white bg-yellow rounded-2xl "
            >
              Explore more
              <IoIosArrowRoundForward />
            </button>
            <button
              className="px-3 drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]
                    object-cover py-1 border-b-2 border-black"
            >
              View all services
            </button>
          </div>
        </div>
        <div className="p-5 w-1/2  flex">
          <div
            className="flex justify-start drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]
                    object-cover items-center gap-2 absolute mt-5 px-1 z-40 bg-yellow  boder rounded-xl"
          >
            <div className="flex items-center justify-center rounded-full w-6 h-6 bg-bgGreen">
              <RiTeamFill className="text-sm text-white" />
            </div>
            <p className="text-sm">Professional Teams</p>
          </div>

          <div className="realtive pl-10 w-[400px] flex items-start  z-30">
            <img
              src={MainImage}
              alt="Main image"
              className="border drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]
                    object-cover rounded-full"
            />
          </div>
          <div className="absolute pt-[170px] w-[200px] flex items-start  z-30">
            <img
              src={TeamGirls}
              alt="Main image"
              className="border drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]
                    object-cover rounded-full"
            />
          </div>
          <div className=" absolute z-40 pl-[300px] pt-[200px]">
            <div
              className="flex justify-start drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]
                    object-cover items-center gap-2  bg-yellow px-1  boder rounded-xl"
            >
              <div className="flex items-center justify-center rounded-full w-6 h-6 bg-bgGreen">
                <MdPriceChange className="text-xl text-yellow" />
              </div>
              <p className="text-sm">Affordable Price</p>
            </div>
          </div>
        </div>
      </div>
      <Line />
      <AboutUs />
      <OurServices />
      <WhyChooseUs />
      <OurLatestAchievement />
      <OurProcess />
      <ContactUs />
      <Testimonial />
      <OurTeam />
      <PricingTable />
      <NewsAndBlog />
      <Faqs />
      <OurNewsletter />
    </div>
  );
};

export default MainPage;
