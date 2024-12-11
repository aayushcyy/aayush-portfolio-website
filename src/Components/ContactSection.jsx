import React from "react";

function ContactSection() {
  return (
    <div className="w-full md:h-screen h-[48vh] py-16 flex flex-col items-center md:gap-[70px] gap-[55px] relative mt-10">
      <div className="w-full md:h-[50%] h-[47%] rounded-b-[30px] bg-[#2B2B2B] relative hover:scale-[1.02] transition-all duration-300">
        <a
          href="mailto:aayushcyy@gmail.com"
          className="md:text-[140px] text-6xl font-[900] uppercase absolute md:left-[26%] left-[15%] md:-bottom-[100px] top-[75%]"
        >
          Hire Me!
        </a>
      </div>

      <a
        href="mailto:aayushcyy@gmail.com"
        className="text-lg font-medium px-5 py-[2px] border-2 rounded-3xl group hover:text-[#FDD6D5] hover:border-[#FDD6D5] hover:scale-[1.01] transition-all duration-300 z-40"
      >
        aayushcyy@gmai.com
      </a>
    </div>
  );
}

export default ContactSection;
