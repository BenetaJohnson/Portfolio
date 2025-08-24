import React from "react";
import StarField from "./StarField";
import SakuraPetals from "./SakuraPetals";

const services = [
  {
    title: "Full Stack Developer",
    icon: "/Icons/Full stack icon.webp",
  },
  {
    title: "AI and Machine Learning",
    icon: "/Icons/AI icon.webp",
  },
  {
    title: "Hardware and Embedded Systems",
    icon: "/Icons/Embedded icon.webp",
  },
  {
    title: "UI/UX Design",
    icon: "/Icons/UiUx icon.webp",
  },
];

const About = () => {
  return (
    <section className="relative w-full min-h-screen font-lexend overflow-hidden z-0">

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-6 py-24">
        {/* Translucent Box with shadow and blur */}
        <div
          className="max-w-5xl w-full text-center rounded-2xl shadow-2xl"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.08)",
            backdropFilter: "blur(14px)",
            WebkitBackdropFilter: "blur(14px)",
            padding: "2.5rem",
          }}
        >
          <h2 className="text-5xl font-extrabold text-white mb-4 drop-shadow-[0_0_10px_#d0b0ff]">
            About Me
          </h2>

          <p className="text-lg text-slate-200 leading-relaxed max-w-3xl mx-auto mb-12">
            I’m someone who loves turning ideas into experiences. 
            For me, it’s not just about using my skills, but about adding creativity and passion to everything I do. 
            What excites me most is creating work that leaves a mark — something people can really connect with. 
            Take a look around my site, explore what I’ve been building, and maybe you’ll find something that inspires you too.
          </p>

          {/* Service Cards with translucent style */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="rounded-2xl p-6 flex flex-col items-center justify-center text-center shadow-lg hover:shadow-violet-400/40 transition-shadow duration-300"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.08)",
                  backdropFilter: "blur(10px)",
                  WebkitBackdropFilter: "blur(10px)",
                }}
              >
                <img
                  src={service.icon}
                  alt={service.title}
                  className="w-16 h-16 mb-4"
                />
                <h3 className="text-xl font-bold text-white">{service.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
