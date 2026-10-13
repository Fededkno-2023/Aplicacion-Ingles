import React, { useState } from 'react';
import { BUDDY_MASCOT_IMAGE } from '../../data/mockData';
import { sound } from '../../utils/audio';

export const MascotHeroStage: React.FC = () => {
  const [mascotWiggle, setMascotWiggle] = useState(false);

  const handleMascotTap = () => {
    sound.playClick();
    sound.speak("Hello friend! Let's learn English together!");
    setMascotWiggle(true);
    setTimeout(() => setMascotWiggle(false), 600);
  };

  return (
    <section className="relative w-full rounded-3xl bg-gradient-to-b from-[#FFF5E6] via-[#FFF0DB] to-[#FFE8CC] p-4 flex flex-col items-center border-2 border-[#FDE0B4] shadow-sm overflow-hidden mb-3">
      {/* Playful Floating Accents */}
      <span className="absolute top-2 left-4 font-headline text-3xl font-bold text-amber-300/80 select-none pointer-events-none">
        A
      </span>
      <span className="absolute top-7 right-5 font-headline text-3xl font-bold text-sky-300/80 select-none pointer-events-none">
        B
      </span>
      <span className="absolute bottom-12 left-5 font-headline text-2xl font-bold text-emerald-300/80 select-none pointer-events-none">
        C
      </span>
      <span
        className="material-symbols-outlined absolute top-3 right-12 text-[#FBBF24] text-xl opacity-80"
        style={{ fontVariationSettings: "'FILL' 1" }}
      >
        star
      </span>
      <span
        className="material-symbols-outlined absolute bottom-6 right-4 text-[#FBBF24] text-2xl opacity-85"
        style={{ fontVariationSettings: "'FILL' 1" }}
      >
        auto_awesome
      </span>

      {/* Buddy the Fox Mascot Image */}
      <div
        onClick={handleMascotTap}
        className={`relative z-10 w-44 h-44 sm:w-48 sm:h-48 drop-shadow-md cursor-pointer transition-transform duration-300 ${
          mascotWiggle ? 'scale-110 rotate-3' : 'hover:scale-105 active:scale-95'
        }`}
        title="Tap Buddy to say hello!"
      >
        <img
          src={BUDDY_MASCOT_IMAGE}
          alt="Buddy the Fox"
          className="w-full h-full object-contain pointer-events-none"
        />
      </div>

      {/* Cheerful Fox Speech Bubble */}
      <div className="relative z-10 bg-white border-2 border-[#d5e3ff] px-4 py-3 rounded-2xl shadow-sm text-center -mt-2 max-w-[290px]">
        {/* Bubble Tail */}
        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-t-2 border-l-2 border-[#d5e3ff] rotate-45" />

        <h2 className="relative z-10 font-headline text-[18px] font-bold text-[#001c3b] leading-tight">
          Ready for your English Adventure?
        </h2>
        <p className="relative z-10 text-[14px] font-semibold text-[#424754] mt-1">
          Practice, learn and become an English Star!
        </p>
      </div>
    </section>
  );
};
