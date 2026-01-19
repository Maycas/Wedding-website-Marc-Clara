import React from 'react';
import heroImage from '../../assets/hero_final.jpg';
import './Hero.css';

const Hero = () => {
  const [offset, setOffset] = React.useState(0);
  const [isDesktop, setIsDesktop] = React.useState(window.innerWidth > 768);

  React.useEffect(() => {
    const handleScroll = () => setOffset(window.scrollY);
    const handleResize = () => setIsDesktop(window.innerWidth > 768);
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Animation values
  // Text Opacity: 0 to 1 as we scroll from 0 to 300
  const opacity = isDesktop ? Math.min(Math.max(offset / 300, 0), 1) : 1;
  
  // Overlay Opacity: 0 to 0.6 as we scroll from 0 to 400
  // Starts clear (0) so we see faces. Darkens as text arrives.
  const overlayOpacity = isDesktop ? Math.min(Math.max(offset / 400, 0), 0.6) : 0.4; // Mobile keeps static overlay

  // Text Movement: "Comes from above"
  // Start: -50px (Higher). End: 0px (Bottom).
  // As offset 0 -> moveY = -50. As offset 300 -> moveY = 0.
  const moveY = isDesktop ? Math.min(0, -50 + (offset / 6)) : 0;
  
  // Arrow Opacity: 1 to 0 as we scroll from 0 to 100.
  // Fades out quickly so it doesn't clash with the text appearing.
  const arrowOpacity = Math.max(1 - (offset / 150), 0);

  return (
    <div id="hero" className="hero" style={{ backgroundImage: `url(${heroImage})` }}>
      <div 
        className="hero-overlay" 
        style={{ 
          backgroundColor: `rgba(0, 0, 0, ${overlayOpacity})`,
          transition: 'background-color 0.1s ease-out'
        }}
      ></div>
      <div 
        className="hero-content" 
        style={{ 
          opacity: opacity, 
          transform: `translateY(${moveY}px)`,
          transition: 'transform 0.1s ease-out, opacity 0.1s ease-out'
        }}
      >
        <p className="uppercase text-gold">Finalment, després de 8 anys junts...</p>
        <h1>Ens casem!</h1>
        <p className="names">Clara & Marc</p>
      </div>

      {/* Scroll Arrow */}
      <div 
        className="scroll-arrow"
        style={{ opacity: arrowOpacity }}
      >
        <p className="scroll-text">Llisca avall</p>
        <svg 
          width="40" 
          height="40" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="white" 
          strokeWidth="3" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <path d="M6 9l6 6 6-6"/>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
