import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import i18n from "i18next";
import { useTranslation } from "react-i18next";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Navbar = ({ currentLanguage, setPageLoading }) => {
  const [showMenu, setShowMenu] = useState(false);

  const { t } = useTranslation();

  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  return (
    <nav className="flex pt-8 justify-between items-center text-lg fixed top-0 left-0 right-0 -mt-2 lg:-mt-8 px-[24px] z-50">
      <div className="flex items-center gap-4 lg:gap-8">
        <NavLink to="/" className="overflow-hidden">
          <img
            src="/assets/images/nav-logo.png"
            alt="logo"
            className="object-cover w-16 aspect-square"
          />
        </NavLink>
        <div className="flex items-center gap-2 group">
          <span>{currentLanguage !== "ar" ? "EN" : "AR"}</span>
          <span className="group-hover:block hidden">|</span>
          <span
            className="group-hover:block hidden cursor-pointer hover:font-bold"
            onClick={() => {
              i18n.changeLanguage(currentLanguage === "ar" ? "en" : "ar");
              setPageLoading(true);
              window.location.reload();
            }}
          >
            {currentLanguage === "ar" ? "EN" : "AR"}
          </span>
          {currentLanguage === "ar" ? (
            <IoIosArrowBack />
          ) : (
            <IoIosArrowForward />
          )}
        </div>
      </div>
      <ul className="items-center gap-4 hidden lg:flex">
        <li>
          <NavLink to="/">{t("Nav_Home")}</NavLink>
        </li>
        <li>
          <NavLink to="/about">{t("Nav_About")}</NavLink>
        </li>
        <li>
          <NavLink to="/services">{t("Nav_Services")}</NavLink>
        </li>
        <li>
          <NavLink to="/projects">{t("Nav_Projects")}</NavLink>
        </li>
        <li>
          <NavLink to="/contact">{t("Nav_Contact")}</NavLink>
        </li>
        <li>
          <a href="#contact">{t("Nav_Contact_Us")}</a>
        </li>
      </ul>
      <div onClick={toggleMenu} className="lg:hidden cursor-pointer text-2xl">
        <AiOutlineMenu />
      </div>
      {showMenu && (
        <ul
          className="flex flex-col justify-center items-center gap-4 fixed inset-0 bg-primary/60 backdrop-blur-sm lg:hidden"
          onClick={toggleMenu}
        >
          <NavLink to="/">
            <li className="bg-white py-2 w-28 text-center rounded-md bg-gradient-to-l from-[#005d8a] to-[#6c97b4]">
              {t("Nav_Home")}
            </li>
          </NavLink>
          <NavLink to="/about">
            <li className="bg-white py-2 w-28 text-center rounded-md bg-gradient-to-l from-[#005d8a] to-[#6c97b4]">
              {t("Nav_About")}
            </li>
          </NavLink>
          <NavLink to="/services">
            <li className="bg-white py-2 w-28 text-center rounded-md bg-gradient-to-l from-[#005d8a] to-[#6c97b4]">
              {t("Nav_Services")}
            </li>
          </NavLink>
          <NavLink to="/projects">
            <li className="bg-white py-2 w-28 text-center rounded-md bg-gradient-to-l from-[#005d8a] to-[#6c97b4]">
              {t("Nav_Projects")}
            </li>
          </NavLink>
          <NavLink to="/contact">
            <li className="bg-white py-2 w-28 text-center rounded-md bg-gradient-to-l from-[#005d8a] to-[#6c97b4]">
              {t("Nav_Contact")}
            </li>
          </NavLink>
          <li className="bg-white py-2 w-28 text-center rounded-md bg-gradient-to-l from-[#005d8a] to-[#6c97b4]">
            <a href="#contact">{t("Nav_Contact_Us")}</a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
