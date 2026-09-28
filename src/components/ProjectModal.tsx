import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { useTranslation, Trans } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import type { FormData } from '../types';
import { useFocusTrap } from '../hooks/useFocusTrap';

import IndividualIcon from './icons/IndividualIcon';
import EnterpriseIcon from './icons/EnterpriseIcon';
import EcommerceIcon from './icons/EcommerceIcon';
import OtherIcon from './icons/OtherIcon';

const CloseIcon: React.FC<{ className?: string }> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialData?: Partial<FormData> | null;
}

const initialFormData: FormData = {
  businessType: '',
  services: [],
  addons: [],
  selectedPackage: '',
  industry: '',
  projectVision: '',
  name: '',
  email: '',
  phoneNumber: '',
};

const ProjectModal: React.FC<ProjectModalProps> = ({ isOpen, onClose, initialData }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const modalRef = useRef<HTMLDivElement>(null);
  useFocusTrap(modalRef, isOpen);
  
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const totalSteps = 5;

  const businessTypes = [
    { id: 'individual', label: t('projectModal.step1.options.individual'), icon: IndividualIcon },
    { id: 'business', label: t('projectModal.step1.options.business'), icon: EnterpriseIcon },
    { id: 'ecommerce', label: t('projectModal.step1.options.ecommerce'), icon: EcommerceIcon },
    { id: 'other', label: t('projectModal.step1.options.other'), icon: OtherIcon },
  ];

  const services = t('projectModal.step2.options', { returnObjects: true }) as string[];
  const addons = t('projectModal.step2_addons.options', { returnObjects: true }) as string[];
  const industries = t('projectModal.step3.options', { returnObjects: true }) as string[];

  const hasPackage = formData.selectedPackage && formData.selectedPackage.length > 0;

  useEffect(() => {
      if (isOpen) {
          let dataToLoad: FormData;
          if (initialData) {
              dataToLoad = { ...initialFormData, ...initialData };
          } else {
              try {
                  const savedData = sessionStorage.getItem('projectModalFormData');
                  dataToLoad = savedData ? JSON.parse(savedData) : initialFormData;
              } catch {
                  dataToLoad = initialFormData;
              }
          }
          setFormData(dataToLoad);
          setStep(1); // Always start at step 1 when opening
          setError(null);
          setIsSubmitting(false);
      }
  }, [isOpen, initialData]);

  useEffect(() => {
    if (isOpen) {
      try {
        sessionStorage.setItem('projectModalFormData', JSON.stringify(formData));
      } catch (error) {
        console.error("Could not save form state to session storage:", error);
      }
    }
  }, [formData, isOpen]);

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => event.key === 'Escape' && onClose();
    if (isOpen) {
      window.addEventListener('keydown', handleEsc);
    }
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isOpen, onClose]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleUpdate = (field: keyof FormData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleServiceToggle = (service: string, type: 'services' | 'addons') => {
    const currentSelection = formData[type];
    const newSelection = currentSelection.includes(service)
      ? currentSelection.filter(s => s !== service)
      : [...currentSelection, service];
    handleUpdate(type, newSelection);
  };
  
  const handleNext = () => setStep(s => Math.min(s + 1, totalSteps));
  const handleBack = () => setStep(s => Math.max(s - 1, 1));

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isStepValid()) return;

    setIsSubmitting(true);
    setError(null);

    const submissionData = new FormData(e.currentTarget);
    
    try {
        const response = await fetch('/send-email.php', {
            method: 'POST',
            body: submissionData,
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        
        const result = await response.json();
        
        if (result.status === 'success') {
            sessionStorage.removeItem('projectModalFormData');
            onClose();
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

  const isStepValid = () => {
    switch(step) {
      case 1: return !!formData.businessType;
      case 2: return hasPackage ? true : formData.services.length > 0; // Add-ons are optional
      case 3: return !!formData.industry;
      case 4: return formData.projectVision.trim().length > 10;
      case 5: return !!formData.name.trim() && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);
      default: return false;
    }
  };
  
  const getStep4Content = () => {
    const selectedPackage = formData.selectedPackage || '';
    const businessType = formData.businessType;
    if (selectedPackage.includes(t('specialOfferPage.websitePackages.packages.0.name').substring(2).trim())) {
        return {
            title: t('projectModal.step4_starter_website.title'),
            placeholder: t('projectModal.step4_starter_website.placeholder'),
        };
    }
    if (businessType === t('projectModal.step1.options.ecommerce') && selectedPackage.includes(t('specialOfferPage.shopifyPackages.packages.2.name').substring(2).trim())) {
        return {
            title: t('projectModal.step4_premium_shopify.title'),
            placeholder: t('projectModal.step4_premium_shopify.placeholder'),
        };
    }
    return {
        title: t('projectModal.step4.title'),
        placeholder: t('projectModal.step4.placeholder'),
    };
  };

  const modalRoot = document.getElementById('modal-root');
  if (!isOpen || !modalRoot) return null;

  const renderContent = () => {
    const { title: step4Title, placeholder: step4Placeholder } = getStep4Content();
    const title = t('projectModal.title');
    const titleWords = title.split(' ');
    const lastWordsCount = titleWords.length > 3 ? 2 : 1;
    const gradientWords = titleWords.splice(-lastWordsCount).join(' ');
    const mainWords = titleWords.join(' ');

    return (
      <form id="project-modal-form" onSubmit={handleSubmit} className="flex flex-col flex-grow">
        <input type="hidden" name="form_type" value="Quote Request" />
        <input type="hidden" name="selectedPackage" value={formData.selectedPackage} />
        <input type="hidden" name="businessType" value={formData.businessType} />
        <input type="hidden" name="services" value={formData.services.join(', ')} />
        <input type="hidden" name="addons" value={formData.addons.join(', ')} />
        <input type="hidden" name="industry" value={formData.industry} />
        <input type="hidden" name="projectVision" value={formData.projectVision} />

        <div className="text-center mb-6">
          <h2 className="text-4xl font-bold text-brand-text">
            {mainWords}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue via-accent-start to-accent-end">
              {gradientWords}
            </span>
          </h2>
          <p className="text-brand-text-secondary mt-2">{t('projectModal.subtitle')}</p>
        </div>
        
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2 text-sm">
            <span className="text-brand-text-secondary">{t('projectModal.stepProgress', { current: step, total: totalSteps })}</span>
            <span className="font-semibold text-brand-text">{Math.round((step / totalSteps) * 100)}%</span>
          </div>
          <div className="w-full bg-brand-primary rounded-full h-2">
            <div className="bg-gradient-to-r from-accent-start to-accent-end h-2 rounded-full transition-all duration-300" style={{ width: `${(step / totalSteps) * 100}%` }}></div>
          </div>
        </div>
        
        <div className="flex-grow">
          {step === 1 && (
            <div className="animate-fade-in">
              <h3 className="font-bold text-xl text-transparent bg-clip-text bg-gradient-to-r from-accent-blue via-accent-start to-accent-end mb-4">{t('projectModal.step1.title')}</h3>
              <div className="grid grid-cols-2 gap-4">
                {businessTypes.map(({ id, label, icon: Icon }) => (
                  <button type="button" key={id} onClick={() => handleUpdate('businessType', label)} className={`p-4 rounded-lg border-2 text-left transition-all duration-200 ${formData.businessType === label ? 'bg-accent-start/10 border-accent-start' : 'bg-white/5 border-white/10 hover:border-white/30'}`}>
                    <Icon className="w-6 h-6 mb-2 text-brand-text" />
                    <span className="font-semibold text-brand-text">{label}</span>
                  </button>
                ))}
              </div>
            </div>
          )}
          {step === 2 && (
            <div className="animate-fade-in">
                {hasPackage ? (
                    <>
                        <h3 className="font-bold text-xl text-transparent bg-clip-text bg-gradient-to-r from-accent-blue via-accent-start to-accent-end mb-4">{t('projectModal.step2_addons.title')}</h3>
                        <div className="space-y-3">
                            {addons.map((addon) => (
                                <label key={addon} className="flex items-center p-4 rounded-lg bg-white/5 border-2 border-transparent has-[:checked]:border-accent-start has-[:checked]:bg-accent-start/10 cursor-pointer transition-all duration-200">
                                    <input type="checkbox" checked={formData.addons.includes(addon)} onChange={() => handleServiceToggle(addon, 'addons')} className="sr-only peer" />
                                    <div className="w-5 h-5 rounded-sm border-2 border-brand-text-secondary/40 bg-brand-primary flex-shrink-0 flex items-center justify-center peer-checked:bg-accent-start peer-checked:border-accent-start peer-focus:ring-2 peer-focus:ring-accent-start peer-focus:ring-offset-2 peer-focus:ring-offset-brand-secondary transition-colors duration-200">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-white opacity-0 peer-checked:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <span className="ml-3 font-medium text-brand-text">{addon}</span>
                                </label>
                            ))}
                        </div>
                    </>
                ) : (
                    <>
                        <h3 className="font-bold text-xl text-transparent bg-clip-text bg-gradient-to-r from-accent-blue via-accent-start to-accent-end mb-4">{t('projectModal.step2.title')}</h3>
                        <div className="space-y-3">
                            {services.map((service) => (
                                <label key={service} className="flex items-center p-4 rounded-lg bg-white/5 border-2 border-transparent has-[:checked]:border-accent-start has-[:checked]:bg-accent-start/10 cursor-pointer transition-all duration-200">
                                    <input type="checkbox" checked={formData.services.includes(service)} onChange={() => handleServiceToggle(service, 'services')} className="sr-only peer" />
                                    <div className="w-5 h-5 rounded-sm border-2 border-brand-text-secondary/40 bg-brand-primary flex-shrink-0 flex items-center justify-center peer-checked:bg-accent-start peer-checked:border-accent-start peer-focus:ring-2 peer-focus:ring-accent-start peer-focus:ring-offset-2 peer-focus:ring-offset-brand-secondary transition-colors duration-200">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-white opacity-0 peer-checked:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <span className="ml-3 font-medium text-brand-text">{service}</span>
                                </label>
                            ))}
                        </div>
                    </>
                )}
            </div>
          )}
          {step === 3 && (
            <div className="animate-fade-in">
              <h3 className="font-bold text-xl text-transparent bg-clip-text bg-gradient-to-r from-accent-blue via-accent-start to-accent-end mb-4">{t('projectModal.step3.title')}</h3>
              <div ref={dropdownRef} className="relative">
                <button type="button" onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="w-full text-left flex justify-between items-center bg-brand-primary/50 border border-white/10 rounded-lg px-4 py-3 text-brand-text focus:ring-2 focus:ring-accent-start focus:outline-none">
                  <span>{formData.industry || t('projectModal.step3.placeholder')}</span>
                  <svg className={`w-5 h-5 text-brand-text-secondary transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                </button>
                {isDropdownOpen && (
                  <ul className="absolute z-10 top-full mt-2 w-full bg-brand-secondary border border-white/10 rounded-lg shadow-lg">
                    {industries.map(industry => (
                       <li key={industry} onClick={() => { handleUpdate('industry', industry); setIsDropdownOpen(false); }} className={`px-4 py-2 cursor-pointer hover:bg-white/5 ${formData.industry === industry ? 'bg-accent-start/20' : ''}`}>{industry}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          )}
          {step === 4 && (
             <div className="animate-fade-in">
              <h3 className="font-bold text-xl text-transparent bg-clip-text bg-gradient-to-r from-accent-blue via-accent-start to-accent-end mb-4">{step4Title}</h3>
              <textarea value={formData.projectVision} onChange={(e) => handleUpdate('projectVision', e.target.value)} rows={8} placeholder={step4Placeholder} className="w-full bg-brand-primary/50 border border-white/10 rounded-lg px-4 py-2 text-brand-text focus:ring-2 focus:ring-accent-start focus:outline-none resize-none"/>
            </div>
          )}
          {step === 5 && (
            <div className="animate-fade-in">
              {hasPackage && (
                  <p className="text-center text-brand-text-secondary mb-6 bg-white/5 p-3 rounded-lg border border-white/10">
                    <Trans i18nKey="projectModal.step5_reinforcement" values={{ packageName: formData.selectedPackage }}>
                      <strong className="font-bold text-brand-text"></strong>
                    </Trans>
                  </p>
              )}
              <h3 className="font-bold text-xl text-transparent bg-clip-text bg-gradient-to-r from-accent-blue via-accent-start to-accent-end mb-4">{t('projectModal.step5.title')}</h3>
              <div className="space-y-4">
                <input type="text" name="name" placeholder={t('projectModal.step5.namePlaceholder')} value={formData.name} onChange={(e) => handleUpdate('name', e.target.value)} className="w-full bg-brand-primary/50 border border-white/10 rounded-lg px-4 py-3 text-brand-text focus:ring-2 focus:ring-accent-start focus:outline-none" />
                <input type="email" name="email" placeholder={t('projectModal.step5.emailPlaceholder')} value={formData.email} onChange={(e) => handleUpdate('email', e.target.value)} className="w-full bg-brand-primary/50 border border-white/10 rounded-lg px-4 py-3 text-brand-text focus:ring-2 focus:ring-accent-start focus:outline-none" />
                <input type="tel" name="phoneNumber" placeholder={t('projectModal.step5.phonePlaceholder')} value={formData.phoneNumber} onChange={(e) => handleUpdate('phoneNumber', e.target.value)} className="w-full bg-brand-primary/50 border border-white/10 rounded-lg px-4 py-3 text-brand-text focus:ring-2 focus:ring-accent-start focus:outline-none" />
              </div>
            </div>
          )}
        </div>
      </form>
    );
  };
  
  return ReactDOM.createPortal(
    <div
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 transition-opacity duration-300"
      onClick={onClose}
    >
      <div
        ref={modalRef}
        className="bg-brand-secondary border border-white/10 rounded-2xl shadow-2xl w-full max-w-lg h-[85vh] max-h-[800px] sm:h-[700px] sm:max-h-none flex flex-col relative transition-transform transform duration-300"
        style={{ transform: isOpen ? 'scale(1)' : 'scale(0.95)', opacity: isOpen ? 1 : 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-brand-text-secondary hover:text-brand-text transition-colors z-20"
        >
          <CloseIcon className="w-6 h-6" />
        </button>

        <div className="p-8 sm:p-10 overflow-y-auto flex flex-col flex-grow">
          {renderContent()}
        </div>
        
        <div className="p-6 border-t border-white/10">
           {error && (
              <div className="text-red-400 text-sm mb-4 text-center">{error}</div>
           )}
           <div className="flex items-center">
              {step > 1 && (
                <button type="button" onClick={handleBack} className="bg-white/5 border border-white/10 text-brand-text-secondary font-semibold px-8 py-3 rounded-lg hover:bg-white/10 transition-colors duration-300 flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                  {t('projectModal.buttons.back')}
                </button>
              )}
              <div className="flex-grow"></div>
              {step < totalSteps && (
                <button type="button" onClick={handleNext} disabled={!isStepValid()} className="bg-gradient-to-r from-accent-start to-accent-end text-white font-semibold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2">
                  {t('projectModal.buttons.next')}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </button>
              )}
              {step === totalSteps && (
                <button type="submit" form="project-modal-form" disabled={!isStepValid() || isSubmitting} className="bg-gradient-to-r from-accent-start to-accent-end text-white font-semibold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity duration-300 disabled:opacity-50 disabled:cursor-not-allowed min-w-[160px]">
                  {isSubmitting ? t('forms.submitting') : t('projectModal.buttons.submit')}
                </button>
              )}
           </div>
        </div>
      </div>
    </div>,
    modalRoot
  );
};

export default ProjectModal;