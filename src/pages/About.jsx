import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { AiOutlineArrowDown } from "react-icons/ai";
import { useTranslation } from "react-i18next";

const About = ({ currentLanguage }) => {
  const { t } = useTranslation();

  return (
    <div>
      <div
        style={{
          backgroundImage: "url('/assets/images/whoare.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="relative"
        id="who-are-we"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-primary to-[#004E74]/10 backdrop-blur-sm"></div>
        <div className="container py-16 flex justify-center items-center min-h-screen">
          <div
            className="flex flex-col gap-4 items-center justify-center text-center z-10 leading-snug"
            data-aos="fade-up"
          >
            <h1 className="text-accent text-3xl font-bold sm:text-6xl">
              {t("WhoAreWe_title")}
            </h1>
            <p className="capitalize max-w-2xl  lg:text-xl">
              {t("WhoAreWe_txt")}
            </p>
            <a href="#vision-and-mission">
              <button className="bg-gradient-to-l from-[#005d8a] to-[#6c97b4] flex items-center px-4 py-2 rounded-md gap-2">
                <span>{t("Header_Btn")}</span>
                <AiOutlineArrowDown />
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="relative" id="vision-and-mission">
        <div className="absolute inset-0 bg-gradient-to-b from-primary to-[#004E74] backdrop-blur-sm"></div>
        <div className="container relative py-16 flex flex-col gap-8 items-center min-h-screen lg:flex-row">
          <img
            src="/assets/images/vision-logo.png"
            alt=""
            className="absolute bottom-10 right-[2rem] w-16 sm:w-28"
          />
          <div
            className="flex-1 flex flex-col gap-4 items-center text-center lg:items-start lg:text-start"
            data-aos="fade-right"
          >
            <h1 className="text-accent text-3xl font-bold sm:text-6xl">
              {t("Vision_title")}
            </h1>
            <p className="capitalize lg:text-xl">{t("Vision_txt")}</p>
            <h1 className="text-accent text-3xl font-bold sm:text-6xl">
              {t("Mission_title")}
            </h1>
            <p className="capitalize lg:text-xl">{t("Mission_txt")}</p>
          </div>
          <div
            className="flex-1 flex justify-end items-center p-8"
            data-aos="fade-left"
          >
            <div className=" max-w-lg relative">
              <div className="absolute left-7 top-7 w-full h-full bg-[#091B29] rounded-xl"></div>
              <img
                src="/assets/images/whoareweee.webp"
                alt="analyses"
                className="object-cover relative z-10 rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundImage: "url('/assets/images/wh.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="py-16 relative"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#004E74] to-primary/50 backdrop-blur-sm"></div>
        <div className="container min-h-screen">
          <VerticalTimeline
            {...(currentLanguage === "ar" && { layout: "1-column" })}
          >
            <VerticalTimelineElement
              contentStyle={{
                background:
                  "linear-gradient(to top, rgba(0, 93, 138,.8), rgba(108, 151, 180,.6))",
                color: "#fff",
              }}
            >
              <h3 className="text-2xl lg:text-3xl">{t("Values_title")}</h3>
              <p className="lg:text-xl">{t("Values_txt")}</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              contentStyle={{
                background:
                  "linear-gradient(to top, rgba(0, 93, 138,.8), rgba(108, 151, 180,.6))",
                color: "#fff",
              }}
            >
              <h3 className="text-2xl lg:text-3xl">{t("Goals_title")}</h3>
              <p className="lg:text-xl">{t("Goals_txt")}</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              contentStyle={{
                background:
                  "linear-gradient(to top, rgba(0, 93, 138,.8), rgba(108, 151, 180,.6))",
                color: "#fff",
              }}
            >
              <h3 className="text-2xl lg:text-3xl">{t("Strategy_title")}</h3>
              <p className="lg:text-xl">{t("Strategy_txt")}</p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </div>
  );
};

export default About;
