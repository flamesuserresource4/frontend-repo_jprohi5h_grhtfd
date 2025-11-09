import React from 'react';
import { Sparkles, ShieldCheck, Zap } from 'lucide-react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative pt-28 md:pt-36 pb-20 md:pb-28 bg-gradient-to-b from-emerald-900 via-emerald-950 to-black text-white overflow-hidden">
      <div className="absolute inset-0 opacity-60">
        <Spline scene="https://prod.spline.design/9e06K3ZSW9q0f-wf/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-emerald-950/40 to-black" />

      <div className="relative max-w-7xl mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 ring-1 ring-white/20 backdrop-blur mb-5">
            <Sparkles size={16} className="text-emerald-300" />
            <span className="text-emerald-100 text-sm">AI-powered pest protection</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
            Defend your crops with instant AI pest identification
          </h1>
          <p className="mt-4 md:mt-6 text-emerald-100/90 text-lg md:text-xl max-w-xl">
            Upload an image or search by name. Get accurate identification, treatment recommendations, and prevention strategies in seconds.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a href="#classify" className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-emerald-400 to-lime-500 text-emerald-950 font-bold shadow-xl shadow-emerald-900/30 hover:opacity-90 transition">
              <Zap size={18} /> Try PestHub Free
            </a>
            <a href="#directory" className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/10 text-white ring-1 ring-white/15 hover:bg-white/15 transition">
              <ShieldCheck size={18} /> Browse Pests
            </a>
          </div>

          <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              { title: '95%+ accuracy', desc: 'Gemini-powered insights' },
              { title: '< 3 seconds', desc: 'Lightning fast results' },
              { title: 'Actionable', desc: 'Treatments & prevention' },
            ].map((b, i) => (
              <div key={i} className="group p-4 rounded-2xl bg-white/5 ring-1 ring-white/10 hover:bg-white/10 transition">
                <div className="text-lg font-semibold">{b.title}</div>
                <div className="text-emerald-100/80 text-sm">{b.desc}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative rounded-3xl overflow-hidden ring-1 ring-white/10 shadow-2xl shadow-emerald-900/30">
          <img src="https://images.unsplash.com/photo-1498408040764-ab6eb772a145?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxDcm9wc3xlbnwwfDB8fHwxNzYyNjU0NjA3fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Crops" className="w-full h-[420px] object-cover" />
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        </div>
      </div>
    </section>
  );
}
