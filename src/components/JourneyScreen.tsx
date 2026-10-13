import React from 'react';
import { EVOLUTIVOS_DATA, BUDDY_MASCOT_IMAGE } from '../data/mockData';
import { sound } from '../utils/audio';

interface JourneyScreenProps {
  onStartPractice: (evolutivoId?: number) => void;
  stars: number;
}

export const JourneyScreen: React.FC<JourneyScreenProps> = ({ onStartPractice, stars }) => {
  return (
    <div className="flex-1 flex flex-col px-4 pt-3 pb-28 max-w-[420px] mx-auto w-full relative">
      {/* Top Trail Map Header */}
      <div className="flex items-center justify-between mb-1">
        <div className="flex items-center gap-1.5 bg-[#e7eeff] text-[#0058be] px-3 py-1 rounded-full text-[12px] font-bold border border-[#d5e3ff]">
          <span className="material-symbols-outlined text-[16px]">explore</span>
          <span>Trail Map</span>
        </div>
        <span className="text-[13px] font-extrabold text-[#424754]">
          Level 1 - Explorer
        </span>
      </div>

      <h2 className="font-headline text-[26px] font-bold text-[#001c3b] tracking-tight mt-1 leading-snug">
        My Learning Journey
      </h2>
      <p className="text-[14px] font-semibold text-[#424754] mb-3">
        Complete missions and unlock new adventures!
      </p>

      {/* Evolutivos Progress Bar */}
      <div className="flex items-center gap-3 mb-6 bg-white p-2.5 rounded-2xl border border-[#d5e3ff] shadow-2xs">
        <div className="flex-1 bg-[#e7eeff] rounded-full h-3 p-0.5 relative border border-[#d5e3ff]">
          <div className="bg-[#64f9bc] h-full rounded-full w-[20%] transition-all duration-500" />
        </div>
        <span className="text-[12px] font-extrabold text-[#0058be] whitespace-nowrap">
          1 / 6 Evolutivos
        </span>
      </div>

      {/* Trail Map Stations Container */}
      <div className="relative flex flex-col gap-5">
        {/* Winding Trail Background SVG */}
        <svg
          className="absolute left-1/2 -translate-x-1/2 top-10 bottom-10 w-full h-[90%] pointer-events-none z-0"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 190 20 C 260 90, 260 160, 190 220 C 120 280, 120 360, 200 420 C 270 480, 270 560, 190 620 C 130 680, 130 760, 190 820"
            stroke="#93c5fd"
            strokeWidth="4"
            strokeDasharray="8 8"
            strokeLinecap="round"
            className="dashed-trail opacity-80"
          />
        </svg>

        {/* ----------------- EVOLUTIVO 1 (Completed) ----------------- */}
        <section className="relative z-10 w-full bg-white rounded-3xl p-4 border-2 border-[#34d399]/70 tactile-card transition-transform">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              {/* Green indicator icon */}
              <div className="w-9 h-9 rounded-full bg-[#34d399] flex items-center justify-center text-white shadow-xs">
                <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                  check
                </span>
              </div>
              <div>
                <span className="text-[11px] font-extrabold text-[#006c4b] tracking-wider uppercase block">
                  EVOLUTIVO 1
                </span>
                <h3 className="font-headline text-[20px] font-bold text-[#001c3b] leading-tight">
                  First Steps
                </h3>
              </div>
            </div>

            {/* Completed badge */}
            <div className="flex items-center gap-1 bg-[#d1fae5] text-[#065f46] px-3 py-1 rounded-full text-[12px] font-bold border border-[#a7f3d0]">
              <span className="material-symbols-outlined text-[15px]">check_circle</span>
              <span>Completed</span>
            </div>
          </div>

          <p className="text-[13px] font-semibold text-[#424754] mt-2.5 flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[17px] text-emerald-600">nature</span>
            <span>Garden World • Colors, Numbers, Animals, Greetings</span>
          </p>

          <div className="flex items-center justify-between mt-3 pt-2.5 border-t border-slate-100">
            <div className="flex items-center gap-1 text-amber-500 font-extrabold text-[13px]">
              <span className="text-base">⭐⭐⭐</span>
              <span className="text-slate-600 ml-1">3/3</span>
            </div>

            <button
              onClick={() => {
                sound.playClick();
                onStartPractice(1);
              }}
              className="inline-flex items-center gap-1 text-[13px] font-extrabold text-[#0058be] hover:text-blue-700 active:scale-95 transition-all"
            >
              <span className="material-symbols-outlined text-[16px]">replay</span>
              <span>Practice Again</span>
            </button>
          </div>
        </section>

        {/* ----------------- EVOLUTIVO 2 (CURRENT MISSION) ----------------- */}
        <section className="relative z-10 w-full bg-white rounded-3xl p-4.5 border-4 border-[#FBBF24] tactile-card shadow-md">
          {/* Top Pill Ribbon: CURRENT MISSION */}
          <div className="absolute -top-3.5 left-8 bg-[#f59e0b] text-white px-4 py-0.5 rounded-full text-[11px] font-black uppercase tracking-wider shadow-sm border border-amber-300">
            CURRENT MISSION
          </div>

          <div className="flex items-center justify-between pt-1">
            <div>
              <span className="text-[11px] font-extrabold text-[#0058be] tracking-wider uppercase block">
                EVOLUTIVO 2
              </span>
              <h3 className="font-headline text-[22px] font-bold text-[#001c3b] leading-tight">
                My World
              </h3>
            </div>

            {/* Blue Target Node */}
            <div className="w-9 h-9 rounded-full bg-blue-100 border-2 border-[#3b82f6] flex items-center justify-center">
              <div className="w-3.5 h-3.5 rounded-full bg-[#3b82f6] animate-ping opacity-75" />
            </div>
          </div>

          <p className="text-[13px] font-semibold text-[#1e3a5f] mt-1.5">
            Little schoolhouse • <span className="font-extrabold text-[#0058be]">Family, Toys, School Objects, Food</span>
          </p>

          {/* Buddy Speech Callout */}
          <div className="my-3.5 p-3 rounded-2xl bg-blue-50/90 border border-blue-200 flex items-center gap-3">
            <div className="w-16 h-16 rounded-xl bg-gradient-to-b from-amber-100 to-amber-200 border border-amber-300 flex items-center justify-center shrink-0 overflow-hidden shadow-2xs">
              <img
                src={BUDDY_MASCOT_IMAGE}
                alt="Buddy thumbnail"
                className="w-14 h-14 object-contain"
              />
            </div>
            <div className="flex-1">
              <span className="text-[11px] font-extrabold text-[#0058be] flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">chat_bubble</span>
                Buddy says:
              </span>
              <p className="text-[13px] font-bold text-[#001c3b] leading-tight mt-0.5">
                Your turn here! Let's explore your home and toys!
              </p>
            </div>
          </div>

          {/* Start Practice Primary Button */}
          <button
            onClick={() => {
              sound.playClick();
              onStartPractice(2);
            }}
            className="w-full min-h-[50px] py-3 px-5 rounded-2xl tactile-btn-blue font-headline text-[17px] font-extrabold flex items-center justify-center gap-2"
          >
            <span
              className="material-symbols-outlined text-[22px]"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              rocket_launch
            </span>
            <span>Start Practice</span>
            <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
          </button>
        </section>

        {/* ----------------- EVOLUTIVO 3 (Locked) ----------------- */}
        <section className="relative z-10 w-full bg-[#f8faff] rounded-3xl p-4 border border-[#d5e3ff] shadow-xs opacity-90">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-500">
                <span className="material-symbols-outlined text-[19px]">forest</span>
              </div>
              <div>
                <span className="text-[11px] font-bold text-slate-500 tracking-wider">
                  Evolutivo 3
                </span>
                <h3 className="font-headline text-[18px] font-bold text-[#424754] leading-tight">
                  Little Sentences
                </h3>
              </div>
            </div>

            <div className="flex items-center gap-1 bg-[#ffdf9f]/70 text-[#5c4300] px-2.5 py-1 rounded-full text-[11px] font-extrabold border border-[#f9bd22]/60">
              <span className="material-symbols-outlined text-[14px]">lock</span>
              <span>Locked</span>
            </div>
          </div>

          <p className="text-[13px] font-medium text-slate-500 mt-2">
            Enchanted forest • Pronouns, Verb To Be, Have Got
          </p>

          <div className="mt-2 text-[12px] font-bold text-[#0058be] flex items-center gap-1">
            <span className="material-symbols-outlined text-[15px]">stars</span>
            <span>Unlocks after finishing Evolutivo 2</span>
          </div>
        </section>

        {/* ----------------- EVOLUTIVO 4 (Locked) ----------------- */}
        <section className="relative z-10 w-full bg-[#f8faff] rounded-3xl p-4 border border-[#d5e3ff] shadow-xs opacity-85">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-500">
                <span className="material-symbols-outlined text-[19px]">apartment</span>
              </div>
              <div>
                <span className="text-[11px] font-bold text-slate-500 tracking-wider">
                  Evolutivo 4
                </span>
                <h3 className="font-headline text-[18px] font-bold text-[#424754] leading-tight">
                  Everyday English
                </h3>
              </div>
            </div>

            <div className="flex items-center gap-1 bg-[#ffdf9f]/70 text-[#5c4300] px-2.5 py-1 rounded-full text-[11px] font-extrabold border border-[#f9bd22]/60">
              <span className="material-symbols-outlined text-[14px]">lock</span>
              <span>Locked</span>
            </div>
          </div>

          <p className="text-[13px] font-medium text-slate-500 mt-2">
            Cozy town • Daily Routines, Simple Present
          </p>

          <div className="mt-2 text-[12px] font-bold text-slate-500 flex items-center gap-1">
            <span className="material-symbols-outlined text-[15px]">schedule</span>
            <span>Requires 45 more Stars</span>
          </div>
        </section>

        {/* ----------------- EVOLUTIVO 5 (Locked) ----------------- */}
        <section className="relative z-10 w-full bg-[#f8faff] rounded-3xl p-4 border border-[#d5e3ff] shadow-xs opacity-80">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-500">
                <span className="material-symbols-outlined text-[19px]">directions_run</span>
              </div>
              <div>
                <span className="text-[11px] font-bold text-slate-500 tracking-wider">
                  Evolutivo 5
                </span>
                <h3 className="font-headline text-[18px] font-bold text-[#424754] leading-tight">
                  Actions!
                </h3>
              </div>
            </div>

            <div className="flex items-center gap-1 bg-[#ffdf9f]/70 text-[#5c4300] px-2.5 py-1 rounded-full text-[11px] font-extrabold border border-[#f9bd22]/60">
              <span className="material-symbols-outlined text-[14px]">lock</span>
              <span>Locked</span>
            </div>
          </div>

          <p className="text-[13px] font-medium text-slate-500 mt-2">
            Adventure park • Actions, Present Continuous
          </p>

          <div className="mt-2 text-[12px] font-bold text-slate-500 flex items-center gap-1">
            <span className="material-symbols-outlined text-[15px]">lock</span>
            <span>Coming up in Chapter 5</span>
          </div>
        </section>

        {/* ----------------- EVOLUTIVO 6 (Locked) ----------------- */}
        <section className="relative z-10 w-full bg-[#f8faff] rounded-3xl p-4 border border-[#d5e3ff] shadow-xs opacity-75">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-500">
                <span className="material-symbols-outlined text-[19px]">castle</span>
              </div>
              <div>
                <span className="text-[11px] font-bold text-slate-500 tracking-wider">
                  Evolutivo 6
                </span>
                <h3 className="font-headline text-[18px] font-bold text-[#424754] leading-tight">
                  Time Travelers
                </h3>
              </div>
            </div>

            <div className="flex items-center gap-1 bg-[#ffdf9f]/70 text-[#5c4300] px-2.5 py-1 rounded-full text-[11px] font-extrabold border border-[#f9bd22]/60">
              <span className="material-symbols-outlined text-[14px]">lock</span>
              <span>Locked</span>
            </div>
          </div>

          <p className="text-[13px] font-medium text-slate-500 mt-2">
            Fantasy castle with magical clocks • Basic Past
          </p>
        </section>
      </div>
    </div>
  );
};
