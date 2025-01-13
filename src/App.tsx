import React, { useState } from 'react';
import { Keyboard } from 'lucide-react';
import TypingTest from './components/TypingTest';
import TestResults from './components/TestResults';
import { TestResult } from './types';

function App() {
  const [testResult, setTestResult] = useState<TestResult | null>(null);

  const handleTestComplete = (result: TestResult) => {
    setTestResult(result);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2">
            <Keyboard className="w-8 h-8 text-indigo-600" />
            <h1 className="text-2xl font-bold text-gray-900">TypeMaster</h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="space-y-8">
          {!testResult && <TypingTest onTestComplete={handleTestComplete} />}
          {testResult && (
            <div className="space-y-6">
              <TestResults result={testResult} />
              <div className="text-center">
                <button
                  onClick={() => setTestResult(null)}
                  className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                >
                  Try Again
                </button>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;