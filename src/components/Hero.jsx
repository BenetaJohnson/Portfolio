import React from "react";
import AvatarScene from "./AvatarScene";
import { Typewriter } from "react-simple-typewriter";
import StarField from "./StarField";
import SakuraPetals from "./SakuraPetals";

const Hero = () => {
  return (
    <section className="relative w-full h-screen font-lexend overflow-hidden z-0">
      {/* Content */}
      <div className="relative z-10 flex flex-col justify-end h-full pb-20 pl-16 pr-8 ml-20">
        <div className="max-w-[700px]">
          {/* Name */}
          <div className="text-[4rem] md:text-[5.5rem] font-extrabold leading-none drop-shadow-[0_0_15px_#d6bbf8] text-[#f2e9ff]">
            <p>BENETA</p>
            <p>JOHNSON.</p>
          </div>

          {/* Quote */}
          <p className="mt-3 text-xl md:text-2xl italic text-[#d6bbf8] drop-shadow-[0_0_8px_#d6bbf8b0]">
            "Coding with purpose, Creating with passion."
          </p>

          {/* Divider */}
          <div className="h-1 bg-[#a472f2] w-[20rem] my-4 shadow-md" />

          {/* Typewriter Subtitle */}
          <div className="text-[1.25rem] md:text-[1.75rem] font-medium drop-shadow-[0_0_6px_#ffffffb3] h-[3rem] text-[#f2e9ff]">
            <Typewriter
              words={[
                "SOFTWARE DEVELOPER.",
                "ML ENGINEER.",
                "EMBEDDED SYSTEMS ENTHUSIAST.",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={90}
              deleteSpeed={60}
              delaySpeed={1500}
            />
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-8 mt-6">
            <a href="https://www.linkedin.com/in/beneta-johnson-bab6b5313" target="_blank" rel="noopener noreferrer">
              <img src="/images/linkedin.webp" alt="LinkedIn" className="w-10 h-10 hover:scale-110 transition-transform" />
            </a>
            <a href="https://github.com/BenetaJohnson" target="_blank" rel="noopener noreferrer">
              <img src="/images/github.webp" alt="GitHub" className="w-10 h-10 hover:scale-110 transition-transform" />
            </a>
            <a href="https://leetcode.com/u/Beneta_Johnson/" target="_blank" rel="noopener noreferrer">
              <img src="/images/leetcode.webp" alt="LeetCode" className="w-12 h-10 hover:scale-110 transition-transform" />
            </a>
          </div>              
          <a
            href="https://drive.google.com/file/d/1v8WmSkPvKoDXu-KSxV5M2oH9L8cjs2-L/view"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 px-6 py-2 rounded-full bg-gradient-to-r from-[#b483f7] to-[#946cfb] text-white text-md font-semibold shadow-lg hover:brightness-110 transition duration-300"
          >
            View Resume
          </a>
        </div>
      </div>

      {/* Avatar Scene */}
      <div className="absolute right-0 bottom-0 w-[50vw] h-screen z-50">
        <AvatarScene />
      </div>
    </section>
  );
};

export default Hero;
