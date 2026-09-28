import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';

// Easing function for a smoother animation
const easeOutCubic = (t: number): number => 1 - Math.pow(1 - t, 3);

const StatCounter: React.FC<{
  endValue?: number;
  textValue?: string;
  suffix?: string;
  label: string;
  duration?: number;
  isInView: boolean;
}> = ({ endValue, textValue, suffix = '', label, duration = 2000, isInView }) => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0); // For the '7' in 24/7
  const hasAnimated = useRef(false);

  const isTwentyFourSeven = textValue === '24/7';

  useEffect(() => {
    if (isInView && !hasAnimated.current) {
      hasAnimated.current = true;
      let startTime: number | null = null;

      const animationFrame = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easedProgress = easeOutCubic(progress);

        if (isTwentyFourSeven) {
          const end1 = 24;
          const end2 = 7;
          setCount(Math.floor(easedProgress * end1));
          setCount2(Math.floor(easedProgress * end2));

          if (progress < 1) {
            requestAnimationFrame(animationFrame);
          } else {
            setCount(end1);
            setCount2(end2);
          }
        } else if (typeof endValue === 'number') {
          const currentCount = Math.floor(easedProgress * endValue);
          setCount(currentCount);

          if (progress < 1) {
            requestAnimationFrame(animationFrame);
          } else {
            setCount(endValue);
          }
        }
      };

      if (isTwentyFourSeven || typeof endValue === 'number') {
        requestAnimationFrame(animationFrame);
      }
    }
  }, [isInView, endValue, duration, isTwentyFourSeven]);

  if (isTwentyFourSeven) {
    return (
      <div className="text-center">
        <p className="text-5xl md:text-6xl font-bold text-brand-text">
          {count}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue via-accent-start to-accent-end">/</span>
          {count2}
        </p>
        <p className="text-md text-brand-text-secondary mt-2 tracking-wider">{label}</p>
      </div>
    );
  }

  if (textValue) { // Handles any other case where textValue is provided but is not '24/7'
    return (
      <div className="text-center">
        <p className={`text-5xl md:text-6xl font-bold text-brand-text transition-opacity duration-700 ${isInView ? 'opacity-100' : 'opacity-0'}`}>
          {textValue}
        </p>
        <p className="text-md text-brand-text-secondary mt-2 tracking-wider">{label}</p>
      </div>
    );
  }

  return (
    <div className="text-center">
      <p className="text-5xl md:text-6xl font-bold text-brand-text">
        {count}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue via-accent-start to-accent-end">{suffix}</span>
      </p>
      <p className="text-md text-brand-text-secondary mt-2 tracking-wider">{label}</p>
    </div>
  );
};

const Stats: React.FC = () => {
  const { t } = useTranslation();
  const statsItemsData = t('stats.items', { returnObjects: true });
  const statsItems: { endValue?: number; textValue?: string; suffix?: string; label: string }[] = Array.isArray(statsItemsData) ? statsItemsData : [];
  
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const title = t('stats.title');
  const titleWords = title.split(' ');
  const lastWordsCount = titleWords.length > 3 ? 2 : 1;
  const gradientWords = titleWords.splice(-lastWordsCount).join(' ');
  const mainWords = titleWords.join(' ');

  return (
    <section id="stats" ref={sectionRef} className="bg-transparent py-16 sm:py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-text">
            {mainWords}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue via-accent-start to-accent-end">
              {gradientWords}
            </span>
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {statsItems.map((item, index) => (
             <div key={index} className="border border-white/10 rounded-xl p-8 bg-brand-secondary/95 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:border-accent-start/50 hover:bg-white/5">
              <StatCounter 
                endValue={item.endValue}
                textValue={item.textValue}
                suffix={item.suffix} 
                label={item.label}
                isInView={isInView}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;