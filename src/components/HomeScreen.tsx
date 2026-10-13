import React from 'react';
import { StartSchoolLogo } from './StartSchoolLogo';
import { MascotHeroStage } from './home/MascotHeroStage';
import { ActiveQuestCard } from './home/ActiveQuestCard';
import { sound } from '../utils/audio';

interface HomeScreenProps {
  onStartJourney: () => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({ onStartJourney }) => {
  return (
    <div className="flex-1 flex flex-col px-4 pt-2 pb-24 max-w-[420px] mx-auto w-full">
      {/* Sub-Header & Institutional Tag */}
      <div className="pt-1 pb-3 flex flex-col items-center text-center">
        <StartSchoolLogo size="md" className="mb-1" />
        <p className="font-headline text-[15px] text-[#0058be] font-extrabold tracking-wide">
          Learn, Practice &amp; Level Up!
        </p>
      </div>

      {/* Mascot Stage Card */}
      <MascotHeroStage />

      {/* Current Mission Bento Card */}
      <ActiveQuestCard />

      {/* Primary Action CTA Button placed in the comfortable thumb zone (lower half) */}
      <div className="flex flex-col items-center w-full mt-1">
        <button
          onClick={() => {
            sound.playClick();
            onStartJourney();
          }}
          className="w-full min-h-[58px] py-4 px-6 rounded-2xl tactile-btn-blue font-headline text-[19px] font-extrabold flex items-center justify-center space-x-2.5 transition-all shadow-md touch-manipulation active:scale-[0.98]"
          aria-label="Comenzar aventura: Let's Play"
        >
          <span
            className="material-symbols-outlined text-2xl"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            sports_esports
          </span>
          <span className="tracking-wide">Let's Play!</span>
          <span className="material-symbols-outlined text-2xl">arrow_forward</span>
        </button>

        <div className="flex items-center space-x-1.5 mt-2.5 text-[#424754] text-[13px] font-medium">
          <span className="material-symbols-outlined text-base text-[#0058be]">map</span>
          <span>
            Te lleva directo a <strong className="text-[#0058be] font-bold">My Learning Journey</strong>
          </span>
        </div>
      </div>
    </div>
  );
};
