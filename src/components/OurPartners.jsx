import React from "react";
import { useTranslation } from "react-i18next";

const OurPartners = () => {
  const { t } = useTranslation();

  return (
    <div
      style={{
        backgroundImage: "url('/assets/images/bg-quotes.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="relative"
    >
      <div className="absolute inset-0 bg-gradient-to-t from-primary to-primary/70"></div>
      <div className="container flex flex-col py-16 gap-16 items-center justify-center min-h-screen lg:items-start">
        <div className="z-10">
          <h1 className="text-accent text-3xl font-bold sm:text-6xl text-center lg:text-start leading-snug">
            {t("Partners_title")}
          </h1>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mx-auto z-10">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((partner, index) => {
            return (
              <div
                className="bg-gradient-to-t from-[#005d8a]/10 to-[#6c97b4]/60 p-4 rounded-xl"
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="w-44 h-28 p-4 rounded-xl bg-white flex justify-center items-center flex-col gap-4">
                  <img
                    src={`/assets/images/partners/${partner}.png`}
                    alt="service-img"
                    className="w-full h-72 object-contain"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OurPartners;
