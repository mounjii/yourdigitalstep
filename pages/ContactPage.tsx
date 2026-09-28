import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import CommentIcon from '../components/icons/CommentIcon';
import EngineeringIcon from '../components/icons/EngineeringIcon';
import ClockIcon from '../components/icons/ClockIcon';
import MailIcon from '../components/icons/MailIcon';

const ContactPage: React.FC = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [projectType, setProjectType] = useState('');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const whyChooseUsItems = t('contactPage.whyChooseUs.items', { returnObjects: true }) as any[];
    const whyChooseUsIcons = [CommentIcon, EngineeringIcon, ClockIcon];

    const projectTypes = t('contactPage.form.projectTypes', { returnObjects: true }) as string[];
    const processSteps = t('contactPage.ourProcess.steps', { returnObjects: true }) as string[];

    const title = t('contactPage.title');
    const titleWords = title.split(' ');
    const lastWord = titleWords.pop();
    const mainTitle = titleWords.join(' ');

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDropdownOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);
    
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
        <div className="bg-transparent pt-20 sm:pt-24 pb-16 sm:pb-20">
            <div className="container mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-brand-text mb-4 leading-tight">
                        {mainTitle}{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue via-accent-start to-accent-end">
                            {lastWord}
                        </span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-lg text-brand-text-secondary">
                        {t('contactPage.subtitle')}
                    </p>
                    <div className="mt-6 w-24 h-1 bg-gradient-to-r from-accent-start to-accent-end mx-auto rounded-full"></div>
                </div>

                {/* Why Choose Us */}
                <div className="mb-20">
                     <h2 className="flex items-center text-3xl font-bold text-brand-text mb-8">
                        <span className="w-1 h-8 bg-gradient-to-b from-accent-start to-accent-end rounded-full mr-3"></span>
                        {t('contactPage.whyChooseUs.title')}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {whyChooseUsItems.map((item, index) => {
                           const Icon = whyChooseUsIcons[index];
                           return (
                             <div key={index} className="group bg-brand-secondary/95 backdrop-blur-sm p-8 rounded-2xl border border-white/10 transition-all duration-300 hover:scale-[1.02] hover:border-accent-start/50 hover:bg-white/5">
                                 <div className="bg-gradient-to-br from-accent-start to-accent-end rounded-lg w-16 h-16 flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110">
                                     <Icon className="w-8 h-8 text-white" />
                                 </div>
                                 <h3 className="text-xl font-bold text-brand-text mb-2 transition-colors">{item.title}</h3>
                                 <p className="text-brand-text-secondary">{item.description}</p>
                             </div>
                           );
                        })}
                    </div>
                </div>

                {/* Main Content */}
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
                    {/* Form Section */}
                    <div className="lg:col-span-3 bg-brand-secondary/95 backdrop-blur-sm p-8 rounded-2xl border border-white/10 transition-all duration-300 hover:scale-[1.02] hover:border-accent-start/50 hover:drop-shadow-glow">
                         <h2 className="flex items-center text-3xl font-bold text-brand-text mb-8">
                            <span className="w-1 h-8 bg-gradient-to-b from-accent-start to-accent-end rounded-full mr-3"></span>
                            {t('contactPage.form.title')}
                        </h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <input type="hidden" name="form_type" value="Contact Inquiry" />
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-brand-text-secondary mb-2">{t('contactPage.form.fullName')}</label>
                                    <input type="text" name="name" id="name" placeholder={t('contactPage.form.fullNamePlaceholder')} required className="w-full bg-brand-primary/50 border border-white/10 rounded-lg px-4 py-3 text-brand-text focus:ring-2 focus:ring-accent-start focus:outline-none"/>
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-brand-text-secondary mb-2">{t('contactPage.form.emailAddress')}</label>
                                    <input type="email" name="email" id="email" placeholder={t('contactPage.form.emailAddressPlaceholder')} required className="w-full bg-brand-primary/50 border border-white/10 rounded-lg px-4 py-3 text-brand-text focus:ring-2 focus:ring-accent-start focus:outline-none"/>
                                </div>
                            </div>
                            <div>
                                <label htmlFor="projectType" className="block text-sm font-medium text-brand-text-secondary mb-2">{t('contactPage.form.projectType')}</label>
                                <input type="hidden" name="projectType" value={projectType} />
                                <div ref={dropdownRef} className="relative">
                                    <button type="button" onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="w-full text-left flex justify-between items-center bg-brand-primary/50 border border-white/10 rounded-lg px-4 py-3 text-brand-text focus:ring-2 focus:ring-accent-start focus:outline-none">
                                        <span>{projectType || t('contactPage.form.projectTypePlaceholder')}</span>
                                        <svg className={`w-5 h-5 text-brand-text-secondary transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                                    </button>
                                    {isDropdownOpen && (
                                    <ul className="absolute z-10 top-full mt-2 w-full bg-brand-secondary border border-white/10 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                                        {projectTypes.map(type => (
                                        <li key={type} onClick={() => { setProjectType(type); setIsDropdownOpen(false); }} className={`px-4 py-2 cursor-pointer hover:bg-white/5 text-brand-text ${projectType === type ? 'bg-accent-start/20' : ''}`}>{type}</li>
                                        ))}
                                    </ul>
                                    )}
                                </div>
                            </div>
                             <div>
                                <label htmlFor="details" className="block text-sm font-medium text-brand-text-secondary mb-2">{t('contactPage.form.projectDetails')}</label>
                                <textarea name="details" id="details" rows={6} placeholder={t('contactPage.form.projectDetailsPlaceholder')} required className="w-full bg-brand-primary/50 border border-white/10 rounded-lg px-4 py-3 text-brand-text focus:ring-2 focus:ring-accent-start focus:outline-none resize-none"></textarea>
                            </div>
                            <div>
                                {error && (
                                  <p className="text-red-400 text-sm text-center mb-4">{error}</p>
                                )}
                                <button type="submit" disabled={isSubmitting} className="w-full bg-gradient-to-r from-accent-start to-accent-end text-white font-semibold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity duration-300 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed">
                                    {isSubmitting ? t('forms.submitting') : t('contactPage.form.sendMessage')}
                                    {!isSubmitting && <span className="font-light text-xl">&rarr;</span>}
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Info Section */}
                    <div className="lg:col-span-2 space-y-8">
                        <div className="bg-brand-secondary/95 backdrop-blur-sm p-8 rounded-2xl border border-white/10 transition-all duration-300 hover:scale-[1.02] hover:border-accent-start/50 hover:bg-white/5">
                            <h3 className="flex items-center text-2xl font-bold text-brand-text mb-6">
                               <span className="w-1 h-7 bg-gradient-to-b from-accent-start to-accent-end rounded-full mr-3"></span>
                               {t('contactPage.getInTouch.title')}
                           </h3>
                           <div className="space-y-4">
                                <div className="flex items-start gap-4">
                                    <div className="bg-brand-primary/50 p-3 rounded-full mt-1">
                                       <MailIcon className="w-5 h-5 text-accent-end"/>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-brand-text">{t('contactPage.getInTouch.email')}</p>
                                        <a href={`mailto:${t('contactPage.getInTouch.emailAddress')}`} className="text-brand-text-secondary hover:text-accent-start transition-colors">{t('contactPage.getInTouch.emailAddress')}</a>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                     <div className="bg-brand-primary/50 p-3 rounded-full mt-1">
                                       <ClockIcon className="w-5 h-5 text-accent-end"/>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-brand-text">{t('contactPage.getInTouch.businessHours')}</p>
                                        <p className="text-brand-text-secondary">{t('contactPage.getInTouch.businessHoursValue')}</p>
                                    </div>
                                </div>
                           </div>
                        </div>
                        <div className="bg-brand-secondary/95 backdrop-blur-sm p-8 rounded-2xl border border-white/10 transition-all duration-300 hover:scale-[1.02] hover:border-accent-start/50 hover:bg-white/5">
                           <h3 className="flex items-center text-2xl font-bold text-brand-text mb-6">
                               <span className="w-1 h-7 bg-gradient-to-b from-accent-start to-accent-end rounded-full mr-3"></span>
                               {t('contactPage.ourProcess.title')}
                           </h3>
                           <ul className="space-y-4">
                                {processSteps.map((step, index) => (
                                     <li key={index} className="flex items-center gap-4">
                                         <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent-start to-accent-end flex-shrink-0 flex items-center justify-center font-bold text-white">
                                             {index + 1}
                                         </div>
                                         <p className="text-brand-text-secondary">{step}</p>
                                     </li>
                                ))}
                           </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;