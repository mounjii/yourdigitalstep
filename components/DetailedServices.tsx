import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import AnimatedSection from './AnimatedSection';
import DetailedServiceCard from './DetailedServiceCard';
import DetailedServiceItemModal from './DetailedServiceItemModal';

import BrandAuditIcon from './icons/BrandAuditIcon';
import MarketResearchIcon from './icons/MarketResearchIcon';
import UXStrategyIcon from './icons/UXStrategyIcon';
import LogoDesignIcon from './icons/LogoDesignIcon';
import VisualIdentityIcon from './icons/VisualIdentityIcon';
import BrandGuidelinesIcon from './icons/BrandGuidelinesIcon';
import CustomWebAppIcon from './icons/CustomWebAppIcon';
import PerformanceIcon from './icons/PerformanceIcon';
import CMSIcon from './icons/CMSIcon';
import SEOIcon from './icons/SEOIcon';
import SocialMediaIcon from './icons/SocialMediaIcon';
import PPCIcon from './icons/PPCIcon';

const iconMap: { [key: string]: React.FC<{ className?: string }> } = {
  brandAudits: BrandAuditIcon,
  marketResearch: MarketResearchIcon,
  uxStrategy: UXStrategyIcon,
  logoDesign: LogoDesignIcon,
  visualIdentity: VisualIdentityIcon,
  brandGuidelines: BrandGuidelinesIcon,
  customWebApps: CustomWebAppIcon,
  performanceOptimization: PerformanceIcon,
  cmsDevelopment: CMSIcon,
  seo: SEOIcon,
  socialMedia: SocialMediaIcon,
  ppc: PPCIcon,
};

const categoryStyles = [
  { iconColor: 'text-purple-400' },
  { iconColor: 'text-accent-end' },
  { iconColor: 'text-green-400' },
  { iconColor: 'text-orange-400' },
];

const DetailedServices: React.FC = () => {
    const { t } = useTranslation();
    const serviceCategoriesData = t('detailedServices.categories', { returnObjects: true });
    const serviceCategories = Array.isArray(serviceCategoriesData) ? serviceCategoriesData : [];

    const [selectedService, setSelectedService] = useState<any | null>(null);

    const handleOpenModal = (item: any) => {
        setSelectedService(item);
        document.body.style.overflow = 'hidden';
    };

    const handleCloseModal = () => {
        setSelectedService(null);
        document.body.style.overflow = 'auto';
    };

    return (
        <>
            <section id="detailed-services" className="py-16 sm:py-20 bg-transparent">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {serviceCategories.map((category, catIndex) => (
                            <AnimatedSection key={category.title}>
                                <div className="bg-brand-secondary/95 backdrop-blur-sm p-8 rounded-xl border border-white/10 h-full transition-all duration-300 ease-in-out hover:scale-[1.02] hover:border-accent-start/50">
                                    <h2 className="text-3xl font-bold text-brand-text mb-8">{category.title}</h2>
                                    <div className="divide-y divide-white/10">
                                        {Array.isArray(category.items) && category.items.map((item: any) => {
                                            const style = categoryStyles[catIndex % categoryStyles.length];
                                            return (
                                                <DetailedServiceCard
                                                    key={item.id}
                                                    item={item}
                                                    Icon={iconMap[item.id]}
                                                    iconColor={style.iconColor}
                                                    onClick={() => handleOpenModal({ ...item, icon: iconMap[item.id], iconColor: style.iconColor })}
                                                />
                                            );
                                        })}
                                    </div>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>
            <DetailedServiceItemModal
                isOpen={!!selectedService}
                onClose={handleCloseModal}
                service={selectedService}
            />
        </>
    );
};

export default DetailedServices;