import React from "react";
import experience from "/experience.jpg";
import { BsPersonWorkspace } from "react-icons/bs";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div className="p-8" id="experience">
      <motion.h1
        className="text-center text-blue-700 text-4xl font-bold mb-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Experience
      </motion.h1>

      <motion.div
        className="flex flex-col md:flex-row items-center justify-center gap-8"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <motion.img
          src={experience}
          alt="Experience"
          className="rounded-3xl shadow-lg w-72 md:w-96 hover:scale-105 transition-transform duration-300"
          whileHover={{ scale: 1.05 }}
        />

        <motion.div
          className="dark:bg-blue-900 bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 w-full md:w-[500px]"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="flex items-center gap-4 mb-4">
            <motion.div
              className="text-xl bg-blue-600 p-2 rounded-full"
              whileHover={{ scale: 1.2, rotate: 15 }}
            >
              <BsPersonWorkspace />
            </motion.div>
            <div>
              <p className="text-blue-600 text-lg">Dec 2024 - Present</p>
              <p className="font-semibold text-lg">Frontend Developer</p>
              <p className="font-semibold text-base">Unified Mentor Intern</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Experience;
