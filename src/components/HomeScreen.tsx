import React, { useState } from 'react';
import { StartSchoolLogo } from './StartSchoolLogo';
import { BUDDY_MASCOT_IMAGE } from '../data/mockData';
import { sound } from '../utils/audio';

interface HomeScreenProps {
  onStartJourney: () => void;
  onStartPractice: () => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({ onStartJourney, onStartPractice }) => {
  const [mascotWiggle, setMascotWiggle] = useState(false);

  const handleMascotTap = () => {
    sound.playClick();
    sound.speak("Hello friend! Let's learn English together!");
    setMascotWiggle(true);
    setTimeout(() => setMascotWiggle(false), 600);
  };

  return (
    <div className="flex-1 flex flex-col px-4 pt-2 pb-24 max-w-[420px] mx-auto w-full">
      {/* Sub-Header & Institutional Tag */}
      <div className="pt-1 pb-3 flex flex-col items-center text-center">
        <StartSchoolLogo size="md" className="mb-1" />
        <p className="font-headline text-[15px] text-[#0058be] font-extrabold tracking-wide">
          Learn, Practice &amp; Level Up!
        </p>
      </div>

      {/* Mascot Stage Card */}
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

      {/* Current Mission Bento Card */}
      <section className="w-full bg-white rounded-3xl p-4 border-2 border-[#d5e3ff] tactile-card relative mb-4">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center space-x-2.5">
            <span className="w-10 h-10 bg-[#ffdf9f] rounded-2xl flex items-center justify-center border-b-2 border-[#f9bd22] shadow-xs">
              <span
                className="material-symbols-outlined text-[#765700] text-2xl"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                military_tech
              </span>
            </span>
            <div>
              <span className="text-[12px] font-extrabold text-[#0058be] uppercase tracking-wider block">
                Active Quest
              </span>
              <h3 className="font-headline text-[18px] font-bold text-[#001c3b] leading-tight">
                Your Mission: Evolutivo 1
              </h3>
            </div>
          </div>

          {/* Step Pill */}
          <div className="bg-[#68fcbf] text-[#002114] px-2.5 py-1 rounded-full text-[12px] font-extrabold flex items-center space-x-1 border border-[#45dfa4]">
            <span className="material-symbols-outlined text-sm">bolt</span>
            <span>Step 1 of 5</span>
          </div>
        </div>

        <p className="text-[14px] font-semibold text-[#424754] mb-3 leading-relaxed">
          Your adventure starts here! Meet cute forest friends and discover sunny words.
        </p>

        {/* Gamified Progress Bar */}
        <div className="w-full bg-[#e7eeff] rounded-full h-4 p-0.5 relative border border-[#d5e3ff] flex items-center mb-1">
          <div className="bg-[#64f9bc] h-full rounded-full w-2/5 transition-all duration-500 relative flex items-center justify-end">
            {/* Glowing Star Coin on edge */}
            <div
              onClick={(e) => {
                e.stopPropagation();
                sound.playStar();
              }}
              className="w-5 h-5 bg-[#FBBF24] border-2 border-[#D97706] rounded-full absolute -right-2 flex items-center justify-center shadow-xs cursor-pointer hover:scale-110 active:scale-95 transition-transform"
            >
              <span
                className="material-symbols-outlined text-[11px] text-[#765700]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                star
              </span>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center text-[12px] text-[#424754] mt-1.5 px-0.5">
          <span className="font-bold text-[#0058be]">Level 1: Colors &amp; Animals</span>
          <span className="font-bold">40% Complete</span>
        </div>
      </section>

      {/* Primary Action CTA Button */}
      <div className="flex flex-col items-center w-full">
        <button
          onClick={() => {
            sound.playClick();
            onStartJourney();
          }}
          className="w-full min-h-[56px] py-3.5 px-6 rounded-2xl tactile-btn-blue font-headline text-[18px] font-extrabold flex items-center justify-center space-x-2.5 transition-all"
        >
          <span
            className="material-symbols-outlined text-2xl"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            sports_esports
          </span>
          <span className="tracking-wide">Let's Play!</span>
          <span className="material-symbols-outlined text-2xl">arrow_forward</span>
        </button>

        <div className="flex items-center space-x-1.5 mt-2.5 text-[#424754] text-[13px] font-medium">
          <span className="material-symbols-outlined text-base text-[#0058be]">map</span>
          <span>
            Takes you directly to{' '}
            <strong className="text-[#0058be] font-bold">My Learning Journey</strong>
          </span>
        </div>

        {/* Secondary quick start practice button */}
        <button
          onClick={() => {
            sound.playClick();
            onStartPractice();
          }}
          className="mt-3 text-xs font-bold text-[#0058be] hover:underline flex items-center gap-1"
        >
          <span>Or Jump Straight to Practice Question</span>
          <span className="material-symbols-outlined text-sm">open_in_new</span>
        </button>
      </div>
    </div>
  );
};
