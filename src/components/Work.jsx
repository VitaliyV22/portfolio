import React from "react";
import LOR from "../assets/projects/lor.png";
import Ergo from "../assets/projects/ergo.png";
import MovieClips from "../assets/projects/MovieClips.PNG"
const Work = () => {
  const projects = [
    {
      name: "Movie Clips",
      description:
        "Movie Clips is a movie rating website I built for my portofolio. It uses the TMBD API to fetch data. You can search movies and shows based on different criteria and also add them to your favorites list.",
      languages: ["Node.js", "Express", "MongoDB"],
      previewImage: MovieClips,
      githubLink: "https://github.com/VitaliyV22/Movie-Clips",
      demoLink: "https://main.dw23q6nv8tu6w.amplifyapp.com/",
    },
    {
      name: "Ergo Style",
      description:
        "ErgoStyle showcases a range of ergonomic chairs and desks, along with features and benefits, to attract potential customers interested in improving their workspace setup.",
      languages: ["React JS", "Tailwind CSS", "Next JS"],
      previewImage: Ergo,
      githubLink: "https://github.com/VitaliyV22/Waybeyond",
      demoLink: "https://master.d2nv73m0bi1w8n.amplifyapp.com/",
    },
    {
      name: "Lord of the Rings Librarian",
      description:
        "Welcome to the Lord of the Rings Search Project! This project allows users to search for characters, books, movies, and quotes related to the beloved fantasy series The Lord of the Rings",
      languages: ["React JS", "Tailwind CSS", "Next JS"],
      previewImage: LOR,
      githubLink: "https://github.com/VitaliyV22/Lord-of-The-Rings-Library",
      demoLink: "https://master.dznzdu9yy1b1u.amplifyapp.com/",
    },
   
  ];
  return (
    <div>
      <div id="work" className=" text-white py-12 h-screen">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-center">Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="border border-white p-6 rounded-lg flex flex-col justify-between"
              >
                <img
                  src={project.previewImage}
                  alt={project.name}
                  className="mb-4 rounded-lg h-48 w-full  object-cover"
                />
                <div className="border h-[11rem] rounded-lg p-2 mb-3 ">
                  <h3 className="text-xl text-indigo-200 font-bold mb-2">
                    {project.name}
                  </h3>
                  <p className="">{project.description}</p>
                </div>
                <div className="flex flex-wrap">
                  {project.languages.map((language, index) => (
                    <span key={index} className="p-2 font-inter text-teal-200">
                      {language}
                    </span>
                  ))}
                </div>
                <hr />
                <div className="flex gap-3 mt-4">
                  <a
                    href={project.githubLink}
                    className=" text-teal-200 hover:bg-emerald-500 rounded-lg p-2 font-bold"
                  >
                    Github
                  </a>
                  <a
                    href={project.demoLink}
                    className=" text-teal-200  hover:bg-emerald-500  rounded-lg p-2 font-bold"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live
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

export default Work;
