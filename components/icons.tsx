import React from 'react';

export const PaperclipIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.5" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    {...props}
  >
    <path d="M14.5 12.5a4 4 0 1 0-8 0V4.5a2.5 2.5 0 0 0-5 0V15a6.5 6.5 0 0 0 13 0V5.5a1 1 0 0 0-2 0v8Z"/>
  </svg>
);

export const TrophyIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/>
    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/>
    <path d="M4 22h16"/>
    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21A3.48 3.48 0 0 1 9 19.5a3.5 3.5 0 0 1-3.5-3.5c0-.17.03-.34.07-.5"/>
    <path d="M14 14.66V17c0 .55.47.98.97 1.21A3.48 3.48 0 0 0 15 19.5a3.5 3.5 0 0 0 3.5-3.5c0-.17-.03-.34-.07-.5"/>
    <path d="M9 4h6"/>
    <path d="M12 4v10"/>
  </svg>
);

export const LockIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
        <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
    </svg>
);
