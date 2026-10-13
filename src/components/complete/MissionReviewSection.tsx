import React from 'react';

interface GreatItem {
  id: string;
  emoji: string;
  title: string;
  detail: string;
}

interface ReviewItem {
  id: string;
  emoji: string;
  title: string;
  detail: string;
}

interface MissionReviewSectionProps {
  onReviewTip: (topic: string) => void;
}

const GREAT_ITEMS: GreatItem[] = [
  {
    id: 'fruits',
    emoji: '🍎',
    title: 'Colors & Fruits',
    detail: '5 of 5 Perfect answers',
  },
  {
    id: 'animals',
    emoji: '🐶',
    title: 'Animals & Pets',
    detail: '3 of 3 Spot-on vocabulary',
  },
];

const REVIEW_ITEMS: ReviewItem[] = [
  {
    id: 'sentences',
    emoji: '📝',
    title: 'Simple Sentences',
    detail: '1 friendly review tip',
  },
  {
    id: 'verbs',
    emoji: '✨',
    title: 'Verb To Be',
    detail: 'Almost there!',
  },
];

export const MissionReviewSection: React.FC<MissionReviewSectionProps> = ({ onReviewTip }) => {
  return (
    <>
      {/* What You Did Great Section */}
      <section className="bg-white rounded-3xl p-4 border border-[#d5e3ff] shadow-xs mb-3.5">
        <div className="flex items-center gap-1.5 mb-2.5">
          <span className="text-base">🎉</span>
          <h4 className="font-headline text-[16px] font-bold text-[#001c3b]">
            What You Did Great!
          </h4>
        </div>

        <div className="flex flex-col gap-2">
          {GREAT_ITEMS.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between p-2.5 bg-emerald-50/70 border border-emerald-200 rounded-2xl"
            >
              <div className="flex items-center gap-2.5">
                <span className="text-2xl">{item.emoji}</span>
                <div>
                  <h5 className="font-headline text-[14px] font-bold text-emerald-950">
                    {item.title}
                  </h5>
                  <span className="text-[11px] font-bold text-emerald-700">
                    {item.detail}
                  </span>
                </div>
              </div>
              <div className="w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center">
                <span className="material-symbols-outlined text-[16px] font-bold">check</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Let's Practice a Little More Section */}
      <section className="bg-white rounded-3xl p-4 border border-[#d5e3ff] shadow-xs mb-3.5">
        <div className="flex items-center gap-1.5 mb-2.5">
          <span className="text-base">💡</span>
          <h4 className="font-headline text-[16px] font-bold text-[#001c3b]">
            Let's Practice a Little More!
          </h4>
        </div>

        <div className="flex flex-col gap-2">
          {REVIEW_ITEMS.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between p-2.5 bg-amber-50/70 border border-amber-200 rounded-2xl"
            >
              <div className="flex items-center gap-2.5">
                <span className="text-2xl">{item.emoji}</span>
                <div>
                  <h5 className="font-headline text-[14px] font-bold text-amber-950">
                    {item.title}
                  </h5>
                  <span className="text-[11px] font-semibold text-amber-700">
                    {item.detail}
                  </span>
                </div>
              </div>
              <button
                onClick={() => onReviewTip(item.title)}
                className="px-3 py-1 bg-white hover:bg-amber-100 text-[#92400e] text-[12px] font-extrabold rounded-full border border-amber-300 shadow-2xs active:scale-95 transition-all"
              >
                Review
              </button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
