import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { MdCall, MdLocationOn } from "react-icons/md";
import { HiMail } from "react-icons/hi";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import { useTranslation } from "react-i18next";
import { FaFacebookSquare } from "react-icons/fa";

const Footer = ({ currentLanguage }) => {
  const { t } = useTranslation();

  return (
    <footer className="bg-gradient-to-t from-[#005d8a] to-primary" id="contact">
      <div className="container py-16 flex flex-col gap-8 relative min-h-screen">
        <div className="text-4xl sm:text-6xl flex-[2] flex flex-col gap-8 leading-snug">
          <h2 className="text-accent font-bold">{t("Footer_title")}</h2>
          <h3>{t("Footer_txt")}</h3>
        </div>
        <div className=" self-center flex flex-col gap-4 items-center justify-between">
          <div className="lg:text-xl flex flex-col gap-4 w-full">
            <span className="text-xl lg:text-2xl">{t("From_txt")}</span>
            <ul className="sm:flex-row flex flex-col items-start lg:items-center justify-center gap-4">
              <li className="items-center gap-2 flex">
                <MdLocationOn className="text-2xl" />
                <span>{t("Location_txt")}</span>
              </li>
              <li className="items-center gap-2 flex">
                <FaWhatsapp className="text-2xl" />
                <span>
                  <a href="https://wa.me/+966504793894" dir="ltr">
                    +966 50 479 3894
                  </a>
                </span>
              </li>
              <li className="items-center gap-2 flex">
                <MdCall className="text-2xl" />
                <span>
                  <a href="tel:+966504793894" dir="ltr">
                    +966 50 479 3894
                  </a>
                </span>
              </li>
            </ul>
          </div>
          {/* <div className="lg:text-xl flex flex-col w-full gap-4">
            <span className="text-xl lg:text-2xl">{t("From_txt2")}</span>
            <ul className="sm:flex-row flex flex-col gap-4 items-start lg:items-center justify-center">
              <li className="items-center gap-2 flex">
                <MdLocationOn className="text-2xl" />
                <span>{t("Location_txt2")}</span>
              </li>
              <li className="items-center gap-2 flex">
                <FaWhatsapp className="text-2xl" />
                <span>
                  <a href="https://wa.me/+966504793894" dir="ltr">
                    +966 50 479 3894
                  </a>
                </span>
              </li>
              <li className="items-center gap-2 flex">
                <MdCall className="text-2xl" />
                <span>
                  <a href="tel:+966504793894" dir="ltr">
                    +966 50 479 3894
                  </a>
                </span>
              </li>
            </ul>
          </div> */}
          <ul className="flex gap-4 text-2xl lg:hidden">
            <li>
              <a
                href="https://www.facebook.com/profile.php?id=????????"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebookSquare />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/????????"
                target="_blank"
                rel="noreferrer"
              >
                <BsTwitter />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
              >
                <BsInstagram />
              </a>
            </li>
          </ul>
          {/* <div className="items-center gap-2 flex lg:text-xl">
            <HiMail className="text-2xl" />
            <span>
              <a href="mailto:info@okoud.sa">info@okoud.sa</a>
            </span>
          </div> */}
          <div className="self-center lg:text-lg">{t("CopyRight_txt")}</div>
        </div>
        <div
          className={`absolute top-1/2 hidden lg:block -translate-y-1/2 ${
            currentLanguage === "ar" ? "left-[24px]" : "right-[24px]"
          }`}
        >
          <ul className="flex flex-col gap-4 text-2xl">
            <li>
              <a
                href="https://www.facebook.com/profile.php?id=????????"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebookSquare />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/????????"
                target="_blank"
                rel="noreferrer"
              >
                <BsTwitter />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
              >
                <BsInstagram />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
