import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import type { PortfolioItem } from '../types';
import { useFocusTrap } from '../hooks/useFocusTrap';
import { imageStore, ImageKey } from '../content/imageStore';

const CloseIcon: React.FC<{ className?: string }> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

interface PortfolioDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  item: PortfolioItem | null;
}

const PortfolioDetailModal: React.FC<PortfolioDetailModalProps> = ({ isOpen, onClose, item }) => {
  const [lightboxImageKey, setLightboxImageKey] = useState<ImageKey | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  useFocusTrap(modalRef, isOpen && !lightboxImageKey);
  
  const lightboxRef = useRef<HTMLDivElement>(null);
  useFocusTrap(lightboxRef, !!lightboxImageKey);

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        if (lightboxImageKey) {
          setLightboxImageKey(null);
        } else {
          onClose();
        }
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleEsc);
    }
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen, onClose, lightboxImageKey]);

  const modalRoot = document.getElementById('modal-root');
  if (!isOpen || !modalRoot || !item) return null;

  const { details } = item;

  const title = details.title;
  const titleWords = title.split(' ');
  const lastWordsCount = titleWords.length > 3 ? 2 : 1;
  const gradientWords = titleWords.splice(-lastWordsCount).join(' ');
  const mainWords = titleWords.join(' ');

  return ReactDOM.createPortal(
    <>
      <div
        className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 transition-opacity duration-300"
        onClick={onClose}
        aria-modal="true"
        role="dialog"
      >
        <div
          ref={modalRef}
          className="bg-brand-secondary border border-white/10 rounded-2xl shadow-2xl w-full max-w-3xl max-h-[95vh] flex flex-col relative transition-transform transform duration-300"
          style={{ transform: isOpen ? 'scale(1)' : 'scale(0.95)', opacity: isOpen ? 1 : 0 }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex-shrink-0 relative">
            <img src={imageStore[item.image]} alt={item.title} loading="lazy" className="w-full h-64 object-cover rounded-t-2xl"/>
            <div className="absolute inset-0 bg-gradient-to-t from-brand-secondary to-transparent"></div>
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-white bg-black/40 rounded-full p-2 hover:bg-black/60 transition-colors z-20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              aria-label="Close project details"
            >
              <CloseIcon className="w-6 h-6" />
            </button>
          </div>

          <div className="p-8 sm:p-10 overflow-y-auto flex-grow min-h-0">
            <h2 className="text-4xl font-bold text-brand-text mb-2">
              {mainWords}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue via-accent-start to-accent-end">
                {gradientWords}
              </span>
            </h2>
            <p className="text-brand-text-secondary italic mb-8">{details.subtitle}</p>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-brand-text mb-3 border-b-2 border-accent-start/30 pb-2">Client Vision</h3>
                <p className="text-brand-text-secondary leading-relaxed">{details.clientVision}</p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-brand-text mb-3 border-b-2 border-accent-start/30 pb-2">Our Solution</h3>
                <ul className="space-y-3">
                  {details.ourSolution.map((solution, index) => (
                    <li key={index} className="flex items-start gap-3 text-brand-text-secondary">
                      <span className="mt-1.5 h-2 w-2 rounded-full bg-accent-end flex-shrink-0"></span>
                      {solution}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-brand-text mb-3 border-b-2 border-accent-start/30 pb-2">Result</h3>
                <p className="text-brand-text-secondary leading-relaxed">{details.result}</p>
              </div>

              {details.screenshots && details.screenshots.length > 0 && (
                <div>
                  <h3 className="text-xl font-bold text-brand-text mb-3 border-b-2 border-accent-start/30 pb-2">Project Gallery</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {details.screenshots.map((srcKey, index) => (
                      <button 
                        key={index} 
                        onClick={() => setLightboxImageKey(srcKey)} 
                        className="overflow-hidden rounded-lg group focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-secondary focus-visible:ring-accent-start"
                        aria-label={`View screenshot ${index + 1}`}
                      >
                        <img
                          src={imageStore[srcKey]}
                          alt={`${details.title} screenshot ${index + 1}`}
                          loading="lazy"
                          className="w-full h-full object-cover aspect-video transition-transform duration-300 group-hover:scale-110"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {lightboxImageKey && (
        <div
          ref={lightboxRef}
          className="fixed inset-0 z-[60] bg-black/80 flex items-center justify-center p-4 animate-fade-in-fast"
          onClick={() => setLightboxImageKey(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            onClick={() => setLightboxImageKey(null)}
            className="absolute top-4 right-4 text-white bg-black/40 rounded-full p-2 hover:bg-black/60 transition-colors z-20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            aria-label="Close image viewer"
          >
            <CloseIcon className="w-8 h-8" />
          </button>
          <img 
            src={imageStore[lightboxImageKey]} 
            alt="Enlarged screenshot" 
            className="max-w-[95%] max-h-[95%] rounded-lg object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image itself
          />
        </div>
      )}
    </>,
    modalRoot
  );
};

export default PortfolioDetailModal;