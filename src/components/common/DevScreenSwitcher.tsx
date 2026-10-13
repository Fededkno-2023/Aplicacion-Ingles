import React from 'react';
import { ActiveScreen } from '../../types';
import { sound } from '../../utils/audio';

interface DevScreenSwitcherProps {
  currentScreen: ActiveScreen;
  onSelectScreen: (screen: ActiveScreen) => void;
}

const SCREENS: { id: ActiveScreen; label: string }[] = [
  { id: 'home', label: '1. Home (Img 3)' },
  { id: 'journey', label: '2. Journey (Img 1)' },
  { id: 'practice', label: '3. Practice (Img 5)' },
  { id: 'complete', label: '4. Result (Img 7)' },
];

export const DevScreenSwitcher: React.FC<DevScreenSwitcherProps> = ({
  currentScreen,
  onSelectScreen,
}) => {
  return (
    <div className="w-full max-w-[420px] bg-slate-900 text-slate-100 px-3 py-1.5 flex items-center justify-between text-[11px] font-bold border-b border-slate-700 shadow-xs z-50">
      <span className="text-amber-400 font-extrabold flex items-center gap-1">
        <span className="material-symbols-outlined text-[14px]">photo_camera</span>
        Screens:
      </span>
      <div className="flex items-center gap-1 overflow-x-auto py-0.5">
        {SCREENS.map((s) => (
          <button
            key={s.id}
            onClick={() => {
              sound.playClick();
              onSelectScreen(s.id);
            }}
            className={`px-2 py-0.5 rounded-md transition-all whitespace-nowrap ${
              currentScreen === s.id
                ? 'bg-blue-600 text-white font-extrabold shadow-xs'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            {s.label}
          </button>
        ))}
      </div>
    </div>
  );
};
