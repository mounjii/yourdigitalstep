import React from 'react';
import { useTranslation } from 'react-i18next';

interface PageHeaderProps {
  titleKey: string;
  subtitleKey: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ titleKey, subtitleKey }) => {
  const { t } = useTranslation();
  const title = t(titleKey);
  const titleWords = title.split(' ');
  const lastWordsCount = titleWords.length > 3 ? 2 : 1;
  const gradientWords = titleWords.splice(-lastWordsCount).join(' ');
  const mainWords = titleWords.join(' ');

  return (
    <header className="relative bg-transparent pt-28 sm:pt-32 pb-16">
      <div className="absolute inset-0 bg-grid-slate-900/5 dark:bg-grid-white/5 [mask-image:linear-gradient(to_bottom,white_5%,transparent_100%)]"></div>
      <div className="absolute top-0 left-0 w-64 h-64 bg-accent-start/10 rounded-full blur-3xl opacity-50 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent-end/10 rounded-full blur-3xl opacity-50 translate-x-1/2 translate-y-1/2"></div>
      <div className="container mx-auto px-6 text-center relative z-10">
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-brand-text mb-4 leading-tight tracking-tight">
          {mainWords}{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue via-accent-start to-accent-end">
            {gradientWords}
          </span>
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-brand-text-secondary">
          {t(subtitleKey)}
        </p>
      </div>
    </header>
  );
};
export default PageHeader;