import React from 'react';

const MouseScrollIcon: React.FC<{ className?: string }> = (props) => (
  <div className={`relative w-6 h-10 border-2 border-brand-text-secondary rounded-full group-hover:border-brand-accent transition-colors duration-300 ${props.className}`}>
    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-1 h-2 bg-brand-text-secondary rounded-full animate-mouse-scroll group-hover:bg-brand-accent transition-colors duration-300"></div>
  </div>
);

export default MouseScrollIcon;