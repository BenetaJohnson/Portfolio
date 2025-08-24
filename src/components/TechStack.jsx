// src/components/TechStack.jsx
import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import StarField from './StarField';
import SakuraPetals from './SakuraPetals';
import SkillCard from './SkillCard';

const skills = [
  { Src: "./Icons/Python icon.webp", Name: "Python" },
  { Src: "./Icons/Tensorflow icon.webp", Name: "Tensorflow" },
  { Src: "./Icons/React icon.webp", Name: "React.js" },
  { Src: "./Icons/Next icon.webp", Name: "Next.js" },
  { Src: "./Icons/Three icon.webp", Name: "Three.js" },
  { Src: "./Icons/Html icon.webp", Name: "HTML" },
  { Src: "./Icons/Css icon.webp", Name: "CSS" },
  { Src: "./Icons/JS icon.webp", Name: "Javascript" },
  { Src: "./Icons/Figma icon.webp", Name: "Figma" },
  { Src: "./Icons/Tailwind icon.webp", Name: "Tailwind CSS" },
  { Src: "./Icons/Git icon.webp", Name: "Git" },
  { Src: "./Icons/Arduino icon.webp", Name: "Arduino" },
  { Src: "./Icons/Numpy icon.webp", Name: "Numpy" },
  { Src: "./Icons/Pandas icon.webp", Name: "Pandas" },
  { Src: "./Icons/MySql icon.webp", Name: "SQL" },
];

const TechStack = () => {
  const itemsPerPage = 3;
  const totalPages = Math.ceil(skills.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(0);
  const slideRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      slideRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }
    );
  }, [currentPage]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % totalPages);
    }, 3500);
    return () => clearInterval(interval);
  }, [totalPages]);

  const startIdx = currentPage * itemsPerPage;
  const visibleSkills = skills.slice(startIdx, startIdx + itemsPerPage);

  return (
    <section className="relative w-full min-h-screen font-lexend overflow-hidden z-0">

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-6 py-24">
        {/* Title box with gradient border */}
        <div className="text-center mb-12 px-6 py-4 rounded-xl border-[2px] border-transparent bg-clip-padding bg-black/20 backdrop-blur-md"
          style={{
            borderImage: "linear-gradient(90deg, #a472f2, #6dd5ed) 1",
          }}>
          <h2 className="text-5xl font-extrabold text-white drop-shadow-[0_0_10px_#bfaaff]">
            TECH STACK
          </h2>
        </div>

        {/* Skill Cards */}
        <div ref={slideRef} className="flex flex-wrap justify-center gap-8 max-w-5xl">
          {visibleSkills.map((skill) => (
            <SkillCard
              key={skill.Name}
              Src={skill.Src}
              Name={skill.Name}
              className="bg-white/10 backdrop-blur-lg border border-violet-300/20 p-4 rounded-2xl shadow-lg hover:shadow-violet-400/40 transition duration-300"
            />
          ))}
        </div>

        {/* Pagination dots */}
        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: totalPages }).map((_, idx) => (
            <span
              key={idx}
              onClick={() => setCurrentPage(idx)}
              className={`w-3 h-3 rounded-full cursor-pointer ${
                idx === currentPage ? "bg-[#88C0D0]" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
