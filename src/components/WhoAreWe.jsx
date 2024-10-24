import React from "react";
import { AiOutlineArrowDown } from "react-icons/ai";
import { useTranslation } from "react-i18next";

const WhoAreWe = () => {
  const { t } = useTranslation();

  return (
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
          <h1 className="text-accent text-3xl font-bold sm:text-6xl leading-snug">
            {t("WhoAreWe_title")}
          </h1>
          <p className="capitalize max-w-2xl  lg:text-xl">
            {t("WhoAreWe_txt")}
          </p>
          <a href="#explore-our-services">
            <button className="bg-gradient-to-l from-[#005d8a] to-[#6c97b4] flex items-center px-4 py-2 rounded-md gap-2">
              <span>{t("WhoAreWe_btn")}</span>
              <AiOutlineArrowDown />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default WhoAreWe;
