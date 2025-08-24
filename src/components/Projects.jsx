import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import StarField from "./StarField";
import SakuraPetals from "./SakuraPetals";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const hardware = [
    {
      Src: "./Projects/Car Parking.webp",
      Name: "Automatic Car parking",
      GitHub: "https://github.com/BenetaJohnson/Automatic_Car_Parking",
    },
    {
      Src: "./Projects/RoboticArm.webp",
      Name: "Smart Color and Shape Sorting Robotic Arm",
      GitHub: "https://github.com/BenetaJohnson/Smart_Color_And_Shape_Sorting_Robotic_Arm",
    },
    {
      Src: "./Projects/Voting.webp",
      Name: "Voting System Based on RFID",
      GitHub: "https://github.com/BenetaJohnson/Voting_System_Based_On_RFID",
    },
    {
      Src: "./Projects/KitchenSafety.webp",
      Name: "Smart Kitchen with automated gas leak safety mechanism",
      GitHub: null,
    },
  ];

  const software = [
    {
      Src: "./Projects/KitchenSafety",
      Name: "Hand Sign Recognition System",
      GitHub: "https://github.com/tarunpr11/Sign-Language-App",
    },
    {
      Src: "./Projects/Hospital Management System.webp",
      Name: "Hospital Management System",
      GitHub: "https://github.com/BenetaJohnson/Hospital_Management_System",
    },
    {
      Src: "./Projects/Liscence Plate Detection.webp",
      Name: "License Plate Detection",
      GitHub: "https://github.com/BenetaJohnson/License-Plate-Detection",
    },
  ];

  const [tab, setTab] = useState("hardware");
  const [selectedProject, setSelectedProject] = useState(hardware[0]);
  const projects = tab === "hardware" ? hardware : software;

  const buttonsRef = useRef([]);
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    gsap.fromTo(
      buttonsRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: "power2.out",
      }
    );
  }, [tab]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current,
        { autoAlpha: 0, y: 50 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative w-full min-h-screen font-lexend overflow-hidden z-0">

      {/* Content */}
      <div
        ref={sectionRef}
        className="relative z-10 flex flex-col items-center justify-center px-6 py-24"
      >
        {/* Title Box */}
        <div
          className="text-center mb-12 px-6 py-4 rounded-xl border-[2px] border-transparent bg-clip-padding bg-black/20 backdrop-blur-md"
          style={{
            borderImage: "linear-gradient(90deg, #a472f2, #6dd5ed) 1",
          }}
        >
          <h2 className="text-5xl font-extrabold text-white drop-shadow-[0_0_10px_#bfaaff]">
            PROJECT SHOWCASE
          </h2>
        </div>

        {/* Project Viewer */}
        <div className="flex flex-col md:flex-row items-center justify-around gap-10 w-full max-w-6xl">
          {/* Image + Overlay */}
          <div className="relative w-full max-w-md group">
            <img
              src={selectedProject.Src}
              alt={selectedProject.Name}
              className="w-full h-72 object-cover rounded-xl shadow-xl transition duration-300"
            />
            {selectedProject.GitHub && (
              <a
                href={selectedProject.GitHub}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 hover:bg-opacity-70 text-white rounded-xl transition-opacity duration-300 opacity-0 group-hover:opacity-100"
              >
                <img
                  src="./images/github.webp"
                  alt="GitHub"
                  className="w-8 h-8"
                />
              </a>
            )}
          </div>

          {/* Tabs & Project List */}
          <div className="w-full max-w-md text-white">
            {/* Tab Switch */}
            <div className="flex justify-center font-bold text-lg mb-4 space-x-6">
              <button
                onClick={() => {
                  setTab("hardware");
                  setSelectedProject(hardware[0]);
                }}
                className={`px-4 py-2 transition-all ${
                  tab === "hardware"
                    ? "border-b-2 border-[#a472f2] text-white"
                    : "border-b-2 border-transparent text-gray-300"
                }`}
              >
                Hardware
              </button>
              <button
                onClick={() => {
                  setTab("software");
                  setSelectedProject(software[0]);
                }}
                className={`px-4 py-2 transition-all ${
                  tab === "software"
                    ? "border-b-2 border-[#a472f2] text-white"
                    : "border-b-2 border-transparent text-gray-300"
                }`}
              >
                Software
              </button>
            </div>

            {/* Project Names */}
            <div className="flex flex-col space-y-3">
              {projects.map((project, index) => (
                <button
                  key={index}
                  ref={(el) => (buttonsRef.current[index] = el)}
                  onClick={() => setSelectedProject(project)}
                  className={`w-full text-left px-4 py-3 rounded-xl transition duration-300
                    ${
                      selectedProject.Name === project.Name
                        ? "bg-white/20 backdrop-blur-md border border-[#bfaaff]/30 drop-shadow-[0_0_10px_#bfaaff] text-white font-semibold"
                        : "bg-white/5 hover:bg-[#88C0D0]/20 border border-white/20 text-white"
                    }`}
                >
                  {project.Name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
