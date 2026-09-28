import React from 'react';

const UsersIcon: React.FC<{ className?: string }> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={props.className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-2.308M15 19.128v-3.86a2.25 2.25 0 01.9-1.755L21 12m-6 7.128a9.353 9.353 0 01-2.625.372M3 12l2.25-2.25a2.25 2.25 0 01.9-1.755V5.25c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125v3.86M3 12a9.337 9.337 0 012.308-4.121m12.383 4.121a9.353 9.353 0 01-2.625-.372M3 12a9.353 9.353 0 012.625-.372m12.383 0A9.353 9.353 0 0121 12m-18 0a9.353 9.353 0 012.308 4.121m12.383-4.121c-.428 1.053-.852 2.083-1.318 3.085M3 12c.428 1.053.852 2.083 1.318 3.085m12.383 0c-.466.953-.98 1.868-1.54 2.738M3 12c.466.953.98 1.868 1.54 2.738" />
  </svg>
);

export default UsersIcon;