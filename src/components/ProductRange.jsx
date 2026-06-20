import React, { useState } from 'react';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';

export const productsData = [
  {
    id: 'flanges',
    name: 'Industrial Flanges',
    category: 'fittings',
    image: '/flanges_pipes.png',
    desc: 'Weld Neck, Slip-on, Blind, Socket Weld, Threaded, and Custom Forged Flanges in all pressure ratings.',
    longDesc: 'Sakshi Forge manufactures heavy-duty flanges engineered to connect pipe sections, valves, pumps, and other equipment in piping systems. Our flanges are hot forged, heat-treated, and CNC-machined to achieve absolute dimensional accuracy and chemical compatibility with flowing mediums.',
    specs: [
      { key: 'Size Range', value: '1/2" (DN15) to 60" (DN1500)' },
      { key: 'Pressure Class', value: '150#, 300#, 600#, 900#, 1500#, 2500#, PN6 to PN160' },
      { key: 'Standards', value: 'ASME B16.5, ASME B16.47 Series A & B, DIN, EN 1092-1, BS4504' },
      { key: 'Material Grades', value: 'ASTM A105, A350 LF2, F304/304L, F316/316L, Duplex F51/F53, F11, F22' },
      { key: 'Facing Types', value: 'Flat Face (FF), Raised Face (RF), Ring Type Joint (RTJ), Tongue & Groove' }
    ]
  },
  {
    id: 'plates',
    name: 'Steel Plates',
    category: 'plates',
    image: '/molten_furnace.png',
    desc: 'High-strength boiler quality, structural steel, carbon steel, and stainless steel plates in various thicknesses.',
    longDesc: 'We supply high-performance steel plates designed for heavy industrial fabrications, pressure vessels, storage tanks, and construction projects. Our plates offer superior tensile strength, excellent weldability, and structural durability under high pressure and temperature conditions.',
    specs: [
      { key: 'Thickness', value: '3mm to 150mm' },
      { key: 'Width Range', value: '1000mm to 3000mm' },
      { key: 'Length Range', value: '2000mm to 12000mm (Custom cutting available)' },
      { key: 'Standards', value: 'ASTM A516 Gr. 60/70, ASTM A36, EN 10025 S355JR, ASME SA240' },
      { key: 'Grades', value: 'Stainless Steel 304/304L, 316/316L, 321, 310S, Carbon Steel, Alloy Steel' }
    ]
  },
  {
    id: 'pipes',
    name: 'Industrial Pipes',
    category: 'pipes-tubes',
    image: '/flanges_pipes.png',
    desc: 'Seamless, Welded, ERW, and LSAW steel pipes for high-temperature and high-pressure service.',
    longDesc: 'Our industrial pipes are engineered for the transport of liquid, gas, and steam in refinery, petrochemical, power generation, and utility sectors. We carry seamless and welded variants configured to withstand extreme operational stresses and highly corrosive environments.',
    specs: [
      { key: 'Outer Diameter', value: '1/8" to 48" Nominal Size' },
      { key: 'Schedules', value: 'SCH 5S, 10S, 20, 40S, 80S, 160, XXS' },
      { key: 'Manufacturing', value: 'Seamless, ERW, EFW, LSAW, DSAW' },
      { key: 'Standards', value: 'ASTM A106 Gr. B, ASTM A53, API 5L Gr. B to X70, ASTM A312' },
      { key: 'Grades', value: 'TP304/304L, TP316/316L, TP321, Duplex, Carbon Steel, Low-Temp A333 Gr. 6' }
    ]
  },
  {
    id: 'tubes',
    name: 'Precision Tubes',
    category: 'pipes-tubes',
    image: '/flanges_pipes.png',
    desc: 'Boiler tubes, heat exchanger tubes, and instrumentation tubing with high dimensional accuracy.',
    longDesc: 'We offer specialized precision tubes tailored for heat exchangers, condenser units, boilers, and instrumentation circuits. These tubes boast smooth interior finishes, tight outer diameter tolerances, and outstanding heat-transfer efficiency.',
    specs: [
      { key: 'Outer Diameter', value: '6mm to 114.3mm' },
      { key: 'Wall Thickness', value: '0.5mm to 12.7mm' },
      { key: 'Type', value: 'Seamless, Welded, Cold Drawn' },
      { key: 'Standards', value: 'ASTM A213, ASTM A269, ASTM A179, EN 10216-5' },
      { key: 'Grades', value: 'Stainless Steel 304/304L, 316/316L, Monel, Inconel, Alloy Steel T11, T22, T91' }
    ]
  },
  {
    id: 'round-bar',
    name: 'Round Bars & Shafts',
    category: 'pipes-tubes',
    image: '/molten_furnace.png',
    desc: 'Hot rolled and cold drawn solid round bars, bright bars, and hex bars for machining and structural use.',
    longDesc: 'Our solid round bars and shafts represent premium feedstock for machining industries, component forging, fastner manufacture, and structural pins. They feature homogeneous macrostructures and uniform tensile properties to facilitate trouble-free heat treating and lathing.',
    specs: [
      { key: 'Diameter Range', value: '5mm to 500mm' },
      { key: 'Length', value: '3 to 6 meters (or custom cut-to-length)' },
      { key: 'Finish', value: 'Black Hot-Rolled, Bright Cold-Drawn, Centerless Ground, Peeled' },
      { key: 'Standards', value: 'ASTM A276, ASTM A479, ASTM A105, EN 10088-3' },
      { key: 'Grades', value: 'SS 304, SS 316, SS 410, SS 431, Duplex, Alloy Steel 4140, EN8, EN9, EN19' }
    ]
  },
  {
    id: 'buttweld-fittings',
    name: 'Buttweld Fittings',
    category: 'fittings',
    image: '/flanges_pipes.png',
    desc: 'Seamless and welded elbows, tees, reducers, crosses, caps, and stub ends for piping systems.',
    longDesc: 'Buttweld fittings enable changes in pipeline direction, branching, pipe-size reduction, and the addition of auxiliary equipment. Constructed to ASME B16.9 standards, these fittings deliver maximum flow rates, minimum pressure drops, and zero leakage when welded.',
    specs: [
      { key: 'Size Range', value: '1/2" to 48"' },
      { key: 'Wall Thickness', value: 'SCH 10S to SCH XXS' },
      { key: 'Fittings Types', value: '45°/90°/180° Elbows, Equal/Reducing Tees, Concentric/Eccentric Reducers, Caps' },
      { key: 'Standards', value: 'ASME B16.9, MSS SP-75, DIN 2605' },
      { key: 'Material Grades', value: 'ASTM A234 WPB, WP304L, WP316L, ASTM A420 WPL6, Duplex WP51' }
    ]
  },
  {
    id: 'forged-fittings',
    name: 'High-Pressure Forged Fittings',
    category: 'fittings',
    image: '/flanges_pipes.png',
    desc: 'Threaded and socket weld elbows, tees, unions, couplings, and outlets rated up to 9000 PSI.',
    longDesc: 'Our high-pressure forged fittings are engineered to withstand extreme pressures and mechanical loads in critical processing pipelines. They are forged from solid steel billets and precision-threaded or socket-bored to prevent leaks at vital pipe connections.',
    specs: [
      { key: 'Size Range', value: '1/8" to 4" Nominal' },
      { key: 'Pressure Ratings', value: '2000 LBS, 3000 LBS, 6000 LBS, 9000 LBS' },
      { key: 'Connection Types', value: 'Socket Weld (SW), Threaded (NPT/BSPT), Outlet Fittings (Weldolet, Sockolet, Threadolet)' },
      { key: 'Standards', value: 'ASME B16.11, MSS SP-97, MSS SP-83' },
      { key: 'Grades', value: 'ASTM A105, A350 LF2, F304L, F316L, F11, F22, F91' }
    ]
  }
];

