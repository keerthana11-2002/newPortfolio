import { RxCross2 } from "react-icons/rx";
import { IoHome } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FaGraduationCap, FaUser } from "react-icons/fa";
import { FaRegFileAlt } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";

const Sidebar = ({ isOpen, setIsOpen }) => {
  return (
    <div
      className={`fixed top-0 left-0 h-[600px] bg-gradient-to-r from-blue-950 to-blue-900 transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } md:w-80 p-6 z-50 w-60  rounded-2xl`}
    >
      <RxCross2
        className="cursor-pointer text-4xl ml-auto fdark:text-white text-blue-400 hover:text-blue-300 transition-colors duration-300"
        onClick={() => setIsOpen(false)}
      />

      <nav className="mt-16 flex flex-col space-y-8">
        <Link
          to="/"
          className="dark:text-white bg-white text-blue-500 flex gap-3 items-center rounded-full border-4 border-blue-500 dark:bg-gradient-to-r from-blue-500 to-blue-700 py-3 px-6 w-52 text-lg font-semibold transition-all duration-300 hover:bg-blue-600 hover:scale-105"
        >
          <IoHome className="text-xl" />
          Home
        </Link>

        <Link
          to="#about"
          className="dark:text-white bg-white text-blue-500  flex gap-3 items-center rounded-full border-4 border-blue-500 dark:bg-gradient-to-r from-blue-500 to-blue-700 py-3 px-6 w-52 text-lg font-semibold transition-all duration-300 hover:bg-blue-600 hover:scale-105"
        >
          <FaUser className="text-xl" />
          About
        </Link>
        <Link
          to="#education"
          className= "dark:text-white bg-white text-blue-500 flex gap-3 items-center rounded-full border-4 border-blue-500 dark:bg-gradient-to-r from-blue-500 to-blue-700 py-3 px-6 w-52 text-lg font-semibold transition-all duration-300 hover:bg-blue-600 hover:scale-105"
        >
          <FaGraduationCap className="text-xl" />
          Resume
        </Link>

        <Link
          to="#project"
          className= "dark:text-white bg-white text-blue-500 flex gap-3 items-center rounded-full border-4 border-blue-500 dark:bg-gradient-to-r from-blue-500 to-blue-700 py-3 px-6 w-52 text-lg font-semibold transition-all duration-300 hover:bg-blue-600 hover:scale-105"
        >
          <FaRegFileAlt className="text-xl" />
          Project
        </Link>
        <Link
          to="#contact"
          className= "dark:text-white bg-white text-blue-500  flex gap-3 items-center rounded-full border-4 border-blue-500 dark:bg-gradient-to-r from-blue-500 to-blue-700 py-3 px-6 w-52 text-lg font-semibold transition-all duration-300 hover:bg-blue-600 hover:scale-105"
        >
          <IoMdContact className="text-xl" />
          Contact
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
