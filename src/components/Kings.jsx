import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import { useTranslation } from "react-i18next";

const quotes = [
  {
    id: 1,
    bg: "/assets/images/header-video.mp4",
    quote: "SlideTwo_Quote",
    isQuote: false,
  },
  {
    id: 2,
    img: "/assets/images/son.png",
    quote: "Son_Quote",
    bg: "/assets/images/bg-quotes.jpeg",
    isQuote: true,
  },
  {
    id: 3,
    img: "/assets/images/father.png",
    quote: "Father_Quote",
    bg: "/assets/images/bg-quotes.jpeg",
    isQuote: true,
  },
];

const Kings = ({ currentLanguage }) => {
  const { t } = useTranslation();

  return (
    <div>
      <Swiper
        modules={[Autoplay]}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
      >
        {quotes.map((quote) => (
          <SwiperSlide
            key={quote.id}
            className={`min-h-screen relative flex flex-col gap-8 lg:flex-row lg:items-start ${
              currentLanguage === "ar" ? " lg:justify-end" : ""
            }`}
            style={
              quote.isQuote
                ? {
                    backgroundImage: `url(${quote.bg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }
                : {}
            }
          >
            <div className="absolute inset-0 bg-gradient-to-t from-primary to-secondary/20"></div>
            {!quote.isQuote && (
              <video
                loop
                muted
                autoPlay
                className="absolute inset-0 object-cover w-full h-full"
              >
                <source src={quote.bg} />
              </video>
            )}
            <img
              src="/assets/images/vision-logo.png"
              alt=""
              className="absolute left-[2rem] bottom-10 brightness-150 w-16 sm:w-28"
            />
            {quote.img && (
              <img
                src={quote.img}
                alt="quote"
                className="absolute bottom-0 right-0 object-cover h-[60%] lg:h-[80%] z-10"
              />
            )}
            {quote.isQuote && (
              <div className="bg-primary/50 rounded-lg my-16 mx-[2rem] lg:my-32 p-4 relative">
                <p className="font-bold max-w-4xl text-2xl lg:text-5xl !leading-snug">
                  {t(quote.quote)}
                </p>
                <ImQuotesLeft className="text-2xl lg:text-5xl absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2" />
                <ImQuotesRight className="text-2xl lg:text-5xl absolute bottom-0 right-0 transform translate-x-1/2 translate-y-1/2" />
              </div>
            )}
            {!quote.isQuote && (
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                <p className="font-bold text-4xl lg:text-8xl !leading-snug">
                  {t(quote.quote)}
                </p>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Kings;
