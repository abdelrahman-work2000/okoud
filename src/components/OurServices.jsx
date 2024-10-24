import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import { useTranslation } from "react-i18next";
import { SERVICES_DATA } from "../data/ServicesData";

const OurServices = ({ currentLanguage }) => {
  const { t } = useTranslation();

  return (
    <div
      style={{
        backgroundImage: "url('/assets/images/ser.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="relative"
      id="explore-our-services"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#041E2D] to-primary/50"></div>
      <div className="container py-32 flex flex-col gap-8 justify-center min-h-screen backdrop-blur-sm">
        <div className="flex flex-col gap-4 justify-between items-center lg:justify-between lg:flex-row z-10">
          <h1 className="text-accent text-3xl font-bold sm:text-6xl text-center lg:text-start leading-snug">
            {t("Service_title")}
          </h1>
          <Link
            to="/services/service-request"
            className="bg-gradient-to-l from-[#005d8a] to-[#6c97b4] flex items-center px-4 py-2 rounded-md gap-2"
          >
            <button>{t("Nav_Contact")}</button>
          </Link>
        </div>
        <div className="flex gap-8 items-center flex-wrap justify-center z-10">
          {SERVICES_DATA.map((service, index) => {
            return (
              <div
                data-aos="fade-up"
                data-aos-delay={index * 100}
                key={service.id}
                className="w-96 h-[285px] p-4 rounded-xl  bg-gradient-to-t from-[#005d8a]/80 to-[#6c97b4]/60 flex justify-center items-center  flex-col gap-4 "
              >
                <div className="overflow-hidden w-full h-full">
                  <img
                    src={service.img}
                    alt="service-img"
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-xl lg:text-2xl">
                  {currentLanguage === "ar" ? service.title_ar : service.title}
                </h3>
                <Link className="flex gap-2 items-center" to={service.link}>
                  <span>{t("Service_btn")}</span>
                  {currentLanguage === "ar" ? (
                    <AiOutlineArrowLeft />
                  ) : (
                    <AiOutlineArrowRight />
                  )}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OurServices;
