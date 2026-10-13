import React from 'react';
import { StartSchoolLogo } from './StartSchoolLogo';
import { ActiveScreen } from '../types';
import { sound } from '../utils/audio';

interface TopAppBarProps {
  currentScreen: ActiveScreen;
  onNavigate: (screen: ActiveScreen) => void;
  stars: number;
  streakDays: number;
  soundEnabled: boolean;
  onToggleSound: () => void;
  onBack?: () => void;
  showBack?: boolean;
}

export const TopAppBar: React.FC<TopAppBarProps> = ({
  currentScreen,
  onNavigate,
  stars,
  streakDays,
  soundEnabled,
  onToggleSound,
  onBack,
  showBack = false,
}) => {
  return (
    <header className="sticky top-0 z-40 w-full bg-[#f0f3ff]/95 backdrop-blur-md border-b border-[#d5e3ff] px-3 py-2 flex items-center justify-between shadow-xs">
      {/* Left side */}
      <div className="flex items-center gap-2">
        {showBack ? (
          <button
            onClick={() => {
              sound.playClick();
              if (onBack) onBack();
              else onNavigate('journey');
            }}
            className="w-9 h-9 rounded-full bg-white border border-[#c2c6d6] flex items-center justify-center text-[#0058be] hover:bg-blue-50 active:scale-95 transition-all shadow-xs"
            aria-label="Go Back"
          >
            <span className="material-symbols-outlined text-[20px]">arrow_back</span>
          </button>
        ) : (
          <button
            onClick={() => {
              sound.playClick();
              onNavigate('home');
            }}
            className="flex items-center gap-1.5 text-left group"
          >
            <span className="material-symbols-outlined text-[#0058be] text-[26px]">school</span>
            <div>
              <h1 className="font-headline text-[17px] font-bold text-[#0058be] leading-tight group-hover:text-blue-700">
                English Adventure
              </h1>
            </div>
          </button>
        )}

        {/* Start School Logo in header for Journey / Complete / Practice */}
        {(currentScreen === 'journey' || currentScreen === 'practice' || currentScreen === 'complete') && (
          <div className="hidden sm:flex">
            <StartSchoolLogo size="sm" />
          </div>
        )}
      </div>

      {/* Right side badges & sound toggle */}
      <div className="flex items-center gap-1.5">
        {/* Sound toggle button */}
        <button
          onClick={() => {
            onToggleSound();
            sound.playClick();
          }}
          className={`w-8 h-8 rounded-full flex items-center justify-center border transition-all ${
            soundEnabled
              ? 'bg-blue-50 text-[#0058be] border-blue-200 hover:bg-blue-100'
              : 'bg-slate-100 text-slate-400 border-slate-300'
          }`}
          title={soundEnabled ? 'Sound is ON' : 'Sound is MUTED'}
        >
          <span className="material-symbols-outlined text-[18px]">
            {soundEnabled ? 'volume_up' : 'volume_off'}
          </span>
        </button>

        {/* Stars pill */}
        <div
          onClick={() => {
            sound.playStar();
          }}
          className="cursor-pointer flex items-center bg-[#ffdf9f] text-[#261a00] font-bold text-[13px] px-2.5 py-1 rounded-full border-b-2 border-[#956e00] shadow-xs active:scale-95 transition-transform"
          title="Total English Stars"
        >
          <span className="material-symbols-outlined text-[#765700] text-[15px] mr-1" style={{ fontVariationSettings: "'FILL' 1" }}>
            stars
          </span>
          <span>{stars}</span>
        </div>

        {/* Streak pill (shown on journey/profile/home) */}
        {currentScreen !== 'practice' && (
          <div
            className="flex items-center bg-orange-100 text-orange-800 font-bold text-[13px] px-2 py-1 rounded-full border border-orange-200 shadow-xs"
            title="Daily Practice Streak"
          >
            <span className="text-sm mr-0.5">🔥</span>
            <span>{streakDays}d</span>
          </div>
        )}
      </div>
    </header>
  );
};
