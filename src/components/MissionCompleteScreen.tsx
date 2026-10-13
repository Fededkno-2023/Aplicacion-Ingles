import React, { useState } from 'react';
import { StartSchoolLogo } from './StartSchoolLogo';
import { BUDDY_MASCOT_IMAGE } from '../data/mockData';
import { sound } from '../utils/audio';

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

  const handleReview = (topic: string) => {
    sound.playClick();
    onReviewTip(topic);
  };

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
            <span className="material-symbols-outlined text-amber-500 text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>
              emoji_events
            </span>
            <span>Super Star!</span>
          </div>
        </div>
      </div>

      {/* Practice Result Bento Card */}
      <section className="bg-white rounded-3xl p-4.5 border-2 border-[#d5e3ff] tactile-card shadow-sm mt-5 mb-4">
        <div className="text-center">
          <span className="inline-block bg-[#e7eeff] text-[#0058be] text-[12px] font-extrabold px-3 py-0.5 rounded-full mb-1 border border-[#d5e3ff]">
            Practice Result
          </span>
          <h3 className="font-headline text-[24px] font-extrabold text-[#001c3b]">
            8 / 10 Correct Answers
          </h3>
        </div>

        {/* Mastery Score Progress */}
        <div className="mt-2.5">
          <div className="flex justify-between items-center text-[13px] font-extrabold mb-1">
            <span className="text-slate-600">Mastery Score</span>
            <span className="text-[#059669]">80% Great Job!</span>
          </div>
          <div className="w-full bg-[#e7eeff] rounded-full h-3 p-0.5 border border-[#d5e3ff]">
            <div
              className="bg-gradient-to-r from-blue-500 to-[#34d399] h-full rounded-full transition-all duration-700"
              style={{ width: '80%' }}
            />
          </div>
        </div>

        {/* 3 English Stars */}
        <div className="mt-4 pt-3 border-t border-slate-100 text-center">
          <span className="text-[12px] font-bold text-slate-500 uppercase tracking-wider block mb-2">
            Your English Stars
          </span>
          <div className="flex justify-center items-center gap-3">
            {[1, 2, 3].map((starNum) => (
              <div
                key={starNum}
                onClick={() => sound.playStar()}
                className="w-16 h-16 rounded-2xl bg-[#fef3c7] border-2 border-[#f59e0b] flex flex-col items-center justify-center cursor-pointer shadow-xs hover:scale-105 active:scale-95 transition-transform"
              >
                <span className="text-2xl drop-shadow-xs">⭐</span>
                <span className="text-[10px] font-extrabold text-[#92400e] mt-0.5">
                  Star {starNum}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Did Great Section */}
      <section className="bg-white rounded-3xl p-4 border border-[#d5e3ff] shadow-xs mb-3.5">
        <div className="flex items-center gap-1.5 mb-2.5">
          <span className="text-base">🎉</span>
          <h4 className="font-headline text-[16px] font-bold text-[#001c3b]">
            What You Did Great!
          </h4>
        </div>

        <div className="flex flex-col gap-2">
          {/* Item 1 */}
          <div className="flex items-center justify-between p-2.5 bg-emerald-50/70 border border-emerald-200 rounded-2xl">
            <div className="flex items-center gap-2.5">
              <span className="text-2xl">🍎</span>
              <div>
                <h5 className="font-headline text-[14px] font-bold text-emerald-950">
                  Colors &amp; Fruits
                </h5>
                <span className="text-[11px] font-bold text-emerald-700">
                  5 of 5 Perfect answers
                </span>
              </div>
            </div>
            <div className="w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center">
              <span className="material-symbols-outlined text-[16px] font-bold">check</span>
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex items-center justify-between p-2.5 bg-emerald-50/70 border border-emerald-200 rounded-2xl">
            <div className="flex items-center gap-2.5">
              <span className="text-2xl">🐶</span>
              <div>
                <h5 className="font-headline text-[14px] font-bold text-emerald-950">
                  Animals &amp; Pets
                </h5>
                <span className="text-[11px] font-bold text-emerald-700">
                  3 of 3 Spot-on vocabulary
                </span>
              </div>
            </div>
            <div className="w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center">
              <span className="material-symbols-outlined text-[16px] font-bold">check</span>
            </div>
          </div>
        </div>
      </section>

      {/* Let's Practice a Little More Section */}
      <section className="bg-white rounded-3xl p-4 border border-[#d5e3ff] shadow-xs mb-3.5">
        <div className="flex items-center gap-1.5 mb-2.5">
          <span className="text-base">💡</span>
          <h4 className="font-headline text-[16px] font-bold text-[#001c3b]">
            Let's Practice a Little More!
          </h4>
        </div>

        <div className="flex flex-col gap-2">
          {/* Review 1 */}
          <div className="flex items-center justify-between p-2.5 bg-amber-50/70 border border-amber-200 rounded-2xl">
            <div className="flex items-center gap-2.5">
              <span className="text-2xl">📝</span>
              <div>
                <h5 className="font-headline text-[14px] font-bold text-amber-950">
                  Simple Sentences
                </h5>
                <span className="text-[11px] font-semibold text-amber-700">
                  1 friendly review tip
                </span>
              </div>
            </div>
            <button
              onClick={() => handleReview('Simple Sentences')}
              className="px-3 py-1 bg-white hover:bg-amber-100 text-[#92400e] text-[12px] font-extrabold rounded-full border border-amber-300 shadow-2xs active:scale-95 transition-all"
            >
              Review
            </button>
          </div>

          {/* Review 2 */}
          <div className="flex items-center justify-between p-2.5 bg-amber-50/70 border border-amber-200 rounded-2xl">
            <div className="flex items-center gap-2.5">
              <span className="text-2xl">✨</span>
              <div>
                <h5 className="font-headline text-[14px] font-bold text-amber-950">
                  Verb To Be
                </h5>
                <span className="text-[11px] font-semibold text-amber-700">
                  Almost there!
                </span>
              </div>
            </div>
            <button
              onClick={() => handleReview('Verb To Be')}
              className="px-3 py-1 bg-white hover:bg-amber-100 text-[#92400e] text-[12px] font-extrabold rounded-full border border-amber-300 shadow-2xs active:scale-95 transition-all"
            >
              Review
            </button>
          </div>
        </div>
      </section>

      {/* State Switcher Toggle Pill (as visible in Image 7) */}
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
      <div className="bg-[#ecfdf5] border-2 border-[#34d399] rounded-2xl p-3.5 flex items-center gap-3 mb-4 shadow-xs">
        <div className="w-10 h-10 rounded-xl bg-[#34d399] text-white flex items-center justify-center shrink-0">
          <span className="material-symbols-outlined text-[22px]">lock_open</span>
        </div>
        <div>
          <div className="font-headline text-[15px] font-bold text-[#065f46]">
            Level Unlocked! 🔓
          </div>
          <p className="text-[12px] font-semibold text-[#047857] mt-0.5 leading-tight">
            Amazing! You're ready for your next adventure in{' '}
            <strong className="underline">Evolutivo 2</strong>!
          </p>
        </div>
      </div>

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
