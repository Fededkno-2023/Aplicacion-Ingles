export type ScreenTab = 'journey' | 'practice' | 'awards' | 'profile';

export type ActiveScreen = 'home' | 'journey' | 'practice' | 'complete' | 'awards' | 'profile';

export interface EvolutivoMission {
  id: number;
  code: string;
  title: string;
  theme: string;
  subtopics: string;
  status: 'completed' | 'active' | 'locked';
  starsEarned: number;
  totalStars: number;
  buddyQuote?: string;
  lockRequirement?: string;
}

export interface PracticeOption {
  id: string;
  label: string;
  emoji: string;
  imageUrl?: string;
  isCorrect: boolean;
  phonetic?: string;
}

export interface PracticeQuestion {
  id: number;
  evolutivoId: number;
  category: 'vocab' | 'sentence' | 'grammar';
  challengeNumber: number;
  prompt: string;
  targetWord: string;
  options: PracticeOption[];
  explanation: string;
  points: number;
  starBonus: number;
}

export interface PlayerStats {
  stars: number;
  streakDays: number;
  level: number;
  levelTitle: string;
  totalEvolutivos: number;
  completedEvolutivos: number;
  xp: number;
  soundEnabled: boolean;
}
