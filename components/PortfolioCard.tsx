import React from 'react';
import type { PortfolioItem } from '../src/types';
import { imageStore } from '../content/imageStore';

const ArrowUpRightIcon: React.FC<{ className?: string }> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
    </svg>
);

const PortfolioCard: React.FC<{ item: PortfolioItem; onClick: () => void; }> = ({ item, onClick }) => (
    <button 
        onClick={onClick} 
        className="group text-left relative overflow-hidden rounded-2xl border border-white/10 bg-brand-secondary/90 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-accent-start/60 hover:shadow-xl hover:shadow-accent-start/10 h-full w-full cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-primary focus-visible:ring-accent-start"
        aria-label={`View details for ${item.title}`}
    >
        <img src={imageStore[item.image]} alt={item.title} loading="lazy" className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300" />
        <div className="p-6">
            <p className="text-sm text-accent-start font-semibold mb-2">{item.category}</p>
            <h3 className="text-xl font-bold text-brand-text group-hover:text-brand-accent dark:group-hover:text-accent-end transition-all duration-300 mb-3">{item.title}</h3>
            <p className="text-brand-text-secondary leading-relaxed mb-4 text-sm">{item.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
                {item.tags.map(tag => (
                    <span key={tag} className="bg-accent-blue/10 text-accent-blue text-xs font-semibold px-2.5 py-1 rounded-full">{tag}</span>
                ))}
            </div>
        </div>
        <div className="absolute top-4 right-4 bg-brand-primary/50 p-3 rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
            <ArrowUpRightIcon className="w-5 h-5 text-white" />
        </div>
    </button>
);

export default PortfolioCard;