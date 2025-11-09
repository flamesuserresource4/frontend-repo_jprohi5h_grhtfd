import React, { useRef, useState } from 'react';
import { ImagePlus, Loader2, CheckCircle2, Trash2 } from 'lucide-react';

function ProgressBar({ progress }) {
  return (
    <div className="w-full h-3 rounded-full bg-emerald-900/30 ring-1 ring-white/10 overflow-hidden">
      <div
        className="h-full bg-gradient-to-r from-emerald-400 to-lime-500 transition-[width] duration-300"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

export default function Classify() {
  const fileInput = useRef(null);
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState('');
  const [state, setState] = useState('idle'); // idle | preview | processing | result
  const [progress, setProgress] = useState(0);
  const [result, setResult] = useState(null);

  const onDrop = (e) => {
    e.preventDefault();
    const f = e.dataTransfer.files?.[0];
    if (f && f.type.startsWith('image/')) handleFile(f);
  };

  const handleFile = (f) => {
    setFile(f);
    const url = URL.createObjectURL(f);
    setPreview(url);
    setState('preview');
  };

  const onUploadChange = (e) => {
    const f = e.target.files?.[0];
    if (f) handleFile(f);
  };

  const startClassify = async () => {
    setState('processing');
    setProgress(0);

    // Simulate progress and result
    const steps = [10, 25, 40, 60, 80, 100];
    for (let i = 0; i < steps.length; i++) {
      await new Promise((r) => setTimeout(r, 300));
      setProgress(steps[i]);
    }

    // Simulated result
    setResult({
      name: 'Fall Armyworm',
      confidence: 0.96,
      description:
        'A migratory pest that causes significant damage to maize and other crops by feeding on foliage and reproductive structures.',
      actions: ['Inspect nearby leaves', 'Apply Bt-based bioinsecticide', 'Use pheromone traps'],
    });

    setState('result');
  };

  const reset = () => {
    setFile(null);
    setPreview('');
    setResult(null);
    setState('idle');
    setProgress(0);
    if (fileInput.current) fileInput.current.value = '';
  };

  return (
    <section id="classify" className="relative py-20 bg-gradient-to-b from-black via-emerald-950 to-black text-white">
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold">Classify a Pest</h2>
          <p className="text-emerald-100/80 mt-2">Upload an image to identify pests using Gemini AI.</p>
        </div>

        {state === 'idle' && (
          <div
            onDragOver={(e) => e.preventDefault()}
            onDrop={onDrop}
            className="relative group rounded-3xl border-2 border-dashed border-emerald-700/60 hover:border-emerald-500/80 transition bg-emerald-900/20 backdrop-blur p-10 text-center"
          >
            <div className="mx-auto h-20 w-20 rounded-2xl bg-emerald-800/50 grid place-content-center ring-1 ring-white/10">
              <ImagePlus size={36} className="text-emerald-300" />
            </div>
            <h3 className="mt-4 text-xl font-semibold">Drag & drop an image</h3>
            <p className="text-emerald-100/70">or click to browse</p>
            <input ref={fileInput} type="file" accept="image/*" onChange={onUploadChange} className="absolute inset-0 opacity-0 cursor-pointer" />
          </div>
        )}

        {state === 'preview' && (
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div className="rounded-2xl overflow-hidden ring-1 ring-white/10 bg-emerald-900/30">
              <img src={preview} alt="preview" className="w-full h-80 object-cover" />
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Ready to classify</h3>
              <p className="text-emerald-100/80">We will analyze the image and return the best match with confidence and treatment tips.</p>
              <div className="flex gap-3">
                <button onClick={startClassify} className="px-5 py-3 rounded-xl bg-gradient-to-r from-emerald-400 to-lime-500 text-emerald-950 font-semibold shadow-lg hover:opacity-90">Classify</button>
                <button onClick={reset} className="px-5 py-3 rounded-xl bg-white/10 ring-1 ring-white/10 hover:bg-white/15">Cancel</button>
              </div>
            </div>
          </div>
        )}

        {state === 'processing' && (
          <div className="rounded-2xl p-8 bg-emerald-900/30 ring-1 ring-white/10">
            <div className="flex items-center gap-3">
              <Loader2 className="animate-spin" />
              <div className="font-semibold">Analyzing image with Gemini…</div>
            </div>
            <div className="mt-6">
              <ProgressBar progress={progress} />
            </div>
          </div>
        )}

        {state === 'result' && result && (
          <div className="rounded-2xl p-6 bg-emerald-900/30 ring-1 ring-white/10">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-lime-400" />
                <div>
                  <div className="text-2xl font-bold">{result.name}</div>
                  <div className="text-emerald-100/80">Confidence: {(result.confidence * 100).toFixed(1)}%</div>
                </div>
              </div>
              <button onClick={reset} className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-red-500/10 text-red-300 ring-1 ring-red-500/30 hover:bg-red-500/20">
                <Trash2 size={18} /> New Image
              </button>
            </div>
            <p className="mt-4 text-emerald-100/90">{result.description}</p>
            <div className="mt-4">
              <div className="font-semibold mb-2">Recommended actions</div>
              <ul className="grid md:grid-cols-3 gap-2">
                {result.actions.map((a, i) => (
                  <li key={i} className="p-3 rounded-xl bg-black/30 ring-1 ring-white/10">{a}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
