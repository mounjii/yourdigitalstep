import React, { useState, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import AnimatedSection from '../components/AnimatedSection';
import CheckmarkIcon from '../components/icons/CheckmarkIcon';
import { ModalContext } from '../App';

import ProactiveSecurityIcon from '../components/icons/ProactiveSecurityIcon';
import GrowthAllocationIcon from '../components/icons/GrowthAllocationIcon';
import PrioritySupportIcon from '../components/icons/PrioritySupportIcon';


type PackageType = 'website' | 'shopify';

const SpecialOfferPage: React.FC = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [activePackage, setActivePackage] = useState<PackageType>('website');
    const [formVisibleFor, setFormVisibleFor] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const onGetStartedClick = useContext(ModalContext);

    const websiteData = t('specialOfferPage.websitePackages', { returnObjects: true }) as any;
    const shopifyData = t('specialOfferPage.shopifyPackages', { returnObjects: true }) as any;
    const beyondLaunch = t('specialOfferPage.beyondLaunch', { returnObjects: true }) as any;
    const cta = t('specialOfferPage.cta', { returnObjects: true }) as any;
    
    const beyondLaunchIcons = [ProactiveSecurityIcon, GrowthAllocationIcon, PrioritySupportIcon];
    
    const currentData = activePackage === 'website' ? websiteData : shopifyData;
    
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);
        
        const formData = new FormData(e.currentTarget);
        
        try {
            const response = await fetch('/send-email.php', {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            
            const result = await response.json();
            
            if (result.status === 'success') {
                navigate('/thank-you');
            } else {
                throw new Error('Submission failed on the server.');
            }

        } catch (error) {
            console.error('Submission error:', error);
            setError(t('forms.submitError'));
        } finally {
            setIsSubmitting(false);
        }
    };
    
    return (
        <div className="bg-transparent">
            <PageHeader titleKey="specialOfferPage.title" subtitleKey="specialOfferPage.subtitle" />
            
            <AnimatedSection>
                <p className="container mx-auto px-6 max-w-4xl text-center text-lg text-brand-text-secondary -mt-8 mb-20">
                    {t('specialOfferPage.intro')}
                </p>
            </AnimatedSection>
            
            <AnimatedSection>
                 <section className="py-16 sm:py-20 bg-transparent">
                    <div className="container mx-auto px-6">
                        {/* Toggle Switch */}
                        <div className="max-w-md mx-auto mb-16 flex items-center bg-brand-secondary p-1.5 rounded-xl border border-white/10">
                            <button 
                                onClick={() => setActivePackage('website')}
                                className={`w-1/2 py-3 rounded-lg text-center font-semibold transition-all duration-300 ${activePackage === 'website' ? 'bg-gradient-to-r from-accent-start to-accent-end text-white' : 'text-brand-text-secondary hover:text-brand-text'}`}
                            >
                                {t('specialOfferPage.toggle.website')}
                            </button>
                            <button 
                                onClick={() => setActivePackage('shopify')}
                                className={`w-1/2 py-3 rounded-lg text-center font-semibold transition-all duration-300 ${activePackage === 'shopify' ? 'bg-gradient-to-r from-accent-start to-accent-end text-white' : 'text-brand-text-secondary hover:text-brand-text'}`}
                            >
                                {t('specialOfferPage.toggle.shopify')}
                            </button>
                        </div>
                        
                         <div className="text-center mb-12">
                            <h2 className="text-4xl md:text-5xl font-bold text-brand-text">
                                {currentData.title}
                            </h2>
                            <p className="text-lg text-brand-text-secondary max-w-3xl mx-auto mt-4">
                                {currentData.intro}
                            </p>
                        </div>

                        {/* Pricing Cards */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-7xl mx-auto">
                           {currentData.packages.map((pkg: any) => {
                                const [icon, ...nameParts] = pkg.name.split(' ');
                                const nameText = nameParts.join(' ');
                                return (
                                <div key={pkg.name} className={`relative group bg-brand-secondary/95 backdrop-blur-sm rounded-2xl border transition-all duration-300 ${pkg.isMostPopular ? 'border-accent-start/80 drop-shadow-glow lg:scale-105 my-8 lg:my-0' : 'border-white/10 hover:border-accent-start/80 hover:drop-shadow-glow hover:scale-105'}`}>
                                    {pkg.isMostPopular && (
                                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-accent-start to-accent-end text-white text-sm font-bold px-4 py-1 rounded-full">
                                            {t('specialOfferPage.mostPopular')}
                                        </div>
                                    )}
                                    <div className="p-8 flex flex-col h-full relative">
                                        <span className="absolute top-8 left-8 text-3xl" aria-hidden="true">
                                            {icon}
                                        </span>
                                        <h3 className="text-3xl font-bold text-brand-text text-center mb-4">
                                            {nameText}
                                        </h3>
                                        <p className="text-brand-text-secondary text-center mb-8 min-h-[8rem]">{pkg.description}</p>
                                        
                                        <ul className="space-y-4 mb-8 flex-grow">
                                            {pkg.features.map((feature: string, index: number) => (
                                                <li key={index} className="flex items-start gap-3">
                                                    <CheckmarkIcon className="w-6 h-6 text-accent-start flex-shrink-0 mt-0.5" />
                                                    <span className="text-brand-text-secondary">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                        
                                        <div className="flex items-baseline justify-center gap-2 mb-8">
                                            <span className="text-4xl font-extrabold text-brand-text">{pkg.price}</span>
                                            <span className="text-brand-text-secondary">/ {pkg.priceDetails}</span>
                                        </div>

                                        <div className="mt-auto">
                                            {formVisibleFor === pkg.name ? (
                                                <form onSubmit={handleSubmit} className="space-y-4 animate-fade-in-fast">
                                                    <input type="hidden" name="form_type" value="Package Inquiry" />
                                                    <input type="hidden" name="selectedPackage" value={pkg.name} />
                                                    <div>
                                                        <label htmlFor={`name-${pkg.name}`} className="sr-only">{t('specialOfferPage.packageForm.namePlaceholder')}</label>
                                                        <input type="text" name="name" id={`name-${pkg.name}`} placeholder={t('specialOfferPage.packageForm.namePlaceholder')} required className="w-full bg-brand-primary/50 border border-white/10 rounded-lg px-4 py-3 text-brand-text focus:ring-2 focus:ring-accent-start focus:outline-none" />
                                                    </div>
                                                    <div>
                                                        <label htmlFor={`email-${pkg.name}`} className="sr-only">{t('specialOfferPage.packageForm.emailPlaceholder')}</label>
                                                        <input type="email" name="email" id={`email-${pkg.name}`} placeholder={t('specialOfferPage.packageForm.emailPlaceholder')} required className="w-full bg-brand-primary/50 border border-white/10 rounded-lg px-4 py-3 text-brand-text focus:ring-2 focus:ring-accent-start focus:outline-none" />
                                                    </div>
                                                    {error && formVisibleFor === pkg.name && (
                                                      <p className="text-red-400 text-sm text-center">{error}</p>
                                                    )}
                                                    <button
                                                        type="submit"
                                                        disabled={isSubmitting}
                                                        className="w-full font-semibold py-3 rounded-lg transition-all duration-300 bg-gradient-to-r from-green-400 to-accent-blue text-white hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed"
                                                    >
                                                        {isSubmitting ? t('forms.submitting') : t('specialOfferPage.packageForm.submitButton')}
                                                    </button>
                                                </form>
                                            ) : (
                                                <button 
                                                    onClick={() => { setFormVisibleFor(pkg.name); setError(null); }}
                                                    className={`w-full font-semibold py-3 rounded-lg transition-all duration-300 ${pkg.isMostPopular ? 'bg-gradient-to-r from-accent-start to-accent-end text-white hover:opacity-90' : 'bg-white/5 text-brand-text-secondary group-hover:bg-gradient-to-r group-hover:from-accent-start group-hover:to-accent-end group-hover:text-white'}`}
                                                >
                                                    {pkg.cta}
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            )})}
                        </div>
                    </div>
                </section>
            </AnimatedSection>

            <AnimatedSection>
                <section className="py-16 sm:py-20 bg-transparent">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl md:text-5xl font-bold text-brand-text">
                                {beyondLaunch.title}
                            </h2>
                            <p className="text-lg text-brand-text-secondary max-w-3xl mx-auto mt-4">
                                {beyondLaunch.intro}
                            </p>
                        </div>
                        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                           {beyondLaunch.features.map((feature: any, index: number) => {
                                const Icon = beyondLaunchIcons[index];
                                return (
                                    <div key={feature.title} className="group bg-brand-secondary/95 backdrop-blur-sm text-left p-8 rounded-2xl border border-white/10 transition-all duration-300 hover:scale-[1.02] hover:border-accent-start/50 hover:bg-white/5 flex flex-col">
                                        <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-accent-start to-accent-end flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 flex-shrink-0">
                                            <Icon className="w-8 h-8 text-white" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-brand-text mb-4 transition-colors duration-300">{feature.title}</h3>
                                        <ul className="space-y-3 flex-grow">
                                            {feature.points.map((point: string, pointIndex: number) => (
                                                <li key={pointIndex} className="flex items-start gap-3">
                                                    <CheckmarkIcon className="w-5 h-5 text-accent-start flex-shrink-0 mt-1" />
                                                    <span className="text-brand-text-secondary">{point}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )
                           })}
                        </div>
                    </div>
                </section>
            </AnimatedSection>

            <AnimatedSection>
                <section className="bg-transparent py-16 sm:py-20">
                  <div className="container mx-auto px-6 text-center">
                    <div className="max-w-3xl mx-auto bg-brand-secondary/95 backdrop-blur-sm p-10 md:p-16 rounded-2xl shadow-2xl relative overflow-hidden border border-white/10">
                      <div className="absolute -top-10 -left-10 w-32 h-32 bg-accent-start/5 rounded-full blur-xl"></div>
                      <div className="absolute -bottom-16 -right-5 w-48 h-48 bg-accent-end/5 rounded-full blur-xl"></div>
                      <h2 className="text-3xl md:text-4xl font-bold text-brand-text mb-8 relative z-10">
                        {cta.title}
                      </h2>
                      <div className="relative z-10">
                        <button
                          onClick={() => onGetStartedClick()}
                          className="bg-gradient-to-r from-accent-start to-accent-end text-white font-bold px-8 py-4 rounded-lg hover:opacity-90 transition-opacity duration-300 text-lg"
                        >
                          {cta.button}
                        </button>
                      </div>
                    </div>
                  </div>
                </section>
            </AnimatedSection>
        </div>
    );
};

export default SpecialOfferPage;