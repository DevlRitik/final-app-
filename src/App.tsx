import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Founders from './components/Founders';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Founders />
      <Contact />
    </div>
  );
}

export default App;