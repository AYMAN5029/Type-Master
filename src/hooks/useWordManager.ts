import { useState, useCallback } from 'react';
import { generateWordSet } from '../utils/wordUtils';

const WORDS_PER_SET = 50;

export function useWordManager() {
  const [testWords, setTestWords] = useState(() => generateWordSet(WORDS_PER_SET));
  const [currentIndex, setCurrentIndex] = useState(0);

  const refreshWords = useCallback(() => {
    setTestWords(generateWordSet(WORDS_PER_SET));
    setCurrentIndex(0);
  }, []);

  const incrementIndex = useCallback(() => {
    setCurrentIndex(prev => {
      const nextIndex = prev + 1;
      if (nextIndex >= testWords.length) {
        // Generate new words when we reach the end
        setTestWords(generateWordSet(WORDS_PER_SET));
        return 0;
      }
      return nextIndex;
    });
  }, [testWords]);

  return {
    words: testWords,
    currentIndex,
    incrementIndex,
    refreshWords
  };
}