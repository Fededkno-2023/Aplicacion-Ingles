import React from 'react';
import { ScreenTab, ActiveScreen } from '../types';
import { sound } from '../utils/audio';

interface BottomNavProps {
  activeScreen: ActiveScreen;
  onSelectTab: (tab: ScreenTab) => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ activeScreen, onSelectTab }) => {
  const tabs: { id: ScreenTab; label: string; icon: string }[] = [
    { id: 'journey', label: 'Journey', icon: 'explore' },
    { id: 'practice', label: 'Practice', icon: 'sports_esports' },
    { id: 'awards', label: 'Awards', icon: 'military_tech' },
    { id: 'profile', label: 'Profile', icon: 'account_circle' },
  ];

  // Map active screen to tab
  const activeTab: ScreenTab =
    activeScreen === 'home' || activeScreen === 'journey'
      ? 'journey'
      : activeScreen === 'complete'
      ? 'practice'
      : (activeScreen as ScreenTab);

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 w-full max-w-[440px] mx-auto bg-white/95 backdrop-blur-md border-t-2 border-[#d5e3ff] shadow-lg rounded-t-2xl px-2 py-1.5 flex justify-around items-center">
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => {
              sound.playClick();
              onSelectTab(tab.id);
            }}
            className={`flex flex-col items-center justify-center transition-all duration-150 py-1 px-3 rounded-xl min-w-[72px] ${
              isActive
                ? 'bg-[#64f9bc] text-[#005137] border-b-4 border-[#006c4b] -translate-y-0.5 shadow-xs font-bold'
                : 'text-[#424754] hover:bg-[#e7eeff] hover:text-[#0058be] font-semibold'
            }`}
          >
            <span
              className="material-symbols-outlined text-[23px]"
              style={isActive ? { fontVariationSettings: "'FILL' 1" } : undefined}
            >
              {tab.icon}
            </span>
            <span className="text-[12px] tracking-tight mt-0.5">{tab.label}</span>
          </button>
        );
      })}
    </nav>
  );
};
