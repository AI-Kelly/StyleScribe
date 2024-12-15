import React from 'react';
import { AlertCircle } from 'lucide-react';

interface ErrorStateProps {
  error: string;
}

export function ErrorState({ error }: ErrorStateProps) {
  return (
    <div className="p-6 bg-red-50 border border-red-200 rounded-lg">
      <div className="flex items-center gap-3 text-red-600">
        <AlertCircle className="h-6 w-6" />
        <p className="font-semibold">Analysis Error</p>
      </div>
      <p className="mt-2 text-red-600 ml-9">
        {error || 'An error occurred during analysis. Please try again.'}
      </p>
    </div>
  );
}