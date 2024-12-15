import React from 'react';

interface AnalysisButtonProps {
  onClick: () => void;
  isLoading: boolean;
}

export function AnalysisButton({ onClick, isLoading }: AnalysisButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={isLoading}
      className="w-full py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg 
                hover:from-primary-dark hover:to-secondary-dark transition-all duration-200 
                disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed
                shadow-soft hover:shadow-lg transform hover:-translate-y-0.5"
    >
      {isLoading ? 'Analyzing...' : 'Analyze Writing Style'}
    </button>
  );
}