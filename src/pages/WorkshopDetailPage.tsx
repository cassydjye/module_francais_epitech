import { Download, FileText, Presentation } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link, useParams } from 'react-router-dom';
import { workshops } from '../data/workshops';
import { localize } from '../lib/content';
export function WorkshopDetailPage() {
  const { slug } = useParams();
  const { t, i18n } = useTranslation();
  const w = workshops.find((x) => x.slug === slug);
  if (!w)
    return (
      <div className="page container">
        <h1>{t('errors.notFound')}</h1>
      </div>
    );
  const toolKeys: Record<string, string> = {
    taboo: 'taboo',
    ius: 'ius',
    timer: 'timer',
    email: 'email',
    builder: 'builder',
    assessment: 'assessment',
    'workshop-mode': 'workshopMode',
  };
  return (
    <div className="page container">
      <div className="eyebrow">
        {w.duration} {t('common.minutes')} · {w.level}
      </div>
      <h1>{localize(w.title, i18n.language)}</h1>
      <p className="lede">{localize(w.description, i18n.language)}</p>
      <div className="split">
        <section className="card">
          <h2>{t('workshops.objectives')}</h2>
          <ul>
            {w.objectives.map((x) => (
              <li key={x.fr}>{localize(x, i18n.language)}</li>
            ))}
          </ul>
        </section>
        <section className="card">
          <h2>{t('workshops.steps')}</h2>
          <ol className="steps">
            {w.steps.map((x) => (
              <li key={x.fr}>{localize(x, i18n.language)}</li>
            ))}
          </ol>
        </section>
      </div>
      <section className="section workshop-resources">
        <h2>{t('workshops.availableResources')}</h2>
        <div className="grid">
          {w.resources.map((resource) => (
            <article className="card resource-card" key={resource.id}>
              {resource.format === 'PPTX' ? (
                <Presentation color="var(--blue)" />
              ) : (
                <FileText color="var(--violet)" />
              )}
              <div className="meta">
                <span className="tag">{resource.format}</span>
                <span className="tag">{resource.fileSize}</span>
                <span className="tag">{t('workshops.presentationReady')}</span>
              </div>
              <h3>{localize(resource.title, i18n.language)}</h3>
              <a className="button primary" href={resource.fileUrl} download>
                <Download size={17} /> {t('workshops.downloadResource')}
              </a>
            </article>
          ))}
        </div>
      </section>
      <section className="card" style={{ marginTop: '1rem' }}>
        <h2>{t('workshops.tools')}</h2>
        <div className="actions">
          {w.tools.map((x) => (
            <Link className="button" to={`/tools/${x}`} key={x}>
              {t(`tools.${toolKeys[x] ?? x}`)}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
