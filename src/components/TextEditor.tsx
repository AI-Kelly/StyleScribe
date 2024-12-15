import React from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import { countWords } from '../utils/textUtils';

interface TextEditorProps {
  value: string;
  onChange: (value: string) => void;
  error?: string;
}

export function TextEditor({ value, onChange, error }: TextEditorProps) {
  const wordCount = countWords(value);

  return (
    <div className="w-full space-y-2">
      <div className="relative">
        <TextareaAutosize
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`w-full p-4 border rounded-lg focus:ring-2 focus:ring-primary/50 
                     focus:border-primary transition-colors duration-200
                     max-h-[400px] overflow-y-auto resize-none
                     scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100
                     ${error ? 'border-red-500' : 'border-gray-300'}`}
          placeholder="Paste or type your writing sample here (150-2000 words)..."
          maxRows={15}
        />
      </div>
      <div className="flex justify-between text-sm">
        <span className={`${
          wordCount < 150 || wordCount > 2000 ? 'text-red-500' : 'text-gray-500'
        }`}>
          {wordCount} words
        </span>
        {error && <span className="text-red-500">{error}</span>}
      </div>
    </div>
  );
}