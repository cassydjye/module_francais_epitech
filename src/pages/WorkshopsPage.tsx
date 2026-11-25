import { ArrowRight, Clock, Download } from 'lucide-react';
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
            <p className="resource-summary">
              <strong>{w.resources.length}</strong> {t('workshops.resourceCount')} ·{' '}
              {w.resources.map((resource) => resource.format).join(' + ')}
            </p>
            <div className="actions">
              <Link className="button primary" to={`/workshops/${w.slug}`}>
                {t('common.open')} <ArrowRight size={17} />
              </Link>
              {w.resources[0] && (
                <a className="button" href={w.resources[0].fileUrl} download>
                  <Download size={17} /> {w.resources[0].format}
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
