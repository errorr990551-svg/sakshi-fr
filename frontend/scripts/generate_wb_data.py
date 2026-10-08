import sys
import os
import json
import re

# Read temp_wb_input.txt
input_path = os.path.join(os.path.dirname(__file__), '..', 'temp_wb_input.txt')
with open(input_path, 'r', encoding='utf-8') as f:
    text = f.read()

def clean_txt(s):
    if not s:
        return ''
    s = s.replace('[CONFIRM]', '')
    s = s.replace('[CONFIRM per grade]', '1/2" to 12" OD')
    s = s.replace('[CONFIRM status: planned or under development]', '')
    s = s.replace('[CONFIRM: trim to the areas you want to rank for]', '')
    s = re.sub(r'\[CONFIRM[^\]]*\]', '', s)
    s = re.sub(r'\s+', ' ', s)
    return s.strip()

cities_def = [
    ('kolkata', 'Kolkata', '-KOLKATA LANDING PAGE', 'HALDIA LANDING PAGE', '316L', True, [
        {'name': 'Howrah', 'path': '/market-area/howrah', 'anchor': 'electropolished pipes in Howrah'},
        {'name': 'Kalyani', 'path': '/market-area/kalyani', 'anchor': 'electropolished pipes in Kalyani'},
        {'name': 'Haldia', 'path': '/market-area/haldia', 'anchor': 'electropolished pipes in Haldia'},
        {'name': 'Dankuni', 'path': '/market-area/dankuni', 'anchor': 'electropolished pipes in Dankuni'}
    ]),
    ('haldia', 'Haldia', 'HALDIA LANDING PAGE', 'KALYANI LANDING PAGE', '316L', True, [
        {'name': 'Kolkata', 'path': '/market-area/kolkata', 'anchor': 'electropolished pipes in Kolkata'},
        {'name': 'Kalyani', 'path': '/market-area/kalyani', 'anchor': 'electropolished pipes in Kalyani'},
        {'name': 'Kharagpur', 'path': '/market-area/kharagpur', 'anchor': 'electropolished pipes in Kharagpur'}
    ]),
    ('kalyani', 'Kalyani', 'KALYANI LANDING PAGE', 'HOWRAH LANDING PAGE', '304L', True, [
        {'name': 'Kolkata', 'path': '/market-area/kolkata', 'anchor': 'electropolished pipes in Kolkata'},
        {'name': 'Dankuni', 'path': '/market-area/dankuni', 'anchor': 'electropolished pipes in Dankuni'},
        {'name': 'Howrah', 'path': '/market-area/howrah', 'anchor': 'electropolished pipes in Howrah'}
    ]),
    ('howrah', 'Howrah', 'HOWRAH LANDING PAGE', 'DANKUNI LANDING PAGE', '304L', True, [
        {'name': 'Kolkata', 'path': '/market-area/kolkata', 'anchor': 'electropolished pipes in Kolkata'},
        {'name': 'Dankuni', 'path': '/market-area/dankuni', 'anchor': 'electropolished pipes in Dankuni'},
        {'name': 'Kalyani', 'path': '/market-area/kalyani', 'anchor': 'electropolished pipes in Kalyani'},
        {'name': 'Kharagpur', 'path': '/market-area/kharagpur', 'anchor': 'electropolished pipes in Kharagpur'}
    ]),
    ('dankuni', 'Dankuni', 'DANKUNI LANDING PAGE', 'DURGAPUR LANDING PAGE', '304L', True, [
        {'name': 'Kolkata', 'path': '/market-area/kolkata', 'anchor': 'electropolished pipes in Kolkata'},
        {'name': 'Howrah', 'path': '/market-area/howrah', 'anchor': 'electropolished pipes in Howrah'},
        {'name': 'Kalyani', 'path': '/market-area/kalyani', 'anchor': 'electropolished pipes in Kalyani'},
        {'name': 'Durgapur', 'path': '/market-area/durgapur', 'anchor': 'electropolished pipes in Durgapur'}
    ]),
    ('durgapur', 'Durgapur', 'DURGAPUR LANDING PAGE', 'SILIGURI LANDING PAGE', '304L', True, [
        {'name': 'Asansol', 'path': '/market-area/asansol', 'anchor': 'electropolished pipes in Asansol'},
        {'name': 'Kolkata', 'path': '/market-area/kolkata', 'anchor': 'electropolished pipes in Kolkata'},
        {'name': 'Kalyani', 'path': '/market-area/kalyani', 'anchor': 'electropolished pipes in Kalyani'}
    ]),
    ('siliguri', 'Siliguri', 'SILIGURI LANDING PAGE', 'KHARAGPUR LANDING PAGE', '304L', True, [
        {'name': 'Kolkata', 'path': '/market-area/kolkata', 'anchor': 'electropolished pipes in Kolkata'},
        {'name': 'Kalyani', 'path': '/market-area/kalyani', 'anchor': 'electropolished pipes in Kalyani'}
    ]),
    ('kharagpur', 'Kharagpur', 'KHARAGPUR LANDING PAGE', 'ASANSOL LANDING PAGE', '304L', True, [
        {'name': 'Kolkata', 'path': '/market-area/kolkata', 'anchor': 'electropolished pipes in Kolkata'},
        {'name': 'Haldia', 'path': '/market-area/haldia', 'anchor': 'electropolished pipes in Haldia'},
        {'name': 'Durgapur', 'path': '/market-area/durgapur', 'anchor': 'electropolished pipes in Durgapur'}
    ]),
]

