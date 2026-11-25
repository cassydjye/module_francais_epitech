import { ArrowRight, Clock } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { PageHeader } from '../components/shared/PageHeader';
import { workshops } from '../data/workshops';
import { localize } from '../lib/content';
export function WorkshopsPage() {
  const { t, i18n } = useTranslation();
  return (
    <div className="page">
      <PageHeader eyebrow="Com'Lab" title={t('workshops.title')} intro={t('workshops.intro')} />
      <div className="container grid">
        {workshops.map((w) => (
          <article className="card" key={w.id}>
            <span className="tag">
              <Clock size={14} /> {w.duration} {t('common.minutes')}
            </span>
            <h2>{localize(w.title, i18n.language)}</h2>
            <p>{localize(w.description, i18n.language)}</p>
            <Link className="button primary" to={`/workshops/${w.slug}`}>
              {t('common.open')} <ArrowRight size={17} />
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
