import React from "react";
import LOR from "../assets/projects/lor.png";
import Ergo from "../assets/projects/ergo.png";

const Work = () => {
  const projects = [
    {
      name: "Project 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultricies velit id tellus commodo, at tempor lacus ultrices.",
      languages: ["HTML", "CSS", "JavaScript"],
      previewImage: Ergo,
      githubLink: "https://github.com/VitaliyV22/Waybeyond",
      demoLink: "https://master.d2nv73m0bi1w8n.amplifyapp.com/",
    },
    {
      name: "Project 2",
      description:
        "Sed scelerisque, velit nec gravida consectetur, ipsum felis sollicitudin nulla, a pretium justo magna et urna.",
      languages: ["React", "Tailwind CSS"],
      previewImage: LOR,
      githubLink: "https://github.com/VitaliyV22/Lord-of-The-Rings-Library",
      demoLink: "https://master.dznzdu9yy1b1u.amplifyapp.com/",
    },
    {
      name: "Project 3",
      description:
        "Pellentesque ac ex eu elit sagittis feugiat sit amet et justo. Duis nec tellus vitae ex fermentum molestie nec id tortor.",
      languages: ["Node.js", "Express", "MongoDB"],
      previewImage: "https://via.placeholder.com/300",
      githubLink: "https://github.com/project3",
      demoLink: "https://demo.project3.com",
    },
  ];
  return (
    <div> 
       <div id="work" className=" text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg flex flex-col justify-between"
            >
              <img
                src={project.previewImage}
                alt={project.name}
                className="mb-4 rounded-lg h-48 w-full object-cover"
              />
              <div>
                <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
              </div>
              <div className="flex flex-wrap">
                {project.languages.map((language, index) => (
                  <span
                    key={index}
                    className="bg-gray-700 px-2 py-1 text-sm rounded-md mr-2 mb-2"
                  >
                    {language}
                  </span>
                ))}
              </div>
              <div className="flex justify-between mt-4">
                <a
                  href={project.githubLink}
                  className="text-indigo-500 hover:text-indigo-400"
                >
                  Github
                </a>
                <a
                  href={project.demoLink}
                  className="text-indigo-500 hover:text-indigo-400"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
  
  );
};

export default Work ;
