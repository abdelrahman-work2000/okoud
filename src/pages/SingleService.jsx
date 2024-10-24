import React from "react";
import { SERVICES_DATA } from "../data/ServicesData";
import { useParams, Link } from "react-router-dom";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useTranslation } from "react-i18next";

const SingleService = ({ currentLanguage }) => {
  const { id } = useParams();

  const { t } = useTranslation();

  const serviceData = SERVICES_DATA.find((service) => service.slug === id);

  const subList =
    currentLanguage === "ar" ? serviceData.list_ar : serviceData.list;

  return (
    <div
      style={{
        backgroundImage: `url(${serviceData.headerImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="relative"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-primary to-[#004E74]/20 backdrop-blur-sm"></div>
      <div className="container py-16 flex justify-center items-center min-h-screen relative">
        <img
          src="/assets/images/vision-logo.png"
          alt=""
          className="absolute bottom-10 right-[2rem]  w-16 sm:w-28"
        />
        <div className="flex flex-col gap-4 items-center justify-center text-center z-10 leading-snug">
          <h1 className="text-accent text-3xl font-bold sm:text-6xl">
            {currentLanguage === "ar"
              ? serviceData.title_ar
              : serviceData.title}
          </h1>
          <p className="capitalize max-w-2xl  lg:text-xl">
            {currentLanguage === "ar"
              ? serviceData.description_ar
              : serviceData.description}
          </p>
          <VerticalTimeline
            {...(currentLanguage === "ar" && { layout: "1-column" })}
          >
            {subList.map((item) => (
              <VerticalTimelineElement
                key={item}
                contentStyle={{
                  background:
                    "linear-gradient(to top, rgba(0, 93, 138,.8), rgba(108, 151, 180,.6))",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <h3>{item}</h3>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
          <Link to="/services/service-request">
            <button className="bg-gradient-to-l from-[#005d8a] to-[#6c97b4] flex items-center px-4 py-2 rounded-md text-xl">
              <span>{t("Nav_Contact")}</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleService;
