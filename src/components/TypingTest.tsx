import React, { useState, useCallback, useEffect } from 'react';
import { Play, RefreshCw, Timer, Type } from 'lucide-react';
import { TestState } from '../types';
import { useTypingTimer } from '../hooks/useTypingTimer';
import { useWordManager } from '../hooks/useWordManager';
import { useWordStatus } from '../hooks/useWordStatus';

const TEST_DURATION = 60;

export default function TypingTest({ onTestComplete }: { onTestComplete: (result: any) => void }) {
  const { words: testWords, currentIndex, incrementIndex, refreshWords } = useWordManager();
  const { wordStatuses, markWordStatus, resetStatuses } = useWordStatus(testWords.length);
  const [testState, setTestState] = useState<TestState>({
    status: 'idle',
    startTime: null,
    endTime: null,
    currentWordIndex: 0,
    currentInput: '',
    mistakes: 0,
    correctChars: 0,
  });

  useEffect(() => {
    resetStatuses(testWords.length);
  }, [testWords, resetStatuses]);

  const finishTest = useCallback(() => {
    const endTime = Date.now();
    const duration = (endTime - (testState.startTime || 0)) / 1000;
    const wpm = Math.round((testState.correctChars / 5) * (60 / duration));
    const accuracy = Math.round(
      ((testState.currentWordIndex - testState.mistakes) / testState.currentWordIndex) * 100
    );

    setTestState(prev => ({
      ...prev,
      status: 'finished',
      endTime,
    }));

    onTestComplete({
      wpm,
      accuracy,
      correctChars: testState.correctChars,
      incorrectChars: testState.mistakes * 5,
      totalChars: testState.currentWordIndex * 5,
      time: duration,
    });
  }, [testState, onTestComplete]);

  const { timeLeft, resetTimer } = useTypingTimer(
    TEST_DURATION,
    testState.status === 'running',
    finishTest
  );

  const startTest = useCallback(() => {
    resetTimer();
    refreshWords();
    resetStatuses(testWords.length);
    setTestState({
      status: 'running',
      startTime: Date.now(),
      currentWordIndex: 0,
      currentInput: '',
      mistakes: 0,
      correctChars: 0,
      endTime: null,
    });
  }, [resetTimer, refreshWords, resetStatuses, testWords.length]);

  const handleInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (testState.status !== 'running') return;
    
    const input = e.target.value;
    const currentWord = testWords[currentIndex];
    
    if (input.endsWith(' ')) {
      const isCorrect = input.trim() === currentWord;
      markWordStatus(currentIndex, isCorrect);
      
      if (isCorrect) {
        incrementIndex();
        setTestState(prev => ({
          ...prev,
          currentWordIndex: prev.currentWordIndex + 1,
          currentInput: '',
          correctChars: prev.correctChars + currentWord.length,
        }));
      } else {
        incrementIndex();
        setTestState(prev => ({
          ...prev,
          currentWordIndex: prev.currentWordIndex + 1,
          currentInput: '',
          mistakes: prev.mistakes + 1,
        }));
      }
    } else {
      setTestState(prev => ({
        ...prev,
        currentInput: input,
      }));
    }
  }, [testState.status, currentIndex, testWords, incrementIndex, markWordStatus]);

  return (
    <div className="w-full max-w-3xl mx-auto p-6 space-y-6">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-2">
          <Timer className="w-6 h-6 text-indigo-600" />
          <span className="text-2xl font-bold">{timeLeft}s</span>
        </div>
        <button
          onClick={testState.status === 'running' ? finishTest : startTest}
          className="flex items-center space-x-2 px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
        >
          {testState.status === 'running' ? (
            <>
              <RefreshCw className="w-5 h-5" />
              <span>Stop</span>
            </>
          ) : (
            <>
              <Play className="w-5 h-5" />
              <span>Start</span>
            </>
          )}
        </button>
      </div>

      <div className="relative">
        <div className="mb-4 p-4 bg-white rounded-lg shadow-sm min-h-[100px] text-lg leading-relaxed">
          <div className="flex flex-wrap gap-2">
            {testWords.map((word, index) => (
              <span
                key={index}
                className={`${
                  index === currentIndex
                    ? 'bg-indigo-100 px-1 rounded'
                    : wordStatuses[index]?.isChecked
                    ? wordStatuses[index].isCorrect
                      ? 'text-green-600'
                      : 'text-red-600'
                    : ''
                }`}
              >
                {word}
              </span>
            ))}
          </div>
        </div>

        <div className="relative">
          <Type className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            value={testState.currentInput}
            onChange={handleInput}
            disabled={testState.status !== 'running'}
            className="w-full px-12 py-4 text-lg border-2 border-gray-200 rounded-lg focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors disabled:bg-gray-100"
            placeholder={testState.status === 'running' ? "Type here..." : "Click start to begin the test"}
          />
        </div>
      </div>
    </div>
  );
}