import { useState, useCallback } from 'react';

interface UsePlayerStatsOptions {
  initialStars?: number;
  initialStreakDays?: number;
}

export function usePlayerStats({
  initialStars = 120,
  initialStreakDays = 5,
}: UsePlayerStatsOptions = {}) {
  const [stars, setStars] = useState<number>(initialStars);
  const [streakDays, setStreakDays] = useState<number>(initialStreakDays);

  const addStars = useCallback((amount: number) => {
    setStars((prev) => Math.max(0, prev + amount));
  }, []);

  const incrementStreak = useCallback(() => {
    setStreakDays((prev) => prev + 1);
  }, []);

  return {
    stars,
    streakDays,
    addStars,
    incrementStreak,
  };
}
