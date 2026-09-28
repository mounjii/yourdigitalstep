import React, { useContext } from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { ModalContext } from '../App';
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
    <section id="home" className="relative bg-transparent py-24 md:py-28 lg:py-32 min-h-screen flex flex-col justify-center overflow-hidden">
       <div className="absolute top-0 left-0 w-96 h-96 bg-accent-start/10 rounded-full blur-3xl opacity-50 -translate-x-1/2 -translate-y-1/2"></div>
       <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-end/10 rounded-full blur-3xl opacity-50 translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-brand-text mb-8 md:mb-16 leading-tight">
          <Trans i18nKey="hero.title">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue via-accent-start to-accent-end" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue via-accent-start to-accent-end" />
          </Trans>
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-brand-text-secondary mb-10">
          {t('hero.subtitle')}
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <button 
            onClick={() => onGetStartedClick()} 
            className="group bg-gradient-to-r from-accent-start to-accent-end text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 w-full sm:w-auto flex items-center justify-center gap-2 hover:-translate-y-0.5 hover:drop-shadow-glow-bright"
          >
            {t('hero.getStarted')}
            <span className="font-light transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
          </button>
          <button 
            onClick={(e) => handleLinkClick(e, '#services')}
            className="group text-brand-text-secondary hover:text-brand-text font-semibold transition-all duration-300 w-full sm:w-auto flex items-center justify-center gap-2 hover:-translate-y-0.5"
          >
            <ArrowRightCircleIcon className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-1" />
            <span className="relative">
              {t('hero.learnMore')}
              <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-accent-start to-accent-end transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
            </span>
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