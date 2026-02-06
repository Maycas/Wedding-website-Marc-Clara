import React from 'react';
import './RSVP.css';


const RSVP = () => {
  const handleGoogleCalendar = () => {
    const event = {
      action: 'TEMPLATE',
      text: '💛 Casament Clara & Marc 💛',
      dates: '20260523T153000Z/20260524T010000Z',
      details: "Confirmació d'assistència: https://forms.gle/xKhRUFYx3ziS53PF6",
      location: 'Hotel Estela Barcelona, Av. Port d\'Aiguadolç, 8, 08870 Sitges, Barcelona',
      trp: 'false', // Busy
    };

    const queryString = new URLSearchParams(event).toString();
    const googleCalendarUrl = `https://calendar.google.com/calendar/render?${queryString}`;
    
    window.open(googleCalendarUrl, '_blank');
  };

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
        
        <div className="calendar-link-container">
           <button onClick={handleGoogleCalendar} className="btn-calendar-link">
             <span>Guarda't el dia!</span>
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
             </svg>
           </button>
        </div>

      </div>
    </section>
  );
};

export default RSVP;
