import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import { useTranslation } from 'react-i18next';
import { useFocusTrap } from '../hooks/useFocusTrap';

const CloseIcon: React.FC<{ className?: string }> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

interface Service {
    id: string;
    title: string;
    description: string;
    process: string[];
    icon: React.FC<{ className?: string }>;
    iconColor: string;
}

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: Service | null;
}

const DetailedServiceItemModal: React.FC<ModalProps> = ({ isOpen, onClose, service }) => {
    const { t } = useTranslation();
    const modalRef = useRef<HTMLDivElement>(null);
    useFocusTrap(modalRef, isOpen);

    useEffect(() => {
        const handleEsc = (event: KeyboardEvent) => {
            if (event.key === 'Escape') onClose();
        };
        if (isOpen) {
            window.addEventListener('keydown', handleEsc);
        }
        return () => window.removeEventListener('keydown', handleEsc);
    }, [isOpen, onClose]);

    const modalRoot = document.getElementById('modal-root');
    if (!isOpen || !modalRoot || !service) return null;

    const { title, description, process, icon: Icon, iconColor } = service;

    return ReactDOM.createPortal(
        <div
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 transition-opacity duration-300 animate-fade-in-fast"
            onClick={onClose}
            aria-modal="true"
            role="dialog"
        >
            <div
                ref={modalRef}
                className="bg-brand-secondary border border-white/10 rounded-2xl shadow-2xl w-full max-w-lg max-h-[95vh] flex flex-col relative transition-transform transform duration-300"
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
                     <div className="flex items-start gap-5 mb-6">
                        {Icon && (
                            <div className="flex-shrink-0 bg-white/5 p-3 rounded-lg mt-1">
                                <Icon className={`w-8 h-8 ${iconColor}`} />
                            </div>
                        )}
                        <div className="flex-grow">
                            <h2 className="text-2xl font-bold text-brand-text mb-1">{title}</h2>
                            <p className="text-brand-text-secondary leading-relaxed">{description}</p>
                        </div>
                    </div>
                    
                    {Array.isArray(process) && process.length > 0 && (
                        <div className="animate-fade-in-fast mt-6 border-t border-white/10 pt-6">
                            <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent-blue via-accent-start to-accent-end mb-4">{t('services.details.ourProcess')}</h3>
                            <ul className="space-y-3">
                                {process.map((step, index) => (
                                    <li key={index} className="flex items-start gap-3 text-brand-text-secondary">
                                        <span className="mt-1.5 h-2 w-2 rounded-full bg-accent-end flex-shrink-0"></span>
                                        {step}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div>,
        modalRoot
    );
};

export default DetailedServiceItemModal;