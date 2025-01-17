import React, { useState } from "react";
import "../app.css";
import { GiHamburgerMenu } from "react-icons/gi";
import photo from "/photo.png";
import { Typewriter } from "react-simple-typewriter";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Sidebar from "./sidebar";
import { Link } from "react-router-dom";

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    console.log("hello");
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        className="flex flex-col animate-slide-in items-center justify-center w-full space-y-10"
        id="home"
      >
        <div className="flex justify-between w-full  ">
          <h1 className="logo transition duration-300 transform hover:scale-110 hover:hue-rotate-60 cursor-pointer">
            jk
          </h1>
          <GiHamburgerMenu
            onClick={handleClick}
            className=" text-3xl  md:text-4xl md:mr-16 mr-8  mt-7  transition duration-300 transform hover:scale-110 hover:-rotate-180 cursor-pointer hover:text-blue-700"
          />
          {isOpen && <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />}
        </div>

        <div className="flex flex-col md:flex-row justify-evenly items-center p-10 space-y-10 md:space-y-0">
          <div className="-ml-4 md:ml-20  w-96 h-96 -mt-36 md:-mt-10 rounded-full flex items-center justify-center bg-gray-10 ">
            <img
              src={photo}
              alt="Keerthana J K"
              className="md:w-full md:h-full w-60 h-60 border-8 md:border-0 border-blue-500  rounded-full object-cover"
            />
          </div>
          <div className="text-center md:text-left  max-w-lg md:ml-20  ">
            <h1 className="-mt-20  md:text-4xl text-3xl  dark:text-white font-bold text-gray-800 mb-5">
              Keerthana J K
            </h1>
            <h2
              className="-mt-2 md:mt-2 text-xl md:text-2xl font-medium mb-3"
              style={{ color: "rgb(26, 26, 216)" }}
            >
              <Typewriter
                words={[
                  "Frontend Developer",
                  "UI/UX Designer",
                  "React Developer",
                ]}
                loop={Infinity}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </h2>
            <p className="text-black p-7 -mt-7 md:-ml-5  dark:text-gray-400 text-medium md:text-lg leading-relaxed tracking-wider">
              I'm passionate about crafting responsive, user-friendly interfaces
              with modern web technologies. Turning ideas into visually
              appealing and functional designs is my forte, ensuring seamless
              user experiences.
            </p>
            <div className="flex justify-center md:justify-start space-x-4 gap-3 md:gap-10 mt-6">
              <Link to="https://drive.google.com/drive/home">
                <button className="px-6 py-3 -mt-5 ml-4 text-sm  md:text-medium border-blue-700 bg-white text-blue-40 rounded-3xl border-[3px] font-medium hover:bg-black hover:text-white hover:border-hidden dark:bg-blue-900 hover:dark:bg-gray-300 dark:hover:text-black">
                  Download CV
                </button>
              </Link>
              <Link to="#contact">
                <button className="px-6 py-3 -mt-5  text-sm mr-6 md:text-medium font-medium text-white rounded-3xl bg-[rgb(15,15,190)] hover:bg-black hover:text-white dark:text-black hover:dark:text-black hover:dark:bg-gray-300">
                  Let's Connect
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="md:flex gap-x-2 mt-4 hidden">
          <a
            href="https://www.linkedin.com/in/keerthana-k-16b6442a0/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4"
            style={{ color: "rgb(26, 26, 216)" }}
          >
            <FaLinkedin className="text-2xl -mt-10 w-10 h-16 transition duration-300 transform hover:scale-110 hover:rotate-180" />
          </a>
          <a
            href="https://github.com/keerthana11-2002"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4"
            style={{ color: "rgb(26, 26, 216)" }}
          >
            <FaGithub className="text-2xl -mt-10 w-10 h-16 transition duration-300 transform hover:scale-110 hover:rotate-180" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Hero;
