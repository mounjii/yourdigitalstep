import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import PageHeader from '../components/PageHeader';
import Contact from '../components/Contact';
import AnimatedSection from '../components/AnimatedSection';
import PortfolioCard from '../components/PortfolioCard';
import PortfolioDetailModal from '../components/PortfolioDetailModal';
import type { PortfolioItem } from '../types';

const PortfolioPage: React.FC = () => {
  const { t } = useTranslation();
  const portfolioItemsData = t('portfolio.items', { returnObjects: true });
  const portfolioItems: PortfolioItem[] = Array.isArray(portfolioItemsData) ? portfolioItemsData : [];

  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const handleOpenModal = (item: PortfolioItem) => {
    setSelectedItem(item);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <PageHeader titleKey="portfolio.title" subtitleKey="portfolio.subtitle" />
      <AnimatedSection>
        <section id="portfolio-list" className="py-16 sm:py-20 bg-transparent">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {portfolioItems.map((item, index) => (
                        <PortfolioCard 
                            key={index} 
                            item={item} 
                            onClick={() => handleOpenModal(item)} 
                        />
                    ))}
                </div>
            </div>
        </section>
      </AnimatedSection>
      <AnimatedSection>
        <Contact />
      </AnimatedSection>
      <PortfolioDetailModal
          isOpen={!!selectedItem}
          onClose={handleCloseModal}
          item={selectedItem}
      />
    </>
  );
};

export default PortfolioPage;