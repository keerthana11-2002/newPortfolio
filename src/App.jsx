import React, { useEffect, useState } from "react";
import About from "./components/about";
import { FaMoon } from "react-icons/fa";
import { MdOutlineLightMode } from "react-icons/md";
import {
  createBrowserRouter,
  Outlet,
  ScrollRestoration,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/home";
import ProjectsList from "./components/projectsList";

const Layout = () => {
  return (
    <>
      <ScrollRestoration />
      <Outlet />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/projectlist",
        element: <ProjectsList />,
      },
    ],
  },
]);

function App() {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: light)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <>
      <button
        type="button"
        onClick={handleThemeSwitch}
        className="absolute md:mt-[600px] mt-[750px] ml-[300px] md:ml-[1410px] text-4xl p-1 rounded-md dark:text-gray-300 transition duration-300 transform hover:scale-110 hover:rotate-180 "
      >
        {theme === "dark" ? <MdOutlineLightMode /> : <FaMoon />}
      </button>
      <div className="bg-white dark:bg-gradient-to-l from-blue-950 to-blue-900  text-black dark:text-white">
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
