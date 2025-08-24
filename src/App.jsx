import React from "react";
import NavBar from "./components/NavBar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import TechStack from "./components/TechStack.jsx";
import Leadership from "./components/Leadership.jsx";
import Experience from "./components/Work.jsx";
import Projects from "./components/Projects.jsx"; 
import Contact from "./components/Contact.jsx"; 
import StarField from "./components/StarField.jsx";
import SakuraPetals from "./components/SakuraPetals.jsx";

export default function App() {
  return (
    <div className="relative z-10 w-full min-h-screen bg-hero-bg bg-fixed bg-cover bg-center overflow-x-hidden scroll-smooth">
      {/* Global background visuals */}
      <div className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none">
        <StarField />
        <SakuraPetals />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col">
        <NavBar />
        <Hero />

        {/* Sections with IDs for scrolling */}
        <div id="about-me">
          <About />
          <TechStack />
        </div>

        <div id="experiences">
          <Leadership />
          <Experience />
        </div>

        <div id="projects">
          <Projects />
        </div>

        <div id="contact-me">
          <Contact />
        </div>

        {/* Footer */}
        <p className="text-white text-center py-10 font-lexend text-sm opacity-70">
          © {new Date().getFullYear()} Beneta Johnson. All rights reserved.
        </p>
      </div>
    </div>
  );
}
