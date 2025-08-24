import React from 'react';

const SkillCard = ({ Src, Name, className = "" }) => {
  return (
    <div className={`relative p-5 m-5 w-64 min-h-[22rem] flex flex-col items-center justify-around rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl ${className}`}>
      
      {/* Glass Background */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[rgba(136,192,208,0.1)] to-[rgba(69,98,106,0.1)] backdrop-blur-md border border-white/20 shadow-lg hover:border-white/40 z-0" />

      {/* Foreground Content */}
      <div className="z-10 flex flex-col items-center justify-center flex-grow">
        <img
          src={Src}
          alt={Name}
          className="w-24 h-24 mb-6 brightness-125 contrast-125 object-contain"
        />
        <p className="text-white text-xl font-bold drop-shadow-md text-center brightness-110">
          {Name}
        </p>
      </div>
    </div>
  );
};

export default SkillCard;
