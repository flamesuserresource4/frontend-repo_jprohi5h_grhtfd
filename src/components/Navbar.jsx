import React, { useState, useEffect } from 'react';
import { Bug, Menu, X, Search } from 'lucide-react';

const NavLink = ({ href, children, onClick }) => (
  <a
    href={href}
    onClick={onClick}
    className="text-sm md:text-base text-emerald-100/90 hover:text-white transition-colors px-3 py-2 rounded-md hover:bg-emerald-900/30"
  >
    {children}
  </a>
);

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${
      solid ? 'backdrop-blur bg-emerald-950/70 shadow-lg shadow-emerald-900/20' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#home" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-emerald-400 to-lime-500 flex items-center justify-center shadow-lg shadow-emerald-900/40 ring-1 ring-white/20">
              <Bug className="text-emerald-950" size={20} />
            </div>
            <div className="font-semibold text-white tracking-tight text-lg md:text-xl">PestHub</div>
          </a>

          <nav className="hidden md:flex items-center gap-2">
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#classify">Classify</NavLink>
            <NavLink href="#directory">Directory</NavLink>
            <NavLink href="#about">About</NavLink>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="#classify" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-400 to-lime-500 text-emerald-950 font-semibold shadow-xl shadow-emerald-900/30 hover:opacity-90 transition">
              <Search size={18} /> Try It Now
            </a>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg bg-emerald-900/40 text-white ring-1 ring-white/10"
            aria-label="Toggle navigation"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-emerald-950/90 backdrop-blur">
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-2">
            <NavLink href="#home" onClick={() => setOpen(false)}>Home</NavLink>
            <NavLink href="#classify" onClick={() => setOpen(false)}>Classify</NavLink>
            <NavLink href="#directory" onClick={() => setOpen(false)}>Directory</NavLink>
            <NavLink href="#about" onClick={() => setOpen(false)}>About</NavLink>
          </div>
        </div>
      )}
    </header>
  );
}
