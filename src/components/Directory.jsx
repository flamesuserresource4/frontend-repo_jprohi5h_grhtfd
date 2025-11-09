import React, { useMemo, useState } from 'react';
import { Filter, Grid, List, Search, X } from 'lucide-react';

const DEFAULT_PESTS = [
  { id: 1, name: 'Fall Armyworm', category: 'Insect', threat: 'High', img: 'https://images.unsplash.com/photo-1592997578267-b7b10a87c04f?q=80&w=1200&auto=format&fit=crop' },
  { id: 2, name: 'Aphid', category: 'Insect', threat: 'Medium', img: 'https://images.unsplash.com/photo-1548085327-75a1020d6ad6?q=80&w=1200&auto=format&fit=crop' },
  { id: 3, name: 'Spider Mite', category: 'Arachnid', threat: 'Medium', img: 'https://images.unsplash.com/photo-1608703778423-9be3e9fffc86?q=80&w=1200&auto=format&fit=crop' },
  { id: 4, name: 'Locust', category: 'Insect', threat: 'High', img: 'https://images.unsplash.com/photo-1573751620297-610b5db41bd4?q=80&w=1200&auto=format&fit=crop' },
  { id: 5, name: 'Whitefly', category: 'Insect', threat: 'Medium', img: 'https://images.unsplash.com/photo-1584273144300-6e1d169ec404?q=80&w=1200&auto=format&fit=crop' },
  { id: 6, name: 'Cutworm', category: 'Insect', threat: 'Low', img: 'https://images.unsplash.com/photo-1510906594845-b742b3eaf2b1?q=80&w=1200&auto=format&fit=crop' },
  { id: 7, name: 'Leaf Miner', category: 'Insect', threat: 'Low', img: 'https://images.unsplash.com/photo-1600172454660-1640a4fb7a19?q=80&w=1200&auto=format&fit=crop' },
  { id: 8, name: 'Stink Bug', category: 'Insect', threat: 'Low', img: 'https://images.unsplash.com/photo-1607392230461-9f93b7ca2c5d?q=80&w=1200&auto=format&fit=crop' },
  { id: 9, name: 'Weevil', category: 'Insect', threat: 'Medium', img: 'https://images.unsplash.com/photo-1625519184859-7efd9c389156?q=80&w=1200&auto=format&fit=crop' },
  { id: 10, name: 'Thrips', category: 'Insect', threat: 'Medium', img: 'https://images.unsplash.com/photo-1625500282684-7832833e3a84?q=80&w=1200&auto=format&fit=crop' },
  { id: 11, name: 'Caterpillar', category: 'Insect', threat: 'Low', img: 'https://images.unsplash.com/photo-1561149871-2c1b48d5b01c?q=80&w=1200&auto=format&fit=crop' },
  { id: 12, name: 'Grasshopper', category: 'Insect', threat: 'Medium', img: 'https://images.unsplash.com/photo-1602263575307-40fc6ff9db2c?q=80&w=1200&auto=format&fit=crop' },
];

