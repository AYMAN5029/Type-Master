import { useState, useCallback } from 'react';

type WordStatus = {
  isCorrect: boolean;
  isChecked: boolean;
};

export function useWordStatus(wordCount: number) {
  const [wordStatuses, setWordStatuses] = useState<WordStatus[]>(
    Array(wordCount).fill({ isCorrect: false, isChecked: false })
  );

  const markWordStatus = useCallback((index: number, isCorrect: boolean) => {
    setWordStatuses(prev => {
      const newStatuses = [...prev];
      newStatuses[index] = { isCorrect, isChecked: true };
      return newStatuses;
    });
  }, []);

  const resetStatuses = useCallback((count: number) => {
    setWordStatuses(Array(count).fill({ isCorrect: false, isChecked: false }));
  }, []);

  return {
    wordStatuses,
    markWordStatus,
    resetStatuses
  };
}