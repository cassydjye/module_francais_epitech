export const emailExercises = [
  {
    id: 'subject',
    subject: { fr: 'urgent', en: 'urgent' },
    body: {
      fr: 'salut, je veux une réponse vite pour mon stage. merci',
      en: 'hey, I want a quick answer about my internship. thanks',
    },
    hint: {
      fr: 'Observe l’objet, le registre et la formule finale.',
      en: 'Check the subject, tone and closing.',
    },
    correction: {
      fr: 'Objet : Demande de suivi — candidature de stage\n\nBonjour Madame,\nJe me permets de vous contacter afin de connaître l’avancement de ma candidature.\nCordialement,\n[Signature]',
      en: 'Subject: Follow-up — internship application\n\nDear Ms [Name],\nI am writing to ask about the status of my application.\nKind regards,\n[Signature]',
    },
  },
  {
    id: 'structure',
    subject: { fr: 'Projet', en: 'Project' },
    body: {
      fr: 'Bonjour, voici les documents et j’ai une question et le délai est demain pouvez-vous regarder ?',
      en: 'Hello, here are the files and I have a question and the deadline is tomorrow can you look?',
    },
    hint: {
      fr: 'Une idée par paragraphe facilite la lecture.',
      en: 'One idea per paragraph makes the message easier to read.',
    },
    correction: {
      fr: 'Objet : Validation des documents — projet X\n\nBonjour,\nVous trouverez les documents en pièce jointe. Pourriez-vous valider le format avant demain ?\nMerci par avance.\nCordialement,\n[Signature]',
      en: 'Subject: Document review — Project X\n\nHello,\nPlease find the documents attached. Could you confirm the format by tomorrow?\nThank you.\nKind regards,\n[Signature]',
    },
  },
];
