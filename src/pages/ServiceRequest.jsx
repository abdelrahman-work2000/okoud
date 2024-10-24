import React from "react";
import { BsSend } from "react-icons/bs";
import { useTranslation } from "react-i18next";
import { SERVICES_DATA } from "../data/ServicesData";

const ServiceRequest = ({ currentLanguage }) => {
  const { t } = useTranslation();

  return (
    <div
      style={{
        backgroundImage: `url("/assets/images/service-req.webp")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="relative"
    >
      <div className="absolute inset-0 bg-gradient-to-t from-primary to-[#005d8a]/60"></div>
      <div className="container min-h-screen flex flex-col justify-center items-center ">
        <img
          src="/assets/images/vision-logo.png"
          alt=""
          className="absolute bottom-10 left-[24px] object-cover w-16 sm:w-28"
        />
        <form
          className="flex flex-col gap-4 justify-center text-center z-10 w-full mx-auto py-16 lg:w-1/2"
          data-aos="fade-up"
        >
          <h2 className="text-accent text-3xl font-bold sm:text-6xl">
            {t("Request_title")}
          </h2>
          <p className="sm:text-2xl">{t("Request_txt")}</p>
          <input
            type="text"
            placeholder={t("Name_placeholder")}
            className="bg-primary p-4 rounded-md outline-none focus:ring-2 focus:ring-accent"
          />
          <input
            type="text"
            placeholder={t("Email_placeholder")}
            className="bg-primary p-4 rounded-md outline-none focus:ring-2 focus:ring-accent"
          />
          <select
            name="service"
            className="bg-primary p-4 rounded-md outline-none focus:ring-2 focus:ring-accent"
            defaultValue={"Select Service"}
          >
            <option value="Select Service" disabled>
              {t("Service_select")}
            </option>
            {SERVICES_DATA.map((service, index) => {
              return (
                <option
                  key={index}
                  value={
                    currentLanguage === "ar" ? service.title_ar : service.title
                  }
                >
                  {currentLanguage === "ar" ? service.title_ar : service.title}
                </option>
              );
            })}
          </select>
          <textarea
            name="message"
            placeholder={t("Message_placeholder")}
            rows="5"
            className="bg-primary p-4 rounded-md outline-none focus:ring-2 focus:ring-accent resize-y"
          ></textarea>
          <button className="rounded-md flex items-center p-4 gap-2 bg-gradient-to-l from-[#005d8a] to-[#6c97b4]  self-center">
            <span>{t("Request_btn")}</span>
            <BsSend />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ServiceRequest;
