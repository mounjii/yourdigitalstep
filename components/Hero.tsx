import React, { useContext } from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { ModalContext } from '../src/App';
import MouseScrollIcon from './icons/MouseScrollIcon';

const ArrowRightCircleIcon: React.FC<{ className?: string }> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const Hero: React.FC = () => {
  const { t } = useTranslation();
  const onGetStartedClick = useContext(ModalContext);

  const handleLinkClick = (e: React.MouseEvent<HTMLElement>, targetHref: string | null) => {
    if (!targetHref || !targetHref.startsWith('#')) return;
  
    e.preventDefault();
    if (targetHref === '#') return;
  
    const targetId = targetHref.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative bg-transparent pt-16 pb-24 md:pt-20 md:pb-28 min-h-[90vh] flex flex-col justify-center overflow-hidden">
       <div className="absolute top-0 left-0 w-96 h-96 bg-accent-start/10 rounded-full blur-3xl opacity-50 -translate-x-1/2 -translate-y-1/2"></div>
       <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-end/10 rounded-full blur-3xl opacity-50 translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <p className="inline-flex items-center gap-2 mb-8 rounded-full border border-white/15 bg-brand-secondary/60 px-4 py-1.5 text-xs sm:text-sm font-semibold tracking-wide text-brand-text-secondary backdrop-blur-md">
          <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-accent-start to-accent-end" />
          {t('hero.eyebrow')}
        </p>
        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-extrabold text-brand-text mb-6 md:mb-8 leading-[1.05] tracking-tight max-w-5xl mx-auto">
          <Trans i18nKey="hero.title">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue via-accent-start to-accent-end" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue via-accent-start to-accent-end" />
          </Trans>
        </h1>
        <p className="max-w-2xl mx-auto text-base md:text-xl text-brand-text-secondary mb-10 leading-relaxed">
          {t('hero.subtitle')}
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <button 
            onClick={() => onGetStartedClick()} 
            className="btn-primary group w-full sm:w-auto flex items-center justify-center gap-2"
          >
            {t('hero.getStarted')}
            <span className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
          </button>
          <button 
            onClick={(e) => handleLinkClick(e, '#services')}
            className="btn-secondary group w-full sm:w-auto flex items-center justify-center gap-2 text-brand-text"
          >
            <ArrowRightCircleIcon className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            {t('hero.learnMore')}
          </button>
        </div>
      </div>
      <a href="#stats" onClick={(e) => handleLinkClick(e, e.currentTarget.getAttribute('href'))} className="group absolute bottom-10 left-1/2 -translate-x-1/2 z-10 transition-transform duration-300 ease-in-out hover:scale-110">
        <MouseScrollIcon />
      </a>
    </section>
  );
};

export default Hero;