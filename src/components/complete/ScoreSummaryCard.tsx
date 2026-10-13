import React from 'react';
import { sound } from '../../utils/audio';

interface ScoreSummaryCardProps {
  correctCount: number;
  totalCount: number;
  masteryPercentage: number;
}

export const ScoreSummaryCard: React.FC<ScoreSummaryCardProps> = ({
  correctCount,
  totalCount,
  masteryPercentage,
}) => {
  return (
    <section className="bg-white rounded-3xl p-4.5 border-2 border-[#d5e3ff] tactile-card shadow-sm mt-5 mb-4">
      <div className="text-center">
        <span className="inline-block bg-[#e7eeff] text-[#0058be] text-[12px] font-extrabold px-3 py-0.5 rounded-full mb-1 border border-[#d5e3ff]">
          Practice Result
        </span>
        <h3 className="font-headline text-[24px] font-extrabold text-[#001c3b]">
          {correctCount} / {totalCount} Correct Answers
        </h3>
      </div>

      {/* Mastery Score Progress */}
      <div className="mt-2.5">
        <div className="flex justify-between items-center text-[13px] font-extrabold mb-1">
          <span className="text-slate-600">Mastery Score</span>
          <span className="text-[#059669]">{masteryPercentage}% Great Job!</span>
        </div>
        <div className="w-full bg-[#e7eeff] rounded-full h-3 p-0.5 border border-[#d5e3ff]">
          <div
            className="bg-gradient-to-r from-blue-500 to-[#34d399] h-full rounded-full transition-all duration-700"
            style={{ width: `${masteryPercentage}%` }}
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
  );
};
