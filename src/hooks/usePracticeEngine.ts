import { useState, useCallback } from 'react';
import { PRACTICE_QUESTIONS } from '../data/mockData';
import { PracticeQuestion, PracticeOption } from '../types';
import { useSound } from './useSound';

interface UsePracticeEngineProps {
  onComplete: () => void;
  onAddStars: (stars: number) => void;
}

export function usePracticeEngine({ onComplete, onAddStars }: UsePracticeEngineProps) {
  const { playClick, playCorrect, playTryAgain, playVictory, speak } = useSound();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptionId, setSelectedOptionId] = useState<string>('opt-apple');
  const [activeTab, setActiveTab] = useState<'vocab' | 'sentence' | 'grammar'>('vocab');
  const [showTryAgainPreview, setShowTryAgainPreview] = useState(false);
  const [hasAnswered, setHasAnswered] = useState(true);

  const currentQ: PracticeQuestion =
    PRACTICE_QUESTIONS[currentQuestionIndex] || PRACTICE_QUESTIONS[0];
  const selectedOption: PracticeOption | undefined = currentQ.options.find(
    (opt) => opt.id === selectedOptionId
  );
  const isCorrect = selectedOption?.isCorrect ?? false;

  const selectOption = useCallback(
    (optionId: string, word: string) => {
      setSelectedOptionId(optionId);
      setHasAnswered(true);
      speak(word);

      const chosen = currentQ.options.find((o) => o.id === optionId);
      if (chosen?.isCorrect) {
        playCorrect();
        onAddStars(10);
      } else {
        playTryAgain();
      }
    },
    [currentQ, onAddStars, playCorrect, playTryAgain, speak]
  );

  const nextQuestion = useCallback(() => {
    playClick();
    if (currentQuestionIndex < PRACTICE_QUESTIONS.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedOptionId('');
      setHasAnswered(false);
      setShowTryAgainPreview(false);
    } else {
      playVictory();
      onComplete();
    }
  }, [currentQuestionIndex, onComplete, playClick, playVictory]);

  const toggleTryAgainPreview = useCallback(() => {
    playClick();
    setShowTryAgainPreview((prev) => !prev);
  }, [playClick]);

  return {
    currentQuestionIndex,
    currentQuestion: currentQ,
    totalQuestions: 10,
    activeTab,
    setActiveTab,
    selectedOptionId,
    selectedOption,
    isCorrect,
    hasAnswered,
    showTryAgainPreview,
    selectOption,
    nextQuestion,
    toggleTryAgainPreview,
    speakWord: speak,
  };
}
