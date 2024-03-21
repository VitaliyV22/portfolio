import React from "react";
import Css from "../assets/icons8-css-480.png";
import Html from "../assets/icons8-html-5-480.png";
import Tailwind from "../assets/tailwind.png";
import react from "../assets/react.png";
import Js from "../assets/icons8-javascript-480.png";
import NextJs from "../assets/next-js.svg";

export const About = () => {
  const skills = [
    { name: "HTML", Image: Html },
    { name: "CSS", Image: Css },
    { name: "Javascript", Image: Js },
    { name: "React", Image: react },
    { name: "Tailwind Css", Image: Tailwind },
    { name: "Next JS", Image: NextJs },
  ];
  return (
    <div className="w-screen h-screen flex items-center justify-center gap-20 ">
      <div className="flex flex-col h-[30rem]  w-[20%]  items-start gap-">
        <h2 className="text-4xl my-5 font-bold">About Me </h2>
        <div className="flex flex-col gap-5">
          <div>
            <p>
              {" "}
              I bring a distinctive perspective to front-end software
              development,having transitioned from a
              <span className="text-teal-200">
                {" "}
                robust background in banking to cultivate a passion for coding.
              </span>{" "}
            </p>
          </div>
          <div>
            <p>
              My proficiency in analytical thinking, and experience in the
              financial sector, complements my creative process in designing{" "}
              <span className="text-teal-200">seamless user experiences</span>.
              I am committed to continuous improvement, and the learning of new
              technologies.
            </p>
          </div>
          <div>
            <p>
              <span className="text-teal-200">
                When I'm not looking at the screen
              </span>{" "}
              I devote my free time to music production, working out and playing
              Catan with my friends.
            </p>
          </div>
        </div>
      </div>
      <div
        name="skills"
        className=" text-white  w-[30rem] h-[30rem] flex flex-col"
      >
        <div>
          <h2 className="text-4xl my-5 font-bold">Technologies I use</h2>
        </div>
        <div className="flex flex-col gap-5">
          {skills.map((skill, index) => (
            <ul key={index} className={"flex "}>
              <div href={skill.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={skill.Image}
                  alt={skill.name}
                  className="w-10 mx-auto "
                />
              </div>
              <li className="text-teal-200 font-inter font-bold px-5">
                {skill.name}
              </li>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
};
