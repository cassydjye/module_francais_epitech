import { ClipboardCheck, Columns3, Mail, Mic2, Presentation, Timer, Users } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { PageHeader } from '../components/shared/PageHeader';
export const toolEntries = [
  ['taboo', 'taboo', Mic2],
  ['ius', 'ius', Columns3],
  ['timer', 'timer', Timer],
  ['email', 'email', Mail],
  ['builder', 'builder', Presentation],
  ['assessment', 'assessment', ClipboardCheck],
  ['workshop-mode', 'workshopMode', Users],
] as const;
export function ToolsPage() {
  const { t } = useTranslation();
  return (
    <div className="page">
      <PageHeader eyebrow="Com'Lab" title={t('tools.title')} intro={t('tools.intro')} />
      <div className="container grid">
        {toolEntries.map(([slug, key, Icon]) => (
          <Link className="card" to={`/tools/${slug}`} key={slug}>
            <Icon color="var(--blue)" />
            <h3>{t(`tools.${key}`)}</h3>
            <p>{t('common.localNotice')}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