wb_data = {}

for slug, city, start_pat, end_pat, def_grade, duplex, nearby in cities_def:
    s = text.find(start_pat)
    e = text.find(end_pat)
    chunk = text[s:e]
    
    m_title = re.search(r'Title[^\n]*:\s*([^\n]+)', chunk)
    m_meta = re.search(r'Meta description:\s*([^\n]+)', chunk)
    m_h1 = re.search(r'H1:\s*([^\n]+)', chunk)
    m_sub = re.search(r'Sub-headline:\s*([^\n]+)', chunk)
    m_trust = re.search(r'Trust strip:\s*([^\n]+)', chunk)
    m_h2 = re.search(r'H2:\s*([^\n]+)', chunk)
    
    # Description between H2 and Zone table
    h2_pos = chunk.find('H2:')
    desc_start = chunk.find('\n', h2_pos) + 1
    zone_pos = chunk.find('Zone\nTypical end-use')
    desc_text = clean_txt(chunk[desc_start:zone_pos]) if (h2_pos != -1 and zone_pos != -1) else ''
    
    # Zones table
    m_zones = re.search(r'Zone\s*\n\s*Typical end-use\s*\n\s*Typical application\s*\n\s*Our usual spec\s*\n(.*?)(?=\nVERIFY|\nH3:|\n4\. TECHNICAL)', chunk, re.DOTALL)
    zones = []
    if m_zones:
        raw_lines = [l.strip() for l in m_zones.group(1).strip().split('\n') if l.strip()]
        for i in range(0, len(raw_lines) - 3, 4):
            zones.append({
                'zone': clean_txt(raw_lines[i]),
                'endUse': clean_txt(raw_lines[i+1]),
                'application': clean_txt(raw_lines[i+2]),
                'spec': clean_txt(raw_lines[i+3])
            })
            
    # Applications (H3s)
    apps = []
    for m in re.finditer(r'H3:\s*([^.\n]+)\.\s*([^\n]+)', chunk):
        t = m.group(1).strip()
        if t.lower() == 'local buying notes':
            continue
        apps.append({'title': clean_txt(t), 'desc': clean_txt(m.group(2))})
        
    # Local buying notes
    m_notes = re.search(r'H3:\s*Local buying notes\s*\n(.*?)(?=\n4\. TECHNICAL)', chunk, re.DOTALL)
    local_notes = []
    if m_notes:
        for l in m_notes.group(1).strip().split('\n'):
            l_clean = clean_txt(l)
            if l_clean and len(l_clean) > 15:
                local_notes.append(l_clean)
                
    # FAQs
    m_faqs = re.search(r'7\.\s*FAQs.*?\n(.*?)(?=\n8\.\s*JSON-LD)', chunk, re.DOTALL)
    faqs = []
    if m_faqs:
        faq_text = m_faqs.group(1).strip()
        pairs = re.findall(r'(How[^\n\?]+\?|Which[^\n\?]+\?|Where[^\n\?]+\?|We[^\n\?]+\?|Is[^\n\?]+\?|Do[^\n\?]+\?|Can[^\n\?]+\?|Our[^\n\?]+\?|Should[^\n\?]+\?)\s*\n\s*([^\n]+(?:\n(?!\n|[A-Z0-9\.\s]+:)[^\n]+)*)', faq_text)
        for q, a in pairs:
            faqs.append({'q': clean_txt(q), 'a': clean_txt(a)})
            
    # Areas
    m_areas = re.search(r'Areas line\s*(?:\([^\)]*\))?:\s*([^\n]+)', chunk)
    areas_txt = clean_txt(m_areas.group(1)) if m_areas else f'{city} and surrounding industrial zones'
    areas_list = [a.strip() for a in areas_txt.split('|') if a.strip()]
    
    transit_info = faqs[0]['a'] if faqs else f'{city} delivery is typically 6-8 days from our Taloja MIDC factory.'
    
    trust_strip = [s.strip() for s in m_trust.group(1).split('|')] if m_trust else [
        'ISO 9001:2015', 'EN 10204 3.1 MTC', '100% PMI Tested', 'Internal Ra ≤0.4 µm', 'ASTM A269 / A270'
    ]
    
    wb_data[slug] = {
        'slug': slug,
        'city': city,
        'state': 'West Bengal',
        'country': 'India',
        'pageUrl': f'/market-area/{slug}',
        'pageTitle': clean_txt(m_title.group(1)) if m_title else f'Electropolished Pipe Manufacturer {city} | Sakshi Forge',
        'metaDescription': clean_txt(m_meta.group(1)) if m_meta else '',
        'h1': clean_txt(m_h1.group(1)) if m_h1 else f'Electropolished Stainless Steel Pipe Manufacturer in {city}',
        'subHeadline': clean_txt(m_sub.group(1)) if m_sub else '',
        'trustStrip': trust_strip,
        'defaultFilter': {'grade': def_grade, 'type': 'ALL'},
        'hasDuplex': duplex,
        'transitInfo': transit_info,
        'regionalCapability': {
            'title': clean_txt(m_h2.group(1)) if m_h2 else f"Electropolished Pipe for {city}'s Industrial Belt",
            'description': desc_text,
            'zones': zones,
            'applications': apps,
            'localNotes': local_notes
        },
        'qualityDoc': [
            {'name': 'MTC EN 10204 3.1 with heat-number traceability', 'status': 'Confirmed'},
            {'name': '100% PMI test and certificate', 'status': 'Confirmed'},
            {'name': 'Ra surface roughness test (profilometer) and report', 'status': 'Confirmed (Mitutoyo profilometer)'},
            {'name': 'Hydrostatic pressure test and certificate', 'status': 'Confirmed (ASTM A269/A270)'},
            {'name': 'Passivation verification and ferrite check', 'status': 'Confirmed (ASTM A967/B912)'},
            {'name': 'QA inspection report and mill traceability pack', 'status': 'Confirmed'},
            {'name': 'MTC EN 10204 3.2 (Independent Inspection)', 'status': 'Available on request'},
            {'name': 'Third-party inspection (TÜV / Bureau Veritas / DNV)', 'status': 'Accepted on request'}
        ],
        'specifications': {
            'standards': 'ASTM A269, ASTM A270, ASTM A790 (Duplex), ASME BPE compliant options',
            'grades': 'SS 316L (UNS S31603 / 1.4404), SS 304L (UNS S30403 / 1.4307), Duplex 2205 (UNS S31803 / 1.4462)',
            'sizes': '½" to 12" OD welded; ½" to 6" seamless; custom wall SCH 5S / SCH 10S / SCH 40S',
            'finish': 'Electropolished inside and outside, mirror-like finish (Ra ≤0.4 µm / SF4 standard)',
            'testing': '100% PMI, profilometer Ra test, hydrostatic test, passivation verification, ferrite check, visual & dimensional'
        },
        'dimensions': [
            {'nps': '½"', 'od': '12.7', 'wt': '1.65', 'weight304': '0.454', 'weight316': '0.457'},
            {'nps': '¾"', 'od': '19.05', 'wt': '1.65', 'weight304': '0.715', 'weight316': '0.720'},
            {'nps': '1"', 'od': '25.4', 'wt': '1.65', 'weight304': '0.976', 'weight316': '0.982'},
            {'nps': '1½"', 'od': '38.1', 'wt': '1.65', 'weight304': '1.498', 'weight316': '1.508'},
            {'nps': '2"', 'od': '50.8', 'wt': '1.65', 'weight304': '2.020', 'weight316': '2.033'}
        ],
        'faqs': faqs,
        'areas': areas_list,
        'nearbyCities': nearby
    }

