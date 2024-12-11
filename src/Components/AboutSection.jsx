import React, { useRef } from "react";
import useAboutSectionAni from "../Hooks/useAboutSectionAni";

function AboutSection() {
  const containerRef = useRef();
  const boxRef = useRef();
  const headingRef = useRef();
  const subHeadRef = useRef();

  useAboutSectionAni({ containerRef, boxRef, headingRef, subHeadRef });
  return (
    <div
      className="w-full md:h-screen flex md:py-5 py-0 justify-between items-center"
      ref={containerRef}
    >
      <div
        className="bg-[#1D1D1D] rounded-md md:px-10 px-5 md:py-[80px] py-12 flex md:flex-row flex-col justify-between md:gap-0 gap-6"
        ref={boxRef}
      >
        <div
          className="md:w-[45%] md:text-[43px] text-[35px] md:leading-normal leading-tight font-semibold flex items-center"
          ref={headingRef}
        >
          Hi, I'm Aayush, a front-end developer based in Raipur, Chhattisgarh.
        </div>
        <div
          className="md:w-[45%] md:text-[27px] text-[22px] flex md:leading-normal leading-tight"
          ref={subHeadRef}
        >
          Crafting seamless web experiences, merging creativity and code to
          build responsive websites and explore new technologies.
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
