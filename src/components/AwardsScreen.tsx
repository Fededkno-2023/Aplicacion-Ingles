import React from 'react';
import { BADGES_DATA, BUDDY_MASCOT_IMAGE } from '../data/mockData';
import { sound } from '../utils/audio';

interface AwardsScreenProps {
  stars: number;
}

export const AwardsScreen: React.FC<AwardsScreenProps> = ({ stars }) => {
  return (
    <div className="flex-1 flex flex-col px-4 pt-3 pb-28 max-w-[420px] mx-auto w-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-1.5 bg-[#ffdf9f] text-[#5c4300] px-3 py-1 rounded-full text-[12px] font-extrabold border border-[#f9bd22]">
          <span className="material-symbols-outlined text-[16px]">military_tech</span>
          <span>Trophy Room</span>
        </div>
        <span className="text-[13px] font-extrabold text-[#0058be]">
          Level 1 Explorer
        </span>
      </div>

      <h2 className="font-headline text-[26px] font-bold text-[#001c3b] leading-tight mt-1">
        Your English Badges
      </h2>
      <p className="text-[14px] font-semibold text-[#424754] mb-4">
        Collect golden stars and earn special stickers with Buddy!
      </p>

      {/* Star Chest Showcase */}
      <div className="bg-gradient-to-r from-amber-100 via-amber-50 to-orange-100 border-2 border-amber-300 rounded-3xl p-4 flex items-center justify-between mb-4 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-14 h-14 rounded-2xl bg-amber-400 text-amber-950 flex items-center justify-center text-3xl shadow-xs border-b-2 border-amber-600">
            ⭐
          </div>
          <div>
            <span className="text-[11px] font-extrabold text-amber-800 uppercase tracking-wider block">
              Star Vault
            </span>
            <div className="font-headline text-[22px] font-black text-[#765700]">
              {stars} Stars Collected
            </div>
          </div>
        </div>
        <div className="text-right">
          <span className="text-[11px] font-bold text-slate-500 block">Next Reward</span>
          <span className="text-[12px] font-extrabold text-amber-700">150 ⭐</span>
        </div>
      </div>

      {/* Badges Grid */}
      <div className="flex flex-col gap-3">
        {BADGES_DATA.map((badge) => {
          return (
            <div
              key={badge.id}
              onClick={() => {
                if (badge.unlocked) sound.playCorrect();
                else sound.playClick();
              }}
              className={`p-3.5 rounded-2xl border-2 flex items-center justify-between transition-all cursor-pointer ${
                badge.unlocked
                  ? 'bg-white border-[#d5e3ff] tactile-card hover:scale-[1.01]'
                  : 'bg-slate-50/80 border-slate-200 opacity-60'
              }`}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center text-2xl shadow-xs ${badge.badgeColor}`}
                >
                  <span className="material-symbols-outlined text-[24px]">
                    {badge.icon}
                  </span>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-headline text-[15px] font-bold text-[#001c3b]">
                      {badge.title}
                    </h3>
                    <span className="text-[10px] font-black px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 uppercase">
                      {badge.category}
                    </span>
                  </div>
                  <p className="text-[12px] font-semibold text-slate-500 mt-0.5">
                    {badge.description}
                  </p>
                </div>
              </div>

              <div className="text-right shrink-0 ml-2">
                {badge.unlocked ? (
                  <span className="inline-flex items-center gap-0.5 text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                    <span className="material-symbols-outlined text-[13px]">check</span>
                    {badge.earnedDate}
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-0.5 text-[11px] font-bold text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full">
                    <span className="material-symbols-outlined text-[13px]">lock</span>
                    Locked
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Certificate Callout */}
      <div className="mt-4 p-4 rounded-3xl bg-[#ecfdf5] border-2 border-[#34d399] flex items-center gap-3.5 shadow-xs">
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-b from-amber-100 to-amber-200 border border-amber-300 flex items-center justify-center shrink-0">
          <img src={BUDDY_MASCOT_IMAGE} alt="Buddy" className="w-10 h-10 object-contain" />
        </div>
        <div>
          <h4 className="font-headline text-[14px] font-bold text-[#065f46]">
            Start School Certificate
          </h4>
          <p className="text-[12px] font-medium text-[#047857] mt-0.5">
            Complete Evolutivo 2 to unlock your first printable Junior English diploma!
          </p>
        </div>
      </div>
    </div>
  );
};
