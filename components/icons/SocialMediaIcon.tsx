import React from 'react';

const SocialMediaIcon: React.FC<{ className?: string }> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={props.className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m-7.5-2.228a4.5 4.5 0 00-1.897 1.897M18 18.72A7.5 7.5 0 0110.5 21a7.5 7.5 0 01-7.5-7.5c0-1.561.46-3.02 1.258-4.228m9.492 4.228a2.25 2.25 0 00-1.897-1.897M18 18.72l-3.741-.479m0 0a3 3 0 10-4.682-2.72M10.5 18.75v-4.5a4.5 4.5 0 00-1.897-3.603M10.5 18.75l-1.897.397m0 0a4.5 4.5 0 01-3.603-1.897M3.75 10.5a7.5 7.5 0 0114.99-1.897" />
  </svg>
);

export default SocialMediaIcon;