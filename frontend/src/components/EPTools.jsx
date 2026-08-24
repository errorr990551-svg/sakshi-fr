import React, { useState, useRef, useEffect } from 'react';
import { Calculator, ShieldCheck, RefreshCw, FileText, Scale, Layers, Sparkles, ChevronDown, Check } from 'lucide-react';

// Reusable Custom Glassmorphic Dropdown Component - Yellow/Gold Theme
function CustomSelect({ options, value, onChange, placeholder = "Select..." }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const selectedOption = options.find(o => o.value === value) || options[0];

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative w-full" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-slate-950 border border-slate-700/80 rounded-xl px-4 py-3 text-white text-sm font-semibold hover:border-yellow-500 focus:border-yellow-500 focus:outline-none transition flex items-center justify-between shadow-sm"
      >
        <span className="truncate">{selectedOption ? selectedOption.label : placeholder}</span>
        <ChevronDown className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ml-2 ${isOpen ? 'rotate-180 text-yellow-400' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute z-50 left-0 right-0 mt-1.5 bg-slate-900/98 border border-slate-700 rounded-xl shadow-2xl overflow-y-auto max-h-60 p-1.5 backdrop-blur-xl">
          {options.map((opt) => {
            const isSelected = opt.value === value;
            return (
              <div
                key={opt.value}
                onClick={() => {
                  onChange(opt.value);
                  setIsOpen(false);
                }}
                className={`px-3.5 py-2.5 rounded-lg text-sm transition flex items-center justify-between cursor-pointer my-0.5 ${
                  isSelected
                    ? 'bg-yellow-500/20 text-yellow-400 font-semibold border border-yellow-500/40'
                    : 'text-slate-200 hover:bg-yellow-500/15 hover:text-yellow-300'
                }`}
              >
                <span className="truncate">{opt.label}</span>
                {isSelected && <Check className="w-4 h-4 text-yellow-400 shrink-0 ml-2" />}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

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

  const unitOptions = [
    { value: 'um', label: 'Micrometres / Microns (µm)' },
    { value: 'uin', label: 'Microinches (µin)' }
  ];

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 text-white shadow-xl my-8">
      <div className="flex items-center space-x-3 mb-6 border-b border-slate-800 pb-4">
        <div className="p-3 bg-yellow-500/20 text-yellow-400 rounded-xl border border-yellow-500/30">
          <Calculator className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-white">Ra Surface Finish Unit Converter</h3>
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
            className="w-full bg-slate-950 border border-slate-700/80 rounded-xl px-4 py-3 text-white text-lg focus:outline-none focus:border-yellow-500 font-mono shadow-inner"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Input Unit</label>
          <CustomSelect
            options={unitOptions}
            value={unit}
            onChange={(newVal) => setUnit(newVal)}
          />
        </div>
        <div>
          <button
            onClick={() => { setVal('0.38'); setUnit('um'); }}
            className="w-full flex items-center justify-center space-x-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-300 py-3 rounded-xl transition font-medium"
          >
            <RefreshCw className="w-4 h-4" />
            <span>Reset to ASME BPE SF4</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        <div className="bg-slate-800/80 rounded-xl p-4 border border-slate-700/50">
          <span className="text-xs text-slate-400 block mb-1">Micrometres (µm)</span>
          <span className="text-2xl font-bold font-mono text-yellow-400">{um.toFixed(3)} µm</span>
        </div>
        <div className="bg-slate-800/80 rounded-xl p-4 border border-slate-700/50">
          <span className="text-xs text-slate-400 block mb-1">Microinches (µin)</span>
          <span className="text-2xl font-bold font-mono text-amber-400">{uin.toFixed(1)} µin</span>
        </div>
        <div className="bg-slate-800/80 rounded-xl p-4 border border-slate-700/50 sm:col-span-2 lg:col-span-1">
          <span className="text-xs text-slate-400 block mb-1">ASME BPE Designation</span>
          <span className="text-sm font-semibold text-yellow-400 block leading-tight">{sfRating}</span>
        </div>
      </div>

      <div className="bg-slate-950 border border-yellow-500/30 rounded-xl p-4 text-xs text-slate-300 flex items-center space-x-2">
        <ShieldCheck className="w-5 h-5 text-yellow-400 shrink-0" />
        <span>Sakshi Forge supplies electropolished pipes certified to Ra ≤ 0.38 µm (15 µin) with profilometer inspection report provided per batch.</span>
      </div>
    </div>
  );
}

// 2. Advanced Stainless Steel Pipe & Tube Weight Calculator
const PIPE_SCHEDULE_DATABASE = [
  { nps: '1/2"', nb: '15', od_mm: 21.3, sch5s: 1.65, sch10s: 2.11, sch40s: 2.77, sch80s: 3.73 },
  { nps: '3/4"', nb: '20', od_mm: 26.7, sch5s: 1.65, sch10s: 2.11, sch40s: 2.87, sch80s: 3.91 },
  { nps: '1"', nb: '25', od_mm: 33.4, sch5s: 1.65, sch10s: 2.77, sch40s: 3.38, sch80s: 4.55 },
  { nps: '1.25"', nb: '32', od_mm: 42.2, sch5s: 1.65, sch10s: 2.77, sch40s: 3.56, sch80s: 4.85 },
  { nps: '1.5"', nb: '40', od_mm: 48.3, sch5s: 1.65, sch10s: 2.77, sch40s: 3.68, sch80s: 5.08 },
  { nps: '2"', nb: '50', od_mm: 60.3, sch5s: 1.65, sch10s: 2.77, sch40s: 3.91, sch80s: 5.54 },
  { nps: '2.5"', nb: '65', od_mm: 73.0, sch5s: 2.11, sch10s: 3.05, sch40s: 5.16, sch80s: 7.01 },
  { nps: '3"', nb: '80', od_mm: 88.9, sch5s: 2.11, sch10s: 3.05, sch40s: 5.49, sch80s: 7.62 },
  { nps: '4"', nb: '100', od_mm: 114.3, sch5s: 2.11, sch10s: 3.05, sch40s: 6.02, sch80s: 8.56 },
  { nps: '5"', nb: '125', od_mm: 141.3, sch5s: 2.77, sch10s: 3.41, sch40s: 6.55, sch80s: 9.53 },
  { nps: '6"', nb: '150', od_mm: 168.3, sch5s: 2.77, sch10s: 3.41, sch40s: 7.11, sch80s: 10.97 },
  { nps: '8"', nb: '200', od_mm: 219.1, sch5s: 2.77, sch10s: 3.76, sch40s: 8.18, sch80s: 12.70 },
  { nps: '10"', nb: '250', od_mm: 273.1, sch5s: 3.41, sch10s: 4.19, sch40s: 9.27, sch80s: 15.09 },
  { nps: '12"', nb: '300', od_mm: 323.8, sch5s: 3.96, sch10s: 4.57, sch40s: 9.53, sch80s: 17.48 }
];

const MATERIAL_GRADES = [
  { name: 'SS 304 / 304L (UNS S30403)', density: 7.93, category: 'Austenitic Stainless Steel' },
  { name: 'SS 316 / 316L (UNS S31603)', density: 7.98, category: 'Austenitic Stainless Steel (EP Spec)' },
  { name: 'SS 321 / 321H (UNS S32100)', density: 7.93, category: 'Austenitic Stainless Steel' },
  { name: 'SS 310S / 310 (UNS S31008)', density: 7.98, category: 'High Temp Stainless Steel' },
  { name: 'Duplex 2205 (UNS S32205)', density: 7.80, category: 'Duplex Stainless Steel' },
  { name: 'Super Duplex 2507 (UNS S32750)', density: 7.80, category: 'Super Duplex Steel' },
  { name: 'Carbon Steel (ASTM A106/A53)', density: 7.85, category: 'Carbon Steel' },
  { name: 'Titanium Gr 2 / Gr 5', density: 4.51, category: 'Titanium Alloy' },
  { name: 'Inconel 625 (UNS N06625)', density: 8.44, category: 'Nickel Superalloy' },
  { name: 'Monel 400 (UNS N04400)', density: 8.80, category: 'Nickel-Copper Alloy' }
];

export function PipeWeightCalculatorTool({ onEnquireClick }) {
  const [unitSystem, setUnitSystem] = useState('metric'); // 'metric' (mm, m, kg) or 'imperial' (in, ft, lbs)
  const [selectedPipeIndex, setSelectedPipeIndex] = useState('2'); // 1" default
  const [selectedSch, setSelectedSch] = useState('sch40s'); // 'sch5s', 'sch10s', 'sch40s', 'sch80s', 'custom'
  const [customOd, setCustomOd] = useState('25.4');
  const [customWt, setCustomWt] = useState('1.65');
  const [pipeLength, setPipeLength] = useState('6'); // 6m or 20ft
  const [quantity, setQuantity] = useState('1');
  const [materialIndex, setMaterialIndex] = useState(1); // SS 316L default

  const currentGrade = MATERIAL_GRADES[materialIndex] || MATERIAL_GRADES[1];
  const density = currentGrade.density;

  // Determine OD and WT values in mm
  let odMm = 25.4;
  let wtMm = 1.65;

  if (selectedPipeIndex !== 'custom') {
    const pipeData = PIPE_SCHEDULE_DATABASE[parseInt(selectedPipeIndex, 10)] || PIPE_SCHEDULE_DATABASE[2];
    odMm = pipeData.od_mm;
    if (selectedSch !== 'custom') {
      wtMm = pipeData[selectedSch] || pipeData.sch40s;
    } else {
      wtMm = parseFloat(customWt) || 1.65;
    }
  } else {
    odMm = unitSystem === 'metric' ? (parseFloat(customOd) || 25.4) : (parseFloat(customOd) * 25.4 || 25.4);
    wtMm = unitSystem === 'metric' ? (parseFloat(customWt) || 1.65) : (parseFloat(customWt) * 25.4 || 1.65);
  }

  const lengthInput = parseFloat(pipeLength) || (unitSystem === 'metric' ? 6 : 20);
  const lengthMeters = unitSystem === 'metric' ? lengthInput : lengthInput * 0.3048;
  const qtyNum = Math.max(1, parseInt(quantity, 10) || 1);

  // Exact physics formula for pipe weight per metre (kg/m):
  // Weight (kg/m) = PI * (OD - WT) * WT * Density / 1000
  const weightPerMetreKg = (odMm > wtMm && wtMm > 0)
    ? Math.PI * (odMm - wtMm) * wtMm * density / 1000
    : 0;

  const singlePipeWeightKg = weightPerMetreKg * lengthMeters;
  const totalBatchWeightKg = singlePipeWeightKg * qtyNum;

  // Imperial Conversions
  const weightPerFootLbs = weightPerMetreKg * 0.671969;
  const singlePipeWeightLbs = singlePipeWeightKg * 2.20462;
  const totalBatchWeightLbs = totalBatchWeightKg * 2.20462;

  const handleSelectPreset = (pipeIdx, schKey) => {
    setSelectedPipeIndex(pipeIdx.toString());
    setSelectedSch(schKey);
    const item = PIPE_SCHEDULE_DATABASE[pipeIdx];
    if (item) {
      setCustomOd(unitSystem === 'metric' ? item.od_mm.toString() : (item.od_mm / 25.4).toFixed(3));
      setCustomWt(unitSystem === 'metric' ? (item[schKey] || 1.65).toString() : ((item[schKey] || 1.65) / 25.4).toFixed(3));
    }
  };

  const handleQuoteClick = () => {
    const pipeDesc = selectedPipeIndex !== 'custom'
      ? `${PIPE_SCHEDULE_DATABASE[parseInt(selectedPipeIndex, 10)].nps} NB (${selectedSch.toUpperCase()})`
      : `Custom ${odMm.toFixed(1)}mm OD x ${wtMm.toFixed(2)}mm WT`;

    const summaryText = `Quote Request for ${qtyNum}x ${pipeDesc} Pipe, Grade: ${currentGrade.name}, Length: ${lengthInput}${unitSystem === 'metric' ? 'm' : 'ft'} (Total Wt: ${unitSystem === 'metric' ? totalBatchWeightKg.toFixed(2) + ' kg' : totalBatchWeightLbs.toFixed(2) + ' lbs'})`;

    if (onEnquireClick) {
      onEnquireClick(summaryText);
    }
  };

  // Build Options for CustomSelect Dropdowns
  const pipeSizeOptions = [
    ...PIPE_SCHEDULE_DATABASE.map((item, idx) => ({
      value: idx.toString(),
      label: `${item.nps} NB (${item.od_mm} mm OD)`
    })),
    { value: 'custom', label: '-- Custom Dimensions --' }
  ];

  const scheduleOptions = [
    { value: 'sch5s', label: 'Schedule 5S (Thin Wall)' },
    { value: 'sch10s', label: 'Schedule 10S (Light)' },
    { value: 'sch40s', label: 'Schedule 40S (Standard)' },
    { value: 'sch80s', label: 'Schedule 80S (Extra Heavy)' },
    { value: 'custom', label: 'Custom Wall Thickness' }
  ];

  const materialOptions = MATERIAL_GRADES.map((g, idx) => ({
    value: idx.toString(),
    label: `${g.name} (${g.density} g/cm³)`
  }));

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 text-white shadow-2xl my-8">
      
      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 border-b border-slate-800 pb-6">
        <div className="flex items-center space-x-3">
          <div className="p-3 bg-yellow-500/20 text-yellow-400 rounded-xl border border-yellow-500/30 shrink-0">
            <Scale className="w-7 h-7 text-yellow-400" />
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Stainless Steel Pipe & Tube Weight Calculator
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              Calculate precise pipe weight per metre/foot across standard ASME/ASTM schedules and material grades.
            </p>
          </div>
        </div>

        {/* Unit Toggle Switch - Yellow/Gold Theme */}
        <div className="inline-flex bg-slate-950 p-1 rounded-xl border border-slate-800 self-start sm:self-auto">
          <button
            onClick={() => setUnitSystem('metric')}
            className={`px-4 py-2 text-xs font-extrabold rounded-lg transition ${unitSystem === 'metric' ? 'bg-yellow-500 text-slate-950 shadow-md shadow-yellow-500/20' : 'text-slate-400 hover:text-white'}`}
          >
            Metric (mm / kg)
          </button>
          <button
            onClick={() => setUnitSystem('imperial')}
            className={`px-4 py-2 text-xs font-extrabold rounded-lg transition ${unitSystem === 'imperial' ? 'bg-yellow-500 text-slate-950 shadow-md shadow-yellow-500/20' : 'text-slate-400 hover:text-white'}`}
          >
            Imperial (in / lbs)
          </button>
        </div>
      </div>

      {/* Control Grid with Custom Sleek Dropdowns */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
        
        {/* 1. Pipe Size CustomSelect */}
        <div>
          <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
            Pipe Size (NPS / NB)
          </label>
          <CustomSelect
            options={pipeSizeOptions}
            value={selectedPipeIndex}
            onChange={(val) => {
              setSelectedPipeIndex(val);
              if (val !== 'custom') {
                const item = PIPE_SCHEDULE_DATABASE[parseInt(val, 10)];
                const wt = item[selectedSch] || item.sch40s;
                setCustomOd(unitSystem === 'metric' ? item.od_mm.toString() : (item.od_mm / 25.4).toFixed(3));
                setCustomWt(unitSystem === 'metric' ? wt.toString() : (wt / 25.4).toFixed(3));
              }
            }}
          />
        </div>

        {/* 2. Pipe Schedule CustomSelect */}
        <div>
          <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
            Schedule (WT Standard)
          </label>
          <CustomSelect
            options={scheduleOptions}
            value={selectedSch}
            onChange={(sch) => {
              setSelectedSch(sch);
              if (selectedPipeIndex !== 'custom' && sch !== 'custom') {
                const item = PIPE_SCHEDULE_DATABASE[parseInt(selectedPipeIndex, 10)];
                const wt = item[sch] || item.sch40s;
                setCustomWt(unitSystem === 'metric' ? wt.toString() : (wt / 25.4).toFixed(3));
              }
            }}
          />
        </div>

        {/* 3. Material Grade CustomSelect */}
        <div>
          <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
            Material Grade (Density)
          </label>
          <CustomSelect
            options={materialOptions}
            value={materialIndex.toString()}
            onChange={(val) => setMaterialIndex(parseInt(val, 10))}
          />
        </div>

        {/* 4. Quantity Input */}
        <div>
          <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
            Number of Pipes
          </label>
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            className="w-full bg-slate-950 border border-slate-700/80 rounded-xl px-4 py-3 text-white text-base font-mono font-bold focus:outline-none focus:border-yellow-500"
            placeholder="Qty"
          />
        </div>

      </div>

      {/* Manual Inputs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8 bg-slate-950/70 p-5 rounded-xl border border-slate-800">
        <div>
          <label className="block text-xs text-slate-400 mb-1">
            Outer Diameter (OD in {unitSystem === 'metric' ? 'mm' : 'inches'})
          </label>
          <input
            type="number"
            step="0.01"
            value={unitSystem === 'metric' ? odMm.toFixed(2) : (odMm / 25.4).toFixed(3)}
            onChange={(e) => {
              setSelectedPipeIndex('custom');
              const val = parseFloat(e.target.value) || 0;
              setCustomOd(unitSystem === 'metric' ? val.toString() : (val * 25.4).toString());
            }}
            className="w-full bg-slate-900 border border-slate-700/80 rounded-lg px-4 py-2.5 text-white font-mono text-base focus:outline-none focus:border-yellow-500"
          />
        </div>

        <div>
          <label className="block text-xs text-slate-400 mb-1">
            Wall Thickness (WT in {unitSystem === 'metric' ? 'mm' : 'inches'})
          </label>
          <input
            type="number"
            step="0.01"
            value={unitSystem === 'metric' ? wtMm.toFixed(2) : (wtMm / 25.4).toFixed(3)}
            onChange={(e) => {
              setSelectedSch('custom');
              const val = parseFloat(e.target.value) || 0;
              setCustomWt(unitSystem === 'metric' ? val.toString() : (val * 25.4).toString());
            }}
            className="w-full bg-slate-900 border border-slate-700/80 rounded-lg px-4 py-2.5 text-white font-mono text-base focus:outline-none focus:border-yellow-500"
          />
        </div>

        <div>
          <label className="block text-xs text-slate-400 mb-1">
            Pipe Length ({unitSystem === 'metric' ? 'Metres' : 'Feet'})
          </label>
          <input
            type="number"
            step="0.5"
            value={pipeLength}
            onChange={(e) => setPipeLength(e.target.value)}
            className="w-full bg-slate-900 border border-slate-700/80 rounded-lg px-4 py-2.5 text-white font-mono text-base focus:outline-none focus:border-yellow-500"
          />
        </div>
      </div>

      {/* Primary Calculation Output Display Cards - Yellow/Gold Theme */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        
        {/* Card 1: Unit Weight */}
        <div className="bg-gradient-to-br from-slate-800/90 to-slate-900 rounded-xl p-5 border border-yellow-500/30 shadow-lg">
          <span className="text-xs text-slate-400 uppercase tracking-wider block mb-1">
            {unitSystem === 'metric' ? 'Weight per Metre' : 'Weight per Foot'}
          </span>
          <div className="text-3xl font-extrabold font-mono text-yellow-400">
            {unitSystem === 'metric'
              ? `${weightPerMetreKg.toFixed(3)} kg/m`
              : `${weightPerFootLbs.toFixed(3)} lbs/ft`}
          </div>
          <span className="text-[11px] text-slate-400 mt-2 block">
            Exact formula: π × (OD - WT) × WT × {density} g/cm³
          </span>
        </div>

        {/* Card 2: Single Pipe Weight */}
        <div className="bg-gradient-to-br from-slate-800/90 to-slate-900 rounded-xl p-5 border border-amber-500/30 shadow-lg">
          <span className="text-xs text-slate-400 uppercase tracking-wider block mb-1">
            Single Pipe Weight ({lengthInput}{unitSystem === 'metric' ? 'm' : 'ft'})
          </span>
          <div className="text-3xl font-extrabold font-mono text-amber-400">
            {unitSystem === 'metric'
              ? `${singlePipeWeightKg.toFixed(2)} kg`
              : `${singlePipeWeightLbs.toFixed(2)} lbs`}
          </div>
          <span className="text-[11px] text-slate-400 mt-2 block">
            Outer Surface Area: {(Math.PI * odMm * lengthMeters / 1000).toFixed(2)} m²
          </span>
        </div>

        {/* Card 3: Total Batch Weight - Gold/Amber Highlight */}
        <div className="bg-gradient-to-br from-slate-800/90 to-slate-900 rounded-xl p-5 border border-yellow-500/40 shadow-lg sm:col-span-2 lg:col-span-1">
          <span className="text-xs text-slate-400 uppercase tracking-wider block mb-1">
            Total Batch Weight ({qtyNum} {qtyNum === 1 ? 'Pipe' : 'Pipes'})
          </span>
          <div className="text-3xl font-extrabold font-mono text-yellow-400">
            {unitSystem === 'metric'
              ? `${totalBatchWeightKg.toFixed(2)} kg`
              : `${totalBatchWeightLbs.toFixed(2)} lbs`}
          </div>
          <span className="text-[11px] text-yellow-300/80 mt-2 block font-medium">
            Ready to order? Request mill certificate & quotation below.
          </span>
        </div>

      </div>

      {/* Quick Action RFQ Trigger Banner - Yellow/Gold Theme */}
      <div className="bg-slate-950 border border-yellow-500/30 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 shadow-xl">
        <div className="flex items-center space-x-3">
          <Sparkles className="w-6 h-6 text-yellow-400 shrink-0" />
          <div>
            <h4 className="text-base font-bold text-white">Need a Quote for This Exact Pipe Specification?</h4>
            <p className="text-xs text-slate-300">
              {qtyNum}x {selectedPipeIndex !== 'custom' ? PIPE_SCHEDULE_DATABASE[parseInt(selectedPipeIndex, 10)].nps + ' NB' : `${odMm}mm OD`} ({currentGrade.name}) — EN 10204 3.1 MTC included.
            </p>
          </div>
        </div>
        <button
          onClick={handleQuoteClick}
          className="bg-gradient-to-r from-yellow-500 via-amber-500 to-yellow-500 hover:from-yellow-400 hover:to-amber-400 text-slate-950 font-extrabold px-7 py-3 rounded-xl transition whitespace-nowrap flex items-center space-x-2 text-sm shadow-lg shadow-yellow-500/25 shrink-0"
        >
          <FileText className="w-4 h-4 text-slate-950" />
          <span>Get Instant Quote</span>
        </button>
      </div>

      {/* Quick Reference Table for Standard Stainless Steel Pipe Weights */}
      <div className="border-t border-slate-800 pt-8">
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-base sm:text-lg font-bold text-white flex items-center space-x-2">
            <Layers className="w-5 h-5 text-yellow-400" />
            <span>Standard Stainless Steel Pipe Weight Reference Chart (kg/m)</span>
          </h4>
          <span className="text-xs text-slate-400">Click any row to load into calculator</span>
        </div>

        <div className="overflow-x-auto border border-slate-800 rounded-xl bg-slate-950/80">
          <table className="w-full text-xs sm:text-sm text-left text-slate-300">
            <thead className="bg-slate-900 text-xs uppercase tracking-wider text-slate-400 border-b border-slate-800">
              <tr>
                <th className="px-4 py-3">NPS (Inch)</th>
                <th className="px-4 py-3">NB (mm)</th>
                <th className="px-4 py-3">OD (mm)</th>
                <th className="px-4 py-3 text-yellow-400">SCH 5S (kg/m)</th>
                <th className="px-4 py-3 text-amber-400">SCH 10S (kg/m)</th>
                <th className="px-4 py-3 text-yellow-400">SCH 40S (kg/m)</th>
                <th className="px-4 py-3 text-amber-400">SCH 80S (kg/m)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 font-mono">
              {PIPE_SCHEDULE_DATABASE.map((item, idx) => {
                const w5s = (Math.PI * (item.od_mm - item.sch5s) * item.sch5s * 7.93 / 1000).toFixed(2);
                const w10s = (Math.PI * (item.od_mm - item.sch10s) * item.sch10s * 7.93 / 1000).toFixed(2);
                const w40s = (Math.PI * (item.od_mm - item.sch40s) * item.sch40s * 7.93 / 1000).toFixed(2);
                const w80s = (Math.PI * (item.od_mm - item.sch80s) * item.sch80s * 7.93 / 1000).toFixed(2);

                return (
                  <tr
                    key={idx}
                    onClick={() => handleSelectPreset(idx, 'sch40s')}
                    className="hover:bg-slate-800/60 cursor-pointer transition"
                  >
                    <td className="px-4 py-2.5 font-bold font-sans text-white">{item.nps}</td>
                    <td className="px-4 py-2.5 text-slate-400">{item.nb} mm</td>
                    <td className="px-4 py-2.5 text-slate-300">{item.od_mm} mm</td>
                    <td className="px-4 py-2.5 text-yellow-400">{w5s}</td>
                    <td className="px-4 py-2.5 text-amber-400">{w10s}</td>
                    <td className="px-4 py-2.5 text-yellow-400 font-bold">{w40s}</td>
                    <td className="px-4 py-2.5 text-amber-400">{w80s}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
