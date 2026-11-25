import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { emailExercises } from '../../data/email-exercises';
export function EmailWorkshop() {
  const { t, i18n } = useTranslation();
  const [index, setIndex] = useState(0);
  const [hint, setHint] = useState(false);
  const [answer, setAnswer] = useState(false);
  const item = emailExercises[index]!;
  const lang = i18n.language === 'en' ? 'en' : 'fr';
  const move = (n: number) => {
    setIndex((index + n + emailExercises.length) % emailExercises.length);
    setHint(false);
    setAnswer(false);
  };
  return (
    <div className="split">
      <div className="card">
        <span className="tag">
          {index + 1}/{emailExercises.length}
        </span>
        <h3>{item.subject[lang]}</h3>
        <p style={{ whiteSpace: 'pre-wrap' }}>{item.body[lang]}</p>
        <div className="actions">
          <button className="button" onClick={() => setHint(true)}>
            {t('tools.hint')}
          </button>
          <button className="button primary" onClick={() => setAnswer(true)}>
            {t('tools.reveal')}
          </button>
        </div>
        {hint && <p className="notice">{item.hint[lang]}</p>}
      </div>
      <div className="card">
        <h3>{t('tools.reveal')}</h3>
        {answer ? (
          <p style={{ whiteSpace: 'pre-wrap' }}>{item.correction[lang]}</p>
        ) : (
          <p className="muted">…</p>
        )}
        <div className="actions">
          <button className="button" onClick={() => move(-1)}>
            {t('common.previous')}
          </button>
          <button className="button" onClick={() => move(1)}>
            {t('common.next')}
          </button>
        </div>
      </div>
    </div>
  );
}
