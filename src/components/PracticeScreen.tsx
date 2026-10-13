import React, { useState } from 'react';
import { BUDDY_MASCOT_IMAGE } from '../data/mockData';
import { usePracticeEngine } from '../hooks/usePracticeEngine';
import { PracticeHeader } from './practice/PracticeHeader';
import { PracticeCategoryTabs } from './practice/PracticeCategoryTabs';
import { PracticeOptionCard } from './practice/PracticeOptionCard';
import { PracticeFeedbackBanner } from './practice/PracticeFeedbackBanner';
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
  const [showFirstTimeHint, setShowFirstTimeHint] = useState(true);

  const {
    currentQuestionIndex,
    currentQuestion,
    totalQuestions,
    activeTab,
    setActiveTab,
    selectedOptionId,
    isCorrect,
    hasAnswered,
    showTryAgainPreview,
    selectOption,
    nextQuestion,
    toggleTryAgainPreview,
    speakWord,
  } = usePracticeEngine({ onComplete, onAddStars });

  const questionDisplayNumber = Math.min(totalQuestions, currentQuestionIndex + 3);

  return (
    <div className="flex-1 flex flex-col px-4 pt-2 pb-24 max-w-[420px] mx-auto w-full">
      {/* Top Header & Progress */}
      <PracticeHeader
        currentQuestionNumber={questionDisplayNumber}
        totalQuestions={totalQuestions}
        xpBonus={30}
        soundEnabled={soundEnabled}
        onBack={onBack}
        onToggleSound={onToggleSound}
      />

      {/* Buddy Mascot Encouragement Stage */}
      <div className="w-full bg-[#f8faff] rounded-2xl p-3 border border-[#d5e3ff] flex items-center gap-3 mb-3 shadow-xs">
        <div className="w-14 h-14 rounded-full bg-gradient-to-b from-amber-100 to-amber-200 border-2 border-amber-300 flex items-center justify-center shrink-0 overflow-hidden shadow-xs">
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

      {/* Onboarding Visual Hint for first-time users */}
      {showFirstTimeHint && (
        <div className="mb-3 p-3 bg-amber-50 border border-amber-200 rounded-2xl flex items-center justify-between gap-2 shadow-2xs">
          <div className="flex items-center gap-2">
            <span className="text-xl">💡</span>
            <p className="text-[12px] font-bold text-amber-900 leading-tight">
              Toca la tarjeta correcta y presiona el altavoz 🔊 para escuchar la palabra en inglés.
            </p>
          </div>
          <button
            onClick={() => {
              sound.playClick();
              setShowFirstTimeHint(false);
            }}
            className="min-h-[36px] px-2.5 bg-white text-amber-900 border border-amber-300 rounded-xl text-[11px] font-black shrink-0 hover:bg-amber-100 active:scale-95"
          >
            Entendido
          </button>
        </div>
      )}

      {/* Category Tabs */}
      <PracticeCategoryTabs activeTab={activeTab} onTabChange={setActiveTab} />

      {/* Challenge Card Container */}
      <div className="bg-white rounded-3xl p-4 border-2 border-[#d5e3ff] tactile-card shadow-sm mb-3">
        {/* Challenge Title */}
        <div className="text-center mb-3.5">
          <span className="inline-block bg-[#e7eeff] text-[#0058be] text-[12px] font-extrabold px-3 py-1 rounded-full mb-1 border border-[#d5e3ff]">
            Challenge {currentQuestion.challengeNumber}
          </span>
          <h3 className="font-headline text-[21px] font-bold text-[#001c3b] leading-tight">
            {currentQuestion.prompt}
          </h3>
        </div>

        {/* Options List with comfortable thumb-friendly targets */}
        <div className="flex flex-col gap-2.5">
          {currentQuestion.options.map((option) => (
            <PracticeOptionCard
              key={option.id}
              option={option}
              isSelected={selectedOptionId === option.id}
              onSelect={selectOption}
              onSpeak={speakWord}
            />
          ))}
        </div>

        {/* Feedback Banner & Try-Again Preview Accordion */}
        <PracticeFeedbackBanner
          hasAnswered={hasAnswered}
          isCorrect={isCorrect}
          explanation={currentQuestion.explanation}
          showTryAgainPreview={showTryAgainPreview}
          onToggleTryAgainPreview={toggleTryAgainPreview}
        />
      </div>

      {/* Primary Action Button: Next Question in bottom thumb reach */}
      <div className="mt-1">
        <button
          onClick={nextQuestion}
          className="w-full min-h-[56px] py-4 px-6 rounded-2xl tactile-btn-blue font-headline text-[18px] font-extrabold flex items-center justify-center gap-2 transition-all shadow-md touch-manipulation active:scale-[0.98]"
          aria-label="Siguiente pregunta"
        >
          <span>Next Question</span>
          <span className="material-symbols-outlined text-[22px]">arrow_forward</span>
        </button>
      </div>
    </div>
  );
};
