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
}

export const TopAppBar: React.FC<TopAppBarProps> = ({
  currentScreen,
  onNavigate,
  stars,
  streakDays,
  soundEnabled,
  onToggleSound,
  onBack,
}) => {
  const isHomeScreen = currentScreen === 'home';

  // Screen title that matches exactly the button that brought the user here
  const getScreenTitle = () => {
    switch (currentScreen) {
      case 'journey':
        return { title: 'Journey', subtitle: 'My Learning Journey' };
      case 'practice':
        return { title: 'Practice', subtitle: 'Practice Time!' };
      case 'complete':
        return { title: 'Results', subtitle: 'Mission Complete' };
      case 'awards':
        return { title: 'Awards', subtitle: 'Trophy Room' };
      case 'profile':
        return { title: 'Profile', subtitle: 'Student Cadet' };
      default:
        return { title: 'English Adventure', subtitle: '' };
    }
  };

  const { title, subtitle } = getScreenTitle();

  return (
    <header className="sticky top-0 z-40 w-full bg-[#f0f3ff]/95 backdrop-blur-md border-b border-[#d5e3ff] px-3 py-2 flex items-center justify-between shadow-xs">
      {/* Left side: Back Button if not on Home, or Logo & Brand if on Home */}
      <div className="flex items-center gap-2">
        {!isHomeScreen ? (
          <button
            onClick={() => {
              sound.playClick();
              if (onBack) {
                onBack();
              } else {
                onNavigate('home');
              }
            }}
            className="min-w-[44px] min-h-[44px] px-2.5 rounded-2xl bg-white border border-[#c2c6d6] flex items-center justify-center gap-1 text-[#0058be] hover:bg-blue-50 active:scale-95 transition-all shadow-xs"
            aria-label="Volver a la pantalla anterior"
            title="Volver"
          >
            <span className="material-symbols-outlined text-[22px]">arrow_back</span>
            <span className="text-[13px] font-extrabold pr-0.5">Atrás</span>
          </button>
        ) : (
          <button
            onClick={() => {
              sound.playClick();
              onNavigate('home');
            }}
            className="flex items-center gap-2 text-left group min-h-[44px]"
            aria-label="Ir a Inicio"
          >
            <span className="material-symbols-outlined text-[#0058be] text-[28px]">school</span>
            <div>
              <h1 className="font-headline text-[17px] font-bold text-[#0058be] leading-tight group-hover:text-blue-700">
                English Adventure
              </h1>
            </div>
          </button>
        )}

        {/* Screen Title matching navigation destination */}
        {!isHomeScreen && (
          <div className="flex flex-col ml-1">
            <h1 className="font-headline text-[16px] font-bold text-[#0058be] leading-tight">
              {title}
            </h1>
            {subtitle && (
              <span className="text-[11px] font-semibold text-slate-500 leading-none">
                {subtitle}
              </span>
            )}
          </div>
        )}
      </div>

      {/* Right side: Sound toggle & Badges with comfortable touch sizes */}
      <div className="flex items-center gap-1.5">
        {/* Sound Toggle (44px touch target) */}
        <button
          onClick={() => {
            onToggleSound();
            sound.playClick();
          }}
          className={`min-w-[44px] min-h-[44px] rounded-full flex items-center justify-center border transition-all ${
            soundEnabled
              ? 'bg-blue-50 text-[#0058be] border-blue-200 hover:bg-blue-100'
              : 'bg-slate-100 text-slate-400 border-slate-300'
          }`}
          title={soundEnabled ? 'Sonido activado' : 'Sonido silenciado'}
          aria-label={soundEnabled ? 'Silenciar sonido' : 'Activar sonido'}
        >
          <span className="material-symbols-outlined text-[20px]">
            {soundEnabled ? 'volume_up' : 'volume_off'}
          </span>
        </button>

        {/* Stars pill (comfortable touch target) */}
        <button
          type="button"
          onClick={() => {
            sound.playStar();
          }}
          className="min-h-[44px] px-3 flex items-center bg-[#ffdf9f] text-[#261a00] font-bold text-[13px] rounded-full border-b-2 border-[#956e00] shadow-xs active:scale-95 transition-transform"
          title="Total de Estrellas conseguidas"
          aria-label={`Tienes ${stars} estrellas`}
        >
          <span
            className="material-symbols-outlined text-[#765700] text-[16px] mr-1"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            stars
          </span>
          <span>{stars}</span>
        </button>

        {/* Streak pill (displayed on main screens) */}
        {isHomeScreen && (
          <div
            className="hidden sm:flex min-h-[44px] px-2.5 items-center bg-orange-100 text-orange-800 font-bold text-[13px] rounded-full border border-orange-200 shadow-xs"
            title="Días de racha seguidos"
          >
            <span className="text-sm mr-1">🔥</span>
            <span>{streakDays}d</span>
          </div>
        )}
      </div>
    </header>
  );
};
