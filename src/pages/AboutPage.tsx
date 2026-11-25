import { GitFork, ShieldCheck } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { PageHeader } from '../components/shared/PageHeader';
export function AboutPage() {
  const { t } = useTranslation();
  return (
    <div className="page">
      <PageHeader eyebrow="Com'Lab" title={t('about.title')} intro={t('about.body')} />
      <div className="container split">
        <div className="card">
          <ShieldCheck color="var(--teal)" />
          <h2>Privacy</h2>
          <p>{t('about.privacy')}</p>
        </div>
        <div className="card">
          <h2>Important</h2>
          <p>{t('about.warning')}</p>
          <a
            className="button"
            href="https://github.com/cassydjye/module_francais_epitech"
            target="_blank"
            rel="noreferrer"
          >
            <GitFork />
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
