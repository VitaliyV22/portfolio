import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import Css from "../assets/icons8-css-480.png";
import Html from "../assets/icons8-html-5-480.png";
import Tailwind from "../assets/tailwind.png";
import react from "../assets/react.png";
import Js from "../assets/icons8-javascript-480.png";
import NextJs from "../assets/next-js.svg";

function Home() {
  const skills = [
    { name: "HTML", Image: Html },
    { name: "CSS", Image: Css },
    { name: "Javascript", Image: Js },
    { name: "React", Image: react },
    { name: "Tailwind Css", Image: Tailwind },
    { name: "Next JS", Image: NextJs},
    
  ];
  return (
    <>
      <div className="lg:flex h-[50rem] ">
        <div
          name="home"
          className=" text-white  w-[50%] h-auto  flex items-center justify-center "
        >
          <div className=" ">
            
            <h1 className="text-5xl sm:text-6xl  font-bold mt-2  drop-shadow-lg">
              Vitaliy Vitanskyy
            </h1>
            <h2 className="text-3xl sm:text-4xl mt-4 font-bold">
              Front-End Developer
            </h2>
            <p className="py-6 max-w-[700px] text-lg">
              As a passionate Front-End Developer, I thrive on turning ideas
              into polished, user-friendly interfaces. My mission is to bring
              creativity and functionality together to build impactful web
              applications that leave a lasting impression.
            </p>
            <div>
              <button className="text-white z-200 font-bold group border-white rounded-full border px-8 py-4 my-2 flex items-center transition duration-300 ease-in-out transform hover:shadow-lg hover:text-black hover:scale-105">
                <Link to="work" smooth={true} duration={500}>
                  My Work
                </Link>
                <span className="group-hover:rotate-90 ml-3">
                  <HiArrowNarrowRight />
                </span>
              </button>
            </div>
          </div>
        </div>
        <div
          name="skills"
          className=" text-white  w-[50%] h-auto flex flex-col justify-center items-center"
        >
         <div>
         <h2 className="text-4xl font-bold mb-8 text-center">Tech Stack</h2>
         </div>
         <div className="grid grid-cols-3 sm:grid-cols-3 gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`text-center transform transition duration-300 hover:scale-105`}
            >
              <a href={skill.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={skill.Image}
                  alt={skill.name}
                  className="w-20 mx-auto mb-4 "
                />
              </a>
              <p className="font-bold">{skill.name}</p>
            </div>
          ))}
        </div>
        </div>
      </div>
    </>
  );
}

export default Home;
