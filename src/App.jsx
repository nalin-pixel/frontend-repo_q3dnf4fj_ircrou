import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-base-100 text-base-content">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Contact />
      </main>
      <footer className="border-t border-base-200">
        <div className="container mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-base-content/60">© {new Date().getFullYear()} Acme Corp. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <a href="#services" className="link link-hover text-sm">Services</a>
            <a href="#about" className="link link-hover text-sm">About</a>
            <a href="#contact" className="btn btn-sm">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
