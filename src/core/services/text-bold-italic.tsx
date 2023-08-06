export const formatBoldItalicText = (rawText: string): string => {
  let convertedText = rawText;

  if (rawText.includes('**')) {
    const bold = /\*\*(.*?)\*\*/gm;
    convertedText = rawText.replace(bold, '<strong>$1</strong>');
  }

  if (rawText.includes('_')) {
    const italic = /_(.*?)_/gm;

    convertedText = convertedText.replace(italic, '<i>$1</i>');
  }

  return convertedText;
};
