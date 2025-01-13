import { useState, useEffect, useCallback } from 'react';

export function useTypingTimer(duration: number, isRunning: boolean, onTimeUp: () => void) {
  const [timeLeft, setTimeLeft] = useState(duration);
  const [startTime, setStartTime] = useState<number | null>(null);

  useEffect(() => {
    if (isRunning && !startTime) {
      setStartTime(Date.now());
    } else if (!isRunning) {
      setStartTime(null);
      setTimeLeft(duration);
    }
  }, [isRunning, duration]);

  useEffect(() => {
    if (!startTime) return;

    const interval = setInterval(() => {
      const elapsedSeconds = Math.floor((Date.now() - startTime) / 1000);
      const remaining = duration - elapsedSeconds;
      
      if (remaining <= 0) {
        clearInterval(interval);
        setTimeLeft(0);
        onTimeUp();
      } else {
        setTimeLeft(remaining);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [startTime, duration, onTimeUp]);

  const resetTimer = useCallback(() => {
    setTimeLeft(duration);
    setStartTime(null);
  }, [duration]);

  return { timeLeft, resetTimer };
}