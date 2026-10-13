import { useState, useCallback } from 'react';
import { sound } from '../utils/audio';

export function useSound(initialEnabled: boolean = true) {
  const [soundEnabled, setSoundEnabled] = useState<boolean>(() => {
    sound.enabled = initialEnabled;
    return initialEnabled;
  });

  const toggleSound = useCallback(() => {
    setSoundEnabled((prev) => {
      const next = !prev;
      sound.enabled = next;
      return next;
    });
  }, []);

  const playClick = useCallback(() => sound.playClick(), []);
  const playCorrect = useCallback(() => sound.playCorrect(), []);
  const playTryAgain = useCallback(() => sound.playTryAgain(), []);
  const playStar = useCallback(() => sound.playStar(), []);
  const playVictory = useCallback(() => sound.playVictory(), []);
  const speak = useCallback((text: string) => sound.speak(text), []);

  return {
    soundEnabled,
    toggleSound,
    playClick,
    playCorrect,
    playTryAgain,
    playStar,
    playVictory,
    speak,
  };
}
