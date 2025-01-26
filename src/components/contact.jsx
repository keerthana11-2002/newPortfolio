import  { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { GiLaptop } from "react-icons/gi";
import { CiMail } from "react-icons/ci";
import { BsVoicemail } from "react-icons/bs";
import { FaUsersLine } from "react-icons/fa6";
import { PiBuildingOfficeBold } from "react-icons/pi";
import {
  FaCheckCircle,
  FaLinkedin,
  FaGithub,
  FaMapPin,
  FaPhoneAlt,
} from "react-icons/fa";
import { MdOutlineMessage } from "react-icons/md";
import { IoSendOutline } from "react-icons/io5";
import { RiFileCopy2Line } from "react-icons/ri";
import { MdOutlineAlternateEmail } from "react-icons/md";

export default function Contact() {
  const formRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setIsSuccess(true);
      if (formRef.current) {
        formRef.current.reset();
      }
    } catch (error) {
      setError("Failed to send message. Please try again later.",error);
    } finally {
      setIsSubmitting(false);
    }
  };

  setTimeout(() => {
    setIsSuccess(false);
  }, 4000);

  return (
    <section className="py-16" id="contact">
      <div className="container ml-20 px-4 -mt-20">
        <h2 className="md:-ml-32 text-4xl font-bold md:text-center  text-blue-700">
          Contacts
        </h2>
        <div className="max-w-7xl lg:ml-10  md:mt-10   grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 -ml-24 ">
          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            className="space-y-6 p-6 rounded-lg"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <label
                htmlFor="user_name"
                className="block text-xl font-medium mb-1"
              >
                Name
              </label>
              <input
                type="text"
                name="user_name"
                id="user_name"
                required
                className="dark:bg-[rgba(1,55,129,0.85)] w-80 md:w-full px-4 py-2 border border-gray-300 rounded-lg"
                placeholder="Keerthana J K"
              />
            </div>
            <div>
              <label
                htmlFor="user_email"
                className="block text-lg font-medium mb-1"
              >
                Email
              </label>
              <input
                type="email"
                name="user_email"
                id="user_email"
                required
                className="dark:bg-[rgba(1,55,129,0.85)] w-80 md:w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="jkkeerthana@gmail.com"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-lg font-medium mb-1"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows={4}
                required
                className="dark:bg-[rgba(1,55,129,0.85)] w-80 md:w-full px-4 py-2 border border-gray-300 rounded-lg text-white"
                placeholder="Type your message"
              ></textarea>
            </div>

            {error && <p className="text-red-500 text-sm">{error}</p>}

            {isSuccess && (
              <div className="flex items-center gap-2 text-green-600">
                <FaCheckCircle size={20} />
                <span>Message sent successfully!</span>
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="dark:hover:bg-gray-300 dark:hover:text-blue-800 hover:bg-black bg-blue-600 flex text-xl gap-6 text-white dark:text-black py-3 px-6 rounded-full transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending..." : "Send"}
              <IoSendOutline className="mt-1 text-xl" />
            </button>
          </motion.form>

          <motion.div
            className="space-y-8 p-6 mt-10 lg:mt-0"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <a
                  href="mailto:jkkeerthana10@gmail.com"
                  className="p-4 dark:bg-gray-500 bg-black text-white hover:bg-blue-800 dark:hover:bg-blue-700 dark:hover:text-white dark:text-gray-800 rounded-full shadow-lg"
                >
                  <MdOutlineAlternateEmail className="text-2xl" />
                </a>
                <a
                  href="mailto:jkkeerthana10@gmail.com"
                  className="dark:text-white text-lg font-semibold tracking-wide"
                >
                  jkkeerthana@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-6">
                <a
                  href="https://wa.me/917397013952"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 dark:bg-gray-500 hover:bg-blue-800 bg-black dark:hover:bg-blue-700 dark:hover:text-white text-white dark:text-gray-800 rounded-full shadow-lg"
                >
                  <FaPhoneAlt className="text-2xl" />
                </a>
                <a
                  href="https://wa.me/917397013952"
                  className="dark:text-white text-lg font-semibold tracking-wide"
                >
                  +91 7397013952
                </a>
              </div>
              <div className="flex items-center gap-6">
                <div className="p-4 dark:bg-gray-500 hover:bg-blue-800 dark:hover:bg-blue-700 dark:hover:text-white bg-black text-white dark:text-gray-800 rounded-full shadow-lg">
                  <FaMapPin className="text-2xl" />
                </div>
                <span className="dark:text-white text-lg font-semibold tracking-wide">
                  Bangalore, Karnataka
                </span>
              </div>

              <div className="flex gap-x-6 ml-20 mt-10">
                <a
                  href="https://www.linkedin.com/in/keerthana-j-k-16b6442a0/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4"
                >
                  <FaLinkedin className="text-2xl dark:hover:text-blue-700 hover:text-blue-800 dark:text-gray-500 rounded-full w-10 h-16 transition duration-300 transform hover:scale-110 hover:rotate-180" />
                </a>

                <a
                  href="https://www.linkedin.com/in/keerthana-j-k-16b6442a0/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4"
                >
                  <FaGithub className="text-2xl dark:hover:text-blue-700 w-10 hover:text-blue-800 h-16 dark:text-gray-500 transition duration-300 transform hover:scale-110 hover:rotate-180" />
                </a>
              </div>
            </div>
          </motion.div>

          <div className="lg:flex hidden items-center -ml-8  -mt-5 justify-center relative h-[400px] w-full md:mt-20 lg:mt-0">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <GiLaptop className="text-9xl text-white border rounded-full bg-blue-600 p-6 shadow-lg" />
            </div>

            <div className="absolute top-2 left-1/2 transform -translate-x-1/2">
              <CiMail className="text-7xl text-white border rounded-full bg-blue-600 p-4 shadow-lg hover:scale-110 transition-transform duration-300" />
            </div>

            <div className="absolute top-20 left-12">
              <RiFileCopy2Line className="text-7xl text-white border rounded-full bg-blue-600 p-4 shadow-lg hover:scale-110 transition-transform duration-300" />
            </div>

            <div className="absolute top-20 right-14">
              <MdOutlineMessage className="text-7xl text-white border rounded-full bg-blue-600 p-4 shadow-lg hover:scale-110 transition-transform duration-300" />
            </div>

            <div className="absolute bottom-20 left-10">
              <BsVoicemail className="text-7xl text-white border rounded-full bg-blue-600 p-4 shadow-lg hover:scale-110 transition-transform duration-300" />
            </div>

            <div className="absolute bottom-20 right-12">
              <PiBuildingOfficeBold className="text-7xl text-white border rounded-full bg-blue-600 p-4 shadow-lg hover:scale-110 transition-transform duration-300" />
            </div>

            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
              <FaUsersLine className="text-7xl text-white border rounded-full bg-blue-600 p-4 shadow-lg hover:scale-110 transition-transform duration-300" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