# Now add 9. ASANSOL
wb_data['asansol'] = {
    'slug': 'asansol',
    'city': 'Asansol',
    'state': 'West Bengal',
    'country': 'India',
    'pageUrl': '/market-area/asansol',
    'pageTitle': 'Electropolished Pipe Manufacturer Asansol | Sakshi Forge',
    'metaDescription': 'Electropolished 304L & 316L SS pipes for Asansol steel, coal-belt power and Raniganj engineering plants. ASTM A270, MTC EN 10204 3.1, PMI tested.',
    'h1': 'Electropolished Stainless Steel Pipe Manufacturer in Asansol: 304L and 316L EP Tubes for IISCO Burnpur, Raniganj and Paschim Bardhaman Plants',
    'subHeadline': "Asansol is the heart of West Bengal's coal, steel and railway belt in Paschim Bardhaman, anchored by the IISCO Steel Plant at Burnpur, Eastern Coalfields operations and thermal power plants. We manufacture and electropolish SS 304L and 316L pipes and tubes in-house at Taloja and supply the clean-utility, DM-water, sampling and laboratory lines of these plants, with MTC EN 10204 3.1, 100% PMI testing and a measured Ra report on every order.",
    'trustStrip': ['ISO 9001:2015', 'EN 10204 3.1 MTC', '100% PMI Tested', 'Internal Ra ≤0.4 µm', 'ASTM A269 / A270'],
    'defaultFilter': {'grade': '304L', 'type': 'ALL'},
    'hasDuplex': True,
    'transitInfo': 'Asansol is roughly 1,980-2,080 km from our Taloja MIDC factory, and typical road transit is 7-8 days after manufacture and testing. We cap pipe ends, sleeve each length and pack for safe transit.',
    'regionalCapability': {
        'title': "Electropolished Pipe for Asansol and the Raniganj Industrial Belt",
        'description': "Asansol is the principal commercial and industrial hub of Paschim Bardhaman, forming the western anchor of the Durgapur–Raniganj–Asansol industrial corridor. The city is anchored by the historic IISCO Steel Plant (SAIL) at Burnpur, extensive coal operations under Eastern Coalfields Limited (ECL), thermal and captive power generation, railway workshops, and secondary metallurgical clusters at Jamuria, Kulti and Raniganj.\n\nA word on fit. Main process piping in coal mining, steel making, and heavy engineering relies on carbon steel and heavy alloy piping. Electropolished stainless steel pipe is specifically utilised on clean-utility circuits: demineralised (DM) water loops, boiler-water and steam-chemistry sampling stations, analytical instrumentation, laboratory gas lines, and skid assemblies.",
        'zones': [
            {
                'zone': 'IISCO Steel Plant (SAIL) & Burnpur Works',
                'endUse': 'Integrated steel production and rolling',
                'application': 'DM-water, sampling, instrument and laboratory lines; not main process service',
                'spec': '316L / 304L, small-bore, cut to drawing'
            },
            {
                'zone': 'Eastern Coalfields & Raniganj Industrial Belt',
                'endUse': 'Coal mining, engineering workshops, coal-based chemicals',
                'application': 'Clean utility, DM water, workshop testing assemblies',
                'spec': '304L / 316L'
            },
            {
                'zone': 'Jamuria and Kulti Industrial Areas',
                'endUse': 'Sponge iron, foundries, rolling mills and engineering',
                'application': 'Clean utility, skid assemblies, wash lines',
                'spec': '304L / 316L, cut to drawing'
            },
            {
                'zone': 'Thermal Power and Captive Power Stations',
                'endUse': 'Power generation and steam utility',
                'application': 'DM-water, boiler-chemistry and water-analysis sampling lines',
                'spec': '316L / 304L'
            },
            {
                'zone': 'Paschim Bardhaman Equipment Builders & Fabricators',
                'endUse': 'Machinery and process equipment fabrication',
                'application': 'Headers, skids, clean-side piping, cut to drawing',
                'spec': '304L / 316L, traceable cut lengths'
            }
        ],
        'applications': [
            {
                'title': 'DM-water and water-treatment lines',
                'desc': 'Smooth, passivated 304L and 316L for demineralised-water and pure-water utility circuits.'
            },
            {
                'title': 'Boiler-chemistry and gas sampling lines',
                'desc': 'Small-bore stainless tube cut to drawing for high-precision water analysis and instrument monitoring.'
            },
            {
                'title': 'Laboratory and quality-control utility',
                'desc': 'Clean, documented tubing for in-plant metallurgical, environmental and analytical labs.'
            },
            {
                'title': 'Shutdown and maintenance spares',
                'desc': 'Cut lengths and fittings supplied against scheduled blast-furnace or power-unit overhaul windows.'
            },
            {
                'title': 'Fabricators and engineering contractors',
                'desc': 'Cut-to-length pipe with heat-number traceability for contractors serving public-sector and private plants.'
            },
            {
                'title': 'New-build and expansion projects',
                'desc': "Quotes against project drawings and specifications at design stage with complete commissioning documentation."
            }
        ],
        'localNotes': [
            "We'll say plainly where electropolished pipe isn't the answer: steel melting, coal extraction, and slurry handling use heavy carbon or alloy steel. Electropolished pipe is dedicated to clean utilities, DM water, and analytical lines.",
            "Public-sector and major corporate buyers (SAIL, ECL, power boards) purchase through tenders, approved-vendor lists, and third-party inspection (TÜV, Bureau Veritas). We provide 100% PMI certificates and EN 10204 3.1 MTCs tied to heat numbers.",
            "Plan around shutdown windows: maintenance outages have fixed timelines. Share your shutdown dates during enquiry so we schedule production and dispatch accordingly.",
            "NH-19 corridor consolidation: Asansol sits directly on the National Highway 19 corridor with Durgapur and Kolkata, allowing consolidated dispatch with unified document sets.",
            "Distance is roughly 1,980-2,080 km from our factory. We cap pipe ends, sleeve every length, and pack for long-haul road transit."
        ]
    },
    'qualityDoc': [
        {'name': 'MTC EN 10204 3.1 with heat-number traceability', 'status': 'Confirmed'},
        {'name': '100% PMI test and certificate', 'status': 'Confirmed'},
        {'name': 'Ra surface roughness test (profilometer) and report', 'status': 'Confirmed (Mitutoyo profilometer)'},
        {'name': 'Hydrostatic pressure test and certificate', 'status': 'Confirmed (ASTM A269/A270)'},
        {'name': 'Passivation verification and ferrite check', 'status': 'Confirmed (ASTM A967/B912)'},
        {'name': 'QA inspection report and mill traceability pack', 'status': 'Confirmed'},
        {'name': 'MTC EN 10204 3.2 (Independent Inspection)', 'status': 'Available on request'},
        {'name': 'Third-party inspection (TÜV / Bureau Veritas / DNV)', 'status': 'Accepted on request'}
    ],
    'specifications': {
        'standards': 'ASTM A269, ASTM A270, ASTM A790 (Duplex), ASME BPE compliant options',
        'grades': 'SS 316L (UNS S31603 / 1.4404), SS 304L (UNS S30403 / 1.4307), Duplex 2205 (UNS S31803 / 1.4462)',
        'sizes': '½" to 12" OD welded; ½" to 6" seamless; custom wall SCH 5S / SCH 10S / SCH 40S',
        'finish': 'Electropolished inside and outside, mirror-like finish (Ra ≤0.4 µm / SF4 standard)',
        'testing': '100% PMI, profilometer Ra test, hydrostatic test, passivation verification, ferrite check, visual & dimensional'
    },
    'dimensions': [
        {'nps': '½"', 'od': '12.7', 'wt': '1.65', 'weight304': '0.454', 'weight316': '0.457'},
        {'nps': '¾"', 'od': '19.05', 'wt': '1.65', 'weight304': '0.715', 'weight316': '0.720'},
        {'nps': '1"', 'od': '25.4', 'wt': '1.65', 'weight304': '0.976', 'weight316': '0.982'},
        {'nps': '1½"', 'od': '38.1', 'wt': '1.65', 'weight304': '1.498', 'weight316': '1.508'},
        {'nps': '2"', 'od': '50.8', 'wt': '1.65', 'weight304': '2.020', 'weight316': '2.033'}
    ],
    'faqs': [
        {
            'q': 'How long will delivery to Asansol take, and how is the finish protected over that distance?',
            'a': 'Asansol is roughly 1,980-2,080 km from our Taloja MIDC factory, and typical road transit is 7-8 days after manufacture and testing. We cap the pipe ends, sleeve each length and pack for the journey so the electropolished finish arrives undamaged. If your shutdown has a fixed window, tell us when you enquire and we will plan accordingly.'
        },
        {
            'q': 'Where does electropolished pipe fit in steel plants like IISCO Burnpur or power stations?',
            'a': 'Not on the main process, steam, or fuel lines. It fits the clean side: DM-water lines, boiler-chemistry and water-analysis sampling lines, instrument and laboratory lines. Send us the line, media and temperature, and we will advise whether electropolished pipe suits it or if plain stainless tube is the better choice.'
        },
        {
            'q': 'We buy through tenders and an approved-vendor list. Can you respond, and can you supply our maintenance contractor?',
            'a': 'Yes. Send us the tender specification, quantities and delivery schedule, and we will respond with a technical and commercial offer and the document pack, including 100% PMI results and a 3.1 MTC tied to heat numbers. We also supply maintenance contractors and fabricators with inspection-ready documentation.'
        },
        {
            'q': 'Can you combine an Asansol order with Durgapur, Bardhaman or Kolkata?',
            'a': 'Yes. Asansol sits directly on the NH-19 corridor with Durgapur and Kolkata, so a combined requirement can go as one consolidated dispatch with unified documentation, spreading the freight efficiently.'
        }
    ],
    'areas': [a.strip() for a in 'Asansol | Burnpur | Raniganj | Jamuria | Kulti | Kalla | Andal | Salanpur | Chittaranjan | Durgapur | Dhanbad'.split('|') if a.strip()],
    'nearbyCities': [
        {'name': 'Durgapur', 'path': '/market-area/durgapur', 'anchor': 'electropolished pipes in Durgapur'},
        {'name': 'Kolkata', 'path': '/market-area/kolkata', 'anchor': 'electropolished pipes in Kolkata'},
        {'name': 'Kharagpur', 'path': '/market-area/kharagpur', 'anchor': 'electropolished pipes in Kharagpur'},
        {'name': 'Kalyani', 'path': '/market-area/kalyani', 'anchor': 'electropolished pipes in Kalyani'}
    ]
}

