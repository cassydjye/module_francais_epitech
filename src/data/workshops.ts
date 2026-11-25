import type { Workshop } from '../types/content';
const t = (fr: string, en: string) => ({ fr, en });
export const workshops: Workshop[] = [
  {
    id: 'professional-email',
    slug: 'professional-email',
    title: t('Mail professionnel', 'Professional Email'),
    description: t(
      'Identifier et corriger progressivement les erreurs fréquentes.',
      'Identify and progressively correct common mistakes.',
    ),
    duration: 90,
    level: 'Beginner',
    objectives: [
      t('Adapter le registre au destinataire.', 'Adapt tone to the recipient.'),
      t('Structurer un message clair.', 'Structure a clear message.'),
    ],
    steps: [
      t('Observer le mail.', 'Review the email.'),
      t('Repérer les erreurs.', 'Identify mistakes.'),
      t('Proposer puis comparer une correction.', 'Propose and compare a correction.'),
    ],
    tools: ['email'],
    sourceFile: 'Atelier_Mail_Pro_Correction_Progressive_v3.pptx',
  },
  {
    id: 'pitch',
    slug: 'pitch-speak-and-show',
    title: t('Pitch : Dire et montrer', 'Pitch: Speak and Show'),
    description: t(
      'Sélectionner, structurer et présenter un projet informatique en deux minutes.',
      'Select, structure and present a software project in two minutes.',
    ),
    duration: 120,
    level: 'Intermediate',
    objectives: [
      t('Vulgariser un projet informatique.', 'Explain a technical project clearly.'),
      t(
        'Distinguer ce qui doit être dit et montré.',
        'Separate what should be said from what should be shown.',
      ),
      t('Créer deux à trois diapositives pertinentes.', 'Create two or three useful slides.'),
    ],
    steps: [
      t('Analyser un pitch.', 'Analyse a pitch.'),
      t('Relever le défi dire ou montrer.', 'Take the say-or-show challenge.'),
      t('Exploiter la grille IUS.', 'Use the IUS board.'),
      t('Construire le discours et le support.', 'Build the speech and visual aid.'),
      t('Répéter, présenter et faire le bilan.', 'Rehearse, present and review.'),
    ],
    tools: ['timer', 'ius', 'builder', 'assessment'],
    sourceFile: 'Workshop_Pitch_EPITECH_Animation_V3.pptx',
  },
];
