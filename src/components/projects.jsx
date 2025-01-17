import React, { useState } from "react";
import { FaRegCirclePlay } from "react-icons/fa6";
import { IoCodeSlashOutline } from "react-icons/io5";
import { FaArrowCircleRight } from "react-icons/fa";
import jobportal from "/job.png";
import plannr from "/plannr.png";
import recipe from "/recipe.jpg";
import ProjectsList from "./projectsList";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Projects = () => {
  const [search, setSearch] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setSearch(!search);
    navigate("/projectlist");
  };

  return (
    <div id="project" className="mt-10">
      <h1 className="text-4xl font-bold text-center mb-16 text-blue-700">
        Projects
      </h1>

      <motion.div
        className="grid grid-cols-1 ml-8  lg:ml-32 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-10 mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
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
        ].map((project, index) => (
          <motion.div
            key={index}
            className="group bg-gray-300 dark:bg-blue-800 text-center rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300 ease-in-out p-6 w-80"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <h3 className="text-xl font-bold text-black dark:text-white mb-5">
              {project.title}
            </h3>
            <div className="relative group">
              <img
                src={project.img}
                alt={`Screenshot of ${project.title}`}
                className="w-full object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-white/80 dark:bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-black dark:text-white text-lg text-center">
                  {project.description}
                </p>
              </div>
            </div>
            <div className="p-4 text-black">
              <div className="flex gap-4 justify-center">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 hover:text-blue-950 text-3xl dark:text-white transition"
                >
                  <FaRegCirclePlay />
                </a>
                <a
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-9 h-9 dark:text-white border-2 border-black dark:border-white rounded-full hover:text-blue-950 hover:border-2 hover:border-blue-950 transition"
                >
                  <IoCodeSlashOutline size={25} />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <div className="mt-20 flex justify-center">
        <button
          onClick={handleClick}
          className="flex items-center gap-4 px-8 py-3 bg-gray-500 text-lg text-white rounded-full hover:bg-blue-800 transition"
        >
          View All <FaArrowCircleRight />
        </button>
      </div>

      {search && <ProjectsList />}
    </div>
  );
};

export default Projects;
