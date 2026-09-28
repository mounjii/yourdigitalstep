import React, { useState, useEffect, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import LanguageSwitcher from './LanguageSwitcher';
import ThemeSwitcher from './ThemeSwitcher';
import { ModalContext } from '../App';

const MenuIcon: React.FC<{ className?: string }> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
  </svg>
);

const CloseIcon: React.FC<{ className?: string }> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const Header: React.FC<{ currentPath: string }> = ({ currentPath }) => {
  const { t } = useTranslation();
  const onGetStartedClick = useContext(ModalContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinksData = t('nav.links', { returnObjects: true });
  const navLinks: { href: string, label: string }[] = Array.isArray(navLinksData) ? navLinksData : [];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMenuOpen]);

  const handleMobileLinkClick = () => {
    setIsMenuOpen(false);
  };

  const handleGetStartedMobile = () => {
    onGetStartedClick();
    setIsMenuOpen(false);
  }

  const Logo = () => (
    <Link to="/" className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent-blue via-accent-start to-accent-end">
      YourDigitalStep
    </Link>
  );

  return (
    <>
      <header className={`sticky top-0 z-40 transition-all duration-300 ${isScrolled ? 'bg-brand-primary/95 backdrop-blur-sm shadow-2xl shadow-black/20 py-5' : 'bg-brand-primary/80 backdrop-blur-md py-5'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Logo />
          <nav className="hidden lg:flex items-center space-x-8">
            {Array.isArray(navLinks) && navLinks.map((link) => {
              const isActive = currentPath === link.href;
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  aria-current={isActive ? 'page' : undefined}
                  className={`relative group font-medium transition-all duration-300 hover:scale-105 hover:drop-shadow-glow ${isActive ? 'text-brand-text' : 'text-brand-text-secondary hover:text-brand-text'}`}
                >
                  {link.label}
                  <span className={`absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-accent-start to-accent-end transform transition-transform duration-300 ease-out ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
                </Link>
              )
            })}
          </nav>
          <div className="hidden lg:flex items-center space-x-4">
              <ThemeSwitcher />
              <LanguageSwitcher />
              <button onClick={() => onGetStartedClick()} className="bg-gradient-to-r from-accent-start to-accent-end text-white font-semibold px-8 py-3 rounded-lg hover:opacity-90 transition-all duration-300 hover:drop-shadow-glow">
                {t('nav.getStarted')}
              </button>
          </div>
          <div className="lg:hidden flex items-center space-x-2">
            <ThemeSwitcher />
            <LanguageSwitcher />
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-brand-text focus:outline-none" aria-label="Open menu">
              <MenuIcon className="w-7 h-7" />
            </button>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-accent-start to-accent-end opacity-75 blur-sm" />
      </header>
      
      {/* Mobile Menu */}
      <div className={`lg:hidden fixed inset-0 z-50 transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsMenuOpen(false)}></div>
          
          <div className={`absolute top-0 right-0 w-4/5 max-w-sm h-full bg-brand-primary p-6 z-10 transform transition-transform duration-300 ease-in-out flex flex-col ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
              <div className="absolute inset-0 bg-grid-slate-900/5 dark:bg-grid-white/5 [mask-image:linear-gradient(to_bottom,white_10%,transparent_100%)] pointer-events-none"></div>
              <div className="absolute top-0 left-0 w-64 h-64 bg-accent-start/10 rounded-full blur-3xl opacity-50 -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent-end/10 rounded-full blur-3xl opacity-50 translate-x-1/2 translate-y-1/2 pointer-events-none"></div>
              
              <div className="flex justify-between items-center mb-16 relative flex-shrink-0">
                <Logo />
                <button onClick={() => setIsMenuOpen(false)} className="text-brand-text focus:outline-none" aria-label="Close menu">
                  <CloseIcon className="w-6 h-6" />
                </button>
              </div>

              <div className="flex-grow overflow-y-auto">
                <nav className="flex flex-col space-y-8 items-center text-center">
                  {Array.isArray(navLinks) && navLinks.map((link, index) => (
                    <Link
                      key={link.href} 
                      to={link.href} 
                      onClick={handleMobileLinkClick} 
                      className="text-2xl text-brand-text-secondary hover:text-brand-text hover:scale-105 hover:drop-shadow-glow transition-all duration-300 opacity-0 transform translate-x-4"
                      style={{
                        transitionDelay: `${index * 100}ms`,
                        opacity: isMenuOpen ? 1 : 0,
                        transform: isMenuOpen ? 'translateX(0)' : 'translateX(1rem)',
                      }}
                    >
                      {link.label}
                    </Link>
                  ))}
                   <button 
                      onClick={handleGetStartedMobile} 
                      className="bg-gradient-to-r from-accent-start to-accent-end text-white text-lg font-semibold px-8 py-3 rounded-lg hover:opacity-90 transition-all duration-300 mt-6 inline-block opacity-0 transform translate-x-4 hover:drop-shadow-glow"
                      style={{
                        transitionDelay: `${navLinks.length * 100}ms`,
                        opacity: isMenuOpen ? 1 : 0,
                        transform: isMenuOpen ? 'translateX(0)' : 'translateX(1rem)',
                      }}
                    >
                    {t('nav.getStarted')}
                  </button>
                </nav>
              </div>
          </div>
      </div>
    </>
  );
};

export default Header;
