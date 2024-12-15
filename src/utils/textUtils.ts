export const countWords = (text: string): number => {
  return text.trim().split(/\s+/).filter(word => word.length > 0).length;
};

export const validateSample = (text: string): string | null => {
  const wordCount = countWords(text);
  
  if (wordCount < 150) {
    return 'Please enter at least 150 words';
  }
  if (wordCount > 2000) {
    return 'Please enter no more than 2000 words';
  }
  return null;
};