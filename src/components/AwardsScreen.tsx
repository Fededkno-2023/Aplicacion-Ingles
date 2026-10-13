import React, { useState } from 'react';
import { BADGES_DATA, BUDDY_MASCOT_IMAGE } from '../data/mockData';
import { sound } from '../utils/audio';

interface AwardsScreenProps {
  stars: number;
}

type BadgeFilter = 'all' | 'unlocked' | 'locked';

export const AwardsScreen: React.FC<AwardsScreenProps> = ({ stars }) => {
  const [filter, setFilter] = useState<BadgeFilter>('all');

  const filteredBadges = BADGES_DATA.filter((badge) => {
    if (filter === 'unlocked') return badge.unlocked;
    if (filter === 'locked') return !badge.unlocked;
    return true;
  });

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
        Awards
      </h2>
      <p className="text-[14px] font-semibold text-[#424754] mb-3">
        Colecciona estrellas doradas y desbloquea insignias con Buddy.
      </p>

      {/* Star Chest Showcase */}
      <div className="bg-gradient-to-r from-amber-100 via-amber-50 to-orange-100 border-2 border-amber-300 rounded-3xl p-4 flex items-center justify-between mb-4 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-14 h-14 rounded-2xl bg-amber-400 text-amber-950 flex items-center justify-center text-3xl shadow-xs border-b-2 border-amber-600 shrink-0">
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
        <div className="text-right shrink-0">
          <span className="text-[11px] font-bold text-slate-500 block">Siguiente meta</span>
          <span className="text-[12px] font-extrabold text-amber-700">150 ⭐</span>
        </div>
      </div>

      {/* Filter Tabs with thumb-friendly buttons (44px min height) */}
      <div className="flex items-center gap-2 mb-3 bg-[#e7eeff] p-1 rounded-2xl border border-[#d5e3ff]">
        <button
          onClick={() => {
            sound.playClick();
            setFilter('all');
          }}
          className={`flex-1 min-h-[40px] py-1.5 px-2 rounded-xl text-[12px] font-extrabold transition-all touch-manipulation ${
            filter === 'all'
              ? 'bg-white text-[#0058be] shadow-xs'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          Todas ({BADGES_DATA.length})
        </button>
        <button
          onClick={() => {
            sound.playClick();
            setFilter('unlocked');
          }}
          className={`flex-1 min-h-[40px] py-1.5 px-2 rounded-xl text-[12px] font-extrabold transition-all touch-manipulation ${
            filter === 'unlocked'
              ? 'bg-white text-emerald-700 shadow-xs'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          Ganadas ({BADGES_DATA.filter((b) => b.unlocked).length})
        </button>
        <button
          onClick={() => {
            sound.playClick();
            setFilter('locked');
          }}
          className={`flex-1 min-h-[40px] py-1.5 px-2 rounded-xl text-[12px] font-extrabold transition-all touch-manipulation ${
            filter === 'locked'
              ? 'bg-white text-amber-800 shadow-xs'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          Por ganar ({BADGES_DATA.filter((b) => !b.unlocked).length})
        </button>
      </div>

      {/* Badges List or Empty State */}
      {filteredBadges.length > 0 ? (
        <div className="flex flex-col gap-3">
          {filteredBadges.map((badge) => (
            <div
              key={badge.id}
              role="button"
              tabIndex={0}
              onClick={() => {
                if (badge.unlocked) sound.playCorrect();
                else sound.playClick();
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  if (badge.unlocked) sound.playCorrect();
                  else sound.playClick();
                }
              }}
              className={`p-3.5 rounded-2xl border-2 flex items-center justify-between transition-all cursor-pointer touch-manipulation min-h-[64px] ${
                badge.unlocked
                  ? 'bg-white border-[#d5e3ff] tactile-card hover:scale-[1.01] active:scale-[0.99]'
                  : 'bg-slate-50/80 border-slate-200 opacity-60'
              }`}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center text-2xl shadow-xs shrink-0 ${badge.badgeColor}`}
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
                  <span className="inline-flex items-center gap-0.5 text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                    <span className="material-symbols-outlined text-[13px]">check</span>
                    {badge.earnedDate}
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-0.5 text-[11px] font-bold text-slate-400 bg-slate-100 px-2.5 py-1 rounded-full">
                    <span className="material-symbols-outlined text-[13px]">lock</span>
                    Bloqueada
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* Empty State with Buddy */
        <div className="p-6 bg-white rounded-3xl border-2 border-[#d5e3ff] text-center flex flex-col items-center">
          <div className="w-20 h-20 rounded-2xl bg-amber-50 border-2 border-amber-200 flex items-center justify-center mb-3">
            <img src={BUDDY_MASCOT_IMAGE} alt="Buddy" className="w-16 h-16 object-contain" />
          </div>
          <h4 className="font-headline text-[16px] font-bold text-[#001c3b] mb-1">
            ¡Aún no hay medallas en esta categoría!
          </h4>
          <p className="text-[13px] text-slate-500 max-w-[260px] mb-4">
            Completa misiones en tu aventura para desbloquear nuevas insignias y diplomas.
          </p>
          <button
            onClick={() => setFilter('all')}
            className="px-4 py-2 bg-blue-50 text-[#0058be] font-extrabold rounded-xl text-[13px] border border-blue-200 hover:bg-blue-100 active:scale-95"
          >
            Ver todas las medallas
          </button>
        </div>
      )}

      {/* Certificate Callout */}
      <div className="mt-4 p-4 rounded-3xl bg-[#ecfdf5] border-2 border-[#34d399] flex items-center gap-3.5 shadow-xs">
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-b from-amber-100 to-amber-200 border border-amber-300 flex items-center justify-center shrink-0">
          <img src={BUDDY_MASCOT_IMAGE} alt="Buddy" className="w-10 h-10 object-contain" />
        </div>
        <div>
          <h4 className="font-headline text-[14px] font-bold text-[#065f46]">
            Start School Diploma
          </h4>
          <p className="text-[12px] font-medium text-[#047857] mt-0.5">
            Completa el Evolutivo 2 para recibir tu diploma oficial en PDF de Start School.
          </p>
        </div>
      </div>
    </div>
  );
};
