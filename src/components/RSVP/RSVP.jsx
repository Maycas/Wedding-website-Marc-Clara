import React from 'react';
import './RSVP.css';


const RSVP = () => {
  return (
    <section id="rsvp" style={{ backgroundColor: 'var(--color-white)' }}>
      <div className="container text-center">
        <p className="uppercase text-gold">Confirmació</p>
        <h2>Us hi esperem!</h2>
        <p className="mb-2" style={{ fontSize: '1.2rem', fontStyle: 'italic' }}>Ara que heu rebut la invitació... ja no podeu dir que No!</p>
        <p className="mb-4" style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto 1.5rem' }}>
          Feu clic al botó de sota per obrir el formulari on podreu <strong>confirmar l'assistència</strong>, escollir el <strong>menú</strong>, indicar <strong>si necessitareu plaça d'aparcament</strong> i si us quedareu a <strong>fer nit a l'hotel</strong> Estela.
        </p>
        
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
