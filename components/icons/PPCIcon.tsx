import React from 'react';

const PPCIcon: React.FC<{ className?: string }> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={props.className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.63 2.25a14.98 14.98 0 00-5.84 7.38m5.84 2.58a14.98 14.98 0 017.38 5.84m-13.22 0a14.98 14.98 0 015.84-7.38m5.84 2.58a14.98 14.98 0 01-5.84 7.38m-5.84-7.38a14.98 14.98 0 01-5.84-7.38A14.98 14.98 0 019.63 2.25" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

export default PPCIcon;