# Now add 10. BARDHAMAN
wb_data['bardhaman'] = {
    'slug': 'bardhaman',
    'city': 'Bardhaman',
    'state': 'West Bengal',
    'country': 'India',
    'pageUrl': '/market-area/bardhaman',
    'pageTitle': 'Electropolished Pipe Manufacturer Bardhaman | Sakshi Forge',
    'metaDescription': 'Electropolished 304L & 316L SS pipes for Bardhaman food, potato and agro-processing plants. ASTM A270, MTC EN 10204 3.1, PMI tested. Quote in 30 min.',
    'h1': 'Electropolished Stainless Steel Pipe Manufacturer in Bardhaman: 304L and 316L EP Tubes for Rice-Belt Food, Potato and Agro-Processing Plants',
    'subHeadline': "Bardhaman is the district town of West Bengal's 'rice bowl', on the Grand Trunk Road between Durgapur and Kolkata, with rice mills, agro-based industry and one of the state's main potato belts around it. We manufacture and electropolish SS 304L and 316L pipes and tubes in-house at Taloja and supply Bardhaman's food plants and fabricators directly, with MTC EN 10204 3.1, 100% PMI testing and a measured Ra report on every order.",
    'trustStrip': ['ISO 9001:2015', 'EN 10204 3.1 MTC', '100% PMI Tested', 'Internal Ra ≤0.4 µm', 'ASTM A269 / A270'],
    'defaultFilter': {'grade': '304L', 'type': 'ALL'},
    'hasDuplex': True,
    'transitInfo': 'Bardhaman is roughly 2,000-2,100 km from our Taloja MIDC factory, and typical road transit is 7-8 days after manufacture and testing. We cap the pipe ends, sleeve each length and pack for the journey and for humid air, so the electropolished finish arrives undamaged.',
    'regionalCapability': {
        'title': "Electropolished Pipe for Bardhaman's Agro-Industrial Belt",
        'description': "Purba Bardhaman district was carved out of the old Bardhaman district in 2017, with the district town at Bardhaman (Burdwan) and other towns at Memari, Guskara, Kalna, Katwa and Dainhat. Known as the 'rice bowl' of West Bengal, the region hosts extensive rice mills, agro-based industries, and prominent potato cultivation belts, alongside sugar and edible oil processing along the Grand Trunk Road.\n\nA word on fit. Rice milling, parboiling, jute processing and cold-storage refrigeration don't use electropolished pipe. Where we're useful is wet food lines (potato washing, blanching, frying and chip making, rice-based food products and edible oil refining), small dairy and sweet-making units, and the fabricators who build for them.",
        'zones': [
            {
                'zone': 'Rice mills and agro-based industries (Bardhaman, Memari, Guskara)',
                'endUse': 'Rice milling and agro processing',
                'application': 'Mostly dry or steam-boiler duty; wash lines and rice-based food lines only',
                'spec': '304L'
            },
            {
                'zone': 'Potato processing (major potato belt)',
                'endUse': 'Potato washing, blanching, frying and flake or chip making',
                'application': 'Wash water, slurry-free transfer, CIP, clean utility',
                'spec': '304L; 316L for chloride-bearing wash or brine'
            },
            {
                'zone': 'Edible oil and sugarcane units (Katwa and cane belt)',
                'endUse': 'Oil refining, sugar and jaggery',
                'application': 'Clean-side process water, condensate, hygienic transfer',
                'spec': '304L / 316L after a media check'
            },
            {
                'zone': 'Small dairy and confectionery units',
                'endUse': 'Milk products and sweets processing',
                'application': 'Milk transfer, CIP, product lines',
                'spec': '304L, internal Ra ≤0.4 µm'
            },
            {
                'zone': 'Cold storage and jute units',
                'endUse': 'Potato cold storage, jute processing',
                'application': 'Not a fit; refrigeration and dry processing',
                'spec': 'n/a'
            },
            {
                'zone': 'Fabricators in Bardhaman and Kalna',
                'endUse': 'Local engineering workshops serving food plants',
                'application': 'Headers, skids, tank pipework, cut to drawing',
                'spec': '304L / 316L, traceable cut lengths'
            }
        ],
        'applications': [
            {
                'title': 'Potato and vegetable processing',
                'desc': 'A smooth, passivated interior that rinses clean and does not hold starch or oil residue, for washing, blanching and frying lines.'
            },
            {
                'title': 'Edible-oil and sugar clean-side lines',
                'desc': 'Process water, condensate and hygienic transfer lines for vegetable oil refineries and sugar units.'
            },
            {
                'title': 'Dairy and confectionery lines',
                'desc': 'Hygienic tubing for milk reception, transfer and CIP cleaning.'
            },
            {
                'title': 'CIP and SIP lines',
                'desc': 'A smooth bore cleans faster and drains better, which matters for caustic and acid wash cycles.'
            },
            {
                'title': 'Fabricators and equipment makers',
                'desc': 'Cut-to-length pipe with heat-number traceability for the shops that build for the district food plants.'
            },
            {
                'title': 'New-build food plants',
                'desc': 'Technical quotes against drawings and specifications at project design stage.'
            }
        ],
        'localNotes': [
            "Rice and jute aren't the target: rice milling, parboiling and jute processing are dry or steam-boiler processes, and cold storage uses refrigeration. We will tell you honestly if electropolished pipe is not needed.",
            "Potato lines are cleaning-driven: starch and oil foul pipes quickly, and a smooth electropolished interior is easier to clean. 304L is the standard grade, and 316L is recommended where brine or sanitisers carry chlorides.",
            "We are roughly 2,000-2,100 km from Bardhaman. For a few plain lengths, a local dealer is cheaper. We are the better choice when you need measured Ra <=0.4 um, 100% PMI testing, and full EN 10204 3.1 mill certification.",
            "Bardhaman sits on the Grand Trunk Road / NH-19 between Durgapur and Kolkata. Consolidated runs allow combined dispatches with Durgapur, Asansol, Dankuni or Kolkata sites with uniform documentation.",
            "Protective packaging: end caps, poly-sleeves on every length, and heavy-duty wooden crates protect against humid air during the 7-8 day road transit."
        ]
    },
    'qualityDoc': [
        {'name': 'MTC EN 10204 3.1 with heat-number traceability', 'status': 'Confirmed'},
        {'name': '100% PMI test and certificate', 'status': 'Confirmed'},
        {'name': 'Ra surface roughness test (profilometer) and report', 'status': 'Confirmed (Mitutoyo profilometer)'},
        {'name': 'Hydrostatic pressure test and certificate', 'status': 'Confirmed (ASTM A269/A270)'},
        {'name': 'Passivation verification and ferrite check', 'status': 'Confirmed (ASTM A967/B912)'},
        {'name': 'QA inspection report and mill traceability pack', 'status': 'Confirmed'},
        {'name': 'MTC EN 10204 3.2 (Independent Inspection)', 'status': 'Available on request'},
        {'name': 'Third-party inspection (TÜV / Bureau Veritas / DNV)', 'status': 'Accepted on request'}
    ],
    'specifications': {
        'standards': 'ASTM A269, ASTM A270, ASTM A790 (Duplex), ASME BPE compliant options',
        'grades': 'SS 316L (UNS S31603 / 1.4404), SS 304L (UNS S30403 / 1.4307), Duplex 2205 (UNS S31803 / 1.4462)',
        'sizes': '½" to 12" OD welded; ½" to 6" seamless; custom wall SCH 5S / SCH 10S / SCH 40S',
        'finish': 'Electropolished inside and outside, mirror-like finish (Ra ≤0.4 µm / SF4 standard)',
        'testing': '100% PMI, profilometer Ra test, hydrostatic test, passivation verification, ferrite check, visual and dimensional'
    },
    'dimensions': [
        {'nps': '½"', 'od': '12.7', 'wt': '1.65', 'weight304': '0.454', 'weight316': '0.457'},
        {'nps': '¾"', 'od': '19.05', 'wt': '1.65', 'weight304': '0.715', 'weight316': '0.720'},
        {'nps': '1"', 'od': '25.4', 'wt': '1.65', 'weight304': '0.976', 'weight316': '0.982'},
        {'nps': '1½"', 'od': '38.1', 'wt': '1.65', 'weight304': '1.498', 'weight316': '1.508'},
        {'nps': '2"', 'od': '50.8', 'wt': '1.65', 'weight304': '2.020', 'weight316': '2.033'}
    ],
    'faqs': [
        {
            'q': 'How long will delivery to Bardhaman take, and how is the finish protected over that distance?',
            'a': 'Bardhaman is roughly 2,000-2,100 km from our Taloja MIDC factory, and typical road transit is 7-8 days after manufacture and testing. We cap the pipe ends, sleeve each length and pack for the journey and for humid air, so the electropolished finish arrives undamaged. If your project has a fixed date, tell us when you enquire and we will plan accordingly.'
        },
        {
            'q': 'Do rice mills, jute units and potato cold storages need electropolished pipe?',
            'a': 'Generally no. Rice milling, parboiling and jute processing are dry or steam-boiler processes, and cold storage uses refrigeration. Electropolished pipe pays off on wet food lines such as potato washing and frying, edible-oil and dairy lines, and clean utilities, where a smooth surface is easier to clean. Tell us your process and we will say honestly whether it fits.'
        },
        {
            'q': 'Is 304L enough for a potato washing or frying line, or should I choose 316L?',
            'a': '304L is the standard grade for food lines and handles normal caustic and acid CIP cycles. Choose 316L if brine or your sanitisers carry chlorides, or the product is acidic. Send us your product and CIP chemistry and we will confirm the grade. Our internal Ra of 0.4 µm or better sits inside the usual food band of 0.8 µm.'
        },
        {
            'q': 'Is it worth ordering from Mumbai when Bardhaman has local dealers, and can you combine our order with Durgapur or Kolkata?',
            'a': 'For a few plain lengths, a local dealer is usually cheaper at this distance, and we will say so. We are the better choice when you need a measured Ra, heat-number traceability, a particular size or finish, or the full document pack. If you have several sizes or several sites, send them together and we will quote one consolidated dispatch with Durgapur, Asansol, Dankuni or Kolkata sites.'
        }
    ],
    'areas': ['Bardhaman', 'Burdwan', 'Memari', 'Guskara', 'Kalna', 'Katwa', 'Dainhat', 'Khandaghosh', 'Galsi', 'Durgapur', 'Panagarh', 'Kolkata'],
    'nearbyCities': [
        {'name': 'Durgapur', 'path': '/market-area/durgapur', 'anchor': 'electropolished pipes in Durgapur'},
        {'name': 'Asansol', 'path': '/market-area/asansol', 'anchor': 'electropolished pipes in Asansol'},
        {'name': 'Dankuni', 'path': '/market-area/dankuni', 'anchor': 'electropolished pipes in Dankuni'},
        {'name': 'Kolkata', 'path': '/market-area/kolkata', 'anchor': 'electropolished pipes in Kolkata'}
    ]
}

