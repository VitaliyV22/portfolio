import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

function Home() {
  return (
    <div name="home" className=" w-full h-screen">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="">Hello, my name is </p>
        <h1 className="text-4xl sm:text-7xl font-bold text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">Vitaliy</h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-slate-800">
          I'm a Front-End Developer.
        </h2>
        <p className="py-4 max-w-[700px]">
          focused on building exceptional digital experiences
        </p>
        <div>
          <button className="text-white z-200 font-bold group border-indigo-600 rounded-full border px-6 py-3 my-2 flex items-center hover:bg-indigo-600 hover:text-white hover:border-indigo-600">
            View Projects
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3 " />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
