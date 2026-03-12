import React, { useState, useMemo } from 'react';
import './Gifts.css';
import { FiCopy, FiCheck } from 'react-icons/fi';
import BizumLogo from './BizumLogo';
import gokuFriezaJapanImg from '../../assets/goku_vs_frieza_japan.png';
import korinImg from '../../assets/korin.png';
import sushiImg from '../../assets/chibi_sushi.png';
import ramenImg from '../../assets/chibi_ramen.png';
import shinchanImg from '../../assets/chibi_shinchan.png';
import kinnikumanImg from '../../assets/chibi_kinnikuman.png';
import doraemonImg from '../../assets/chibi_doraemon.png';
import dorayakiImg from '../../assets/chibi_dorayaki.png';
import yawaraImg from '../../assets/chibi_yawara.png';
import taiyakiImg from '../../assets/chibi_taiyaki.png';

const initialChibis = [
  { src: korinImg, alt: "Follet Karin" },
  { src: sushiImg, alt: "Sushi Maco" },
  { src: dorayakiImg, alt: "Dorayaki" },
  { src: taiyakiImg, alt: "Taiyaki" },
  { src: yawaraImg, alt: "Yawara Inokuma" },
  { src: ramenImg, alt: "Fideus Ramen" },
  { src: doraemonImg, alt: "Doraemon" },
  { src: shinchanImg, alt: "Shin Chan" },
  { src: kinnikumanImg, alt: "Kinnikuman" }
];

const Gifts = () => {
  const [copied, setCopied] = useState(false);
  const iban = "ES93 1563 2626 3332 6968 3047";
  const rawIban = iban.replace(/\s/g, '');

  const shuffledChibis = useMemo(() => {
    const array = [...initialChibis];
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(rawIban)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch(err => {
        console.error('Failed to copy text: ', err);
      });
  };

  return (
    <section id="gifts" className="gifts-section fade-in">
      <div className="container text-center">
        <p className="uppercase text-gold">Llista de Noces</p>
        <h2>El Nostre Viatge</h2>
        
        <div className="gifts-icon">
          <img src={gokuFriezaJapanImg} alt="Goku i Freezer Xoc d'Energia al Japó" className="epic-clash-img" loading="lazy" />
        </div>
        
        <p className="gifts-message">
          El vostre millor regal és que ens acompanyeu en aquest dia tan especial! Però si, a més, voleu tenir un detall amb nosaltres i ajudar-nos a fer realitat <strong>el nostre gran viatge al Japó</strong>, us deixem el nostre número de compte.
        </p>

        <div className="gifts-details">
          <div className="bank-details">
            <h3>Transferència Bancària</h3>
            <div className="iban-container" onClick={handleCopy} title="Copia l'IBAN">
              <span className="iban-text">{iban}</span>
              <button className="copy-btn" aria-label="Copy IBAN">
                {copied ? <FiCheck className="icon-success" /> : <FiCopy />}
              </button>
            </div>
            {copied && <span className="copy-feedback">IBAN copiat!</span>}
            
            <div className="bizum-container">
              <p className="bizum-inline-text">
                <strong>També ens podeu fer</strong>
                <BizumLogo className="bizum-inline-logo" />
                <strong>(Clara o Marc)</strong>
              </p>
            </div>
          </div>
            
          <div className="japan-bottom-row">
            {shuffledChibis.map((chibi, index) => (
              <img key={index} src={chibi.src} alt={chibi.alt} className="japan-chibi-icon" loading="lazy" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gifts;
