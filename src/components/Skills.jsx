import React from "react";
import BootStrap from "../assets/icons8-bootstrap-480.png";
import Css from "../assets/icons8-css-480.png";
import Html from "../assets/icons8-html-5-480.png";
import Jquery from "../assets/icons8-jquery-is-a-javascript-library-designed-to-simplify-html-96.png";
import Tailwind from "../assets/tailwind.png";
import react from "../assets/react.png";
import Js from "../assets/icons8-javascript-480.png";
import NextJs from "../assets/next-js.svg";

const Skills = () => {
  const skills = [
    { name: "HTML", Image: Html },
    { name: "CSS", Image: Css },
    { name: "Javascript", Image: Js },
    { name: "Jquery", Image: Jquery },
    { name: "React", Image: react },
    { name: "Tailwind Css", Image: Tailwind },
    { name: "BootStrap", Image: BootStrap },
    { name: "Next JS", Image: NextJs}
  ];
  return (
    <div id="skills" className=" text-white py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center">Skills</h2>
        <hr className="opacity-10"/>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
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
  );
};

export default Skills ;