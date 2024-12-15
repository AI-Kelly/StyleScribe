import React from 'react';
import { Download, Copy, FileText, FileType, Check } from 'lucide-react';
import { useState } from 'react';
import { generatePDF } from '../../utils/pdfUtils';

interface ExportOptionsProps {
  toneGuide: string;
}

export function ExportOptions({ toneGuide }: ExportOptionsProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(toneGuide);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const downloadAsText = () => {
    const blob = new Blob([toneGuide], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'stylescribe-guide.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const downloadAsPDF = () => {
    generatePDF(toneGuide);
  };

  return (
    <div className="flex flex-wrap gap-3">
      <button
        onClick={handleCopy}
        className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 
                 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200 
                 shadow-soft hover:shadow-md"
      >
        {copied ? <Check size={18} className="text-green-500" /> : <Copy size={18} />}
        {copied ? 'Copied!' : 'Copy to Clipboard'}
      </button>

      <button
        onClick={downloadAsText}
        className="flex items-center gap-2 px-4 py-2 bg-secondary text-white 
                 rounded-lg hover:bg-secondary-dark transition-colors duration-200 
                 shadow-soft hover:shadow-md"
      >
        <FileText size={18} />
        Download as TXT
      </button>

      <button
        onClick={downloadAsPDF}
        className="flex items-center gap-2 px-4 py-2 bg-primary text-white 
                 rounded-lg hover:bg-primary-dark transition-colors duration-200 
                 shadow-soft hover:shadow-md"
      >
        <FileType size={18} />
        Download as PDF
      </button>
    </div>
  );
}