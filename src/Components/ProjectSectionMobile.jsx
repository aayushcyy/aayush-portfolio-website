import React, { useRef } from "react";
import useProjectAniMobile from "../Hooks/useProjectAniMobile";
import TrendHiveImg from "../assets/TrendHive.png";
import TaskifyImg from "../assets/Taskify.png";
import TimerAppImg from "../assets/Timer-app.png";

function ProjectSectionMobile() {
  const projects4Mobile = [
    {
      src: TrendHiveImg,
      linkToProject: "https://bespoke-tiramisu-76ac7a.netlify.app/",
      name: "TrendHive",
    },
    {
      src: TaskifyImg,
      linkToProject: "https://verdant-eclair-eed65d.netlify.app/",
      name: "Taskify",
    },
    {
      src: TimerAppImg,
      linkToProject: "https://tranquil-dasik-1f0150.netlify.app/",
      name: "Timer App",
    },
  ];
  const childMobileRef = useRef([]);
  const containerMobileRef = useRef();

  useProjectAniMobile({
    childMobile: childMobileRef,
    containerMobile: containerMobileRef,
  });
  return (
    <div
      className="h-[80vh] w-full md:hidden flex flex-col items-center bg-[#2B2B2B] mb-[700px] mt-20 pt-[90px] relative"
      ref={containerMobileRef}
    >
      <h1 className="uppercase text-6xl font-[900]">Projects</h1>
      <div className="flex items-center h-screen w-full px-[2.5%] relative">
        {projects4Mobile.map((project, index) => {
          return (
            <div
              key={project.name}
              className="flex flex-col rounded-xl overflow-hidden w-[95%] h-[500px] card absolute top-[5%]"
              ref={(el) => (childMobileRef.current[index] = el)} // Adjust these values
            >
              <div className="project-card relative py-5 px-7 flex justify-between items-center bg-[#353535]">
                <h1 className="text-3xl font-semibold">{project.name}</h1>
                <p className="text-2xl font-thin border-[1px] rounded-md px-[6px] py-[2px]">
                  <a href={project.linkToProject} target="_blank">
                    <i className="ri-arrow-right-up-line"></i>
                  </a>
                </p>
              </div>
              <div className="relative flex items-center justify-center w-full h-full">
                <img
                  src={project.src}
                  alt={project.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProjectSectionMobile;
