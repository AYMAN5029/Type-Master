import React from 'react';
import { Trophy, Target, Clock, Keyboard } from 'lucide-react';
import { TestResult } from '../types';

export default function TestResults({ result }: { result: TestResult }) {
  const stats = [
    {
      icon: Trophy,
      label: 'WPM',
      value: result.wpm,
      color: 'text-yellow-500',
    },
    {
      icon: Target,
      label: 'Accuracy',
      value: `${result.accuracy}%`,
      color: 'text-green-500',
    },
    {
      icon: Keyboard,
      label: 'Correct Characters',
      value: result.correctChars,
      color: 'text-blue-500',
    },
    {
      icon: Clock,
      label: 'Time',
      value: `${result.time.toFixed(1)}s`,
      color: 'text-purple-500',
    },
  ];

  return (
    <div className="w-full max-w-3xl mx-auto p-6 bg-white rounded-xl shadow-lg animate-fade-in">
      <h2 className="text-2xl font-bold text-center mb-8">Your Results</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map(({ icon: Icon, label, value, color }) => (
          <div key={label} className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
            <Icon className={`w-8 h-8 ${color} mb-2`} />
            <span className="text-sm text-gray-600">{label}</span>
            <span className="text-2xl font-bold">{value}</span>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <h3 className="text-lg font-semibold mb-4">Detailed Analysis</h3>
        <div className="space-y-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-600">Accuracy Distribution</span>
              <span className="text-sm font-medium">
                {result.correctChars} / {result.totalChars} characters
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className="bg-green-500 h-2.5 rounded-full"
                style={{ width: `${result.accuracy}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}