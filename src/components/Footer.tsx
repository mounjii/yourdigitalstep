import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import ThemeSwitcher from './ThemeSwitcher';

const TwitterIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="currentColor" {...props}>
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="currentColor" {...props}>
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
);


const Footer: React.FC = () => {
  const { t } = useTranslation();
  const navLinksData = t('nav.links', { returnObjects: true });
  const navLinks = Array.isArray(navLinksData) ? navLinksData : [];

  return (
    <footer className="relative z-30 bg-brand-secondary/30 backdrop-blur-lg border-t border-white/10">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <Link to="/" className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent-blue via-accent-start to-accent-end">
              YourDigitalStep
            </Link>
            <p className="mt-4 text-brand-text-secondary max-w-xs">
              {t('footer.tagline')}
            </p>
            <a href={`mailto:${t('footer.email')}`} className="mt-4 text-accent-start font-semibold inline-block hover:underline">{t('footer.email')}</a>
          </div>
          <div className="grid grid-cols-2 md:col-span-2 gap-8">
             <div>
              <h4 className="font-bold text-brand-text tracking-wider">{t('footer.quickLinks')}</h4>
              <ul className="mt-4 space-y-3">
                {Array.isArray(navLinks) && navLinks.map((link: { href: string, label: string }) => (
                  <li key={link.href}><Link to={link.href} className="text-brand-text-secondary hover:text-accent-start transition-colors">{link.label}</Link></li>
                ))}
              </ul>
            </div>
             <div>
              <h4 className="font-bold text-brand-text tracking-wider">{t('footer.legal')}</h4>
              <ul className="mt-4 space-y-3">
                <li><Link to="/privacy" className="text-brand-text-secondary hover:text-accent-start transition-colors">{t('footer.privacy')}</Link></li>
                <li><Link to="/terms" className="text-brand-text-secondary hover:text-accent-start transition-colors">{t('footer.terms')}</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-brand-text-secondary text-sm">{t('footer.copyright', { year: new Date().getFullYear() })}</p>
            <div className="flex items-center space-x-6 mt-4 sm:mt-0">
                <ThemeSwitcher />
                <div className="flex space-x-4">
                    <a href="#" onClick={(e) => e.preventDefault()} className="text-brand-text-secondary hover:text-accent-start transition-colors"><TwitterIcon /></a>
                    <a href="#" onClick={(e) => e.preventDefault()} className="text-brand-text-secondary hover:text-accent-start transition-colors"><LinkedinIcon /></a>
                </div>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;