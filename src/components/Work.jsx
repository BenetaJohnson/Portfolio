// src/components/Experience.jsx
import React from "react";
import StarField from "./StarField";
import SakuraPetals from "./SakuraPetals";
import WorkTimeline from "./WorkTimeline";

const Work = () => {
  return (
    <section className="relative w-full min-h-screen font-lexend overflow-hidden z-0">

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-6 py-24">
        {/* Gradient Title Box */}
        <div
          className="text-center mb-12 px-6 py-4 rounded-xl border-[2px] border-transparent bg-clip-padding bg-black/20 backdrop-blur-md"
          style={{
            borderImage: "linear-gradient(90deg, #a472f2, #6dd5ed) 1",
          }}
        >
          <h2 className="text-5xl font-extrabold text-white drop-shadow-[0_0_10px_#bfaaff]">
            WORK EXPERIENCE
          </h2>
        </div>

        {/* Timeline */}
        <div className="w-full flex justify-center">
          <WorkTimeline />
        </div>
      </div>
    </section>
  );
};

export default Work;
