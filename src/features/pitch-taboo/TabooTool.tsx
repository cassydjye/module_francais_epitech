import { Maximize2, RotateCcw } from 'lucide-react';
import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { tabooCards } from '../../data/taboo-cards';
import { localize } from '../../lib/content';
export function TabooTool() {
  const { t, i18n } = useTranslation();
  const [deck, setDeck] = useState(() => shuffle(tabooCards.map((_, i) => i)));
  const [position, setPosition] = useState(0);
  const [team, setTeam] = useState(0);
  const [scores, setScores] = useState([0, 0]);
  const root = useRef<HTMLDivElement>(null);
  const card = tabooCards[deck[position] ?? 0]!;
  const act = (points: number) => {
    setScores((s) => s.map((v, i) => (i === team ? v + points : v)));
    if (position + 1 >= deck.length) {
      setDeck(shuffle(tabooCards.map((_, i) => i)));
      setPosition(0);
    } else setPosition(position + 1);
    setTeam(team === 0 ? 1 : 0);
  };
  const reset = () => {
    setScores([0, 0]);
    setPosition(0);
    setTeam(0);
    setDeck(shuffle(tabooCards.map((_, i) => i)));
  };
  return (
    <div className="card taboo fullscreen-view" ref={root}>
      <div className="meta" style={{ justifyContent: 'space-between' }}>
        <strong>
          {t('tools.team')} {team + 1}
        </strong>
        <span>
          {position + 1}/{deck.length}
        </span>
        <span>
          {t('common.score')}: {scores[0]} — {scores[1]}
        </span>
      </div>
      <h2>{localize(card.concept, i18n.language)}</h2>
      <p className="forbidden">
        {card.forbidden[i18n.language === 'en' ? 'en' : 'fr'].join(' · ')}
      </p>
      <div className="actions" style={{ justifyContent: 'center' }}>
        <button className="button primary" onClick={() => act(1)}>
          {t('tools.success')}
        </button>
        <button className="button" onClick={() => act(0)}>
          {t('tools.skip')}
        </button>
        <button className="button danger" onClick={() => act(-1)}>
          {t('tools.forbidden')}
        </button>
      </div>
      <div className="actions" style={{ justifyContent: 'center', marginTop: '1rem' }}>
        <button className="icon-button" onClick={reset} aria-label={t('common.reset')}>
          <RotateCcw />
        </button>
        <button
          className="icon-button"
          onClick={() => void root.current?.requestFullscreen()}
          aria-label={t('tools.fullscreen')}
        >
          <Maximize2 />
        </button>
      </div>
    </div>
  );
}
function shuffle<T>(values: T[]) {
  return [...values].sort(() => Math.random() - 0.5);
}
