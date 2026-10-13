import React from 'react';
import { GamifiedProgressBar } from '../common/GamifiedProgressBar';

export const ActiveQuestCard: React.FC = () => {
  return (
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

      {/* Reusable Gamified Progress Bar with interactive star coin */}
      <GamifiedProgressBar
        progressPercentage={40}
        heightClass="h-4"
        hasStarCoin={true}
        className="mb-1"
      />

      <div className="flex justify-between items-center text-[12px] text-[#424754] mt-1.5 px-0.5">
        <span className="font-bold text-[#0058be]">Level 1: Colors &amp; Animals</span>
        <span className="font-bold">40% Complete</span>
      </div>
    </section>
  );
};
