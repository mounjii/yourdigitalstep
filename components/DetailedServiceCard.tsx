import React from 'react';

interface ServiceItem {
    id: string;
    title: string;
    description: string;
}

interface DetailedServiceCardProps {
    item: ServiceItem;
    Icon: React.FC<{ className?: string }>;
    iconColor: string;
    onClick: () => void;
}

const DetailedServiceCard: React.FC<DetailedServiceCardProps> = ({ item, Icon, iconColor, onClick }) => {
    return (
        <button
            onClick={onClick}
            className="w-full text-left transition-colors duration-300 hover:bg-white/5 first:pt-0 py-4 last:pb-0 group"
            aria-label={`View details for ${item.title}`}
        >
            <div className="w-full flex items-start gap-5">
                {Icon && (
                    <div className="flex-shrink-0 bg-white/5 p-3 rounded-lg mt-1 transition-transform duration-300 group-hover:scale-110">
                        <Icon className={`w-6 h-6 ${iconColor}`} />
                    </div>
                )}
                <div className="flex-grow">
                    <h4 className="text-lg font-bold text-brand-text group-hover:text-brand-accent dark:group-hover:text-accent-end transition-colors duration-300">{item.title}</h4>
                    <p className="text-brand-text-secondary leading-relaxed text-sm">{item.description}</p>
                </div>
                <div className="text-accent-start mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-bold">
                    &rarr;
                </div>
            </div>
        </button>
    );
};

export default DetailedServiceCard;