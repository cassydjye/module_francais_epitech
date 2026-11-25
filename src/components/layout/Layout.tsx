import { GitFork, Globe, Menu, Moon, Sun, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink, Outlet } from 'react-router-dom';
const repo = 'https://github.com/cassydjye/module_francais_epitech';
export function Layout() {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const [light, setLight] = useState(() => localStorage.getItem('comlab-theme') !== 'dark');
  useEffect(() => {
    document.body.classList.toggle('light', light);
    localStorage.setItem('comlab-theme', light ? 'light' : 'dark');
  }, [light]);
  const nav: [string, string][] = [
    ['/', t('nav.home')],
    ['/projects', t('nav.projects')],
    ['/workshops', t('nav.workshops')],
    ['/tools', t('nav.tools')],
    ['/about', t('nav.about')],
  ];
  return (
    <>
      <header className="header">
        <nav className={`nav container ${open ? 'open' : ''}`} aria-label="Main navigation">
          <NavLink className="brand" to="/">
            <img src={`${import.meta.env.BASE_URL}favicon.svg`} alt="" />
            Com'Lab
          </NavLink>
          <div className="navlinks">
            {nav.map(([to, label]) => (
              <NavLink key={to} to={to} onClick={() => setOpen(false)}>
                {label}
              </NavLink>
            ))}
          </div>
          <div className="nav-actions">
            <a
              className="icon-button"
              href={repo}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <GitFork size={19} />
            </a>
            <button
              className="icon-button"
              onClick={() => void i18n.changeLanguage(i18n.language === 'fr' ? 'en' : 'fr')}
              aria-label={t('nav.language')}
            >
              <Globe size={19} />
              <span>{i18n.language.toUpperCase()}</span>
            </button>
            <button
              className="icon-button"
              onClick={() => setLight(!light)}
              aria-label={t('nav.theme')}
            >
              {light ? <Moon size={19} /> : <Sun size={19} />}
            </button>
            <button
              className="icon-button mobile-menu"
              onClick={() => setOpen(!open)}
              aria-label={t('nav.menu')}
              aria-expanded={open}
            >
              {open ? <X /> : <Menu />}
            </button>
          </div>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="footer">
        <div className="container">
          <span>{t('footer')}</span>
        </div>
      </footer>
    </>
  );
}