function Badge({ color, children }) {
  return (
    <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${color}`}>{children}</span>
  );
}

function PestCard({ pest, view }) {
  return (
    <div className={`group rounded-2xl overflow-hidden bg-emerald-900/20 ring-1 ring-white/10 hover:ring-white/20 transition ${
      view === 'grid' ? '' : 'flex gap-4'
    }`}>
      <div className={`${view === 'grid' ? 'h-40' : 'h-28 w-40'} overflow-hidden`}> 
        <img src={pest.img} alt={pest.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
      </div>
      <div className="p-4 flex-1">
        <div className="flex items-center justify-between gap-2">
          <div className="text-lg font-semibold text-white">{pest.name}</div>
          <div className="flex items-center gap-2">
            <Badge color="bg-emerald-500/20 text-emerald-300 ring-1 ring-emerald-400/30">{pest.category}</Badge>
            <Badge color="bg-lime-500/20 text-lime-300 ring-1 ring-lime-400/30">{pest.threat}</Badge>
          </div>
        </div>
        <div className="mt-3 flex gap-2">
          <a href="#detail" className="px-3 py-1.5 rounded-lg bg-white/10 ring-1 ring-white/10 text-white hover:bg-white/15">Quick Preview</a>
          <a href="#detail" className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-emerald-400 to-lime-500 text-emerald-950 font-semibold">View Details</a>
        </div>
      </div>
    </div>
  );
}

export default function Directory() {
  const [query, setQuery] = useState('');
  const [cat, setCat] = useState('All');
  const [threat, setThreat] = useState('All');
  const [view, setView] = useState('grid');
  const [openModal, setOpenModal] = useState(false);

  const filtered = useMemo(() => {
    return DEFAULT_PESTS.filter((p) =>
      (cat === 'All' || p.category === cat) &&
      (threat === 'All' || p.threat === threat) &&
      p.name.toLowerCase().includes(query.toLowerCase())
    );
  }, [query, cat, threat]);

  return (
    <section id="directory" className="relative py-20 bg-gradient-to-b from-black via-emerald-950 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold">Pest Directory</h2>
            <p className="text-emerald-100/80 mt-2">Search, filter and explore common agricultural pests.</p>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={() => setView('grid')} className={`p-2 rounded-lg ring-1 ring-white/10 ${view==='grid'?'bg-white/15':''}`} aria-label="Grid view"><Grid size={18} /></button>
            <button onClick={() => setView('list')} className={`p-2 rounded-lg ring-1 ring-white/10 ${view==='list'?'bg-white/15':''}`} aria-label="List view"><List size={18} /></button>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-3 mb-6">
          <div className="md:col-span-2 flex items-center gap-2 bg-white/5 ring-1 ring-white/10 rounded-xl px-3">
            <Search className="text-emerald-200" />
            <input value={query} onChange={(e)=>setQuery(e.target.value)} placeholder="Search pests by name" className="w-full bg-transparent outline-none py-2 text-white placeholder:text-emerald-200/60" />
          </div>
          <select value={cat} onChange={(e)=>setCat(e.target.value)} className="bg-white/5 ring-1 ring-white/10 rounded-xl px-3 py-2"> 
            {['All','Insect','Arachnid'].map(o=> <option key={o} value={o}>{o}</option>)}
          </select>
          <select value={threat} onChange={(e)=>setThreat(e.target.value)} className="bg-white/5 ring-1 ring-white/10 rounded-xl px-3 py-2"> 
            {['All','Low','Medium','High'].map(o=> <option key={o} value={o}>{o}</option>)}
          </select>
        </div>

        <div className={`grid ${view==='grid' ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'} gap-4`}>
          {filtered.map((p) => (
            <PestCard key={p.id} pest={p} view={view} />
          ))}
        </div>

        <div className="text-center mt-10">
          <button onClick={()=>setOpenModal(true)} className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-400 to-lime-500 text-emerald-950 font-semibold"><Filter size={16}/> Custom Search</button>
        </div>

        {openModal && (
          <div className="fixed inset-0 z-[60] grid place-items-center bg-black/60 backdrop-blur">
            <div className="w-full max-w-lg rounded-2xl bg-emerald-950 ring-1 ring-white/10 p-6">
              <div className="flex items-center justify-between">
                <div className="text-xl font-bold">AI Custom Search</div>
                <button onClick={()=>setOpenModal(false)} className="p-2 rounded-lg hover:bg-white/10"><X/></button>
              </div>
              <p className="text-emerald-100/80 mt-1">Describe the pest and we’ll generate validated information.</p>
              <div className="mt-4 bg-white/5 ring-1 ring-white/10 rounded-xl flex items-center gap-2 px-3">
                <Search className="text-emerald-200" />
                <input placeholder="e.g., small green insect on tomato leaves" className="w-full bg-transparent outline-none py-2 text-white placeholder:text-emerald-200/60" />
              </div>
              <div className="mt-4 flex justify-end gap-2">
                <button onClick={()=>setOpenModal(false)} className="px-4 py-2 rounded-lg bg-white/10 ring-1 ring-white/10">Cancel</button>
                <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-emerald-400 to-lime-500 text-emerald-950 font-semibold">Generate</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