export default function ProductRange({ onProductSelect }) {
  const [startIndex, setStartIndex] = useState(0);

  const nextSlide = () => {
    setStartIndex((prev) => (prev + 1) % productsData.length);
  };

  const prevSlide = () => {
    setStartIndex((prev) => (prev - 1 + productsData.length) % productsData.length);
  };

  const getVisibleProducts = () => {
    if (productsData.length <= 3) {
      return productsData;
    }
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const idx = (startIndex + i) % productsData.length;
      visible.push(productsData[idx]);
    }
    return visible;
  };

  const visibleProducts = getVisibleProducts();
  const showArrows = productsData.length > 3;

  return (
    <section id="products" className="section-padding" style={{ backgroundColor: 'var(--bg-dark-800)', borderTop: '1px solid var(--border-color)' }}>
      <div className="container">
        <div className="section-header">
          <h2>Our Industrial <span>Product Range</span></h2>
          <p>
            Sakshi Forge manufactures a complete suite of carbon steel, alloy steel, and stainless steel products, serving critical processes in the global energy and infrastructure markets.
          </p>
          <div className="accent-line"></div>
        </div>

        <div className="products-carousel-container">
          {showArrows && (
            <button className="carousel-arrow carousel-arrow-left" onClick={prevSlide} aria-label="Previous products">
              <ChevronLeft size={24} />
            </button>
          )}

          <div 
            className="products-grid carousel-active"
            style={{
              gridTemplateColumns: productsData.length === 1 
                ? '1fr' 
                : productsData.length === 2 
                ? '1fr 1fr' 
                : 'repeat(3, 1fr)',
              maxWidth: productsData.length === 1 
                ? '380px' 
                : productsData.length === 2 
                ? '780px' 
                : '100%',
              margin: '0 auto',
              width: '100%'
            }}
          >
            {visibleProducts.map((p) => (
              <div className="product-card" key={p.id}>
                <div className="product-img-wrap">
                  <img src={p.image} alt={p.name} />
                </div>
                <div className="product-info">
                  <div>
                    <h3>{p.name}</h3>
                    <p>{p.desc}</p>
                  </div>
                  <button 
                    onClick={() => onProductSelect(p)} 
                    className="btn btn-outline" 
                    style={{ width: '100%', padding: '0.65rem 0' }}
                  >
                    Learn More <ArrowUpRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {showArrows && (
            <button className="carousel-arrow carousel-arrow-right" onClick={nextSlide} aria-label="Next products">
              <ChevronRight size={24} />
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
