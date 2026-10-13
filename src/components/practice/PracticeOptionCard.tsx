import React from 'react';
import { PracticeOption } from '../../types';

interface PracticeOptionCardProps {
  option: PracticeOption;
  isSelected: boolean;
  onSelect: (optionId: string, word: string) => void;
  onSpeak: (word: string) => void;
}

export const PracticeOptionCard: React.FC<PracticeOptionCardProps> = ({
  option,
  isSelected,
  onSelect,
  onSpeak,
}) => {
  const isOptionCorrect = option.isCorrect;

  const renderArtwork = (label: string, emoji: string) => {
    const l = label.toLowerCase();
    const bgClass =
      l === 'apple'
        ? 'bg-red-50 border-red-200'
        : l === 'banana'
        ? 'bg-amber-50 border-amber-200'
        : l === 'orange'
        ? 'bg-orange-50 border-orange-200'
        : 'bg-slate-50 border-slate-200';

    return (
      <div
        className={`w-14 h-14 rounded-2xl border flex items-center justify-center p-1 text-3xl shadow-2xs shrink-0 select-none ${bgClass}`}
      >
        {emoji}
      </div>
    );
  };

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => onSelect(option.id, option.label)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelect(option.id, option.label);
        }
      }}
      className={`relative min-h-[68px] flex items-center justify-between p-3.5 rounded-2xl cursor-pointer transition-all touch-manipulation ${
        isSelected && isOptionCorrect
          ? 'bg-[#ecfdf5] border-2 border-[#006c4b] shadow-xs'
          : isSelected && !isOptionCorrect
          ? 'bg-[#fff1f2] border-2 border-[#fb7185] shadow-xs'
          : 'bg-white border-2 border-slate-200 hover:border-blue-300 tactile-option-card active:scale-[0.99]'
      }`}
    >
      {/* Checkmark badge if selected and correct */}
      {isSelected && isOptionCorrect && (
        <div className="absolute -top-2.5 -right-2.5 w-7 h-7 rounded-full bg-[#006c4b] text-white flex items-center justify-center shadow-xs">
          <span className="material-symbols-outlined text-[18px] font-bold">check</span>
        </div>
      )}

      <div className="flex items-center gap-3">
        {renderArtwork(option.label, option.emoji)}
        <div>
          <h4 className="font-headline text-[19px] font-bold text-[#001c3b]">
            {option.label}
          </h4>
          <span className="text-[12px] font-semibold text-slate-500 block">
            {isSelected ? 'Selección actual' : 'Toca para elegir'}
          </span>
        </div>
      </div>

      {/* Pronunciation Sound Button (comfortable 48x48px touch target) */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onSpeak(option.label);
        }}
        className="min-w-[48px] min-h-[48px] w-12 h-12 rounded-full bg-blue-50 border-2 border-blue-200 text-[#0058be] flex items-center justify-center hover:bg-blue-100 active:scale-90 transition-transform shadow-2xs ml-2 shrink-0 touch-manipulation"
        title={`Escuchar pronunciación de "${option.label}"`}
        aria-label={`Escuchar cómo se pronuncia ${option.label}`}
      >
        <span className="material-symbols-outlined text-[24px]">volume_up</span>
      </button>
    </div>
  );
};
