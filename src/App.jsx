import React, { Suspense, lazy } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';

// Lazy load below-the-fold components
const Details = lazy(() => import('./components/Details/Details'));
const Timeline = lazy(() => import('./components/Timeline/Timeline'));
const Gifts = lazy(() => import('./components/Gifts/Gifts'));
const RSVP = lazy(() => import('./components/RSVP/RSVP'));
const Footer = lazy(() => import('./components/Footer/Footer'));

// Simple fallback component for Suspense
const SectionLoader = () => (
  <div style={{ padding: '100px 0', textAlign: 'center', color: 'var(--color-gold)' }}>
    Carregant secció...
  </div>
);

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Suspense fallback={<SectionLoader />}>
        <Details />
        <Timeline />
        <Gifts />
        <RSVP />
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
