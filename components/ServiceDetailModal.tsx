import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { useTranslation } from 'react-i18next';
import type { Service, PortfolioItem, Testimonial } from '../src/types';
import { useFocusTrap } from '../hooks/useFocusTrap';
import PortfolioCard from './PortfolioCard';
import { imageStore } from '../content/imageStore';

const CloseIcon: React.FC<{ className?: string }> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const StarIcon: React.FC<{ className?: string }> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);


interface ServiceDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: Service | null;
  relatedPortfolioItem: PortfolioItem | null;
  relatedTestimonial: Testimonial | null;
  onPortfolioClick: (item: PortfolioItem) => void;
}

const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({ isOpen, onClose, service, relatedPortfolioItem, relatedTestimonial, onPortfolioClick }) => {
  const { t } = useTranslation();
  const modalRef = useRef<HTMLDivElement>(null);
  useFocusTrap(modalRef, isOpen);

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleEsc);
    }
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen, onClose]);

  const modalRoot = document.getElementById('modal-root');
  if (!isOpen || !modalRoot || !service) return null;

  const { title, description, process, icon: Icon } = service;
  
  const titleWords = title.split(' ');
  const lastWordsCount = titleWords.length > 3 ? 2 : 1;
  const gradientWords = titleWords.splice(-lastWordsCount).join(' ');
  const mainWords = titleWords.join(' ');

  return ReactDOM.createPortal(
    <div
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 transition-opacity duration-300 animate-fade-in-fast"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div
        ref={modalRef}
        className="bg-brand-secondary border border-accent-end/50 rounded-2xl shadow-2xl w-full max-w-3xl max-h-[95vh] flex flex-col relative transition-transform transform duration-300 drop-shadow-glow"
        style={{ transform: isOpen ? 'scale(1)' : 'scale(0.95)', opacity: isOpen ? 1 : 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-brand-text-secondary hover:text-white transition-colors z-20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          aria-label="Close service details"
        >
          <CloseIcon className="w-6 h-6" />
        </button>

        <div className="p-8 sm:p-10 overflow-y-auto flex-grow min-h-0">
          <div className="flex flex-col sm:flex-row items-start gap-6 mb-6">
             <div className="bg-gradient-to-br from-accent-start to-accent-end rounded-lg w-16 h-16 flex-shrink-0 flex items-center justify-center">
                <Icon className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-text mb-2">
                {mainWords}{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue via-accent-start to-accent-end">
                  {gradientWords}
                </span>
              </h2>
              <p className="text-brand-text-secondary leading-relaxed">{description}</p>
            </div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 mt-8">
            <div className="space-y-10">
              <div>
                  <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent-blue via-accent-start to-accent-end mb-4">{t('services.details.ourProcess')}</h3>
                  <ul className="space-y-3">
                      {process.map((step, index) => (
                        <li key={index} className="flex items-start gap-3 text-brand-text-secondary">
                          <span className="mt-1.5 h-2 w-2 rounded-full bg-accent-end flex-shrink-0"></span>
                          {step}
                        </li>
                      ))}
                  </ul>
              </div>
              {relatedTestimonial && (
                <div>
                  <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent-blue via-accent-start to-accent-end mb-4">{t('services.details.clientFeedback')}</h3>
                  <div className="bg-brand-primary/50 p-6 rounded-xl border border-white/10 flex flex-col">
                    <div className="flex text-yellow-400 mb-4">
                        {[...Array(5)].map((_, i) => <StarIcon key={i} className="w-5 h-5"/>)}
                    </div>
                    <p className="text-brand-text-secondary italic">"{relatedTestimonial.quote}"</p>
                  </div>
                </div>
              )}
            </div>
            <div>
              <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent-blue via-accent-start to-accent-end mb-4">{t('services.details.relatedWork')}</h3>
              {relatedPortfolioItem ? (
                <PortfolioCard item={relatedPortfolioItem} onClick={() => onPortfolioClick(relatedPortfolioItem)} />
              ) : (
                <p className="text-brand-text-secondary">No specific portfolio item found for this service.</p>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>,
    modalRoot
  );
};

export default ServiceDetailModal;