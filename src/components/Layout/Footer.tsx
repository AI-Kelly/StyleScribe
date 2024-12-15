import React from 'react';

export function Footer() {
  return (
    <footer className="mt-12 pb-8 text-center border-t border-gray-100">
      <div className="flex flex-col items-center gap-4 mt-8">
        <a 
          href="https://ai-marketinglabs.com/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:opacity-80 transition-opacity"
        >
          <img 
            src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=126,fit=crop,q=95/YKb6xl5g00FyprEa/the-marketing-automation-lab-logo-1-dOqyEx3OB1HZnk5R.png" 
            alt="AI Marketing Automation Lab Logo" 
            className="h-16 w-auto"
          />
        </a>
        <a 
          href="https://ai-marketinglabs.com/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-gray-600 text-sm font-medium hover:text-primary transition-colors"
        >
          Developed in The AI Marketing Automation Lab
        </a>
      </div>
    </footer>
  );
}