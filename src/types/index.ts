export interface AnalysisResult {
  toneGuide: string;
  status: 'idle' | 'loading' | 'success' | 'error';
  error?: string;
}

export interface WritingSample {
  text: string;
  wordCount: number;
}

export interface UserInfo {
  firstName: string;
  email: string;
}

export interface ValidationResult {
  isValid: boolean;
  error?: string;
}