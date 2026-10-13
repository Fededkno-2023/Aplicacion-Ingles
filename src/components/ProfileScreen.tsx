import React from 'react';
import { StartSchoolLogo } from './StartSchoolLogo';
import { BUDDY_MASCOT_IMAGE } from '../data/mockData';
import { sound } from '../utils/audio';

interface ProfileScreenProps {
  stars: number;
  streakDays: number;
  soundEnabled: boolean;
  onToggleSound: () => void;
}

export const ProfileScreen: React.FC<ProfileScreenProps> = ({
  stars,
  streakDays,
  soundEnabled,
  onToggleSound,
}) => {
  return (
    <div className="flex-1 flex flex-col px-4 pt-3 pb-28 max-w-[420px] mx-auto w-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <StartSchoolLogo size="sm" />
        <span className="text-[12px] font-bold text-slate-500">
          Student ID: #ST-9024
        </span>
      </div>

      {/* Profile Card */}
      <div className="bg-white rounded-3xl p-4.5 border-2 border-[#d5e3ff] tactile-card shadow-sm mt-1 mb-4 flex items-center gap-4">
        <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-b from-[#FFF5E6] to-[#FFE8CC] border-2 border-[#FDE0B4] flex items-center justify-center overflow-hidden shrink-0 shadow-2xs">
          <img
            src={BUDDY_MASCOT_IMAGE}
            alt="Leo Explorer"
            className="w-16 h-16 object-contain"
          />
          <div className="absolute bottom-0 right-0 bg-[#0058be] text-white p-1 rounded-tl-lg text-[10px]">
            🦊
          </div>
        </div>

        <div className="flex-1">
          <span className="text-[11px] font-extrabold text-[#0058be] tracking-wider uppercase block">
            Cadet Explorer
          </span>
          <h3 className="font-headline text-[22px] font-bold text-[#001c3b] leading-tight">
            Leo Martinez
          </h3>
          <p className="text-[12px] font-semibold text-slate-500 mt-0.5">
            Start School • Primary Class A
          </p>
        </div>
      </div>

      {/* Stats Quick Grid */}
      <div className="grid grid-cols-3 gap-2.5 mb-4">
        <div className="bg-white rounded-2xl p-3 border border-[#d5e3ff] text-center shadow-2xs">
          <span className="text-xl">⭐</span>
          <div className="font-headline text-[18px] font-bold text-[#765700] mt-0.5">
            {stars}
          </div>
          <span className="text-[11px] font-bold text-slate-500">Stars</span>
        </div>

        <div className="bg-white rounded-2xl p-3 border border-[#d5e3ff] text-center shadow-2xs">
          <span className="text-xl">🔥</span>
          <div className="font-headline text-[18px] font-bold text-orange-600 mt-0.5">
            {streakDays} Days
          </div>
          <span className="text-[11px] font-bold text-slate-500">Streak</span>
        </div>

        <div className="bg-white rounded-2xl p-3 border border-[#d5e3ff] text-center shadow-2xs">
          <span className="text-xl">🗺️</span>
          <div className="font-headline text-[18px] font-bold text-[#0058be] mt-0.5">
            Lvl 1
          </div>
          <span className="text-[11px] font-bold text-slate-500">World</span>
        </div>
      </div>

      {/* Learning Settings & Parental Controls */}
      <div className="bg-white rounded-3xl p-4 border border-[#d5e3ff] shadow-xs mb-4">
        <h4 className="font-headline text-[16px] font-bold text-[#001c3b] mb-3">
          App Settings
        </h4>

        <div className="flex flex-col gap-3">
          {/* Audio toggle */}
          <div className="flex items-center justify-between py-1">
            <div className="flex items-center gap-2.5">
              <span className="material-symbols-outlined text-[#0058be] text-[20px]">
                volume_up
              </span>
              <div>
                <span className="font-headline text-[14px] font-bold text-[#001c3b] block">
                  Sound Effects &amp; Speech
                </span>
                <span className="text-[11px] text-slate-500">
                  Hear English pronunciation &amp; cheerful chimes
                </span>
              </div>
            </div>

            <button
              onClick={() => {
                onToggleSound();
                sound.playClick();
              }}
              className={`w-12 h-6 rounded-full transition-colors relative p-0.5 ${
                soundEnabled ? 'bg-emerald-500' : 'bg-slate-300'
              }`}
            >
              <div
                className={`w-5 h-5 rounded-full bg-white shadow-xs transition-transform ${
                  soundEnabled ? 'translate-x-6' : 'translate-x-0'
                }`}
              />
            </button>
          </div>

          <div className="border-t border-slate-100 pt-3 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <span className="material-symbols-outlined text-amber-600 text-[20px]">
                translate
              </span>
              <div>
                <span className="font-headline text-[14px] font-bold text-[#001c3b] block">
                  Support Language
                </span>
                <span className="text-[11px] text-slate-500">Spanish / Español (Start School)</span>
              </div>
            </div>
            <span className="text-[12px] font-extrabold text-[#0058be] bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200">
              ES ⇄ EN
            </span>
          </div>
        </div>
      </div>

      {/* Parent / Teacher Note */}
      <div className="p-3.5 rounded-2xl bg-amber-50/70 border border-amber-200 text-[12px] text-amber-900 leading-relaxed">
        <strong className="block font-headline text-[13px] text-amber-950 mb-0.5">
          👨‍👩‍👧 For Parents &amp; Teachers:
        </strong>
        English Adventure is aligned with the Start School syllabus. Each Evolutivo reinforces core vocabulary, phonetic pronunciation, and listening comprehension in an encouraging, non-punitive setting.
      </div>
    </div>
  );
};
