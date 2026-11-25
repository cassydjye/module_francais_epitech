import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
export function NotFoundPage() {
  const { t } = useTranslation();
  return (
    <div className="page container">
      <h1>404</h1>
      <p>{t('errors.notFound')}</p>
      <Link className="button" to="/">
        {t('errors.back')}
      </Link>
    </div>
  );
}
