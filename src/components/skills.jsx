import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const skills = [
  { name: "HTML", icon: "/html (2).png" },
  { name: "CSS", icon: "/css (3).png" },
  { name: "JavaScript", icon: "/javascript (1).png" },
  { name: "ReactJS", icon: "/react (1).png" },
  { name: "Tailwind CSS", icon: "/tailwind.png" },
  { name: "Bootstrap", icon: "/bootstrap.png" },
  {
    name: "SASS",
    icon: "https://static-00.iconduck.com/assets.00/sass-icon-2048x2048-js3fulee.png",
  },
  { name: "Material UI", icon: "/material.png" },
  { name: "SQL", icon: "/sql.png" },
  { name: "Git", icon: "/git (1).png" },
];

const cardVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
      type: "spring",
      stiffness: 80,
    },
  }),
  hover: {
    scale: 1.1,
    rotate: 5,
    transition: { duration: 0.3, type: "spring", stiffness: 200 },
  },
  moving: {
    y: [0, -10, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "loop",
      ease: "easeInOut",
    },
  },
};

const Skills = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setIsAnimating(true);
    return () => {
      setIsAnimating(false);
    };
  }, []);

  return (
    <div id="skills" className="md:py-24 py-20">
      <h2 className="text-4xl font-bold text-center mb-12 text-blue-700">
        Skills
      </h2>
      <motion.div
        className="skills-carousel"
        initial="hidden"
        animate={isAnimating ? "visible" : "hidden"}
        exit="hidden"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="skills-grid grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-10 px-8"
          initial="hidden"
          animate={isAnimating ? "visible" : "hidden"}
        >
          {skills.map((item, index) => (
            <motion.div
              key={item.name}
              className="skill-card flex flex-col items-center border-4 border-blue-700 shadow-lg shadow-blue-700 justify-center bg-white rounded-lg p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              variants={cardVariants}
              custom={index}
              whileHover="hover"
              animate="moving"
            >
              <img
                src={item.icon}
                alt={item.name}
                className="w-16 h-16 object-contain mb-4 rounded-full transition-all duration-300"
              />
              <h3 className="text-lg font-medium text-gray-800">{item.name}</h3>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Skills;
