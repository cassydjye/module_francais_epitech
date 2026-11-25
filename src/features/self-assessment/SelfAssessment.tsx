import { useState } from 'react';
import { useTranslation } from 'react-i18next';
const criteria = {
  fr: [
    'Clarté et vulgarisation',
    'Pertinence du contenu',
    'Structure du discours',
    'Cohérence du support visuel',
    'Fluidité de la prise de parole',
    'Articulation',
    'Répartition de la parole dans le binôme',
    'Respect du temps',
  ],
  en: [
    'Clarity and explanation',
    'Content relevance',
    'Speech structure',
    'Visual aid consistency',
    'Speaking fluency',
    'Articulation',
    'Balanced speaking time',
    'Time management',
  ],
};
export function SelfAssessment() {
  const { t, i18n } = useTranslation();
  const list = criteria[i18n.language === 'en' ? 'en' : 'fr'];
  const [checked, setChecked] = useState<boolean[]>(() => list.map(() => false));
  return (
    <div className="split">
      <div className="card">
        {list.map((x, i) => (
          <label className="check" key={x}>
            <input
              type="checkbox"
              checked={checked[i]}
              onChange={() => setChecked(checked.map((v, n) => (n === i ? !v : v)))}
            />
            <span>{x}</span>
          </label>
        ))}
      </div>
      <div className="card">
        <h3>{t('tools.acquired')}</h3>
        <ul>
          {list
            .filter((_, i) => checked[i])
            .map((x) => (
              <li key={x}>{x}</li>
            ))}
        </ul>
        <h3>{t('tools.improve')}</h3>
        <ul>
          {list
            .filter((_, i) => !checked[i])
            .map((x) => (
              <li key={x}>{x}</li>
            ))}
        </ul>
        <p className="notice">This is not an official grade.</p>
      </div>
    </div>
  );
}
