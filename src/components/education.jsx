import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa6";
import education from "/education.png";

const educationData = [
  {
    year: "2024",
    degree: "Frontend Intern",
    school: "Unified Mentor",
    description:
      "Developed responsive web applications using React, improved UI/UX, and collaborated with a team to deliver scalable solutions.",
    image: "side1.png",
  },
  {
    year: "2023-2024",
    degree: "FrontEnd Development",
    school: "AlmaBetter Institution",
    description: "",
    image: "side1.png",
  },
  {
    year: "2020 - 2023",
    degree: "Bachelor of Science in Computer Science",
    school: "Gonzaga College of Arts And Science",
    description: "",
    image: "side2.png",
  },
  {
    year: "2018 - 2020",
    degree: "Selva Matric Hr Sec School",
    school: "Krishnagiri, Tamilnadu",
    description: "",
    image: "side3.png",
  },
];

export default function Education() {
  return (
    <section className="py-20" id="education">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-blue-700">
          Education Journey
        </h2>

        <div className="flex flex-col lg:flex-row justify-center items-center space-y-10 lg:space-y-0 lg:space-x-10">
          <motion.div
            className="max-w-2xl flex-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <img
              src={education}
              alt="Education"
              className="rounded-lg shadow-lg w-full md:ml-18  lg:w-[500px] transform hover:scale-105 transition-transform duration-500"
            />
          </motion.div>

          <div className="max-w-xl flex-1 space-y-6">
            {educationData.map((item, index) => (
              <motion.div
                key={index}
                className="pb-5"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 * index }}
              >
                <motion.div
                  className="dark:bg-blue-900 bg-gray-200 rounded-lg p-4 shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="flex items-center gap-2 text-blue-600 mb-2">
                    <div className="w-9 h-9 rounded-full bg-blue-500 flex items-center justify-center">
                      <FaGraduationCap
                        size={24}
                        className="dark:text-white text-black"
                      />
                    </div>

                    <span className="text-medium">{item.year}</span>
                  </div>
                  <h3 className="text-lg font-bold text-black dark:text-white mb-1">
                    {item.degree}
                  </h3>
                  <p className="text-medium text-black dark:text-white mb-2">
                    {item.school}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
