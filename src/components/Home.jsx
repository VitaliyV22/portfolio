import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

function Home() {
  return (
    <div name="home" className=" text-white w-full h-screen flex items-center">
      <div className="max-w-lg mx-auto px-8">
        <p className="text-lg">Hey there! 👋 I'm</p>
        <h1 className="text-5xl sm:text-6xl font-bold mt-2 tracking-tighter drop-shadow-lg">Vitaliy</h1>
        <h2 className="text-3xl sm:text-4xl mt-4 font-bold leading-snug">Crafting digital experiences that <span className="text-yellow-300">captivate</span>.</h2>
        <p className="py-6 max-w-[700px] text-lg">As a passionate Front-End Developer, I thrive on turning ideas into polished, user-friendly interfaces. My mission is to bring creativity and functionality together to build impactful web applications that leave a lasting impression.</p>
        <div>
          <button className="text-white z-200 font-bold group border-white rounded-full border px-8 py-4 my-2 flex items-center transition duration-300 ease-in-out transform hover:bg-white hover:text-black hover:scale-105">
            Explore My Work
            <span className="group-hover:rotate-90 ml-3">
              <HiArrowNarrowRight />
            </span>
          </button>
        </div>
      </div>
      
    </div>
  );
}

export default Home;
