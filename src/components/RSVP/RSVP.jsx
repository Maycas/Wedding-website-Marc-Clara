import React from 'react';
import './RSVP.css';

const RSVP = () => {
  return (
    <section id="rsvp" style={{ backgroundColor: 'var(--color-white)' }}>
      <div className="container text-center">
        <p className="uppercase text-gold">Confirmació</p>
        <h2>T'esperem!</h2>
        <p className="mb-4">Tenim moltes ganes de veure-us, heu de venir!</p>
        
        <div className="rsvp-cta-container">
          <a 
            href="https://forms.gle/xKhRUFYx3ziS53PF6" 
            target="_blank"
            rel="noopener noreferrer"
            className="btn-rsvp"
          >
            Confirmar Assistència
          </a>
        </div>
      </div>
    </section>
  );
};

export default RSVP;
