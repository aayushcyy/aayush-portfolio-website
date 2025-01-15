import React from "react";
import TrendHiveImg from "../assets/TrendHive.png";
import TaskifyImg from "../assets/Taskify.png";
import TimerAppImg from "../assets/Timer-app.png";
import BdaySite from "../assets/bdaysite.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // Corrected import

function ProjectSection() {
  const projects = [
    {
      src: BdaySite,
      linkToProject: "https://bdaycard-delta.vercel.app/",
      name: "Bday Card Generator",
      about:
        "Send a digital birthday card that lets your friends blow out the candles virtually!",
      tools:
        "NextJs, React, Firebase, Framer Motion, JavaScript, HTML, CSS, Tailwind",
    },
    {
      src: TrendHiveImg,
      linkToProject: "https://bespoke-tiramisu-76ac7a.netlify.app/",
      name: "TrendHive",
      about: "An e-commerce website for buying trending apparels",
      tools: "HTML, CSS, JavaScript, Tailwind, Zustand, React, Framer Motion",
    },
    {
      src: TaskifyImg,
      linkToProject: "https://verdant-eclair-eed65d.netlify.app/",
      name: "Taskify",
      about: "A task management app, that helps you to manage your tasks",
      tools: "HTML, CSS, JavaScript, Tailwind, Zustand, React, Framer Motion",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      className="md:h-[85vh] lg:h-[88vh] h-screen w-full md:flex hidden flex-col items-center bg-[#2B2B2B] mt-20 lg:mt-0 pt-[40px] lg:pt-8 relative mb-[150px] lg:mb-0"
    >
      <motion.h1
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="uppercase md:text-8xl text-6xl font-[900]"
      >
        Projects
      </motion.h1>

      <div className="flex gap-10 lg:gap-8 h-full items-center justify-center relative w-full px-14 lg:px-0 flex-wrap scroll-smooth">
        {projects.map((project, index) => (
          <div
            className="flex flex-col w-[300px] lg:w-[250px] h-[330px] px-3 py-4 gap-2 bg-[#1A1A1A] rounded-lg"
            key={index}
          >
            <Link
              to={project.linkToProject}
              target="_blank"
              className="flex flex-col w-[100%] h-[120px] bg-black rounded-md overflow-hidden object-center justify-center items-center relative group cursor-pointer"
            >
              <div>
                <img
                  src={project.src}
                  alt={project.name}
                  className="w-full h-full scale-110 hover:scale-[1.2] transition-all duration-200 hover:opacity-50"
                />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden group-hover:flex w-12 h-12 bg-[#1A1A1A] rounded-xl justify-center items-center">
                  <i className="ri-eye-line text-white text-xl"></i>
                </div>
              </div>
            </Link>
            <div className="flex flex-col gap-[6px]">
              <div className="flex flex-col gap-[1px]">
                <div className="flex w-full justify-between items-center">
                  <p className="text-xl font-semibold">{project.name}</p>
                  <Link
                    to={project.linkToProject}
                    target="_blank"
                    className="font-base leading-[1.25] text-white text-2xl hover:scale-110 transition-all duration-200 hover:text-yellow-300"
                  >
                    <i className="ri-github-fill"></i>
                  </Link>
                </div>
                <p className="w-[90%] text-sm font-base leading-[1.35]">
                  {project.about}
                </p>
              </div>
              <div className="flex flex-col gap-[2px]">
                <p className="text-base font-semibold">Tools</p>
                <p className="text-sm font-base leading-[1.35]">
                  {project.tools}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default ProjectSection;
