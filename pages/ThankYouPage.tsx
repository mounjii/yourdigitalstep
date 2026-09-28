import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import SuccessIcon from '../components/icons/SuccessIcon';

const ThankYouPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="flex items-center justify-center min-h-screen bg-brand-primary p-6">
        <div className="bg-brand-secondary border border-white/10 rounded-2xl p-8 sm:p-12 text-center max-w-2xl mx-auto shadow-2xl animate-fade-in-fast">
            <SuccessIcon className="w-16 h-16 mx-auto mb-6 text-green-400" />
            <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-text mb-4">
                {t('thankYouPage.title')}
            </h1>
            <p className="text-lg sm:text-xl text-brand-text-secondary mb-8">
                {t('thankYouPage.subtitle')}
            </p>
            <Link 
                to="/" 
                className="inline-block bg-gradient-to-r from-accent-start to-accent-end text-white font-semibold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity duration-300"
            >
                &larr; {t('thankYouPage.backToHome')}
            </Link>
        </div>
    </div>
  );
};

export default ThankYouPage;