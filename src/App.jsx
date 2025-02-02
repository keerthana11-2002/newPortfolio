import { useEffect, useState } from "react";
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
      setTheme("light");
    } else {
      setTheme("dark");
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
        className="fixed top-[600px] right-5 md:right-20 text-4xl text-gray-900 dark:text-white   rounded-md p-2  transition duration-300 transform hover:scale-110 hover:rotate-180">
        {theme === "dark" ? <MdOutlineLightMode /> : <FaMoon />}
      </button>
      <div className="bg-white dark:bg-gradient-to-l from-blue-900 to-blue-900  text-black dark:text-white">
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
