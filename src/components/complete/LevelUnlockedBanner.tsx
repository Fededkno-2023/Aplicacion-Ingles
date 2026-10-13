import React from 'react';

interface LevelUnlockedBannerProps {
  unlockedLevelName?: string;
}

export const LevelUnlockedBanner: React.FC<LevelUnlockedBannerProps> = ({
  unlockedLevelName = 'Evolutivo 2',
}) => {
  return (
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
          <strong className="underline">{unlockedLevelName}</strong>!
        </p>
      </div>
    </div>
  );
};
