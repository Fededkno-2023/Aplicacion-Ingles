import React from 'react';
import { EVOLUTIVOS_DATA } from '../data/mockData';
import { EvolutivoCard } from './journey/EvolutivoCard';
import { GamifiedProgressBar } from './common/GamifiedProgressBar';

interface JourneyScreenProps {
  onStartPractice: (evolutivoId?: number) => void;
  stars: number;
}

export const JourneyScreen: React.FC<JourneyScreenProps> = ({ onStartPractice }) => {
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
        <div className="flex-1">
          <GamifiedProgressBar progressPercentage={20} heightClass="h-3" />
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

        {/* Data-driven Evolutivo Station Cards */}
        {EVOLUTIVOS_DATA.map((mission) => (
          <EvolutivoCard
            key={mission.id}
            mission={mission}
            onStartPractice={onStartPractice}
          />
        ))}
      </div>
    </div>
  );
};
