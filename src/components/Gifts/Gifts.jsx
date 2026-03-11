import React, { useState } from 'react';
import './Gifts.css';
import { FiCopy, FiCheck } from 'react-icons/fi';
import gokuFriezaJapanImg from '../../assets/goku_vs_frieza_japan.png';
import korinImg from '../../assets/korin.png';
import sushiImg from '../../assets/chibi_sushi.png';
import ramenImg from '../../assets/chibi_ramen.png';
import shinchanImg from '../../assets/chibi_shinchan.png';
import kinnikumanImg from '../../assets/chibi_kinnikuman.png';
import doraemonImg from '../../assets/chibi_doraemon.png';
import dorayakiImg from '../../assets/chibi_dorayaki.png';

const Gifts = () => {
  const [copied, setCopied] = useState(false);
  const iban = "ES93 1563 2626 3332 6968 3047";
  const rawIban = iban.replace(/\s/g, '');

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
          <img src={gokuFriezaJapanImg} alt="Goku i Freezer Xoc d'Energia al Japó" className="epic-clash-img" />
        </div>
        
        <p className="gifts-message">
          El vostre millor regal és que ens acompanyeu en aquest dia tan especial! Però si, a més, voleu tenir un detall amb nosaltres i ajudar-nos a fer realitat el nostre gran viatge al <strong>Japó</strong>, us deixem el nostre número de compte per a transferències, o bé ens podeu fer un Bizum a qualsevol dels dos.
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
                <svg width="60" height="18" viewBox="0 0 122 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Bizum" className="bizum-inline-logo">
                  <path fillRule="evenodd" clipRule="evenodd" d="M59.8625 12.8257c-1.0347 0-1.8704.8358-1.8704 1.8308v13.8113c0 1.0348.8357 1.8707 1.8704 1.8707s1.8704-.8359 1.8704-1.8707V14.6565c0-.995-.8357-1.8308-1.8704-1.8308Zm-.0001-6.88561c-1.154 0-2.1091.95524-2.1091 2.1095 0 1.15425.9551 2.14931 2.1091 2.14931 1.1541 0 2.1092-.95526 2.1092-2.14931 0-1.15426-.9551-2.1095-2.1092-2.1095ZM78.089 14.6566c0-1.1543-.9153-1.5921-1.751-1.5921h-9.2725c-.9153 0-1.6316.7164-1.6316 1.5921 0 .9154.7163 1.6319 1.6316 1.6319h6.0888l-7.8796 10.9853c-.2388.3184-.3581.7562-.3581 1.1144 0 1.1543.9153 1.7911 1.7112 1.7911h9.8296c.9153 0 1.6316-.7164 1.6316-1.6319 0-.9154-.7163-1.6318-1.6316-1.6318h-6.6062l7.7204-10.7466c.398-.5572.5174-1.0348.5174-1.5124Zm-27.3 8.6769c0 2.2687-.9949 3.6618-3.2633 3.6618-2.2683 0-3.2234-1.3931-3.2234-3.6618v-7.045h3.3826c2.7459 0 3.1041 1.5125 3.1041 3.1842v3.8608Zm3.7408-3.9404c0-3.8608-2.0296-6.3683-6.7653-6.3683h-3.4224V7.81078c0-1.03485-.8357-1.87069-1.8306-1.87069-1.0347 0-1.8704.83584-1.8704 1.87069V23.3335c0 3.8608 2.0693 7.0051 6.9642 7.0051 4.8551 0 6.9643-3.1841 6.9643-7.0051v-3.9404h-.0398Zm38.1642-6.5674c-1.0346 0-1.8704.8358-1.8704 1.8706v8.6371c0 2.2687-.9949 3.6617-3.2632 3.6617-2.2684 0-3.2235-1.393-3.2235-3.6617v-8.6371c0-1.0348-.8357-1.8706-1.8306-1.8706-1.0347 0-1.8704.8358-1.8704 1.8706v8.6371c0 3.8607 2.0694 7.0051 6.9643 7.0051 4.8551 0 6.9642-3.1842 6.9642-7.0051v-8.6371c-.0397-1.0348-.8755-1.8706-1.8704-1.8706Zm28.374 7.0451c0-3.8608-1.79-7.0052-6.645-7.0052-2.189 0-3.741.6369-4.816 1.7115-1.074-1.0348-2.626-1.7115-4.815-1.7115-4.8552 0-6.646 3.1842-6.646 7.0052v8.637c0 1.0348.8357 1.8707 1.8306 1.8707 1.0344 0 1.8704-.8359 1.8704-1.8707v-8.637c0-2.2687.716-3.6618 2.945-3.6618 2.268 0 2.945 1.3931 2.945 3.6618v8.637c0 1.0348.836 1.8707 1.83 1.8707 1.035 0 1.871-.8359 1.871-1.8707v-8.637c0-2.2687.716-3.6618 2.945-3.6618 2.268 0 2.945 1.3931 2.945 3.6618v8.637c0 1.0348.835 1.8707 1.83 1.8707 1.035 0 1.871-.8359 1.871-1.8707l.039-8.637ZM6.61567 12.8655c1.31327.9553 3.14387.6767 4.09893-.6368l3.4225-4.73643c.9551-1.31346.6765-3.14434-.6367-4.09959-1.3133-.95524-3.1439-.67663-4.09902.63683L5.93914 8.76593c-.9153 1.31347-.63673 3.14437.67653 4.09957ZM22.2952 6.17881c-1.3133-.95524-3.1439-.67663-4.099.63683L4.42685 25.7613c-.9551 1.3135-.67653 3.1444.63673 4.0996 1.31326.9553 3.14387.6767 4.09897-.6368L22.9319 10.2784c.9949-1.31345.6765-3.14434-.6367-4.09959ZM5.3024 4.66637c.9551-1.31346.67652-3.14435-.63674-4.099591C3.3524-.388466 1.52179-.109853.566693 1.20361c-.9551 1.31346-.676529 3.14435.636737 4.09959 1.31326.95525 3.14387.67663 4.09897-.63683ZM26.1952 30.6968c-1.3132-.9553-3.1438-.6766-4.0989.6368-.9551 1.3135-.6766 3.1444.6367 4.0996 1.3133.9553 3.1439.6766 4.099-.6368.9551-1.3135.6765-3.1444-.6368-4.0996Zm-5.3724-7.5226c-1.3132-.9552-3.1438-.6766-4.0989.6369l-3.4623 4.7364c-.9551 1.3134-.6765 3.1443.6367 4.0996 1.3133.9552 3.1439.6766 4.099-.6369l3.4623-4.7364c.9551-1.3134.6765-3.1443-.6368-4.0996Z" fill="#05C0C7"/>
                </svg>
                <strong>(Clara o Marc)</strong>
              </p>
            </div>
            
            <div className="japan-bottom-row">
              <img src={korinImg} alt="Follet Karin" className="japan-chibi-icon" />
              <img src={sushiImg} alt="Sushi Maco" className="japan-chibi-icon" />
              <img src={dorayakiImg} alt="Dorayaki" className="japan-chibi-icon" />
              <img src={ramenImg} alt="Fideus Ramen" className="japan-chibi-icon" />
              <img src={doraemonImg} alt="Doraemon" className="japan-chibi-icon" />
              <img src={shinchanImg} alt="Shin Chan" className="japan-chibi-icon" />
              <img src={kinnikumanImg} alt="Kinnikuman" className="japan-chibi-icon" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gifts;
