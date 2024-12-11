import React, { useRef } from "react";
import useProjectAnimation from "../Hooks/useProjectAnimation";

function ProjectSection() {
  const projects = [
    {
      src: "TrendHive.png",
      linkToProject: "https://bespoke-tiramisu-76ac7a.netlify.app/",
      name: "TrendHive",
    },
    {
      src: "../../public/Taskify.png",
      linkToProject: "https://verdant-eclair-eed65d.netlify.app/",
      name: "Taskify",
    },
    {
      src: "../../public/Timer-app.png",
      linkToProject: "https://tranquil-dasik-1f0150.netlify.app/",
      name: "Timer App",
    },
  ];
  //for desktop
  const childRef = useRef([]);
  const containerRef = useRef();
  useProjectAnimation({
    child: childRef.current,
    container: containerRef.current,
  });

  //for mobile

  return (
    <div
      className="md:min-h-screen h-screen w-full md:flex hidden flex-col items-center bg-[#1E1E1E] mt-20 pt-[60px] relative mb-[800px]"
      ref={containerRef}
    >
      <h1 className="uppercase md:text-8xl text-6xl font-[900]">Projects</h1>
      <div className="flex items-center min-h-screen bg-red-400">
        {projects.map((project, index) => {
          return (
            <div
              key={project.name}
              className="flex flex-col rounded-xl overflow-hidden w-[800px] h-[480px] card absolute left-[18%] top-[25%] bg-purple-500"
              ref={(el) => (childRef.current[index] = el)} // Adjust these values
            >
              <div className="project-card relative py-5 px-7 flex justify-between items-center bg-[#353535]">
                <h1 className="text-3xl font-semibold">{project.name}</h1>
                <p className="text-2xl font-thin border-[1px] rounded-md px-[6px] py-[2px]">
                  <a href={project.linkToProject} target="_blank">
                    <i className="ri-arrow-right-up-line"></i>
                  </a>
                </p>
              </div>
              <div className="relative flex items-center justify-center">
                <img
                  src={project.src}
                  alt={project.name}
                  className="w-full h-full object-center"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProjectSection;
