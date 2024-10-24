import React from "react";
import OurServices from "../components/OurServices";

const Services = ({ currentLanguage }) => {
  return (
    <div>
      <OurServices currentLanguage={currentLanguage} />
    </div>
  );
};

export default Services;
