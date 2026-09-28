import React from 'react';
import type { Testimonial } from '../types';
import { imageStore } from '../content/imageStore';

const StarIcon: React.FC<{ className?: string }> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const TestimonialCard: React.FC<{ testimonial: Omit<Testimonial, 'rating'>, isInteractive?: boolean }> = ({ testimonial, isInteractive = false }) => (
  <div className={`bg-brand-secondary p-8 rounded-xl border border-white/10 flex flex-col h-full ${!isInteractive ? 'transition-all duration-300 ease-in-out hover:scale-[1.02] hover:bg-white/5 hover:border-accent-start/50' : 'bg-brand-primary/50'}`}>
    <div className="flex text-yellow-400 mb-4">
        {[...Array(5)].map((_, i) => <StarIcon key={i} className="w-5 h-5"/>)}
    </div>
    <p className="text-brand-text-secondary text-lg mb-6 flex-grow">"{testimonial.quote}"</p>
    <div className="flex items-center gap-4">
        <img src={imageStore[testimonial.avatar]} alt={testimonial.name} loading="lazy" className="w-12 h-12 rounded-full object-cover" />
        <div>
            <p className="font-bold text-brand-text">{testimonial.name}</p>
            <p className="text-sm text-brand-text-secondary">{testimonial.title}</p>
        </div>
    </div>
  </div>
);

export default TestimonialCard;