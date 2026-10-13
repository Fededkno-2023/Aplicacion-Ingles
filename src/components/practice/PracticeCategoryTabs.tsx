import React from 'react';
import { sound } from '../../utils/audio';

type TabType = 'vocab' | 'sentence' | 'grammar';

interface PracticeCategoryTabsProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
}

const TABS: { id: TabType; label: string; icon: string }[] = [
  { id: 'vocab', label: 'Vocab', icon: 'menu_book' },
  { id: 'sentence', label: 'Sentence', icon: 'edit_note' },
  { id: 'grammar', label: 'Grammar', icon: 'psychology' },
];

export const PracticeCategoryTabs: React.FC<PracticeCategoryTabsProps> = ({
  activeTab,
  onTabChange,
}) => {
  return (
    <div className="flex items-center justify-between border-b-2 border-slate-200 mb-3.5 px-2">
      {TABS.map((tab) => {
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => {
              sound.playClick();
              onTabChange(tab.id);
            }}
            className={`flex items-center gap-1.5 pb-2 text-[13px] font-extrabold transition-all border-b-2 -mb-[2px] ${
              isActive
                ? 'text-[#0058be] border-[#0058be]'
                : 'text-slate-400 border-transparent hover:text-slate-600'
            }`}
          >
            <span className="material-symbols-outlined text-[17px]">{tab.icon}</span>
            <span>{tab.label}</span>
          </button>
        );
      })}
    </div>
  );
};
