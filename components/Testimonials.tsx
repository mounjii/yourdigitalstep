import React, { useState, useEffect, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import type { Testimonial } from '../src/types';
import TestimonialCard from './TestimonialCard';

const ChevronLeftIcon: React.FC<{ className?: string }> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
  </svg>
);

const ChevronRightIcon: React.FC<{ className?: string }> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
  </svg>
);


interface TestimonialsProps {
  showHeading?: boolean;
}

const Testimonials: React.FC<TestimonialsProps> = ({ showHeading = true }) => {
  const { t } = useTranslation();
  const testimonialsData = t('testimonials.items', { returnObjects: true });
  const testimonials = Array.isArray(testimonialsData) ? testimonialsData : [];
  const [currentIndex, setCurrentIndex] = useState(0);

  const title = t('testimonials.title');
  const titleWords = title.split(' ');
  const lastWordsCount = titleWords.length > 3 ? 2 : 1;
  const gradientWords = titleWords.splice(-lastWordsCount).join(' ');
  const mainWords = titleWords.join(' ');

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  }, [testimonials.length]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };
  
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 8000); // Auto-play every 8 seconds
    
    return () => clearInterval(timer);
  }, [handleNext]);
  
  if (!testimonials || testimonials.length === 0) {
    return null;
  }

  return (
    <section id="testimonials" className="py-16 sm:py-20 bg-transparent">
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
              {t('testimonials.subtitle')}
            </p>
          </div>
        )}
        <div className="relative max-w-3xl mx-auto">
           <div className="relative min-h-[380px] sm:min-h-[320px] w-full flex items-center justify-center">
             <div key={currentIndex} className="w-full animate-fade-in-fast">
               <TestimonialCard testimonial={testimonials[currentIndex]} />
             </div>
           </div>

           <button 
             onClick={handlePrev} 
             className="absolute top-1/2 -left-4 md:-left-16 transform -translate-y-1/2 p-2 rounded-full bg-gray-200/50 dark:bg-white/5 hover:bg-gray-300/50 dark:hover:bg-white/10 text-brand-text transition-colors"
             aria-label="Previous testimonial"
           >
             <ChevronLeftIcon className="w-6 h-6" />
           </button>
           <button 
             onClick={handleNext} 
             className="absolute top-1/2 -right-4 md:-right-16 transform -translate-y-1/2 p-2 rounded-full bg-gray-200/50 dark:bg-white/5 hover:bg-gray-300/50 dark:hover:bg-white/10 text-brand-text transition-colors"
             aria-label="Next testimonial"
           >
             <ChevronRightIcon className="w-6 h-6" />
           </button>

           <div className="flex justify-center space-x-3 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      currentIndex === index ? 'bg-brand-accent w-6' : 'bg-gray-300 hover:bg-gray-400 dark:bg-white/20 dark:hover:bg-white/40'
                  }`}
                />
              ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;