import { useState } from 'react';
import { analyzeWriting } from '../services/api';
import { validateSample } from '../utils/textUtils';
import type { AnalysisResult, UserInfo } from '../types';

export function useAnalysis() {
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<AnalysisResult>({
    toneGuide: '',
    status: 'idle'
  });

  const analyze = async (text: string, userInfo: UserInfo) => {
    const validationError = validateSample(text);
    if (validationError) {
      setError(validationError);
      return;
    }

    setError(null);
    setResult({ toneGuide: '', status: 'loading' });

    try {
      const response = await analyzeWriting(text, userInfo);
      
      if (!response.success) {
        throw new Error(response.error || 'Analysis failed');
      }

      setResult({
        toneGuide: response.toneGuide,
        status: 'success'
      });
    } catch (err) {
      setResult({
        toneGuide: '',
        status: 'error',
        error: err instanceof Error ? err.message : 'Failed to analyze writing style. Please try again.'
      });
    }
  };

  return {
    error,
    result,
    analyze
  };
}