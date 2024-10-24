import { useState, useEffect } from "react";
import cookies from "js-cookie";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import SingleService from "./pages/SingleService";
import ServiceRequest from "./pages/ServiceRequest";
import Projects from "./pages/Projects";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import Spinner from "./components/Spinner/Spinner";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";

const App = () => {
  const [pageLoading, setPageLoading] = useState(false);

  const currentLanguage = cookies.get("i18next") || "ar";

  const { pathname } = useLocation();

  useEffect(() => {
    setPageLoading(true);
    setTimeout(() => {
      setPageLoading(false);
    }, 800);
  }, [pathname]);

  useEffect(() => {
    AOS.init({
      duration: 600,
      once: true,
      easing: "ease",
    });
  }, []);

  return (
    <>
      {pageLoading ? (
        <Spinner />
      ) : (
        <div
          className={`min-h-screen text-white overflow-hidden ${
            currentLanguage === "ar" ? "font-cairo" : "font-poppins"
          }`}
        >
          <Helmet
            htmlAttributes={{
              lang: currentLanguage,
              dir: currentLanguage === "en" ? "ltr" : "rtl",
            }}
          >
            <title>
              {currentLanguage === "ar" ? "عقود" : "Okoud"}
            </title>
          </Helmet>
          <Navbar
            currentLanguage={currentLanguage}
            setPageLoading={setPageLoading}
          />
          <Routes>
            <Route
              path="/"
              element={<Home currentLanguage={currentLanguage} />}
            />
            <Route
              path="/about"
              element={<About currentLanguage={currentLanguage} />}
            />
            <Route
              path="/services"
              element={<Services currentLanguage={currentLanguage} />}
            />
            <Route
              path="/services/service-request"
              element={<ServiceRequest currentLanguage={currentLanguage} />}
            />
            <Route
              path="/services/:id"
              element={<SingleService currentLanguage={currentLanguage} />}
            />
            <Route path="/projects" element={<Projects />} />
            <Route
              path="/contact"
              element={<ServiceRequest currentLanguage={currentLanguage} />}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer currentLanguage={currentLanguage} />
        </div>
      )}
    </>
  );
};

export default App;
