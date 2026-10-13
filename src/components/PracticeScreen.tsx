import React, { useState } from 'react';
import { StartSchoolLogo } from './StartSchoolLogo';
import { PRACTICE_QUESTIONS, BUDDY_MASCOT_IMAGE } from '../data/mockData';
import { sound } from '../utils/audio';

interface PracticeScreenProps {
  onBack: () => void;
  onComplete: () => void;
  onAddStars: (stars: number) => void;
  soundEnabled: boolean;
  onToggleSound: () => void;
}

export const PracticeScreen: React.FC<PracticeScreenProps> = ({
  onBack,
  onComplete,
  onAddStars,
  soundEnabled,
  onToggleSound,
}) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptionId, setSelectedOptionId] = useState<string>('opt-apple'); // Defaults to Apple as in Image 5
  const [activeTab, setActiveTab] = useState<'vocab' | 'sentence' | 'grammar'>('vocab');
  const [showTryAgainPreview, setShowTryAgainPreview] = useState(false);
  const [hasAnswered, setHasAnswered] = useState(true);

  const currentQ = PRACTICE_QUESTIONS[currentQuestionIndex] || PRACTICE_QUESTIONS[0];
  const selectedOption = currentQ.options.find((opt) => opt.id === selectedOptionId);
  const isCorrect = selectedOption?.isCorrect ?? false;

  const handleSelectOption = (optionId: string, word: string) => {
    setSelectedOptionId(optionId);
    setHasAnswered(true);
    sound.speak(word);

    const chosen = currentQ.options.find((o) => o.id === optionId);
    if (chosen?.isCorrect) {
      sound.playCorrect();
      onAddStars(10);
    } else {
      sound.playTryAgain();
    }
  };

  const handleNext = () => {
    sound.playClick();
    if (currentQuestionIndex < PRACTICE_QUESTIONS.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedOptionId('');
      setHasAnswered(false);
      setShowTryAgainPreview(false);
    } else {
      sound.playVictory();
      onComplete();
    }
  };

  // Helper SVG illustration renderer for clean crisp visuals
  const renderItemArtwork = (label: string, emoji: string) => {
    if (label.toLowerCase() === 'apple') {
      return (
        <div className="w-14 h-14 rounded-xl bg-red-50 border border-red-200 flex items-center justify-center p-1 text-3xl shadow-2xs">
          🍎
        </div>
      );
    }
    if (label.toLowerCase() === 'banana') {
      return (
        <div className="w-14 h-14 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center p-1 text-3xl shadow-2xs">
          🍌
        </div>
      );
    }
    if (label.toLowerCase() === 'orange') {
      return (
        <div className="w-14 h-14 rounded-xl bg-orange-50 border border-orange-200 flex items-center justify-center p-1 text-3xl shadow-2xs">
          🍊
        </div>
      );
    }
    return (
      <div className="w-14 h-14 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center p-1 text-3xl shadow-2xs">
        {emoji}
      </div>
    );
  };

  return (
    <div className="flex-1 flex flex-col px-4 pt-2 pb-24 max-w-[420px] mx-auto w-full">
      {/* Top Bar for Practice Screen (Image 5) */}
      <div className="flex items-center justify-between pb-1.5">
        <button
          onClick={() => {
            sound.playClick();
            onBack();
          }}
          className="w-9 h-9 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center text-[#0058be] hover:bg-blue-100 active:scale-95 transition-all shadow-xs"
          aria-label="Back to Journey"
        >
          <span className="material-symbols-outlined text-[20px]">arrow_back</span>
        </button>

        <div className="flex flex-col items-center">
          <StartSchoolLogo size="sm" className="mb-0.5" />
          <h2 className="font-headline text-[19px] font-bold text-[#0058be]">
            Practice Time!
          </h2>
          <span className="text-[11px] font-bold text-slate-500 flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block"></span>
            Evolutivo 1 • Vocabulary
          </span>
        </div>

        <button
          onClick={() => {
            onToggleSound();
            sound.playClick();
          }}
          className="w-9 h-9 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center text-[#0058be] hover:bg-blue-100 active:scale-95 transition-all shadow-xs"
          aria-label="Sound Toggle"
        >
          <span className="material-symbols-outlined text-[20px]">
            {soundEnabled ? 'volume_up' : 'volume_off'}
          </span>
        </button>
      </div>

      {/* Question Counter & XP Pill */}
      <div className="flex items-center justify-between mt-2 mb-1.5">
        <span className="font-headline text-[14px] font-extrabold text-[#0058be]">
          Question {currentQuestionIndex + 3 <= 10 ? currentQuestionIndex + 3 : 10} of 10
        </span>
        <div className="flex items-center gap-1 bg-[#ffdf9f] text-[#5c4300] px-2.5 py-0.5 rounded-full text-[12px] font-black border border-[#f9bd22] shadow-2xs">
          <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>
            stars
          </span>
          <span>+30 XP</span>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-[#e7eeff] rounded-full h-2.5 p-0.5 mb-3.5 border border-[#d5e3ff]">
        <div
          className="bg-[#34d399] h-full rounded-full transition-all duration-300"
          style={{ width: `${Math.min(100, (currentQuestionIndex + 3) * 10)}%` }}
        />
      </div>

      {/* Buddy Mascot Encouragement Stage */}
      <div className="w-full bg-[#f8faff] rounded-2xl p-2.5 border border-[#d5e3ff] flex items-center gap-3 mb-3.5 shadow-xs">
        <div className="w-13 h-13 rounded-full bg-gradient-to-b from-amber-100 to-amber-200 border-2 border-amber-300 flex items-center justify-center shrink-0 overflow-hidden shadow-xs">
          <img
            src={BUDDY_MASCOT_IMAGE}
            alt="Buddy avatar"
            className="w-12 h-12 object-contain"
          />
        </div>
        <div className="flex-1 bg-white border border-[#d5e3ff] p-2.5 rounded-xl shadow-2xs">
          <div className="font-headline text-[13px] font-bold text-[#001c3b] flex items-center gap-1">
            <span>You can do it!</span>
            <span>🌟</span>
          </div>
          <p className="text-[12px] font-semibold text-slate-600 mt-0.5">
            Pick the correct picture card below!
          </p>
        </div>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex items-center justify-between border-b-2 border-slate-200 mb-3.5 px-2">
        <button
          onClick={() => {
            sound.playClick();
            setActiveTab('vocab');
          }}
          className={`flex items-center gap-1.5 pb-2 text-[13px] font-extrabold transition-all border-b-2 -mb-[2px] ${
            activeTab === 'vocab'
              ? 'text-[#0058be] border-[#0058be]'
              : 'text-slate-400 border-transparent hover:text-slate-600'
          }`}
        >
          <span className="material-symbols-outlined text-[17px]">menu_book</span>
          <span>Vocab</span>
        </button>

        <button
          onClick={() => {
            sound.playClick();
            setActiveTab('sentence');
          }}
          className={`flex items-center gap-1.5 pb-2 text-[13px] font-extrabold transition-all border-b-2 -mb-[2px] ${
            activeTab === 'sentence'
              ? 'text-[#0058be] border-[#0058be]'
              : 'text-slate-400 border-transparent hover:text-slate-600'
          }`}
        >
          <span className="material-symbols-outlined text-[17px]">edit_note</span>
          <span>Sentence</span>
        </button>

        <button
          onClick={() => {
            sound.playClick();
            setActiveTab('grammar');
          }}
          className={`flex items-center gap-1.5 pb-2 text-[13px] font-extrabold transition-all border-b-2 -mb-[2px] ${
            activeTab === 'grammar'
              ? 'text-[#0058be] border-[#0058be]'
              : 'text-slate-400 border-transparent hover:text-slate-600'
          }`}
        >
          <span className="material-symbols-outlined text-[17px]">psychology</span>
          <span>Grammar</span>
        </button>
      </div>

      {/* Challenge Card Container */}
      <div className="bg-white rounded-3xl p-4 border-2 border-[#d5e3ff] tactile-card shadow-sm mb-3">
        {/* Challenge Pill & Question */}
        <div className="text-center mb-4">
          <span className="inline-block bg-[#e7eeff] text-[#0058be] text-[12px] font-extrabold px-3 py-0.5 rounded-full mb-1 border border-[#d5e3ff]">
            Challenge {currentQ.challengeNumber}
          </span>
          <h3 className="font-headline text-[20px] font-bold text-[#001c3b] leading-tight">
            {currentQ.prompt}
          </h3>
        </div>

        {/* Option Cards */}
        <div className="flex flex-col gap-2.5">
          {currentQ.options.map((option) => {
            const isSelected = selectedOptionId === option.id;
            const isOptionCorrect = option.isCorrect;

            return (
              <div
                key={option.id}
                onClick={() => handleSelectOption(option.id, option.label)}
                className={`relative flex items-center justify-between p-3 rounded-2xl cursor-pointer transition-all ${
                  isSelected && isOptionCorrect
                    ? 'bg-[#ecfdf5] border-2 border-[#006c4b] shadow-xs'
                    : isSelected && !isOptionCorrect
                    ? 'bg-[#fff1f2] border-2 border-[#fb7185] shadow-xs'
                    : 'bg-white border-2 border-slate-200 hover:border-blue-300 tactile-option-card'
                }`}
              >
                {/* Checkmark badge if selected correct */}
                {isSelected && isOptionCorrect && (
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#006c4b] text-white flex items-center justify-center shadow-xs">
                    <span className="material-symbols-outlined text-[16px] font-bold">check</span>
                  </div>
                )}

                <div className="flex items-center gap-3">
                  {renderItemArtwork(option.label, option.emoji)}
                  <div>
                    <h4 className="font-headline text-[18px] font-bold text-[#001c3b]">
                      {option.label}
                    </h4>
                    <span className="text-[12px] font-semibold text-slate-500 block">
                      {isSelected ? 'Selected Choice' : 'Tap to select'}
                    </span>
                  </div>
                </div>

                {/* Pronunciation Sound Button */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    sound.speak(option.label);
                  }}
                  className="w-10 h-10 rounded-full bg-blue-50 border border-blue-200 text-[#0058be] flex items-center justify-center hover:bg-blue-100 active:scale-90 transition-transform"
                  title={`Hear "${option.label}" pronounced`}
                >
                  <span className="material-symbols-outlined text-[20px]">volume_up</span>
                </button>
              </div>
            );
          })}
        </div>

        {/* Feedback Banner */}
        {hasAnswered && (
          <div className="mt-3.5">
            {isCorrect && !showTryAgainPreview ? (
              <div className="bg-[#ecfdf5] border-2 border-[#059669] rounded-2xl p-3 flex items-start gap-3 animate-fadeIn">
                <div className="w-8 h-8 rounded-full bg-[#059669] text-white flex items-center justify-center shrink-0 mt-0.5">
                  <span className="material-symbols-outlined text-[18px]">thumb_up</span>
                </div>
                <div>
                  <div className="font-headline text-[15px] font-bold text-[#065f46]">
                    Great Job! 🍎
                  </div>
                  <p className="text-[13px] font-semibold text-[#047857] mt-0.5 leading-snug">
                    {currentQ.explanation}
                  </p>
                </div>
              </div>
            ) : (
              <div className="bg-[#fff1f2] border-2 border-[#fb7185] rounded-2xl p-3 flex items-start gap-3 animate-fadeIn">
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

        {/* Encouraging Try Again preview toggle (matching image 5 footer helper) */}
        <div className="mt-3 pt-2 border-t border-slate-100">
          <button
            onClick={() => {
              sound.playClick();
              setShowTryAgainPreview(!showTryAgainPreview);
            }}
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
      </div>

      {/* Primary Action Button: Next Question */}
      <button
        onClick={handleNext}
        className="w-full min-h-[52px] py-3.5 px-6 rounded-2xl tactile-btn-blue font-headline text-[17px] font-extrabold flex items-center justify-center gap-2 transition-all mt-1"
      >
        <span>Next Question</span>
        <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
      </button>
    </div>
  );
};
