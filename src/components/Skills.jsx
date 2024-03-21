import React from 'react'

export const Skills = () => {
  return (
    <div>
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
  )
}
