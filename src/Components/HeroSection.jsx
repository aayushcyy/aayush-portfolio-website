import { Link } from "react-router-dom";
import React, { useRef } from "react";
import useHeroSectionAni from "../Hooks/useHeroSectionAni";

function HeroSection() {
  const navbarRef = useRef();
  const boxRef = useRef();
  const nameRef = useRef();
  const linkRef = useRef();
  const professionRef = useRef();
  useHeroSectionAni({ navbarRef, boxRef, nameRef, professionRef, linkRef });
  return (
    <div className="w-full md:h-screen h-[66vh] flex flex-col items-start md:py-5 py-8">
      {/* navbar */}
      <div className="flex w-full justify-between" ref={navbarRef}>
        {/* profile div */}
        <div className="flex group">
          {/* //img div */}
          <div className="py-[7px] px-[9px] bg-[#2B2B2B] flex items-center rounded-md">
            <a href="#project">
              <img
                src="../public/aayush-pp.png"
                className="w-8 flex-shrink-0"
              />
            </a>
          </div>
          {/* text div */}
          <div className="py-[7px] bg-[#2B2B2B] flex items-center -ml-1 rounded-e-md group transition-all duration-300 w-0 group-hover:w-[100px] group-hover:pl-[8px]">
            <p className="text-gray-300 font-medium opacity-0 transition-opacity duration-300 group-hover:opacity-100 whitespace-nowrap hover:text-[#FDD6D5]">
              <a href="#projects">Projects</a>
            </p>
          </div>
        </div>
        {/* mail div */}
        <div className="pt-10 pb-[10px] bg-[#1D1D1D] px-2 rounded-b-md absolute md:right-[120px] right-5 top-0 group hover:scale-105 transition-all duration-200">
          <a
            href="mailto:aayushcyy@gmail.com?subject=Hello Aayush&body=I would like to discuss..."
            className="border-[1px] border-white px-[6px] py-[3px] text-center rounded-md md:text-[21px] text-[19px] group-hover:border-[#FDD6D5] group-hover:text-[#FDD6D5] duration-200"
          >
            <i class="ri-chat-4-fill"></i>
          </a>
        </div>
      </div>
      {/* hero section */}
      <div className="flex flex-col w-full md:mt-80 mt-[310px] justify-center relative items-center">
        <div
          className="bg-[#2B2B2B] w-full md:h-[280px] h-[180px] rounded-t-[30px] absolute -top-48 z-10"
          ref={boxRef}
        ></div>
        <h1
          className="text-center md:text-[115px] text-[49px] font-[900] md:leading-normal leading-10  uppercase z-50 relative md:-top-0 -top-[68px]"
          ref={nameRef}
        >
          Aayush Chaudhary
        </h1>
        <div className="flex w-full items-center md:justify-between justify-center md:-mt-4 -mt-[58px] z-50">
          <p
            className="text-2xl font-semibold md:font-normal text-[#c7c7c7b0]"
            ref={professionRef}
          >
            Front-End Developer
          </p>
          <Link
            className="text-lg font-medium px-5 py-[2px] border-2 rounded-3xl group hover:text-[#FDD6D5] hover:border-[#FDD6D5] hover:scale-105 transition-all duration-300 md:block hidden"
            ref={linkRef}
          >
            Get in touch{" "}
            <span className="group-hover:-rotate-45 z-10">
              <i class="ri-arrow-right-up-line"></i>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
