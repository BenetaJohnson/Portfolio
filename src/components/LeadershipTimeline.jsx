// src/components/ExperienceTimeline.jsx
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    title: "AI Club, VIT Chennai",
    role: "Operations and Management Lead",
    year: "2024 – 2025",
  },
  {
    title: "TechnoVIT ‘24",
    role: "Central Committee \nTechnical Shows",
    year: "2024",
  },
  {
    title: "Vibrance ‘25",
    role: "Food Stalls Committee Head",
    year: "2025",
  },
];

const LeadershipTimeline = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: index * 0.25,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          },
        }
      );
    });
  }, []);

  return (
    <section className="relative w-full min-h-screen py-28 font-lexend z-10 overflow-hidden">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Timeline Line */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#bfaaff99] z-0" />

        {/* Cards */}
        <div className="relative z-10 flex flex-col gap-32">
          {experiences.map((exp, index) => {
            const isLeft = index % 2 === 0;

            return (
              <div
                key={index}
                ref={(el) => (cardsRef.current[index] = el)}
                className={`relative w-full flex items-center justify-${isLeft ? "start" : "end"}`}
              >
                {/* Dot with glow */}
                <div
                  className={`absolute w-4 h-4 rounded-full bg-[#bfaaff] z-10
                    ${isLeft ? "left-[calc(50%-8px)]" : "right-[calc(50%-8px)]"}
                    animate-pulse shadow-[0_0_8px_4px_#bfaaff88] border-[3px] border-white`}
                />

                {/* Card */}
                <div
                  className={`w-[90%] sm:w-[400px] p-6 rounded-2xl backdrop-blur-md bg-white/10 border border-white/20 text-white shadow-xl
                    ${isLeft ? "ml-6 sm:ml-0" : "mr-6 sm:mr-0"}`}
                >
                  <h3 className="text-2xl font-bold">{exp.title}</h3>
                  <p className="whitespace-pre-line opacity-90 mt-2">{exp.role}</p>
                  <p className="text-sm text-[#bfaaff] mt-3">{exp.year}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default LeadershipTimeline;
