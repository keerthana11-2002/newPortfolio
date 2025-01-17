import React from "react";
import About from "../components/about";
import Skills from "../components/skills";
import Education from "../components/education";
import Contact from "../components/contact";
import Projects from "../components/projects";
import Hero from "../components/hero";
import Experience from "../components/experience";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Experience/>
      <Skills />
      <Projects />
      <Education />
      <Contact />
    </div>
  );
};

export default Home;
