import type { Workshop, WorkshopResource } from '../types/content';
const t = (fr: string, en: string) => ({ fr, en });
const file = (
  id: string,
  titleFr: string,
  titleEn: string,
  format: 'PPTX' | 'PDF',
  audience: WorkshopResource['audience'],
  fileUrl: string,
  filePath: string,
  fileSize: string,
): WorkshopResource => ({
  id,
  title: t(titleFr, titleEn),
  format,
  audience,
  fileUrl,
  filePath,
  fileSize,
});
const moduleDeck = new URL(
  '../../resources/workshops/module-introduction/module-introduction.pptx',
  import.meta.url,
).href;
const emailDeck = new URL(
  '../../resources/workshops/professional-email/professional-email-workshop.pptx',
  import.meta.url,
).href;
const emailProgressiveDeck = new URL(
  '../../resources/workshops/professional-email/progressive-correction-workshop.pptx',
  import.meta.url,
).href;
const pitchDeck = new URL(
  '../../resources/workshops/explaining-technical-concepts/explaining-technical-concepts-workshop.pptx',
  import.meta.url,
).href;
const pitchAnimationDeck = new URL(
  '../../resources/workshops/explaining-technical-concepts/pitch-animation-workshop.pptx',
  import.meta.url,
).href;
const aiDeck = new URL(
  '../../resources/workshops/responsible-ai-writing/responsible-ai-writing.pptx',
  import.meta.url,
).href;
const tabooDeck = new URL(
  '../../resources/workshops/pitch-taboo/pitch-taboo-24-cards.pdf',
  import.meta.url,
).href;
export const workshops: Workshop[] = [
  {
    id: 'module-introduction',
    slug: 'module-introduction',
    title: t('Kickoff — Présentation du module', 'Kickoff — Module Introduction'),
    description: t(
      "Présenter le module, ses objectifs, son fonctionnement et l'écosystème Com'Lab dès la première séance.",
      "Introduce the module, its goals, how it works and the Com'Lab ecosystem from the first session.",
    ),
    duration: 45,
    level: 'All levels',
    objectives: [
      t('Comprendre le parcours du module.', 'Understand the module journey.'),
      t(
        'Identifier les ressources et outils disponibles.',
        'Identify the available resources and tools.',
      ),
      t('Installer un cadre de travail commun.', 'Establish a shared working framework.'),
    ],
    steps: [
      t('Accueillir et présenter le module.', 'Welcome learners and introduce the module.'),
      t('Expliquer les objectifs et les activités.', 'Explain goals and activities.'),
      t("Présenter Com'Lab et les ressources.", "Present Com'Lab and its resources."),
      t('Répondre aux questions et lancer le module.', 'Answer questions and launch the module.'),
    ],
    tools: ['workshop-mode'],
    resources: [
      file(
        'module-introduction',
        'Présentation de lancement du module',
        'Module kickoff presentation',
        'PPTX',
        'everyone',
        moduleDeck,
        'resources/workshops/module-introduction/module-introduction.pptx',
        '50 KB',
      ),
    ],
  },
  {
    id: 'professional-email',
    slug: 'professional-email',
    title: t('Mail professionnel', 'Professional Email'),
    description: t(
      'Comparer, repérer et corriger les erreurs fréquentes tout en gardant un regard critique sur l’IA.',
      'Compare, identify and correct common mistakes while keeping a critical perspective on AI.',
    ),
    duration: 90,
    level: 'Beginner',
    objectives: [
      t('Adapter le registre au destinataire.', 'Adapt tone to the recipient.'),
      t('Structurer un message clair.', 'Structure a clear message.'),
      t(
        "Évaluer de façon critique une proposition rédigée avec l'IA.",
        'Critically assess an AI-assisted draft.',
      ),
    ],
    steps: [
      t('Observer et comparer des mails.', 'Review and compare emails.'),
      t('Repérer les erreurs.', 'Identify mistakes.'),
      t('Proposer puis expliquer une correction.', 'Propose and explain a correction.'),
      t('Pratiquer avec l’outil interactif.', 'Practise with the interactive tool.'),
    ],
    tools: ['email'],
    resources: [
      file(
        'professional-email-workshop',
        'Workshop prêt à présenter',
        'Presentation-ready workshop',
        'PPTX',
        'everyone',
        emailDeck,
        'resources/workshops/professional-email/professional-email-workshop.pptx',
        '64 KB',
      ),
      file(
        'professional-email-progressive-correction',
        'Atelier de correction progressive',
        'Progressive correction workshop',
        'PPTX',
        'everyone',
        emailProgressiveDeck,
        'resources/workshops/professional-email/progressive-correction-workshop.pptx',
        '224 KB',
      ),
    ],
  },
  {
    id: 'explaining-technical-concepts',
    slug: 'explaining-technical-concepts',
    title: t(
      'Pitch 1 — Vulgariser un projet informatique',
      'Pitch 1 — Explaining Technical Concepts',
    ),
    description: t(
      'Se faire comprendre sans jargon, sélectionner les informations utiles et préparer un pitch clair.',
      'Communicate without jargon, select useful information and prepare a clear pitch.',
    ),
    duration: 90,
    level: 'Intermediate',
    objectives: [
      t('Vulgariser un concept technique.', 'Explain a technical concept clearly.'),
      t('Sélectionner les informations pertinentes.', 'Select relevant information.'),
      t('Préparer un pitch final.', 'Prepare a final pitch.'),
    ],
    steps: [
      t(
        'Découvrir les principes de vulgarisation.',
        'Explore the principles of clear explanation.',
      ),
      t('Jouer à Pitch Taboo.', 'Play Pitch Taboo.'),
      t('Trier les informations avec la grille IUS.', 'Sort information with the IUS board.'),
      t('Construire et répéter le pitch.', 'Build and rehearse the pitch.'),
    ],
    tools: ['taboo', 'ius', 'timer', 'builder', 'assessment'],
    resources: [
      file(
        'explaining-technical-concepts-workshop',
        'Workshop prêt à présenter',
        'Presentation-ready workshop',
        'PPTX',
        'everyone',
        pitchDeck,
        'resources/workshops/explaining-technical-concepts/explaining-technical-concepts-workshop.pptx',
        '64 KB',
      ),
      file(
        'pitch-animation-workshop',
        "Support complet d'animation du pitch",
        'Complete pitch facilitation deck',
        'PPTX',
        'everyone',
        pitchAnimationDeck,
        'resources/workshops/explaining-technical-concepts/pitch-animation-workshop.pptx',
        '441 KB',
      ),
      file(
        'pitch-taboo-cards',
        '24 cartes Pitch Taboo illustrées',
        '24 illustrated Pitch Taboo cards',
        'PDF',
        'everyone',
        tabooDeck,
        'resources/workshops/pitch-taboo/pitch-taboo-24-cards.pdf',
        '4.4 MB',
      ),
    ],
  },
  {
    id: 'responsible-ai-writing',
    slug: 'responsible-ai-writing',
    title: t('Bien utiliser l’IA pour rédiger', 'Responsible AI-Assisted Writing'),
    description: t(
      'Utiliser l’IA comme aide à la rédaction sans remplacer son jugement, sa responsabilité ni sa voix.',
      'Use AI as a writing aid without replacing personal judgement, responsibility or voice.',
    ),
    duration: 60,
    level: 'All levels',
    objectives: [
      t(
        "Identifier ce que l'IA peut réellement aider à faire.",
        'Identify what AI can genuinely help with.',
      ),
      t(
        'Vérifier, adapter et assumer le texte final.',
        'Check, adapt and take responsibility for the final text.',
      ),
      t(
        'Éviter le copier-coller et les usages trompeurs.',
        'Avoid copy-paste and misleading uses.',
      ),
    ],
    steps: [
      t('Poser les limites et responsabilités.', 'Set boundaries and responsibilities.'),
      t(
        'Comparer une demande vague et une demande contextualisée.',
        'Compare a vague request with a contextualised one.',
      ),
      t('Vérifier et réécrire une proposition.', 'Check and rewrite a suggestion.'),
      t('Construire une méthode de travail responsable.', 'Build a responsible workflow.'),
    ],
    tools: ['email', 'builder'],
    resources: [
      file(
        'responsible-ai-writing',
        'Guide prêt à présenter',
        'Presentation-ready guide',
        'PPTX',
        'everyone',
        aiDeck,
        'resources/workshops/responsible-ai-writing/responsible-ai-writing.pptx',
        '47 KB',
      ),
    ],
  },
];
