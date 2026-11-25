import type { LocalizedText } from '../types/content';
export const localize = (value: LocalizedText, language: string) =>
  value[language === 'en' ? 'en' : 'fr'];
export const average = (grades: number[]) =>
  grades.reduce((sum, grade) => sum + grade, 0) / grades.length;
export const downloadText = (
  filename: string,
  content: string,
  type = 'text/plain;charset=utf-8',
) => {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
};
export const csvCell = (value: string) => {
  const safe = /^[=+\-@]/.test(value) ? `'${value}` : value;
  return `"${safe.replaceAll('"', '""')}"`;
};
