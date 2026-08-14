import React, { useState } from 'react';
import { Calculator, ArrowRight, ShieldCheck, Download, CheckCircle, RefreshCw } from 'lucide-react';

// 1. Ra Surface Finish Converter Tool
export function RaConverterTool() {
  const [val, setVal] = useState('0.38');
  const [unit, setUnit] = useState('um');

  const numVal = parseFloat(val) || 0;
  const um = unit === 'um' ? numVal : numVal * 0.0254;
  const uin = unit === 'uin' ? numVal : numVal / 0.0254;

  let sfRating = "Non-BPE Standard";
  if (um <= 0.38) sfRating = "ASME BPE SF4 (Ra ≤ 0.38 µm / 15 µin) - Electropolished";
  else if (um <= 0.51) sfRating = "ASME BPE SF5 (Ra ≤ 0.51 µm / 20 µin) - Electropolished";
  else if (um <= 0.64) sfRating = "ASME BPE SF6 (Ra ≤ 0.64 µm / 25 µin) - Electropolished";
  else if (um <= 0.76) sfRating = "ASME BPE SF1 (Ra ≤ 0.76 µm / 30 µin) - Mechanical Polish";
  else if (um <= 0.89) sfRating = "ASME BPE SF2 (Ra ≤ 0.89 µm / 35 µin) - Mechanical Polish";

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 text-white shadow-xl my-8">
      <div className="flex items-center space-x-3 mb-6 border-b border-slate-800 pb-4">
        <div className="p-3 bg-blue-600/20 text-blue-400 rounded-xl border border-blue-500/30">
          <Calculator className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-xl font-bold">Ra Surface Finish Unit Converter</h3>
          <p className="text-sm text-slate-400">Convert between Microns (µm) and Microinches (µin) & match ASME BPE SF ratings</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end mb-8">
        <div>
          <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Input Value</label>
          <input
            type="number"
            step="0.01"
            value={val}
            onChange={(e) => setVal(e.target.value)}
            className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white text-lg focus:outline-none focus:border-blue-500 font-mono"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Input Unit</label>
          <select
            value={unit}
            onChange={(e) => setUnit(e.target.value)}
            className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white text-lg focus:outline-none focus:border-blue-500"
          >
            <option value="um">Micrometres / Microns (µm)</option>
            <option value="uin">Microinches (µin)</option>
          </select>
        </div>
        <div>
          <button
            onClick={() => { setVal('0.38'); setUnit('um'); }}
            className="w-full flex items-center justify-center space-x-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-300 py-3 rounded-xl transition"
          >
            <RefreshCw className="w-4 h-4" />
            <span>Reset to ASME BPE SF4</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        <div className="bg-slate-800/80 rounded-xl p-4 border border-slate-700/50">
          <span className="text-xs text-slate-400 block mb-1">Micrometres (µm)</span>
          <span className="text-2xl font-bold font-mono text-blue-400">{um.toFixed(3)} µm</span>
        </div>
        <div className="bg-slate-800/80 rounded-xl p-4 border border-slate-700/50">
          <span className="text-xs text-slate-400 block mb-1">Microinches (µin)</span>
          <span className="text-2xl font-bold font-mono text-cyan-400">{uin.toFixed(1)} µin</span>
        </div>
        <div className="bg-slate-800/80 rounded-xl p-4 border border-slate-700/50 sm:col-span-2 lg:col-span-1">
          <span className="text-xs text-slate-400 block mb-1">ASME BPE Designation</span>
          <span className="text-sm font-semibold text-emerald-400 block leading-tight">{sfRating}</span>
        </div>
      </div>

      <div className="bg-blue-950/40 border border-blue-800/40 rounded-xl p-4 text-xs text-blue-300 flex items-center space-x-2">
        <ShieldCheck className="w-5 h-5 text-blue-400 shrink-0" />
        <span>Sakshi Forge supplies electropolished pipes certified to Ra ≤ 0.38 µm (15 µin) with profilometer inspection report provided per batch.</span>
      </div>
    </div>
  );
}

// 2. SS Pipe Weight Calculator Tool
export function PipeWeightCalculatorTool() {
  const [od, setOd] = useState('25.4'); // 1 inch
  const [wt, setWt] = useState('1.65'); // 16 SWG
  const [len, setLen] = useState('6'); // 6 metres standard

  const odNum = parseFloat(od) || 0;
  const wtNum = parseFloat(wt) || 0;
  const lenNum = parseFloat(len) || 0;

  // Weight formula for SS pipe: (OD - WT) * WT * 0.02466 * length (kg) for 304/316
  const weightPerMetre = (odNum - wtNum) * wtNum * 0.02466;
  const totalWeight = weightPerMetre * lenNum;

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 text-white shadow-xl my-8">
      <div className="flex items-center space-x-3 mb-6 border-b border-slate-800 pb-4">
        <div className="p-3 bg-emerald-600/20 text-emerald-400 rounded-xl border border-emerald-500/30">
          <Calculator className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-xl font-bold">Stainless Steel Pipe & Tube Weight Calculator</h3>
          <p className="text-sm text-slate-400">Calculate exact weight in kg/m and total pipe weight for SS 304L & SS 316L</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div>
          <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Outside Diameter (OD in mm)</label>
          <input
            type="number"
            step="0.1"
            value={od}
            onChange={(e) => setOd(e.target.value)}
            className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white text-lg focus:outline-none focus:border-emerald-500 font-mono"
            placeholder="e.g. 25.4"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Wall Thickness (WT in mm)</label>
          <input
            type="number"
            step="0.01"
            value={wt}
            onChange={(e) => setWt(e.target.value)}
            className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white text-lg focus:outline-none focus:border-emerald-500 font-mono"
            placeholder="e.g. 1.65"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Pipe Length (Metres)</label>
          <input
            type="number"
            step="0.5"
            value={len}
            onChange={(e) => setLen(e.target.value)}
            className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white text-lg focus:outline-none focus:border-emerald-500 font-mono"
            placeholder="e.g. 6"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <div className="bg-slate-800/80 rounded-xl p-5 border border-slate-700/50">
          <span className="text-xs text-slate-400 block mb-1">Weight per Metre</span>
          <span className="text-3xl font-bold font-mono text-emerald-400">{weightPerMetre > 0 ? weightPerMetre.toFixed(3) : '0.000'} kg/m</span>
        </div>
        <div className="bg-slate-800/80 rounded-xl p-5 border border-slate-700/50">
          <span className="text-xs text-slate-400 block mb-1">Total Pipe Weight ({lenNum}m Pipe)</span>
          <span className="text-3xl font-bold font-mono text-cyan-400">{totalWeight > 0 ? totalWeight.toFixed(2) : '0.00'} kg</span>
        </div>
      </div>

      <div className="text-xs text-slate-400 flex items-center justify-between border-t border-slate-800 pt-4">
        <span>Formula: W (kg/m) = (OD - WT) × WT × 0.02466 (Density: 7.93 g/cm³)</span>
        <span className="text-emerald-400 font-medium">SS 316L / SS 304L Compliant</span>
      </div>
    </div>
  );
}
