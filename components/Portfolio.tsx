import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import type { PortfolioItem } from '../src/types';
import PortfolioCard from './PortfolioCard';
import PortfolioDetailModal from './PortfolioDetailModal';

interface PortfolioProps {
    showHeading?: boolean;
}

const Portfolio: React.FC<PortfolioProps> = ({ showHeading = true }) => {
    const { t } = useTranslation();
    const portfolioItemsData = t('portfolio.items', { returnObjects: true });
    const portfolioItems = Array.isArray(portfolioItemsData) ? portfolioItemsData : [];
    
    const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

    const handleOpenModal = (item: PortfolioItem) => {
      setSelectedItem(item);
      document.body.style.overflow = 'hidden';
    };

    const handleCloseModal = () => {
      setSelectedItem(null);
      document.body.style.overflow = 'auto';
    };

    const title = t('portfolio.title');
    const titleWords = title.split(' ');
    const lastWordsCount = titleWords.length > 3 ? 2 : 1;
    const gradientWords = titleWords.splice(-lastWordsCount).join(' ');
    const mainWords = titleWords.join(' ');

    return (
        <>
            <section id="portfolio" className="py-16 sm:py-20 bg-transparent">
                <div className="container mx-auto px-6">
                    {showHeading && (
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-bold text-brand-text">
                                {mainWords}{' '}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue via-accent-start to-accent-end">
                                {gradientWords}
                                </span>
                            </h2>
                            <p className="text-lg text-brand-text-secondary max-w-2xl mx-auto mt-4">
                                {t('portfolio.subtitle')}
                            </p>
                        </div>
                    )}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {portfolioItems.map((item: PortfolioItem, index: number) => (
                            <PortfolioCard key={index} item={item} onClick={() => handleOpenModal(item)} />
                        ))}
                    </div>
                </div>
            </section>
            <PortfolioDetailModal
                isOpen={!!selectedItem}
                onClose={handleCloseModal}
                item={selectedItem}
            />
        </>
    );
};

export default Portfolio;