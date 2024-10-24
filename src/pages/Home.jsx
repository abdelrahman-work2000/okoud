import React from "react";
import Header from "../components/Header";
import Kings from "../components/Kings";
import WhoAreWe from "../components/WhoAreWe";
import OurServices from "../components/OurServices";
import OurProjects from "../components/OurProjects";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";
import OurPartners from "../components/OurPartners";

const Home = ({ currentLanguage }) => {
  return (
    <div>
      <Kings currentLanguage={currentLanguage} />
      <Header currentLanguage={currentLanguage} />
      <WhoAreWe />
      <OurServices currentLanguage={currentLanguage} />
      <OurProjects />
      {/* <OurPartners /> */}
    </div>
  );
};

export default Home;
