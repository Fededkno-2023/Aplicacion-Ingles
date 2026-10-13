import React from 'react';
import { StartSchoolLogo } from '../StartSchoolLogo';
import { GamifiedProgressBar } from '../common/GamifiedProgressBar';
import { sound } from '../../utils/audio';

interface PracticeHeaderProps {
  currentQuestionNumber: number;
  totalQuestions: number;
  xpBonus: number;
  soundEnabled: boolean;
  onBack: () => void;
  onToggleSound: () => void;
}

export const PracticeHeader: React.FC<PracticeHeaderProps> = ({
  currentQuestionNumber,
  totalQuestions,
  xpBonus,
  soundEnabled,
  onBack,
  onToggleSound,
}) => {
  const progressPercentage = (currentQuestionNumber / totalQuestions) * 100;

  return (
    <div>
      {/* Top Bar for Practice Screen */}
      <div className="flex items-center justify-between pb-1.5">
        <button
          onClick={() => {
            sound.playClick();
            onBack();
          }}
          className="w-9 h-9 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center text-[#0058be] hover:bg-blue-100 active:scale-95 transition-all shadow-xs"
          aria-label="Back to Journey"
        >
          <span className="material-symbols-outlined text-[20px]">arrow_back</span>
        </button>

        <div className="flex flex-col items-center">
          <StartSchoolLogo size="sm" className="mb-0.5" />
          <h2 className="font-headline text-[19px] font-bold text-[#0058be]">
            Practice Time!
          </h2>
          <span className="text-[11px] font-bold text-slate-500 flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block"></span>
            Evolutivo 1 • Vocabulary
          </span>
        </div>

        <button
          onClick={() => {
            onToggleSound();
            sound.playClick();
          }}
          className="w-9 h-9 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center text-[#0058be] hover:bg-blue-100 active:scale-95 transition-all shadow-xs"
          aria-label="Sound Toggle"
        >
          <span className="material-symbols-outlined text-[20px]">
            {soundEnabled ? 'volume_up' : 'volume_off'}
          </span>
        </button>
      </div>

      {/* Question Counter & XP Pill */}
      <div className="flex items-center justify-between mt-2 mb-1.5">
        <span className="font-headline text-[14px] font-extrabold text-[#0058be]">
          Question {currentQuestionNumber} of {totalQuestions}
        </span>
        <div className="flex items-center gap-1 bg-[#ffdf9f] text-[#5c4300] px-2.5 py-0.5 rounded-full text-[12px] font-black border border-[#f9bd22] shadow-2xs">
          <span
            className="material-symbols-outlined text-[14px]"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            stars
          </span>
          <span>+{xpBonus} XP</span>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mb-3.5">
        <GamifiedProgressBar
          progressPercentage={progressPercentage}
          heightClass="h-2.5"
          barColorClass="bg-[#34d399]"
        />
      </div>
    </div>
  );
};
