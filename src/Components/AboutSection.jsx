import React from "react";

function AboutSection() {
  return (
    <div className="w-full md:h-screen flex md:py-5 py-0 justify-between items-center">
      <div className="bg-[#1D1D1D] rounded-md md:px-10 px-5 md:py-[80px] py-12 flex md:flex-row flex-col justify-between md:gap-0 gap-6">
        <div className="md:w-[45%] md:text-[43px] text-[35px] md:leading-normal leading-tight font-semibold flex items-center">
          Hi, I'm Aayush, a front-end developer based in Raipur, Chhattisgarh.
        </div>
        <div className="md:w-[45%] md:text-[27px] text-[22px] flex md:leading-normal leading-tight">
          Crafting seamless web experiences, merging creativity and code to
          build responsive websites and explore new technologies.
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
