export type Locale = 'fr' | 'en';
export interface LocalizedText {
  fr: string;
  en: string;
}
export interface Project {
  id: string;
  slug: string;
  title: LocalizedText;
  year: number;
  level: 'TEK1' | 'TEK2';
  grade: number;
  category: string;
  skills: string[];
  description: LocalizedText;
  fileUrl: string;
  filePath: string;
  fileSize: string;
  objectives: LocalizedText[];
  tips: LocalizedText[];
}
export interface Workshop {
  id: string;
  slug: string;
  title: LocalizedText;
  description: LocalizedText;
  duration: number;
  level: string;
  objectives: LocalizedText[];
  steps: LocalizedText[];
  tools: string[];
  resources: WorkshopResource[];
}
export interface WorkshopResource {
  id: string;
  title: LocalizedText;
  format: 'PPTX' | 'PDF';
  audience: 'facilitator' | 'student' | 'everyone';
  fileUrl: string;
  filePath: string;
  fileSize: string;
}
export interface TabooCard {
  concept: LocalizedText;
  forbidden: { fr: string[]; en: string[] };
}
