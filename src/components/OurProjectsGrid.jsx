import React from "react";
import { useTranslation } from "react-i18next";
import { projectList } from "../projects-list";

const OurProjectsGrid = () => {
  const { t } = useTranslation();

  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#041E2D]/10 to-primary"></div>
      <div className="container py-32 flex flex-col gap-8 justify-center min-h-screen backdrop-blur-sm">
        <div className="flex flex-col gap-4 justify-between items-center lg:justify-between lg:flex-row z-10">
          <h1 className="text-accent text-3xl font-bold sm:text-6xl leading-snug">
            {t("Projects_title")}
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectList.map((project, index) => (
            <div
              key={project}
              className="h-80 rounded-xl overflow-hidden relative"
              data-aos="fade-up"
              data-aos-delay={index * 100}
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurProjectsGrid;
