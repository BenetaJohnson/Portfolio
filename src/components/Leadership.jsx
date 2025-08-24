// src/components/Leadership.jsx
import React from "react";
import StarField from "./StarField";
import SakuraPetals from "./SakuraPetals";
import ExperienceTimeline from "./LeadershipTimeline";

const Leadership = () => {
  return (
    <section className="relative w-full min-h-screen font-lexend overflow-hidden z-0">

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-6 py-24">
        {/* Gradient title box */}
        <div className="text-center mb-12 px-6 py-4 rounded-xl border-[2px] border-transparent bg-clip-padding bg-black/20 backdrop-blur-md"
          style={{
            borderImage: "linear-gradient(90deg, #a472f2, #6dd5ed) 1",
          }}>
          <h2 className="text-5xl font-extrabold text-white drop-shadow-[0_0_10px_#bfaaff]">
            LEADERSHIP EXPERIENCE
          </h2>
        </div>

        {/* Timeline */}
        <div className="w-full flex justify-center">
          <ExperienceTimeline />
        </div>
      </div>
    </section>
  );
};

export default Leadership;
