//import React from "react";
import AboutUs from "../../features/home/AboutUs";
import OurProcess from "../../features/home/OurProcess";
import Testimonial from "../../features/home/Testimonial";
import OurTeam from "../../features/home/OurTeam";
import OurNewsletter from "../../features/home/OurNewsletter";
import Header1 from "../../features/home/Header1";
import Line from "../../features/home/Line";
import WhyChooseUs from "@/features/home/WhyChooseUs";
import ContactUs from "@/features/home/ContactUs";
import NewsAndBlog from "@/features/home/NewsAndBlog";
import OurLatestAchievement from "../../features/home/OurLatestAchievement";

const MainPage = () => {
  return (
    <div>
      <Header1 />
      <Line />
      <AboutUs />
      <WhyChooseUs />
      <OurLatestAchievement />
      <OurProcess />
      <ContactUs />
      <Testimonial />
      <OurTeam />
      <NewsAndBlog />
      <OurNewsletter />
    </div>
  );
};

export default MainPage;
