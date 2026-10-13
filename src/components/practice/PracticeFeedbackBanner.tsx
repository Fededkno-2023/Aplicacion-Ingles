import React from 'react';

interface PracticeFeedbackBannerProps {
  hasAnswered: boolean;
  isCorrect: boolean;
  explanation: string;
  showTryAgainPreview: boolean;
  onToggleTryAgainPreview: () => void;
}

export const PracticeFeedbackBanner: React.FC<PracticeFeedbackBannerProps> = ({
  hasAnswered,
  isCorrect,
  explanation,
  showTryAgainPreview,
  onToggleTryAgainPreview,
}) => {
  return (
    <>
      {hasAnswered && (
        <div className="mt-3.5">
          {isCorrect && !showTryAgainPreview ? (
            <div className="bg-[#ecfdf5] border-2 border-[#059669] rounded-2xl p-3 flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-[#059669] text-white flex items-center justify-center shrink-0 mt-0.5">
                <span className="material-symbols-outlined text-[18px]">thumb_up</span>
              </div>
              <div>
                <div className="font-headline text-[15px] font-bold text-[#065f46]">
                  Great Job! 🍎
                </div>
                <p className="text-[13px] font-semibold text-[#047857] mt-0.5 leading-snug">
                  {explanation}
                </p>
              </div>
            </div>
          ) : (
            <div className="bg-[#fff1f2] border-2 border-[#fb7185] rounded-2xl p-3 flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-[#fb7185] text-white flex items-center justify-center shrink-0 mt-0.5">
                <span className="material-symbols-outlined text-[18px]">psychology_alt</span>
              </div>
              <div>
                <div className="font-headline text-[15px] font-bold text-[#9f1239]">
                  Almost there! 🦊
                </div>
                <p className="text-[13px] font-semibold text-[#be123c] mt-0.5 leading-snug">
                  Buddy says: Look closely at the red fruit and give it one more friendly try!
                </p>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Encouraging Try Again preview toggle */}
      <div className="mt-3 pt-2 border-t border-slate-100">
        <button
          onClick={onToggleTryAgainPreview}
          className="w-full py-1.5 px-2 bg-slate-50 hover:bg-slate-100 rounded-xl text-[12px] font-bold text-slate-600 flex items-center justify-between transition-colors border border-slate-200"
        >
          <span className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[16px] text-blue-600">info</span>
            <span>Preview Encouraging "Try Again" State</span>
          </span>
          <span className="material-symbols-outlined text-[16px]">
            {showTryAgainPreview ? 'expand_less' : 'expand_more'}
          </span>
        </button>
      </div>
    </>
  );
};
