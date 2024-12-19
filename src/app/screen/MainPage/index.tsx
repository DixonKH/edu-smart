//import React from "react";
import AboutUs from "./AboutUs";
import OurServices from "./OurServices";
import WhyChooseUs from "./WhyChooseUs";
import OurProcess from "./OurProcess";
import ContactUs from "./ContactUs";
import Testimonial from "./Testimonial";
import OurLatestAchievement from "./OurLatestAchievement";
import OurTeam from "./OurTeam";
import PricingTable from "./PricingTable";
import NewsAndBlog from "./NewsAndBlog";
import OurNewsletter from "./OurNewsletter";
import Header1 from "./Header1";
import Line from "./Line";

const MainPage = () => {
  return (
    <div>
      <Header1  />
      <Line/>
      <AboutUs />
      <WhyChooseUs />
      <OurLatestAchievement />
      <OurProcess />
      <ContactUs />
      <Testimonial /> 
      <OurTeam />
      <PricingTable />
      <NewsAndBlog />
      <OurNewsletter />
    </div>
  );
};

export default MainPage;
