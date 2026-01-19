import React from 'react';
import './Details.css';
import Carousel from './Carousel';

const Details = () => {
  return (
    <section id="details">
      <div className="container text-center">
        <p className="uppercase text-gold">Els Detalls</p>
        <h2>Quan i On</h2>
        
        <div className="details-grid">
          <div className="detail-item">
            <h3>Dia</h3>
            <p className="detail-text">Dissabte, 23 de Maig, 2026</p>
          </div>
          
          <div className="detail-line"></div>
          
          <div className="detail-item">
            <h3>Hora</h3>
            <p className="detail-text">17:30h</p>
          </div>
          
          <div className="detail-line"></div>
          
          <div className="detail-item">
            <h3>Lloc</h3>
            <p className="detail-text">
              <a 
                href="https://hotelestela.com/ca/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hotel-link"
              >
                Hotel Estela Barcelona
              </a>
            </p>
            <p className="detail-subtext">Av. Port d'Aiguadolç, 8, Sitges</p>
          </div>
        </div>

        {/* Hotel Carousel */}
        <Carousel />

        <div className="map-container">
          <iframe 
            width="100%" 
            height="450" 
            frameBorder="0" 
            scrolling="no" 
            marginHeight="0" 
            marginWidth="0" 
            src="https://maps.google.com/maps?q=Hotel+Estela+Barcelona+Sitges&t=&z=15&ie=UTF8&iwloc=&output=embed"
            title="Location Map"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Details;
