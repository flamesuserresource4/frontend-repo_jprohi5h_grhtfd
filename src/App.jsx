import React from 'react';
import Hero from './components/Hero';
import Classify from './components/Classify';
import Directory from './components/Directory';
import About from './components/About';

function Footer() {
  return (
    <footer className="py-10 bg-black text-emerald-100/80">
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="font-semibold text-white">PestHub</div>
        <div className="text-sm">© {new Date().getFullYear()} PestHub. Protecting crops with AI.</div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-black font-['Inter','Manrope','Geist','IBM Plex Sans','system-ui']">
      <main>
        <Hero />
        <Classify />
        <Directory />
        <About />
      </main>
      <Footer />
    </div>
  );
}
