import React from "react";
import { useTranslation } from "react-i18next";

const NotFound = () => {
  const { t } = useTranslation();

  return (
    <div>
      <div className="container flex flex-col gap-4 justify-center items-center min-h-screen leading-snug">
        <h1 className="text-9xl text-accent font-bold">
          {t("Not_Found_Number")}
        </h1>
        <h2 className="text-3xl text-white font-bold">{t("Not_Found")}</h2>
      </div>
    </div>
  );
};

export default NotFound;
