import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectCoverflow, Autoplay } from "swiper/modules";
import { useTranslation } from "react-i18next";
import { projectList } from "../projects-list";

const OurProjects = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-gradient-to-b from-primary/80 via-accent/10 to-white/10">
      <div className="container py-32 flex flex-col gap-8 justify-center min-h-screen">
        <div>
          <h1 className="text-accent text-3xl font-bold sm:text-6xl text-center lg:text-start leading-snug">
            {t("Projects_title")}
          </h1>
        </div>
        <div>
          <Swiper
            modules={[Pagination, EffectCoverflow, Autoplay]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={"auto"}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 1,
            }}
            className="pb-16 pt-8 mx-auto relative"
            pagination={{ clickable: true }}
            style={{
              "--swiper-pagination-color": "#0DC3D7",
              "--swiper-pagination-bullet-inactive-color": "#00000030",
              "--swiper-pagination-bullet-inactive-opacity": "1",
              "--swiper-pagination-bullet-size": "12px",
              "--swiper-pagination-bullet-horizontal-gap": "6px",
            }}
          >
            {projectList.map((project) => (
              <SwiperSlide
                key={project.id}
                className="h-96 rounded-xl overflow-hidden relative lg:w-[50%]"
              >
                <a href={project.link} target="_blank" rel="noreferrer">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/60 to-transparent flex justify-center items-center p-4 text-white text-xl lg:text-2xl font-bold">
                    {project.title}
                  </div>
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default OurProjects;
