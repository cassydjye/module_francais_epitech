import { useTranslation } from 'react-i18next';
import { PageHeader } from '../components/shared/PageHeader';
export function AboutPage() {
  const { t } = useTranslation();
  return (
    <div className="page">
      <PageHeader eyebrow="Com'Lab" title={t('about.title')} intro={t('about.body')} />
      <div className="container about-copy">
        <p>{t('about.privacy')}</p>
        <p className="notice">{t('about.warning')}</p>
      </div>
    </div>
  );
}
