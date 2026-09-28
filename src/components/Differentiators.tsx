import React from 'react';
import { useTranslation } from 'react-i18next';
import type { Differentiator } from '../types';
import TransparencyIcon from './icons/TransparencyIcon';
import EngineeringIcon from './icons/EngineeringIcon';
import DataIcon from './icons/DataIcon';

const DifferentiatorCard: React.FC<{ differentiator: Differentiator }> = ({ differentiator }) => {
    const Icon = differentiator.icon;
    return (
        <div className="group flex flex-col items-start gap-6 bg-brand-secondary/95 backdrop-blur-sm p-8 rounded-xl border border-white/10 h-full transition-all duration-300 ease-in-out hover:scale-[1.02] hover:bg-white/5 hover:border-accent-start/50">
            <div className="bg-gradient-to-br from-accent-start to-accent-end rounded-lg w-16 h-16 flex items-center justify-center flex-shrink-0">
                <Icon className="w-8 h-8 text-white transition-transform duration-300 group-hover:scale-110" />
            </div>
            <div>
                <h3 className="text-2xl font-bold text-brand-text transition-colors duration-300 mb-3">{differentiator.title}</h3>
                <p className="text-brand-text-secondary leading-relaxed mb-4">{differentiator.description}</p>
                <ul className="space-y-2">
                    {differentiator.features.map(feature => (
                        <li key={feature} className="flex items-center gap-3 text-brand-text-secondary">
                            <span className="h-1.5 w-1.5 rounded-full bg-accent-end"></span>
                            {feature}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

interface DifferentiatorsProps {
    showHeading?: boolean;
}

const Differentiators: React.FC<DifferentiatorsProps> = ({ showHeading = true }) => {
    const { t } = useTranslation();
    const differentiatorsContent = t('differentiators.items', { returnObjects: true });
    const differentiatorIcons = [TransparencyIcon, EngineeringIcon, DataIcon];

    const differentiators: Differentiator[] = Array.isArray(differentiatorsContent) ? differentiatorsContent.map((item: any, index: number) => ({
        ...item,
        icon: differentiatorIcons[index],
    })) : [];
    
    const title = t('differentiators.title');
    const titleWords = title.split(' ');
    const lastWordsCount = titleWords.length > 3 ? 2 : 1;
    const gradientWords = titleWords.splice(-lastWordsCount).join(' ');
    const mainWords = titleWords.join(' ');

    return (
        <section id="differentiators" className="py-16 sm:py-20 bg-transparent">
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
                            {t('differentiators.subtitle')}
                        </p>
                    </div>
                )}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {differentiators.map((item, index) => (
                        <DifferentiatorCard key={index} differentiator={item} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Differentiators;