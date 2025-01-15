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
      className="w-full md:h-[50vh] lg:h-[60vh] flex md:py-3 lg:py-4 py-0 justify-between items-center"
      ref={containerRef}
    >
      <div
        className="bg-[#2B2B2B] rounded-md md:px-6 px-5 md:py-[20px] py-12 flex md:flex-row flex-col justify-between md:gap-0 gap-6"
        ref={boxRef}
      >
        <div
          className="lg:w-[50%] md:w-[54%] md:text-[35px] lg:text-[40px] lg:leading-[1.3] text-[35px] md:leading-[1.2] leading-tight font-semibold flex items-center"
          ref={headingRef}
        >
          Hi, I'm Aayush, a front-end developer based in Raipur, Chhattisgarh.
        </div>
        <div
          className="md:w-[40%] lg:w-[40%] md:text-[18px] lg:text-[25px] text-[22px] flex md:leading-normal leading-tight"
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
