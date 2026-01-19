import React from 'react';
import './Carousel.css';

import estela1 from '../../assets/estela1.jpg';
import estela2 from '../../assets/estela2.png';
import estela3 from '../../assets/estela3.png';
import estela4 from '../../assets/estela4.png';

const Carousel = () => {
  const images = [estela1, estela2, estela3, estela4];
  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="carousel-container">
      <div 
        className="carousel-track"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((img, index) => (
          <div key={index} className="carousel-card">
            <img src={img} alt={`Hotel Estela view ${index + 1}`} />
          </div>
        ))}
      </div>
      
      {/* Dots indicators */}
      <div className="carousel-dots">
        {images.map((_, index) => (
          <span 
            key={index} 
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
