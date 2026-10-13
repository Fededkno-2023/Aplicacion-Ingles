import React, { useState } from 'react';
import { EvolutivoMission } from '../../types';
import { BUDDY_MASCOT_IMAGE } from '../../data/mockData';
import { sound } from '../../utils/audio';

interface EvolutivoCardProps {
  mission: EvolutivoMission;
  onStartPractice: (missionId: number) => void;
}

export const EvolutivoCard: React.FC<EvolutivoCardProps> = ({ mission, onStartPractice }) => {
  const [showLockedHint, setShowLockedHint] = useState(false);

  if (mission.status === 'completed') {
    return (
      <section className="relative z-10 w-full bg-white rounded-3xl p-4 border-2 border-[#34d399]/70 tactile-card transition-transform">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#34d399] flex items-center justify-center text-white shadow-xs">
              <span
                className="material-symbols-outlined text-[20px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                check
              </span>
            </div>
            <div>
              <span className="text-[11px] font-extrabold text-[#006c4b] tracking-wider uppercase block">
                {mission.code}
              </span>
              <h3 className="font-headline text-[20px] font-bold text-[#001c3b] leading-tight">
                {mission.title}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-1 bg-[#d1fae5] text-[#065f46] px-3 py-1 rounded-full text-[12px] font-bold border border-[#a7f3d0]">
            <span className="material-symbols-outlined text-[15px]">check_circle</span>
            <span>Completed</span>
          </div>
        </div>

        <p className="text-[13px] font-semibold text-[#424754] mt-2.5 flex items-center gap-1.5">
          <span className="material-symbols-outlined text-[17px] text-emerald-600">nature</span>
          <span>{mission.theme} • {mission.subtopics}</span>
        </p>

        <div className="flex items-center justify-between mt-3 pt-2.5 border-t border-slate-100">
          <div className="flex items-center gap-1 text-amber-500 font-extrabold text-[13px]">
            <span className="text-base">⭐⭐⭐</span>
            <span className="text-slate-600 ml-1">
              {mission.starsEarned}/{mission.totalStars}
            </span>
          </div>

          <button
            onClick={() => {
              sound.playClick();
              onStartPractice(mission.id);
            }}
            className="min-h-[44px] px-3 inline-flex items-center gap-1 text-[13px] font-extrabold text-[#0058be] hover:text-blue-700 active:scale-95 transition-all touch-manipulation"
          >
            <span className="material-symbols-outlined text-[18px]">replay</span>
            <span>Practice Again</span>
          </button>
        </div>
      </section>
    );
  }

  if (mission.status === 'active') {
    return (
      <section className="relative z-10 w-full bg-white rounded-3xl p-4.5 border-4 border-[#FBBF24] tactile-card shadow-md">
        {/* Top Pill Ribbon: CURRENT MISSION */}
        <div className="absolute -top-3.5 left-8 bg-[#f59e0b] text-white px-4 py-0.5 rounded-full text-[11px] font-black uppercase tracking-wider shadow-sm border border-amber-300">
          CURRENT MISSION
        </div>

        <div className="flex items-center justify-between pt-1">
          <div>
            <span className="text-[11px] font-extrabold text-[#0058be] tracking-wider uppercase block">
              {mission.code}
            </span>
            <h3 className="font-headline text-[22px] font-bold text-[#001c3b] leading-tight">
              {mission.title}
            </h3>
          </div>

          {/* Blue Target Node */}
          <div className="w-9 h-9 rounded-full bg-blue-100 border-2 border-[#3b82f6] flex items-center justify-center">
            <div className="w-3.5 h-3.5 rounded-full bg-[#3b82f6] animate-ping opacity-75" />
          </div>
        </div>

        <p className="text-[13px] font-semibold text-[#1e3a5f] mt-1.5">
          {mission.theme} • <span className="font-extrabold text-[#0058be]">{mission.subtopics}</span>
        </p>

        {/* Buddy Speech Callout */}
        {mission.buddyQuote && (
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
                {mission.buddyQuote}
              </p>
            </div>
          </div>
        )}

        {/* Start Practice Primary Button in bottom reach */}
        <button
          onClick={() => {
            sound.playClick();
            onStartPractice(mission.id);
          }}
          className="w-full min-h-[54px] py-3.5 px-5 rounded-2xl tactile-btn-blue font-headline text-[17px] font-extrabold flex items-center justify-center gap-2 shadow-sm touch-manipulation active:scale-[0.98]"
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
    );
  }

  // Locked mission cards
  const getMissionIcon = (id: number) => {
    switch (id) {
      case 3:
        return 'forest';
      case 4:
        return 'apartment';
      case 5:
        return 'directions_run';
      default:
        return 'castle';
    }
  };

  const handleLockedTap = () => {
    sound.playTryAgain();
    setShowLockedHint(true);
    setTimeout(() => setShowLockedHint(false), 3000);
  };

  return (
    <section
      role="button"
      tabIndex={0}
      onClick={handleLockedTap}
      className="relative z-10 w-full bg-[#f8faff] rounded-3xl p-4 border border-[#d5e3ff] shadow-xs opacity-85 cursor-pointer touch-manipulation active:scale-[0.99] transition-transform"
    >
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-500">
            <span className="material-symbols-outlined text-[19px]">
              {getMissionIcon(mission.id)}
            </span>
          </div>
          <div>
            <span className="text-[11px] font-bold text-slate-500 tracking-wider">
              {mission.code}
            </span>
            <h3 className="font-headline text-[18px] font-bold text-[#424754] leading-tight">
              {mission.title}
            </h3>
          </div>
        </div>

        <div className="flex items-center gap-1 bg-[#ffdf9f]/70 text-[#5c4300] px-2.5 py-1 rounded-full text-[11px] font-extrabold border border-[#f9bd22]/60">
          <span className="material-symbols-outlined text-[14px]">lock</span>
          <span>Locked</span>
        </div>
      </div>

      <p className="text-[13px] font-medium text-slate-500 mt-2">
        {mission.theme} • {mission.subtopics}
      </p>

      {mission.lockRequirement && (
        <div className="mt-2 text-[12px] font-bold text-[#0058be] flex items-center gap-1">
          <span className="material-symbols-outlined text-[15px]">
            {mission.id === 4 ? 'schedule' : 'stars'}
          </span>
          <span>{mission.lockRequirement}</span>
        </div>
      )}

      {/* Immediate feedback hint when tapping locked station */}
      {showLockedHint && (
        <div className="mt-2.5 p-2 bg-amber-50 border border-amber-300 rounded-xl text-[12px] font-bold text-amber-900 flex items-center gap-1.5 animate-fadeIn">
          <span>🔒</span>
          <span>¡Completa primero la misión actual (Evolutivo 2) para desbloquear este nivel!</span>
        </div>
      )}
    </section>
  );
};
