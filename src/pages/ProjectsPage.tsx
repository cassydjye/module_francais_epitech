import { Download, ExternalLink, Grid2X2, List } from 'lucide-react';
import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { PageHeader } from '../components/shared/PageHeader';
import { projects } from '../data/projects';
import { average, localize } from '../lib/content';
export function ProjectsPage() {
  const { t, i18n } = useTranslation();
  const [query, setQuery] = useState('');
  const [level, setLevel] = useState('all');
  const [skill, setSkill] = useState('all');
  const [sort, setSort] = useState('name');
  const [list, setList] = useState(false);
  const skills = [...new Set(projects.flatMap((p) => p.skills))];
  const filtered = useMemo(
    () =>
      projects
        .filter(
          (p) =>
            localize(p.title, i18n.language).toLowerCase().includes(query.toLowerCase()) &&
            (level === 'all' || p.level === level) &&
            (skill === 'all' || p.skills.includes(skill)),
        )
        .sort((a, b) =>
          sort === 'year'
            ? b.year - a.year
            : sort === 'grade'
              ? b.grade - a.grade
              : localize(a.title, i18n.language).localeCompare(localize(b.title, i18n.language)),
        ),
    [query, level, skill, sort, i18n.language],
  );
  return (
    <div className="page">
      <PageHeader eyebrow="Com'Lab" title={t('projects.title')} intro={t('projects.intro')} />
      <div className="container">
        <div className="toolbar card">
          <label className="field">
            <span>{t('projects.search')}</span>
            <input value={query} onChange={(e) => setQuery(e.target.value)} type="search" />
          </label>
          <label className="field">
            <span>{t('projects.level')}</span>
            <select value={level} onChange={(e) => setLevel(e.target.value)}>
              <option value="all">{t('projects.allLevels')}</option>
              <option>TEK1</option>
              <option>TEK2</option>
            </select>
          </label>
          <label className="field">
            <span>{t('projects.category')}</span>
            <select value={skill} onChange={(e) => setSkill(e.target.value)}>
              <option value="all">{t('projects.allSkills')}</option>
              {skills.map((x) => (
                <option key={x}>{x}</option>
              ))}
            </select>
          </label>
          <label className="field">
            <span>Sort</span>
            <select value={sort} onChange={(e) => setSort(e.target.value)}>
              <option value="name">A–Z</option>
              <option value="year">{t('projects.year')}</option>
              <option value="grade">{t('projects.grade')}</option>
            </select>
          </label>
          <button
            className="icon-button"
            onClick={() => setList(!list)}
            aria-label={list ? t('projects.cards') : t('projects.list')}
          >
            {list ? <Grid2X2 /> : <List />}
          </button>
        </div>
        <p className="muted">
          {filtered.length} {t('projects.results')}
        </p>
        <div className={list ? '' : 'grid'}>
          {filtered.map((p) => (
            <article className={`card ${list ? 'project-row' : ''}`} key={p.id}>
              <div>
                <div className="meta">
                  <span className="tag">{p.level}</span>
                  <span className="tag">{p.year}</span>
                  <span className="tag">{p.grade}/20</span>
                </div>
                <h3>{localize(p.title, i18n.language)}</h3>
                <p>{localize(p.description, i18n.language)}</p>
              </div>
              <Link className="button" to={`/projects/${p.slug}`}>
                {t('common.open')} <ExternalLink size={16} />
              </Link>
              <a className="button" href={p.fileUrl} download>
                <Download size={16} />
                {p.fileSize}
              </a>
            </article>
          ))}
          {!filtered.length && <p>{t('common.empty')}</p>}
        </div>
        <h2 style={{ marginTop: '3rem' }}>Averages</h2>
        <div className="grid">
          {(['TEK1', 'TEK2'] as const).map((l) => (
            <div className="card stat" key={l}>
              <strong>
                {average(projects.filter((p) => p.level === l).map((p) => p.grade)).toLocaleString(
                  i18n.language,
                  { maximumFractionDigits: 2 },
                )}
                /20
              </strong>
              {l}
            </div>
          ))}
        </div>
        <p className="muted">{t('projects.simpleAverage')}</p>
      </div>
    </div>
  );
}
