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
      className="w-full md:h-screen lg:h-[60vh] flex md:py-5 lg:py-4 py-0 justify-between items-center"
      ref={containerRef}
    >
      <div
        className="bg-[#2B2B2B] rounded-md md:px-10 px-5 md:py-[80px] py-12 flex md:flex-row flex-col justify-between md:gap-0 gap-6"
        ref={boxRef}
      >
        <div
          className="md:w-[45%] lg:w-[50%] md:text-[43px] lg:text-[40px] lg:leading-[1.3] text-[35px] md:leading-normal leading-tight font-semibold flex items-center"
          ref={headingRef}
        >
          Hi, I'm Aayush, a front-end developer based in Raipur, Chhattisgarh.
        </div>
        <div
          className="md:w-[45%] lg:w-[40%] md:text-[27px] lg:text-[25px] text-[22px] flex md:leading-normal leading-tight"
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
