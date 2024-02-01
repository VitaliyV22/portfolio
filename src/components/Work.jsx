import React from "react";
import WorkImg from "../assets/projects/workImg.jpeg";

export const Work = () => {
  return (
    <div name="work" className=" w-full md:h-screen text-white">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col w-full justify-center h-full">
        <div className="pb-8">
          <p className="text-5xl font-bold inline border-b-4 text-white border-orange-600 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
            Projects
          </p>
          <p className="py-6 text-lg drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">Check out my projects</p>
        </div>
        {/* Container */}

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {/* Grid item */}
          <div
            style={{ backgroundImage: `url(${WorkImg})` }}
            className="shadow-lg shadow-white group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                React Js App
              </span>
              <div className="pt-8 text-center">
                <a href="">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-indigo-600 font-bold text-large">
                    Demo
                  </button>
                </a>
                <a href="">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-indigo-600 font-bold text-large">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${WorkImg})` }}
            className="shadow-lg shadow-white group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                React Js App
              </span>
              <div className="pt-8 text-center">
                <a href="">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-indigo-600 font-bold text-large">
                    Demo
                  </button>
                </a>
                <a href="">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-indigo-600 font-bold text-large">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${WorkImg})` }}
            className="shadow-lg shadow-white group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                React Js App
              </span>
              <div className="pt-8 text-center">
                <a href="">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-indigo-600 font-bold text-large">
                    Demo
                  </button>
                </a>
                <a href="">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-indigo-600 font-bold text-large">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};
