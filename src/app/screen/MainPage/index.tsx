//import React from "react";
import AboutUs from "./AboutUs";
import OurServices from "./OurServices";
import WhyChooseUs from "./WhyChooseUs";
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

const MainPage = () => {
  return (
    <div>
      
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
