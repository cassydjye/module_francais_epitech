import { Maximize2 } from 'lucide-react';
import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { workshops } from '../../data/workshops';
import { localize } from '../../lib/content';
export function WorkshopMode() {
  const { t, i18n } = useTranslation();
  const [workshopIndex, setWorkshopIndex] = useState(0);
  const [step, setStep] = useState(0);
  const [pairs, setPairs] = useState(4);
  const [done, setDone] = useState<number[]>([]);
  const root = useRef<HTMLDivElement>(null);
  const workshop = workshops[workshopIndex]!;
  return (
    <div className="card fullscreen-view" ref={root}>
      <div className="toolbar">
        <select
          value={workshopIndex}
          onChange={(e) => {
            setWorkshopIndex(Number(e.target.value));
            setStep(0);
          }}
        >
          {workshops.map((x, i) => (
            <option value={i} key={x.id}>
              {localize(x.title, i18n.language)}
            </option>
          ))}
        </select>
        <label className="field">
          <span>{t('tools.pairs')}</span>
          <input
            type="number"
            min="1"
            max="100"
            value={pairs}
            onChange={(e) => setPairs(Math.max(1, Number(e.target.value)))}
          />
        </label>
        <button className="icon-button" onClick={() => void root.current?.requestFullscreen()}>
          <Maximize2 />
        </button>
      </div>
      <p className="eyebrow">
        {step + 1}/{workshop.steps.length}
      </p>
      <h2>{localize(workshop.steps[step]!, i18n.language)}</h2>
      <div className="actions">
        <button className="button" disabled={step === 0} onClick={() => setStep(step - 1)}>
          {t('common.previous')}
        </button>
        <button
          className="button primary"
          disabled={step === workshop.steps.length - 1}
          onClick={() => setStep(step + 1)}
        >
          {t('common.next')}
        </button>
      </div>
      <h3 style={{ marginTop: '2rem' }}>{t('tools.pairs')}</h3>
      <div className="grid">
        {Array.from({ length: pairs }, (_, i) => (
          <button
            className="button"
            key={i}
            onClick={() => setDone(done.includes(i) ? done.filter((x) => x !== i) : [...done, i])}
          >
            {i18n.language === 'en' ? 'Pair' : 'Binôme'} {i + 1} {done.includes(i) ? '✓' : ''}
          </button>
        ))}
      </div>
      <button
        className="button danger"
        style={{ marginTop: '1rem' }}
        onClick={() => {
          setStep(0);
          setDone([]);
        }}
      >
        {t('common.reset')}
      </button>
    </div>
  );
}
