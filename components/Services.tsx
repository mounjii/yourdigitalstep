import React, { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import type { Service, PortfolioItem, Testimonial } from '../src/types';
import StrategyIcon from './icons/StrategyIcon';
import DesignIcon from './icons/DesignIcon';
import CodeIcon from './icons/CodeIcon';
import PortfolioCard from './PortfolioCard';
import TestimonialCard from './TestimonialCard';
import PortfolioDetailModal from './PortfolioDetailModal';
import ServiceDetailModal from './ServiceDetailModal';

const ArrowRightIcon: React.FC<{ className?: string }> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
  </svg>
);


interface ServiceCardProps {
  service: Service;
  onClick: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, onClick }) => {
    const Icon = service.icon;
    return (
        <button 
            onClick={onClick} 
            className="group h-full w-full text-left bg-brand-secondary/95 backdrop-blur-sm p-8 rounded-xl border-2 border-white/10 hover:scale-105 hover:bg-white/5 hover:border-accent-start transition-all duration-300 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-primary focus-visible:ring-accent-start"
            aria-label={`View details for ${service.title}`}
        >
            <div className="bg-gradient-to-br from-accent-start to-accent-end rounded-lg w-16 h-16 flex items-center justify-center mb-6">
                <Icon className="w-8 h-8 text-white transition-transform duration-300 group-hover:scale-110" />
            </div>
            <h3 className="text-2xl font-bold text-brand-text group-hover:text-brand-accent dark:group-hover:text-accent-end transition-all duration-300 mb-2">{service.title}</h3>
            <p className="text-accent-start mb-4 transition-transform duration-300 group-hover:translate-x-1">&rarr;</p>
            <p className="text-brand-text-secondary leading-relaxed">{service.description}</p>
        </button>
    );
};

interface ServicesProps {
  showHeading?: boolean;
}

const Services: React.FC<ServicesProps> = ({ showHeading = true }) => {
  const { t } = useTranslation();
  const [activeService, setActiveService] = useState<Service | null>(null);
  const [selectedPortfolioItem, setSelectedPortfolioItem] = useState<PortfolioItem | null>(null);

  const servicesContent = t('services.items', { returnObjects: true });
  const portfolioItemsData = t('portfolio.items', { returnObjects: true });
  const allPortfolioItems: PortfolioItem[] = Array.isArray(portfolioItemsData) ? portfolioItemsData : [];
  const testimonialsData = t('testimonials.items', { returnObjects: true });
  const allTestimonials: Testimonial[] = Array.isArray(testimonialsData) ? testimonialsData : [];

  const serviceIcons = [StrategyIcon, DesignIcon, CodeIcon];
  
  const services: Service[] = Array.isArray(servicesContent) ? servicesContent.map((item: any, index: number) => ({
    ...item,
    icon: serviceIcons[index],
  })) : [];

  const relatedPortfolioItem = useMemo(() => {
      if (!activeService) return null;
      return allPortfolioItems.find(p => p.serviceId === activeService.serviceId) || null;
  }, [activeService, allPortfolioItems]);

  const relatedTestimonial = useMemo(() => {
    if (!activeService) return null;
    return allTestimonials.find(t => t.serviceId === activeService.serviceId) || null;
  }, [activeService, allTestimonials]);

  const handleServiceClick = (service: Service) => {
    setActiveService(service);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseServiceModal = (isChaining: boolean = false) => {
    setActiveService(null);
    if (!isChaining) {
      document.body.style.overflow = 'auto';
    }
  };

  const handleOpenPortfolioModal = (item: PortfolioItem) => {
    setSelectedPortfolioItem(item);
    document.body.style.overflow = 'hidden';
  };

  const handleClosePortfolioModal = () => {
    setSelectedPortfolioItem(null);
    document.body.style.overflow = 'auto';
  };

  const handlePortfolioClickFromServiceModal = (item: PortfolioItem) => {
    handleCloseServiceModal(true); // Close service modal without restoring scroll
    setTimeout(() => {
      handleOpenPortfolioModal(item);
    }, 300); // Wait for the close animation to finish
  };

  const title = t('services.title');
  const titleWords = title.split(' ');
  const lastWordsCount = titleWords.length > 3 ? 2 : 1;
  const gradientWords = titleWords.splice(-lastWordsCount).join(' ');
  const mainWords = titleWords.join(' ');

  return (
    <>
      <section id="services" className="py-16 sm:py-20 bg-transparent">
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
                {t('services.subtitle')}
              </p>
            </div>
          )}
          <div className="flex flex-col lg:flex-row items-stretch justify-center gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <React.Fragment key={service.serviceId}>
                <div className="flex-1 min-w-[300px]">
                  <ServiceCard
                    service={service}
                    onClick={() => handleServiceClick(service)}
                  />
                </div>
                {index < services.length - 1 && (
                  <div className="hidden lg:flex items-center justify-center self-center h-full text-brand-text-secondary/30 -mx-4">
                    <ArrowRightIcon className="w-10 h-10" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      <ServiceDetailModal
          isOpen={!!activeService}
          onClose={() => handleCloseServiceModal(false)}
          service={activeService}
          relatedPortfolioItem={relatedPortfolioItem}
          relatedTestimonial={relatedTestimonial}
          onPortfolioClick={handlePortfolioClickFromServiceModal}
      />
      <PortfolioDetailModal
          isOpen={!!selectedPortfolioItem}
          onClose={handleClosePortfolioModal}
          item={selectedPortfolioItem}
      />
    </>
  );
};

export default Services;