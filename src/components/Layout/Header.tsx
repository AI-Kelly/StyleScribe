import React from 'react';
import { Feather } from 'lucide-react';

export function Header() {
  return (
    <header className="text-center mb-12">
      <div className="flex items-center justify-center gap-3 mb-4">
        <div className="bg-primary p-2 rounded-lg">
          <Feather size={32} className="text-white" />
        </div>
        <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          StyleScribe
        </h1>
      </div>
      <div className="space-y-2">
        <p className="text-gray-600 text-lg">
          Transform your writing into AI-powered style guidelines
        </p>
        <p className="text-sm text-gray-500">
          Brought to you by{' '}
          <a 
            href="https://ai-marketinglabs.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary hover:text-primary-dark transition-colors"
          >
            The AI Marketing Automation Lab
          </a>
        </p>
      </div>
    </header>
  );
}