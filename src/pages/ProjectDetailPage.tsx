import { ArrowLeft, Download, ExternalLink } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link, useParams } from 'react-router-dom';
import { projects } from '../data/projects';
import { localize } from '../lib/content';
export function ProjectDetailPage() {
  const { slug } = useParams();
  const { t, i18n } = useTranslation();
  const p = projects.find((x) => x.slug === slug);
  if (!p)
    return (
      <div className="page container">
        <h1>{t('errors.notFound')}</h1>
      </div>
    );
  return (
    <div className="page container">
      <Link className="button" to="/projects">
        <ArrowLeft size={17} />
        {t('common.previous')}
      </Link>
      <div className="eyebrow">
        {p.level} · {p.year}
      </div>
      <h1>{localize(p.title, i18n.language)}</h1>
      <div className="meta">
        <span className="tag">{p.grade}/20</span>
        <span className="tag">{p.fileSize}</span>
        {p.skills.map((x) => (
          <span className="tag" key={x}>
            {x}
          </span>
        ))}
      </div>
      <p className="lede">{localize(p.description, i18n.language)}</p>
      <div className="actions">
        <a className="button primary" href={p.fileUrl} target="_blank" rel="noreferrer">
          {t('common.open')} <ExternalLink size={17} />
        </a>
        <a className="button" href={p.fileUrl} download>
          <Download size={17} />
          {t('common.download')}
        </a>
      </div>
      <p className="notice">
        {t('projects.noPreview')} {t('projects.originalLanguage')}
      </p>
      <div className="split section">
        <section className="card">
          <h2>Objectives</h2>
          <ul>
            {p.objectives.map((x) => (
              <li key={x.fr}>{localize(x, i18n.language)}</li>
            ))}
          </ul>
        </section>
        <section className="card">
          <h2>{t('projects.methodology')}</h2>
          <ul>
            {p.tips.map((x) => (
              <li key={x.fr}>{localize(x, i18n.language)}</li>
            ))}
          </ul>
        </section>
      </div>
      <p className="notice">{t('projects.plagiarism')}</p>
    </div>
  );
}
