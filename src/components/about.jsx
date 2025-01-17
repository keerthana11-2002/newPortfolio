import React from "react";
import { motion } from "framer-motion";
import { GoDot } from "react-icons/go";

const About = () => {
  return (
    <div className="container mx-auto px-4 py-20" id="about">
      <div className="flex items-center gap-2">
        <div className="relative flex items-center justify-center">
          <span className="w-4 h-4 rounded-full bg-blue-500 shadow-lg"></span>
        </div>
        <div className="relative flex items-center justify-center">
          <span className="w-4 h-4 rounded-full bg-blue-500 shadow-lg"></span>
        </div>

        <div className="relative w-full">
          <div className="absolute inset-0 flex items-center">
            <hr className="w-full border-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full" />
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          <span className="w-4 h-4 rounded-full bg-blue-500 shadow-lg"></span>
          <GoDot className="absolute text-white text-sm" />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-between mt-10 space-y-10 lg:space-y-0">
        <motion.div
          className="lg:w-1/2 space-y-6"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl  font-bold text-blue-700 text-center dark:text-blue-700">
            Who I am
          </h1>
          <p className="md:text-xl ml-2 lg:ml-32 text-medium  text-gray-700 dark:text-white tracking-wide">
            My name is <span className="font-bold">Keerthana J K</span>. I'm a
            Frontend Developer based in Bangalore.
            <br />
            <br />I am a professional and passionate programmer with a quick
            learning and self-driven attitude. I enjoy exploring new
            technologies and bringing ideas to life through clean and efficient
            code. My current expertise includes:{" "}
            <span className="font-semibold dark:text-blue-600 text-black">
              HTML, CSS, JavaScript, React.js, Bootstrap, Tailwind CSS, MySQL,
              and Git.
            </span>
            <br />I love creating innovative solutions that make a difference.
          </p>
        </motion.div>

        <motion.div
          className="lg:w-2/4 flex justify-center"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
        >
          <img
            src="https://miro.medium.com/v2/resize:fit:1280/1*uYkZXXw-QL-N_1gVndPH9A.gif"
            alt="Girl working on a laptop"
            className="w-72 h-72 lg:w-96 lg:h-96 rounded-lg object-cover"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default About;
