import React from 'react';
import { ExportOptions } from './ExportOptions';

interface AnalysisOutputProps {
  toneGuide: string;
}

export function AnalysisOutput({ toneGuide }: AnalysisOutputProps) {
  return (
    <div className="space-y-4">
      <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-soft">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-primary">Your Writing Style Guide</h2>
          <ExportOptions toneGuide={toneGuide} />
        </div>
        <pre className="whitespace-pre-wrap font-mono text-sm bg-background-light p-6 rounded-lg border border-gray-200">
          {toneGuide}
        </pre>
      </div>
    </div>
  );
}