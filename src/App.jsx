import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Details from './components/Details/Details';
import Timeline from './components/Timeline/Timeline';
import RSVP from './components/RSVP/RSVP';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Details />
      <Timeline />
      <RSVP />
      <Footer />
    </div>
  );
}

export default App;
