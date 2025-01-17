import React from "react";
import { FaRegCirclePlay } from "react-icons/fa6";
import { IoCodeSlashOutline } from "react-icons/io5";
import { IoHomeSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import youtube from "/youtube.png";
import jobportal from "/job.png";
import plannr from "/plannr.png";
import recipe from "/recipe.jpg";
import portfolio from "/portfolio.png";

const ProjectsList = () => {
  return (
    <div className="min-h-screen py-10">
      <div className="mb-6">
        <Link to="/">
          <IoHomeSharp className="text-4xl text-blue-700 hover:text-blue-800 transition ml-10 border-2 border-blue-700 rounded-full p-1 cursor-pointer" />
        </Link>
      </div>

      <h1 className="text-4xl font-bold text-center mb-16 text-blue-700">
        My Projects
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-6 sm:px-10 md:px-16 transition-all">
        {[
          {
            title: "Job Portal",
            img: jobportal,
            link: "https://hirez-project1.vercel.app/",
            description:
              "A modern platform to connect employers and job seekers.",
            code: "https://github.com/keerthana11-2002/HirezProject1",
          },
          {
            title: "Plan The Meet",
            img: plannr,
            link: "https://plannr-two.vercel.app/",
            description:
              "An efficient app to schedule meetings and manage time.",
            code: "https://github.com/keerthana11-2002/plannr",
          },
          {
            title: "Recipe Book",
            img: recipe,
            link: "https://reci-book-keerthanas-projects-fb52691c.vercel.app/",
            description: "A curated platform for discovering new recipes.",
            code: "https://github.com/keerthana11-2002/RecipeBook",
          },
          {
            title: "VidFusion",
            img: youtube,
            link: "https://youtube-seven-sigma.vercel.app/",
            description: "A dynamic video streaming platform.",
            code: "https://github.com/keerthana11-2002/youtube",
          },
          {
            title: "Portfolio",
            img: portfolio,
            link: "https://portfolio-delta-gold-51.vercel.app/",
            description: "My personal portfolio website.",
            code: "https://github.com/keerthana11-2002/newPortfolio",
          },
        ].map((project, index) => (
          <div
            key={index}
            className="group bg-gray-300 dark:bg-blue-900 shadow-lg p-6 rounded-xl overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl transform"
          >
            <h3 className="text-2xl font-semibold text-center py-4">
              {project.title}
            </h3>

            <div className="relative">
              <img
                src={project.img}
                alt={`Screenshot of ${project.title}`}
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-white/80 dark:bg-black/80 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                <p className="dark:text-white text-black text-lg text-center px-4">
                  {project.description}
                </p>
              </div>
            </div>

            <div className="flex justify-between items-center px-6 py-4 mt-4">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-black dark:text-blue-700 hover:text-blue-500 transition text-3xl font-medium"
              >
                <FaRegCirclePlay />
              </a>
              <a
                href={project.code}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 border-2 border-black text-black dark:border-blue-700 dark:text-white rounded-full hover:bg-white hover:text-blue-700 dark:hover:bg-blue-700 transition-all"
              >
                <IoCodeSlashOutline size={20} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsList;
