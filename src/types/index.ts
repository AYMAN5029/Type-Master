export interface TestResult {
  wpm: number;
  accuracy: number;
  correctChars: number;
  incorrectChars: number;
  totalChars: number;
  time: number;
}

export interface TestState {
  status: 'idle' | 'running' | 'finished';
  startTime: number | null;
  endTime: number | null;
  currentWordIndex: number;
  currentInput: string;
  mistakes: number;
  correctChars: number;
}