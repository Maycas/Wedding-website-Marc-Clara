import React from 'react';

const SvgIcon = ({ children }) => (
  <svg 
    viewBox="0 0 100 100" 
    width="50" 
    height="50" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="5" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    className="timeline-icon"
  >
    {children}
  </svg>
);

export const IconWelcome = () => (
  <SvgIcon>
    {/* Temple Base and Columns */}
    <path d="M10 80 H90" />
    <path d="M20 80 V40" />
    <path d="M80 80 V40" />
    <path d="M35 80 V40" />
    <path d="M65 80 V40" />
    <path d="M10 40 H90" />
    
    {/* Roof Triangle */}
    <path d="M10 40 L50 10 L90 40" />
    
    {/* Heart in Roof */}
    <path 
      d="M50 22 C 45 15, 40 20, 40 25 C 40 32, 50 38, 50 38 C 50 38, 60 32, 60 25 C 60 20, 55 15, 50 22" 
      fill="currentColor" 
      stroke="none"
    />
  </SvgIcon>
);

export const IconCeremony = () => (
  <SvgIcon>
    {/* Left Ring */}
    <circle cx="40" cy="65" r="20" strokeWidth="4" />
    {/* Right Ring */}
    <circle cx="60" cy="65" r="20" strokeWidth="4" />
    
    {/* Interlocking effect overlay (optional, or just simple rings for now) */}
    
    {/* Left Heart */}
    <path 
      d="M35 35 C 35 35, 25 25, 25 18 Q 25 10, 32 10 C 35 10, 38 12, 40 15 C 42 12, 45 10, 48 10 Q 55 10, 55 18 C 55 25, 45 35, 40 40" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="3" 
      transform="translate(-5, 0) scale(0.8)"
    />
    
    {/* Right Heart */}
    <path 
      d="M65 25 C 65 25, 55 15, 55 8 Q 55 0, 62 0 C 65 0, 68 2, 70 5 C 72 2, 75 0, 78 0 Q 85 0, 85 8 C 85 15, 75 25, 70 30" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="3" 
      transform="translate(10, 5) scale(0.8)"
    />
  </SvgIcon>
);

export const IconCocktail = () => (
  <SvgIcon>
    {/* Glass */}
    <path d="M20 20 L50 55 L80 20" />
    <path d="M50 55 V85" />
    <path d="M35 85 H65" />
    {/* Rim */}
    <path d="M20 20 H80" />
    
    {/* Olive Stick */}
    <path d="M50 55 L70 10" />
    <circle cx="70" cy="10" r="5" fill="currentColor" stroke="none" />
  </SvgIcon>
);

export const IconDinner = () => (
  <SvgIcon>
    {/* Cloche Dome */}
    <path d="M10 70 A 40 35 0 0 1 90 70" strokeWidth="4" />
    <line x1="10" y1="70" x2="90" y2="70" strokeWidth="4" />
    {/* Handle */}
    <circle cx="50" cy="30" r="6" fill="currentColor" />
    
    {/* Plate underneath */}
    <path d="M5 80 Q 50 90, 95 80" strokeWidth="3" />
  </SvgIcon>
);

export const IconParty = () => (
  <SvgIcon>
    {/* Console */}
    <rect x="10" y="55" width="50" height="35" />
    {/* Buttons on console */}
    <path d="M15 55 V52" strokeWidth="3" />
    <path d="M22 55 V52" strokeWidth="3" />
    <path d="M29 55 V52" strokeWidth="3" />
    
    {/* Speaker (Right) */}
    <rect x="65" y="55" width="25" height="35" />
    <circle cx="77.5" cy="65" r="5" />
    <circle cx="77.5" cy="80" r="5" />

    {/* DJ Figure */}
    {/* Head */}
    <circle cx="45" cy="25" r="8" />
    {/* Headphones */}
    <path d="M35 25 C 35 15, 55 15, 55 25" />
    <rect x="33" y="22" width="3" height="6" fill="currentColor" stroke="none" />
    <rect x="54" y="22" width="3" height="6" fill="currentColor" stroke="none" />
    
    {/* Body */}
    <path d="M35 55 C 35 40, 55 40, 55 55" />
    
    {/* Raised Arm (Left) */}
    <path d="M35 40 Q 25 35, 25 20 C 25 15, 30 15, 30 20" />
    
    {/* Music Note */}
    <path d="M70 20 V10 H80 V15" strokeWidth="3" />
    <circle cx="70" cy="20" r="2" fill="currentColor" stroke="none" />
  </SvgIcon>
);
