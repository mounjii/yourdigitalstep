import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { ModalContext } from '../src/App';

const Contact: React.FC = () => {
  const { t } = useTranslation();
  const onLetsTalkClick = useContext(ModalContext);

  const title = t('contact.title');
  const titleWords = title.split(' ');
  const lastWordsCount = titleWords.length > 3 ? 2 : 1;
  const gradientWords = titleWords.splice(-lastWordsCount).join(' ');
  const mainWords = titleWords.join(' ');

  return (
    <section id="contact" className="bg-transparent py-16 sm:py-20">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-3xl mx-auto bg-brand-secondary/95 backdrop-blur-sm p-10 md:p-16 rounded-2xl shadow-2xl relative overflow-hidden border border-white/10 transition-all duration-300 ease-in-out hover:scale-[1.02] hover:border-accent-start/50 hover:drop-shadow-glow">
          <div className="absolute -top-10 -left-10 w-32 h-32 bg-accent-start/5 rounded-full blur-xl"></div>
          <div className="absolute -bottom-16 -right-5 w-48 h-48 bg-accent-end/5 rounded-full blur-xl"></div>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-text mb-4 relative z-10">
            {mainWords}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue via-accent-start to-accent-end">
              {gradientWords}
            </span>
          </h2>
          <p className="text-lg text-brand-text-secondary mb-8 relative z-10">
            {t('contact.subtitle')}
          </p>
          
          <div className="relative z-10">
            <button
              onClick={() => onLetsTalkClick()}
              className="bg-gradient-to-r from-accent-start to-accent-end text-white font-bold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity duration-300"
            >
              {t('contact.cta')}
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;