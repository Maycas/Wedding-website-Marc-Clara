import React from 'react';
import { IconWelcome, IconCeremony, IconCocktail, IconDinner, IconParty } from './Icons';
import './Timeline.css';

const Timeline = () => {
  const events = [
    { time: '17:30', title: 'Benvinguda', icon: <IconWelcome /> },
    { time: '18:00', title: 'Cerimònia', icon: <IconCeremony /> },
    { time: '19:00', title: 'Cocktail', icon: <IconCocktail /> },
    { time: '20:00', title: 'Sopar', icon: <IconDinner /> },
    { time: '23:00', title: 'Festa', icon: <IconParty /> },
  ];

  return (
    <section id="timeline" className="timeline-section">
      <div className="container text-center">
        <p className="uppercase text-gold">Horari</p>
        <h2>El gran dia</h2>
        
        <div className="timeline-container">
          <div className="timeline-line"></div>
          
          <div className="timeline-items">
            {events.map((event, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-time">{event.time}</div>
                <div className="timeline-icon-wrapper">
                  {event.icon}
                </div>
                <h3 className="timeline-title">{event.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
