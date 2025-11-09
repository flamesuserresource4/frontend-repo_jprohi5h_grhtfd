import React from 'react';
import { Brain, Shield, Timer, Atom } from 'lucide-react';

export default function About() {
  const items = [
    { icon: <Brain />, title: 'Gemini Vision', desc: 'Multimodal understanding of images and text for precise pest recognition.' },
    { icon: <Timer />, title: 'Real-time', desc: 'Optimized pipeline returns results in under 3 seconds at 60fps UI responsiveness.' },
    { icon: <Shield />, title: 'Actionable', desc: 'Treatment and prevention guidance sourced from agronomy best practices.' },
    { icon: <Atom />, title: 'Continuous Learning', desc: 'Feedback loops improve accuracy over time with field data.' },
  ];

  return (
    <section id="about" className="relative py-20 bg-gradient-to-b from-black via-emerald-950 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold">How PestHub Works</h2>
          <p className="text-emerald-100/80 mt-2">A premium AI workflow designed for accuracy, speed, and trust.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((it, i) => (
            <div key={i} className="p-5 rounded-2xl bg-emerald-900/30 ring-1 ring-white/10 hover:bg-emerald-900/40 transition">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-emerald-400 to-lime-500 text-emerald-950 grid place-content-center mb-3">
                {it.icon}
              </div>
              <div className="font-semibold text-lg">{it.title}</div>
              <div className="text-emerald-100/80 text-sm">{it.desc}</div>
            </div>
          ))}
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-6 items-center">
          <div className="rounded-2xl overflow-hidden ring-1 ring-white/10 bg-emerald-900/30">
            <img src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=1600&auto=format&fit=crop" alt="Farm" className="w-full h-80 object-cover" />
          </div>
          <div>
            <h3 className="text-2xl font-bold">Why it’s better</h3>
            <ul className="mt-4 space-y-3 text-emerald-100/90">
              <li>• Higher precision from foundation models tuned for agriculture.</li>
              <li>• Transparent confidence with clear next steps.</li>
              <li>• Designed with farmers: simple, fast, and delightful.</li>
            </ul>
            <a href="#classify" className="mt-6 inline-block px-5 py-3 rounded-xl bg-gradient-to-r from-emerald-400 to-lime-500 text-emerald-950 font-semibold">Start Classifying</a>
          </div>
        </div>
      </div>
    </section>
  );
}
