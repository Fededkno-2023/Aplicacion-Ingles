import React from 'react';
import { sound } from '../../utils/audio';

interface GamifiedProgressBarProps {
  progressPercentage: number;
  heightClass?: string;
  barColorClass?: string;
  hasStarCoin?: boolean;
  className?: string;
}

export const GamifiedProgressBar: React.FC<GamifiedProgressBarProps> = ({
  progressPercentage,
  heightClass = 'h-3',
  barColorClass = 'bg-[#64f9bc]',
  hasStarCoin = false,
  className = '',
}) => {
  const clampedProgress = Math.max(0, Math.min(100, progressPercentage));

  return (
    <div
      className={`w-full bg-[#e7eeff] rounded-full p-0.5 relative border border-[#d5e3ff] flex items-center ${heightClass} ${className}`}
    >
      <div
        className={`${barColorClass} h-full rounded-full transition-all duration-500 relative flex items-center justify-end`}
        style={{ width: `${clampedProgress}%` }}
      >
        {hasStarCoin && (
          <div
            onClick={(e) => {
              e.stopPropagation();
              sound.playStar();
            }}
            className="w-5 h-5 bg-[#FBBF24] border-2 border-[#D97706] rounded-full absolute -right-2 flex items-center justify-center shadow-xs cursor-pointer hover:scale-110 active:scale-95 transition-transform"
            title="Star Reward Coin"
          >
            <span
              className="material-symbols-outlined text-[11px] text-[#765700]"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              star
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
