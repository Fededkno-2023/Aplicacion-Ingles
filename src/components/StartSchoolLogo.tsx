import React from 'react';

interface StartSchoolLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const StartSchoolLogo: React.FC<StartSchoolLogoProps> = ({ className = '', size = 'md' }) => {
  const isSm = size === 'sm';

  return (
    <div
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 bg-white border border-slate-200 rounded-full shadow-xs select-none ${className}`}
      title="Start School - Instituto de Inglés"
    >
      {/* Red British-style Heraldic Shield Crest */}
      <div className={`relative ${isSm ? 'w-4 h-5' : 'w-5 h-6'} rounded-b-md bg-gradient-to-b from-[#b91c1c] to-[#991b1b] border border-amber-400 flex items-center justify-center shadow-xs overflow-hidden`}>
        <div className="absolute inset-x-0 top-1/2 h-0.5 bg-amber-300"></div>
        <div className="absolute inset-y-0 left-1/2 w-0.5 bg-amber-300"></div>
        <span className="relative z-10 text-[9px] font-black text-amber-200">👑</span>
      </div>

      <div className="flex flex-col text-left leading-none">
        <div className="flex items-center gap-0.5">
          <span className={`${isSm ? 'text-[10px]' : 'text-[11px]'} font-extrabold text-[#b45309] tracking-tight`}>
            START
          </span>
          <span className={`${isSm ? 'text-[10px]' : 'text-[11px]'} font-extrabold text-[#1e3a5f] tracking-tight`}>
            SCHOOL
          </span>
        </div>
        <span className={`${isSm ? 'text-[6px]' : 'text-[7px]'} font-bold tracking-widest text-slate-500 uppercase`}>
          Instituto de Inglés
        </span>
      </div>
    </div>
  );
};
