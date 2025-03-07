import React from "react";

function ContactSection() {
  return (
    <div className="w-full md:h-[70vh] lg:h-[70vh] h-[60vh] py-16 flex flex-col items-center md:gap-[70px] gap-[55px] relative">
      <div className="w-full md:h-[60%] lg:h-[68%] h-[47%] rounded-b-[30px] bg-[#2B2B2B] relative hover:scale-[1.02] transition-all duration-300">
        <a
          href="mailto:aayushcyy@gmail.com"
          className="md:text-[120px] lg:text-[130px] text-6xl font-[900] uppercase absolute md:left-0 md:top-28 md:-bottom-[100px] top-[75%] lg:left-0 lg:w-full md:w-full w-full md:text-center lg:text-center text-center lg:top-[60%]"
        >
          Hire Me!
        </a>
      </div>

      <a
        href="mailto:aayushcyy@gmail.com"
        className="text-[16px] md:text-[14px] lg:text-[17px] font-medium px-5 py-[2px] border-2 rounded-3xl group hover:text-[#FDD6D5] hover:border-[#FDD6D5] hover:scale-[1.01] transition-all duration-300 z-40"
      >
        aayushcyy@gmail.com
      </a>
    </div>
  );
}

export default ContactSection;
