import { jsPDF } from 'jspdf';

export function generatePDF(content: string): void {
  const doc = new jsPDF();
  
  // Add title
  doc.setFontSize(20);
  doc.setTextColor(107, 70, 193); // primary color
  doc.text('StyleScribe Writing Guide', 20, 20);
  
  // Add timestamp
  doc.setFontSize(10);
  doc.setTextColor(100);
  const date = new Date().toLocaleDateString();
  doc.text(`Generated on ${date}`, 20, 30);
  
  // Add content
  doc.setFontSize(12);
  doc.setTextColor(0);
  
  // Split content into lines that fit the page width
  const textLines = doc.splitTextToSize(content, 170);
  
  // Add lines to document, creating new pages as needed
  let y = 40;
  const pageHeight = doc.internal.pageSize.height;
  
  textLines.forEach((line: string) => {
    if (y > pageHeight - 20) {
      doc.addPage();
      y = 20;
    }
    doc.text(line, 20, y);
    y += 7;
  });
  
  // Save the PDF
  doc.save('stylescribe-guide.pdf');
}