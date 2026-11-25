import { Download, Printer } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { downloadText } from '../../lib/content';
const read = () => {
  try {
    return JSON.parse(localStorage.getItem('comlab-pitch') ?? '["","","",""]') as string[];
  } catch {
    return ['', '', '', ''];
  }
};
export function PitchBuilder() {
  const { t, i18n } = useTranslation();
  const [notes, setNotes] = useState(read);
  useEffect(() => localStorage.setItem('comlab-pitch', JSON.stringify(notes)), [notes]);
  const titles =
    i18n.language === 'en'
      ? ['Hook', 'Project and need', 'Work completed', 'Memorable element']
      : ['Accroche', 'Projet et besoin', 'Travail réalisé', 'Élément marquant'];
  const words = notes.join(' ').trim().split(/\s+/).filter(Boolean).length;
  return (
    <div>
      <div className="grid">
        {titles.map((title, i) => (
          <label className="field card" key={title}>
            <strong>
              {i + 1}. {title}
            </strong>
            <textarea
              maxLength={2000}
              value={notes[i] ?? ''}
              onChange={(e) => setNotes(notes.map((x, n) => (n === i ? e.target.value : x)))}
            />
          </label>
        ))}
      </div>
      <div className="card">
        <strong>
          {t('tools.estimate')}: {Math.ceil((words / 130) * 60)}s
        </strong>
        <p className="muted">{words} words · 130 words/min</p>
        <div className="actions">
          <button
            className="button"
            onClick={() =>
              downloadText(
                'pitch-outline.txt',
                titles.map((x, i) => `${x}\n${notes[i]}`).join('\n\n'),
              )
            }
          >
            <Download />
            {t('common.export')}
          </button>
          <button className="button" onClick={() => print()}>
            <Printer />
            {t('common.print')}
          </button>
          <button
            className="button danger"
            onClick={() => confirm(t('common.confirmReset')) && setNotes(['', '', '', ''])}
          >
            {t('common.reset')}
          </button>
        </div>
      </div>
    </div>
  );
}
