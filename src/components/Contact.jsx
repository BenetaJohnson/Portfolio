import React from 'react';
import ContactBox from './ContactBox';
import Globe from './Globe';
import StarField from './StarField';
import SakuraPetals from './SakuraPetals';

const Contact = () => {
  return (
    <section className="relative w-full min-h-screen font-lexend overflow-hidden z-0">

      {/* Content */}
      <div className="relative z-10 px-6 py-24 flex flex-col items-center justify-center">
        {/* Title */}
        <div
          className="text-center mb-12 px-6 py-4 rounded-xl border-[2px] border-transparent bg-clip-padding bg-black/20 backdrop-blur-md"
          style={{
            borderImage: 'linear-gradient(90deg, #a472f2, #6dd5ed) 1',
          }}
        >
          <h2 className="text-5xl font-extrabold text-white drop-shadow-[0_0_10px_#bfaaff]">
            LET’S CONNECT
          </h2>
        </div>

        <p className="text-white text-2xl mb-12 text-center">
          DM me through my social media links or drop a message below 👇
        </p>

        {/* Form and Earth */}
        <div className="flex flex-col lg:flex-row items-center justify-center w-full gap-x-12 ml-32">
          <div className="w-full max-w-xl">
            <ContactBox />
          </div>
          <div className="w-full h-[800px] flex items-center justify-center">
            <Globe />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
