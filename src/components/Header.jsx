import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import { useTranslation } from "react-i18next";
import { FaFacebookSquare } from "react-icons/fa";

const Header = ({ currentLanguage }) => {
  const { t } = useTranslation();

  return (
    <header>
      <div className="container relative py-8 pt-16 lg:pt-8 flex flex-col gap-16 items-center min-h-screen lg:flex-row">
        <div
          className="flex-1 flex flex-col gap-4 items-center text-center lg:items-start lg:text-start"
          data-aos="fade-right"
        >
          <h1 className="text-accent text-3xl font-bold sm:text-6xl capitalize leading-snug">
            {t("Header_Title")}
          </h1>
          <p className="lg:text-xl">{t("Header_Text")}</p>
          <a href="#who-are-we">
            <button className="bg-gradient-to-l capitalize from-[#005d8a] to-[#6c97b4] flex items-center px-4 py-2 rounded-md gap-2">
              <span>{t("Header_Btn")}</span>
              {currentLanguage === "ar" ? (
                <AiOutlineArrowLeft />
              ) : (
                <AiOutlineArrowRight />
              )}
            </button>
          </a>
        </div>
        <div
          className="flex-1 flex justify-center items-center p-8"
          data-aos="fade-left"
        >
          <div className="relative max-w-xs">
            <div className="absolute -bottom-10 -right-[2rem] md:-right-1/4 w-full h-full bg-secondary"></div>
            <div className="absolute -top-10 -left-[2rem] md:-left-1/4 w-full h-full border-[10px] border-secondary"></div>
            <img
              src="/assets/images/robot-hand.jpg"
              alt="robot-hand"
              className="object-cover relative z-10"
            />
          </div>
        </div>
        <div
          className={`absolute top-1/2 hidden lg:block -translate-y-1/2 ${
            currentLanguage === "ar" ? "left-[24px]" : "right-[24px]"
          }`}
        >
          <ul className="flex flex-col gap-4 text-2xl">
            <li>
              <a
                href="https://www.facebook.com/profile.php?id=61551553014359"
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
    </header>
  );
};

export default Header;
