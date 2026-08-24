import React, { useState } from 'react';
import { 
  ShieldCheck, CheckCircle2, ChevronRight, Download, FileText, Phone, MessageSquare, 
  ArrowRight, Award, Factory, HelpCircle, ChevronDown, ChevronUp, MapPin, Truck, 
  Sparkles, Layers, Check, Calculator, Star, ExternalLink 
} from 'lucide-react';
import epBuildSpecData from '../data/ep_build_spec_data.json';
import { handleLinkClick } from '../utils/router';
import { RaConverterTool, PipeWeightCalculatorTool } from './EPTools';

export default function EPBuildSpecRenderer({ path, onEnquireClick }) {
  const pageData = epBuildSpecData.find(
    (p) => p.url === path || p.url === `${path}/` || `${p.url}/` === path
  );

  const [openFaq, setOpenFaq] = useState(0);

  if (!pageData) return null;

  const {
    id, h1, title, meta, page_type, primary_kw, secondary_kws,
    parent, faqs, notes, cta, image_alt
  } = pageData;

  const cleanPath = path.endsWith('/') ? path.slice(0, -1) : path;
  const parentName = parent === '/' ? 'Home' : parent.replace(/^\/|\/$/g, '').replace(/-/g, ' ');

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen font-sans selection:bg-blue-500 selection:text-white pt-[5.5rem]">
      {/* 1. BREADCRUMB BAR */}
      <nav aria-label="Breadcrumb" className="border-b border-slate-800 bg-slate-900/60 backdrop-blur sticky top-[5.5rem] z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-xs sm:text-sm text-slate-400 flex items-center space-x-2 overflow-x-auto">
          <a href="/" onClick={(e) => handleLinkClick(e, '/')} className="hover:text-blue-400 transition flex items-center">
            Home
          </a>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600 shrink-0" />
          {parent !== '/' && (
            <>
              <a href={parent} onClick={(e) => handleLinkClick(e, parent)} className="hover:text-blue-400 transition capitalize whitespace-nowrap">
                {parentName}
              </a>
              <ChevronRight className="w-3.5 h-3.5 text-slate-600 shrink-0" />
            </>
          )}
          <span className="text-slate-200 font-medium truncate">{h1}</span>
        </div>
      </nav>

      {/* 2. HERO SECTION */}
      <section className="relative pt-12 pb-16 lg:pt-16 lg:pb-24 border-b border-slate-800/80 overflow-hidden bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center space-x-2 bg-blue-950/80 border border-blue-800/60 rounded-full px-4 py-1.5 text-xs font-semibold text-blue-300">
                <ShieldCheck className="w-4 h-4 text-blue-400" />
                <span>ISO 9001:2015 Certified  ·  EN 10204 3.1 MTC Included</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
                {h1}
              </h1>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
                {meta}
              </p>

              {/* Badges / Highlights Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">                <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-3">
                  <span className="text-xs text-slate-400 block">Surface Finish</span>
                  <span className="text-sm font-bold text-cyan-400">Ra ≤ 0.38 µm (15 µin)</span>
                </div>
                <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-3">
                  <span className="text-xs text-slate-400 block">Standard Specs</span>
                  <span className="text-sm font-bold text-blue-400">ASME BPE SF4 / A270</span>
                </div>
                <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-3 col-span-2 sm:col-span-1">
                  <span className="text-xs text-slate-400 block">Material Traceability</span>
                  <span className="text-sm font-bold text-amber-400">100% PMI Verified</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4 pt-4">
                <button
                  onClick={() => onEnquireClick(h1)}
                  className="bg-yellow-500 hover:bg-yellow-400 text-slate-950 font-extrabold px-6 py-3.5 rounded-xl transition flex items-center space-x-2 shadow-lg shadow-yellow-500/25"
                >
                  <FileText className="w-5 h-5 text-slate-950" />
                  <span>Request Quick Quotation</span>
                </button>
                <a
                  href="https://wa.me/918045815130?text=Hi%2C%20I%20am%20interested%20in%20Electropolished%20Pipes%20and%20Tubes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-900/90 hover:bg-slate-800 border border-amber-500/30 text-amber-400 font-semibold px-6 py-3.5 rounded-xl transition flex items-center space-x-2"
                >
                  <MessageSquare className="w-5 h-5 text-amber-400" />
                  <span>WhatsApp Engineering Sales</span>
                </a>
              </div>
            </div>

            {/* Hero Quick RFQ Form / Card */}
            <div className="lg:col-span-5">
              <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-2xl relative">
                <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2 bg-yellow-500 text-slate-950 text-[10px] uppercase tracking-wider font-extrabold px-3 py-1 rounded-full shadow">
                  Instant Quote Response
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Get Price & Spec Sheet</h3>
                <p className="text-xs text-slate-400 mb-6">Receive detailed quotation with MTC sample & lead time in 24 hours.</p>
                
                <form onSubmit={(e) => { e.preventDefault(); onEnquireClick(h1); }} className="space-y-4">
                  <div>
                    <label className="block text-xs text-slate-400 mb-1">Your Name / Company *</label>
                    <input type="text" required placeholder="e.g. Reliance / Sun Pharma" className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-yellow-500" />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs text-slate-400 mb-1">Phone / WhatsApp *</label>
                      <input type="tel" required placeholder="+91 XXXXX XXXXX" className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-yellow-500" />
                    </div>
                    <div>
                      <label className="block text-xs text-slate-400 mb-1">Material Grade</label>
                      <select className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-yellow-500">
                        <option className="bg-slate-900 text-white">SS 316L (EP)</option>
                        <option className="bg-slate-900 text-white">SS 304L (EP)</option>
                        <option className="bg-slate-900 text-white">ASME BPE SF4</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs text-slate-400 mb-1">Quantity / Outer Diameter (OD)</label>
                    <input type="text" placeholder="e.g. 200 metres, 1 inch OD x 1.65mm WT" className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-yellow-500" />
                  </div>
                  <button type="submit" className="w-full bg-gradient-to-r from-yellow-500 via-amber-500 to-yellow-500 hover:from-yellow-400 hover:to-amber-400 text-slate-950 font-extrabold py-3.5 rounded-xl transition shadow-lg shadow-yellow-500/25 uppercase tracking-wider text-sm">
                    Submit RFQ Now
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. MAIN CONTENT BODY */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* A. SPECIFICATION & TECHNICAL TABLES (FOR PRODUCTS & STANDARDS) */}
          {(page_type.includes('Product') || page_type.includes('Standard') || page_type.includes('Category Hub')) && (
            <div className="mb-16 space-y-12">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 flex items-center space-x-3">
                  <span className="w-2 h-8 bg-blue-500 rounded-full inline-block"></span>
                  <span>Electropolished Pipe & Tube Dimensional Specifications</span>
                </h2>
                <p className="text-slate-300 mb-6 leading-relaxed">
                  Sakshi Forge manufactures electropolished stainless steel pipes and tubes adhering to ASTM A270, ASTM A312, ASTM A269, and ASME BPE SF4 standards. Our internal electropolishing process guarantees roughness values down to Ra 0.38 µm (15 µin).
                </p>

                <div className="overflow-x-auto border border-slate-800 rounded-xl bg-slate-900/60 shadow-xl">
                  <table className="w-full text-sm text-left text-slate-300">
                    <thead className="bg-slate-900 text-xs uppercase tracking-wider text-slate-400 border-b border-slate-800">
                      <tr>
                        <th className="px-5 py-4">Nominal Size (NB / OD)</th>
                        <th className="px-5 py-4">Outside Diameter (mm / inch)</th>
                        <th className="px-5 py-4">Wall Thickness (SWG / mm)</th>
                        <th className="px-5 py-4">Internal Finish (Ra)</th>
                        <th className="px-5 py-4">Standard Length</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/60">
                      <tr>
                        <td className="px-5 py-4 font-semibold text-white">1/4" OD (6.35 mm)</td>
                        <td className="px-5 py-4 font-mono">6.35 mm (0.250 in)</td>
                        <td className="px-5 py-4 font-mono">0.89 mm / 1.0 mm</td>
                        <td className="px-5 py-4 text-emerald-400 font-semibold">Ra ≤ 0.38 µm (15 µin)</td>
                        <td className="px-5 py-4">6 Metres (20 ft)</td>
                      </tr>
                      <tr>
                        <td className="px-5 py-4 font-semibold text-white">1/2" OD (12.7 mm)</td>
                        <td className="px-5 py-4 font-mono">12.70 mm (0.500 in)</td>
                        <td className="px-5 py-4 font-mono">1.24 mm / 1.65 mm</td>
                        <td className="px-5 py-4 text-emerald-400 font-semibold">Ra ≤ 0.38 µm (15 µin)</td>
                        <td className="px-5 py-4">6 Metres (20 ft)</td>
                      </tr>
                      <tr>
                        <td className="px-5 py-4 font-semibold text-white">3/4" OD (19.05 mm)</td>
                        <td className="px-5 py-4 font-mono">19.05 mm (0.750 in)</td>
                        <td className="px-5 py-4 font-mono">1.65 mm (16 SWG)</td>
                        <td className="px-5 py-4 text-emerald-400 font-semibold">Ra ≤ 0.38 µm (15 µin)</td>
                        <td className="px-5 py-4">6 Metres (20 ft)</td>
                      </tr>
                      <tr>
                        <td className="px-5 py-4 font-semibold text-white">1" OD (25.4 mm)</td>
                        <td className="px-5 py-4 font-mono">25.40 mm (1.000 in)</td>
                        <td className="px-5 py-4 font-mono">1.65 mm (16 SWG)</td>
                        <td className="px-5 py-4 text-emerald-400 font-semibold">Ra ≤ 0.38 µm (15 µin)</td>
                        <td className="px-5 py-4">6 Metres (20 ft)</td>
                      </tr>
                      <tr>
                        <td className="px-5 py-4 font-semibold text-white">1.5" OD (38.1 mm)</td>
                        <td className="px-5 py-4 font-mono">38.10 mm (1.500 in)</td>
                        <td className="px-5 py-4 font-mono">1.65 mm / 2.11 mm</td>
                        <td className="px-5 py-4 text-emerald-400 font-semibold">Ra ≤ 0.38 µm (15 µin)</td>
                        <td className="px-5 py-4">6 Metres (20 ft)</td>
                      </tr>
                      <tr>
                        <td className="px-5 py-4 font-semibold text-white">2" OD (50.8 mm)</td>
                        <td className="px-5 py-4 font-mono">50.80 mm (2.000 in)</td>
                        <td className="px-5 py-4 font-mono">1.65 mm / 2.11 mm</td>
                        <td className="px-5 py-4 text-emerald-400 font-semibold">Ra ≤ 0.38 µm (15 µin)</td>
                        <td className="px-5 py-4">6 Metres (20 ft)</td>
                      </tr>
                      <tr>
                        <td className="px-5 py-4 font-semibold text-white">3" OD (76.2 mm)</td>
                        <td className="px-5 py-4 font-mono">76.20 mm (3.000 in)</td>
                        <td className="px-5 py-4 font-mono">2.11 mm / 2.77 mm</td>
                        <td className="px-5 py-4 text-emerald-400 font-semibold">Ra ≤ 0.38 µm (15 µin)</td>
                        <td className="px-5 py-4">6 Metres (20 ft)</td>
                      </tr>
                      <tr>
                        <td className="px-5 py-4 font-semibold text-white">4" OD (101.6 mm)</td>
                        <td className="px-5 py-4 font-mono">101.60 mm (4.000 in)</td>
                        <td className="px-5 py-4 font-mono">2.11 mm / 2.77 mm</td>
                        <td className="px-5 py-4 text-emerald-400 font-semibold">Ra ≤ 0.38 µm (15 µin)</td>
                        <td className="px-5 py-4">6 Metres (20 ft)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Chemical Composition Table */}
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">Chemical Composition (% Weight) for SS 316L & SS 304L EP Tubing</h3>
                <div className="overflow-x-auto border border-slate-800 rounded-xl bg-slate-900/60 shadow-xl">
                  <table className="w-full text-sm text-left text-slate-300">
                    <thead className="bg-slate-900 text-xs uppercase tracking-wider text-slate-400 border-b border-slate-800">
                      <tr>
                        <th className="px-5 py-4">Grade</th>
                        <th className="px-5 py-4">Carbon (C)</th>
                        <th className="px-5 py-4">Manganese (Mn)</th>
                        <th className="px-5 py-4">Phosphorus (P)</th>
                        <th className="px-5 py-4">Sulfur (S)</th>
                        <th className="px-5 py-4">Chromium (Cr)</th>
                        <th className="px-5 py-4">Nickel (Ni)</th>
                        <th className="px-5 py-4">Molybdenum (Mo)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/60">
                      <tr>
                        <td className="px-5 py-4 font-bold text-blue-400">SS 316L (UNS S31603)</td>
                        <td className="px-5 py-4 font-mono">≤ 0.030%</td>
                        <td className="px-5 py-4 font-mono">≤ 2.00%</td>
                        <td className="px-5 py-4 font-mono">≤ 0.045%</td>
                        <td className="px-5 py-4 font-mono text-emerald-400">0.005–0.017%*</td>
                        <td className="px-5 py-4 font-mono">16.0–18.0%</td>
                        <td className="px-5 py-4 font-mono">10.0–14.0%</td>
                        <td className="px-5 py-4 font-mono">2.00–3.00%</td>
                      </tr>
                      <tr>
                        <td className="px-5 py-4 font-bold text-cyan-400">SS 304L (UNS S30403)</td>
                        <td className="px-5 py-4 font-mono">≤ 0.030%</td>
                        <td className="px-5 py-4 font-mono">≤ 2.00%</td>
                        <td className="px-5 py-4 font-mono">≤ 0.045%</td>
                        <td className="px-5 py-4 font-mono">≤ 0.030%</td>
                        <td className="px-5 py-4 font-mono">18.0–20.0%</td>
                        <td className="px-5 py-4 font-mono">8.0–12.0%</td>
                        <td className="px-5 py-4 font-mono">-</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-slate-400 mt-2">* Sulfur content for ASME BPE EP tubing is strictly controlled between 0.005% and 0.017% to promote optimal orbital welding penetrations.</p>
              </div>
            </div>
          )}

          {/* B. INTERACTIVE TOOLS FOR RESOURCE PAGES */}
          {page_type.includes('Resource') && (
            <div className="mb-16">
              {cleanPath.includes('ra-surface-finish-converter') && <RaConverterTool />}
              {cleanPath.includes('ss-pipe-weight-calculator') && <PipeWeightCalculatorTool onEnquireClick={onEnquireClick} />}
              {(!cleanPath.includes('ra-surface-finish-converter') && !cleanPath.includes('ss-pipe-weight-calculator')) && (
                <>
                  <RaConverterTool />
                  <PipeWeightCalculatorTool onEnquireClick={onEnquireClick} />
                </>
              )}
            </div>
          )}

          {/* C. INDUSTRY & CITY SPECIFIC BLOCKS */}
          {page_type.includes('Industry') && (
            <div className="mb-16 space-y-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center space-x-3">
                <span className="w-2 h-8 bg-emerald-500 rounded-full inline-block"></span>
                <span>Typical Electropolished Piping Systems Supplied</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
                  <h4 className="text-lg font-bold text-white mb-2">WFI & Purified Water Loops</h4>
                  <p className="text-sm text-slate-300">Continuous recirculating loops operating up to 80°C. Requires Ra ≤ 0.38 µm bore with zero dead-legs to prevent biofilm formation.</p>
                </div>
                <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
                  <h4 className="text-lg font-bold text-white mb-2">CIP / SIP Process Lines</h4>
                  <p className="text-sm text-slate-300">Clean-in-Place and Steam-in-Place lines withstand severe thermal cycling and chemical sanitizing agents (caustic soda, nitric acid).</p>
                </div>
                <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
                  <h4 className="text-lg font-bold text-white mb-2">High Purity Gas Lines</h4>
                  <p className="text-sm text-slate-300">Ultra-clean delivery lines for nitrogen, argon, and oxygen in sterile biopharma and semiconductor cleanrooms.</p>
                </div>
              </div>
            </div>
          )}

          {page_type.includes('City') && (
            <div className="mb-16 space-y-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center space-x-3">
                <span className="w-2 h-8 bg-blue-500 rounded-full inline-block"></span>
                <span>Industrial Hub Deliveries & Logistics Coverage</span>
              </h2>
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-4">
                <p className="text-slate-300">
                  Sakshi Forge maintains dedicated logistics channels from our Mumbai manufacturing hub to major industrial parks and manufacturing zones. Material test certificates (EN 10204 3.1) and profilometer inspection charts accompany every shipment.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-4 text-sm">
                  <div className="flex items-center space-x-3 bg-slate-950 p-3.5 rounded-xl border border-slate-800">
                    <MapPin className="w-5 h-5 text-blue-400 shrink-0" />
                    <span>Direct Site Delivery to Industrial Parks</span>
                  </div>
                  <div className="flex items-center space-x-3 bg-slate-950 p-3.5 rounded-xl border border-slate-800">
                    <Truck className="w-5 h-5 text-emerald-400 shrink-0" />
                    <span>24–72 Hr Dispatch Lead Time</span>
                  </div>
                  <div className="flex items-center space-x-3 bg-slate-950 p-3.5 rounded-xl border border-slate-800">
                    <ShieldCheck className="w-5 h-5 text-cyan-400 shrink-0" />
                    <span>Cleanroom Capped & Poly-Bagged Packaging</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* D. FREQUENTLY ASKED QUESTIONS (FAQS) */}
          {faqs && faqs.length > 0 && (
            <div className="mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 flex items-center space-x-3">
                <HelpCircle className="w-7 h-7 text-blue-400" />
                <span>Frequently Asked Questions</span>
              </h2>
              <div className="space-y-4">
                {faqs.map((faq, idx) => {
                  const isOpen = openFaq === idx;
                  return (
                    <div key={idx} className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden transition">
                      <button
                        onClick={() => setOpenFaq(isOpen ? null : idx)}
                        className="w-full flex items-center justify-between p-5 text-left text-white font-semibold hover:bg-slate-800/50 transition"
                      >
                        <span className="text-base sm:text-lg pr-4">{faq.question}</span>
                        {isOpen ? <ChevronUp className="w-5 h-5 text-blue-400 shrink-0" /> : <ChevronDown className="w-5 h-5 text-slate-500 shrink-0" />}
                      </button>
                      {isOpen && (
                        <div className="p-5 pt-0 text-slate-300 text-sm leading-relaxed border-t border-slate-800/60 bg-slate-900/40">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* E. STICKY / BOTTOM CONVERSION CTA BANNER */}
          <div className="bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 border border-yellow-500/30 rounded-2xl p-8 sm:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl relative overflow-hidden">
            <div className="space-y-2 text-center md:text-left">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">Ready to Order <span className="text-yellow-400">Electropolished Pipe?</span></h3>
              <p className="text-slate-300 text-sm sm:text-base max-w-xl leading-relaxed">
                Get mill direct pricing, EN 10204 3.1 MTCs, and Ra roughness test reports from Sakshi Forge.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <button
                onClick={() => onEnquireClick(h1)}
                className="bg-yellow-500 hover:bg-yellow-400 text-slate-950 font-extrabold px-7 py-3.5 rounded-xl transition shadow-lg shadow-yellow-500/25 whitespace-nowrap flex items-center justify-center space-x-2"
              >
                <span>Request Quotation</span>
                <ArrowRight className="w-4 h-4 text-slate-950" />
              </button>
              <a
                href="tel:+918045815130"
                className="bg-slate-900/90 hover:bg-slate-800 border border-yellow-500/40 text-yellow-400 font-bold px-6 py-3.5 rounded-xl transition flex items-center justify-center space-x-2 whitespace-nowrap"
              >
                <Phone className="w-4 h-4 text-yellow-400" />
                <span>Call +91 8045815130</span>
              </a>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
