import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="w-full min-h-screen md:px-[120px]">
      <div className="w-full h-screen flex flex-col items-start py-5">
        <div className="flex w-full justify-between">
          {/* profile div */}
          <div className="flex group">
            {/* //img div */}
            <div className="py-[7px] px-[9px] bg-[#2B2B2B] flex items-center rounded-md">
              <Link to={"/"}>
                <img
                  src="../public/aayush-pp.png"
                  className="w-8 flex-shrink-0"
                />
              </Link>
            </div>
            {/* text div */}
            <div className="py-[7px] bg-[#2B2B2B] flex items-center -ml-1 rounded-e-md group transition-all duration-300 w-0 group-hover:w-[100px] group-hover:pl-[8px]">
              <p className="text-gray-300 font-medium opacity-0 transition-opacity duration-300 group-hover:opacity-100 whitespace-nowrap hover:text-[#FDD6D5]">
                <Link to={"/"}>Projects</Link>
              </p>
            </div>
          </div>
          {/* mail div */}
          <div className="pt-10 pb-[10px] bg-[#1D1D1D] px-2 rounded-b-md absolute right-[120px] top-0 group hover:scale-105 transition-all duration-200">
            <a
              href="mailto:aayushcyy@gmail.com?subject=Hello Aayush&body=I would like to discuss..."
              className="border-[1px] border-white px-[6px] py-[3px] text-center rounded-md text-[21px] group-hover:border-[#FDD6D5] group-hover:text-[#FDD6D5] duration-200"
            >
              <i class="ri-chat-4-fill"></i>
            </a>
          </div>
        </div>
        {/* hero section */}
        <div className="flex flex-col w-full mt-80 justify-center relative">
          <div className="bg-[#2B2B2B] w-full h-[280px] rounded-t-[30px] absolute -top-48 z-10"></div>
          <h1 className="text-center text-[115px] font-[900] uppercase z-50 relative">
            Aayush Chaudhary
          </h1>
          <div className="flex w-full items-center justify-between -mt-4 z-50">
            <p className="text-2xl">Front-End Developer</p>
            <Link className="text-lg font-medium px-5 py-[2px] border-2 rounded-3xl group hover:text-[#FDD6D5] hover:border-[#FDD6D5] hover:scale-105 transition-all duration-300">
              Get in touch{" "}
              <span className="group-hover:-rotate-45 z-10">
                <i class="ri-arrow-right-up-line"></i>
              </span>
            </Link>
          </div>
        </div>
      </div>
      <h1>aayush chaudhary</h1>
    </div>
  );
}

export default App;
