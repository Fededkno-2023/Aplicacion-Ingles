import React, { useState } from 'react';
import { StartSchoolLogo } from './StartSchoolLogo';
import { BUDDY_MASCOT_IMAGE } from '../data/mockData';
import { sound } from '../utils/audio';
import { ScoreSummaryCard } from './complete/ScoreSummaryCard';
import { MissionReviewSection } from './complete/MissionReviewSection';
import { LevelUnlockedBanner } from './complete/LevelUnlockedBanner';

interface MissionCompleteScreenProps {
  onContinueAdventure: () => void;
  onBackToJourney: () => void;
  onReviewTip: (topic: string) => void;
}

export const MissionCompleteScreen: React.FC<MissionCompleteScreenProps> = ({
  onContinueAdventure,
  onBackToJourney,
  onReviewTip,
}) => {
  const [activeState, setActiveState] = useState<'A' | 'B'>('A');

  return (
    <div className="flex-1 flex flex-col px-4 pt-2 pb-28 max-w-[420px] mx-auto w-full">
      {/* Header & Logo */}
      <div className="flex flex-col items-center pt-1 pb-3 text-center">
        <StartSchoolLogo size="sm" className="mb-2" />
        <div className="flex items-center gap-1.5 justify-center">
          <h2 className="font-headline text-[26px] font-extrabold text-[#0058be] leading-tight">
            Mission Complete!
          </h2>
          <span className="text-2xl animate-bounce">🎉</span>
        </div>
        <p className="text-[14px] font-bold text-slate-600 mt-0.5">
          You rocked today's English mission!
        </p>
      </div>

      {/* Fox Mascot Stage with Super Star Badge */}
      <div className="relative flex flex-col items-center my-1">
        <div className="relative w-44 h-44 rounded-3xl bg-gradient-to-b from-[#fff7ed] to-[#fed7aa] border-2 border-amber-200 flex items-center justify-center p-2 shadow-xs">
          <img
            src={BUDDY_MASCOT_IMAGE}
            alt="Buddy the Super Star Fox"
            className="w-40 h-40 object-contain pointer-events-none drop-shadow-sm"
          />

          {/* Super Star Pill Pin */}
          <div className="absolute -bottom-3 bg-white border-2 border-emerald-500 text-emerald-800 px-4 py-1 rounded-full text-[13px] font-extrabold flex items-center gap-1.5 shadow-sm">
            <span
              className="material-symbols-outlined text-amber-500 text-[18px]"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              emoji_events
            </span>
            <span>Super Star!</span>
          </div>
        </div>
      </div>

      {/* Practice Result Bento Card */}
      <ScoreSummaryCard
        correctCount={8}
        totalCount={10}
        masteryPercentage={80}
      />

      {/* Review Sections */}
      <MissionReviewSection onReviewTip={onReviewTip} />

      {/* State Switcher Toggle Pill */}
      <div className="flex justify-center mb-4">
        <div className="inline-flex bg-[#e7eeff] p-1 rounded-full border border-[#d5e3ff]">
          <button
            onClick={() => {
              sound.playClick();
              setActiveState('A');
            }}
            className={`px-3 py-1 rounded-full text-[12px] font-bold transition-all ${
              activeState === 'A'
                ? 'bg-white text-[#0058be] shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            State A (80% Achieved)
          </button>
          <button
            onClick={() => {
              sound.playClick();
              setActiveState('B');
            }}
            className={`px-3 py-1 rounded-full text-[12px] font-bold transition-all ${
              activeState === 'B'
                ? 'bg-white text-[#0058be] shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            State B (Review Mode)
          </button>
        </div>
      </div>

      {/* Level Unlocked Banner */}
      <LevelUnlockedBanner unlockedLevelName="Evolutivo 2" />

      {/* Primary & Secondary Action CTAs */}
      <div className="flex flex-col gap-2.5">
        <button
          onClick={() => {
            sound.playClick();
            onContinueAdventure();
          }}
          className="w-full min-h-[52px] py-3.5 px-6 rounded-2xl tactile-btn-blue font-headline text-[17px] font-extrabold flex items-center justify-center gap-2"
        >
          <span>Continue Adventure</span>
          <span className="material-symbols-outlined text-[20px]">rocket_launch</span>
        </button>

        <button
          onClick={() => {
            sound.playClick();
            onBackToJourney();
          }}
          className="w-full min-h-[48px] py-3 px-6 rounded-2xl tactile-btn-secondary font-headline text-[15px] font-bold flex items-center justify-center gap-2"
        >
          <span className="material-symbols-outlined text-[18px]">arrow_back</span>
          <span>Back to My Journey</span>
        </button>
      </div>
    </div>
  );
};