# Output JS content
output_js = "// Comprehensive Developer Hand-off Data for West Bengal Landing Pages:\n"
output_js += "// Kolkata, Haldia, Kalyani, Howrah, Dankuni, Durgapur, Siliguri, Kharagpur, Asansol, Bardhaman\n\n"
output_js += "export const westBengalCityData = " + json.dumps(wb_data, indent=2, ensure_ascii=False) + ";\n\n"

# Add aliases
aliases = [
    ("calcutta", "kolkata"),
    ("falta", "kolkata"),
    ("purba-medinipur", "haldia"),
    ("haringhata", "kalyani"),
    ("nadia", "kalyani"),
    ("sankrail", "howrah"),
    ("uluberia", "howrah"),
    ("hooghly", "dankuni"),
    ("serampore", "dankuni"),
    ("paschim-bardhaman", "durgapur"),
    ("rajbandh", "durgapur"),
    ("panagarh", "durgapur"),
    ("jalpaiguri", "siliguri"),
    ("darjeeling", "siliguri"),
    ("dabgram", "siliguri"),
    ("fulbari", "siliguri"),
    ("paschim-medinipur", "kharagpur"),
    ("midnapore", "kharagpur"),
    ("raniganj", "asansol"),
    ("burnpur", "asansol"),
    ("jamuria", "asansol"),
    ("kulti", "asansol"),
    ("burdwan", "bardhaman"),
    ("purba-bardhaman", "bardhaman"),
    ("memari", "bardhaman"),
    ("kalna", "bardhaman"),
    ("katwa", "bardhaman")
]

for alias, target in aliases:
    output_js += f"westBengalCityData['{alias}'] = westBengalCityData['{target}'];\n"

output_path = os.path.join(os.path.dirname(__file__), '..', 'src', 'data', 'westBengalCityData.js')
with open(output_path, 'w', encoding='utf-8') as f:
    f.write(output_js)

print('Successfully generated', output_path)
print('Total keys in westBengalCityData:', len(wb_data) + len(aliases))
