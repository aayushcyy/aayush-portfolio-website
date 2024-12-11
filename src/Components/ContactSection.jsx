import React from "react";

function ContactSection() {
  return (
    <div className="w-full h-screen py-16 flex flex-col items-center gap-[70px] relative mt-10">
      <div className="w-full h-[50%] rounded-b-[30px] bg-[#1E1E1E] relative hover:scale-[1.02] transition-all duration-300">
        <a
          href="mailto:aayushcyy@gmail.com"
          className="text-[140px] font-[900] uppercase absolute left-[26%] -bottom-[100px]"
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
