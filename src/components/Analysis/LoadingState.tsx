import React from 'react';

export function LoadingState() {
  return (
    <div className="flex items-center justify-center p-8">
      <div className="animate-spin rounded-full h-8 w-8 border-4 border-primary/30 border-t-primary" />
      <span className="ml-3 text-gray-600 font-medium">Analyzing your writing style...</span>
    </div>
  );
}