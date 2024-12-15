import React from 'react';
import { Download, AlertCircle } from 'lucide-react';
import type { AnalysisResult } from '../types';

interface AnalysisResultProps {
  result: AnalysisResult;
}

export function AnalysisResult({ result }: AnalysisResultProps) {
  const handleDownload = () => {
    const blob = new Blob([result.toneGuide], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'tone-of-voice-guide.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  if (result.status === 'loading') {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500" />
        <span className="ml-3 text-gray-600">Analyzing your writing style...</span>
      </div>
    );
  }

  if (result.status === 'error') {
    return (
      <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
        <div className="flex items-center gap-2 text-red-700">
          <AlertCircle size={20} />
          <p className="font-medium">Analysis Error</p>
        </div>
        <p className="mt-2 text-red-600">
          {result.error || 'An error occurred during analysis. Please try again.'}
        </p>
      </div>
    );
  }

  if (result.status === 'success' && result.toneGuide) {
    return (
      <div className="space-y-4">
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h2 className="text-lg font-semibold mb-4">Your Tone of Voice Guide</h2>
          <pre className="whitespace-pre-wrap font-mono text-sm bg-gray-50 p-4 rounded-md">
            {result.toneGuide}
          </pre>
        </div>
        <button
          onClick={handleDownload}
          className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          <Download size={20} />
          Download Guide
        </button>
      </div>
    );
  }

  return null;
}