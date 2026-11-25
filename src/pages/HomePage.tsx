import { ArrowRight, BookOpen, Mic2, Wrench } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { workshops } from '../data/workshops';
export function HomePage() {
  const { t } = useTranslation();
  const stats = [
    [projects.length, t('home.stats.projects')],
    [workshops.length, t('home.stats.workshops')],
    [new Set(projects.map((p) => p.year)).size, t('home.stats.years')],
    [7, t('home.stats.tools')],
  ];
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="eyebrow">{t('home.eyebrow')}</div>
          <h1>{t('home.title')}</h1>
          <p className="lede">{t('home.intro')}</p>
          <div className="actions">
            <Link className="button primary" to="/workshops">
              {t('home.workshops')} <ArrowRight size={18} />
            </Link>
            <Link className="button" to="/projects">
              {t('home.projects')}
            </Link>
          </div>
          <div className="stats">
            {stats.map(([value, label]) => (
              <div className="card stat" key={String(label)}>
                <strong>{value}</strong>
                {label}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <h2>{t('home.discover')}</h2>
          <div className="grid">
            <Link className="card" to="/projects">
              <BookOpen color="var(--blue)" />
              <h3>{t('nav.projects')}</h3>
              <p>{t('projects.intro')}</p>
            </Link>
            <Link className="card" to="/workshops">
              <Mic2 color="var(--teal)" />
              <h3>{t('nav.workshops')}</h3>
              <p>{t('workshops.intro')}</p>
            </Link>
            <Link className="card" to="/tools">
              <Wrench color="var(--violet)" />
              <h3>{t('nav.tools')}</h3>
              <p>{t('tools.intro')}</p>
            </Link>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <h2>{t('home.skills')}</h2>
          <div className="grid">
            {(t('home.skillList', { returnObjects: true }) as string[]).map((x) => (
              <div className="card" key={x}>
                {x}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
