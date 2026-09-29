import json
import os

cities_path = os.path.join(os.path.dirname(__file__), 'src', 'data', 'market_cities.json')

with open(cities_path, 'r', encoding='utf-8') as f:
    cities = json.load(f)

custom_data = {
    'canberra-australia': {
        'pageTitle': 'Electropolished Pipes Manufacturer for Canberra, ACT | Sakshi Forge',
        'metaDescription': 'ASTM A270 / ASME BPE electropolished 316L & 304L tube shipped from Mumbai to Canberra. Duty-free under AI-ECTA, EN 10204 3.1 MTC, Ra-tested. Request a quote.',
        'h1': 'Electropolished Pipes Manufacturer for Canberra, ACT',
        'primaryKeyword': 'electropolished pipes manufacturer canberra, ASTM A270 electropolished tube canberra, SS 316L EP pipe canberra',
        'topSecondaryKeywords': 'ASME BPE SF4, duty-free AI-ECTA, EN 10204 3.1 MTC, sanitary tube Canberra',
        'faqs': [
            {
                'q': 'Do you supply EN 10204 3.1 certified electropolished pipes to Canberra?',
                'a': 'Yes. Every shipment to the ACT carries EN 10204 3.1 MTCs with heat numbers, PMI results and Ra profilometer reports from a NABL-accredited lab. NABL is an ILAC-MRA signatory, like Australia\'s NATA.'
            },
            {
                'q': 'What surface roughness (Ra) finishes are available for Canberra pharma and lab projects?',
                'a': 'We supply electropolished SF4 (Ra ≤ 0.38 µm / 15 µin) and SF5 (Ra ≤ 0.51 µm / 20 µin). Mechanically polished SF1 (Ra ≤ 0.51 µm) is available for non-product-contact lines.'
            },
            {
                'q': 'What is the delivery time to Canberra?',
                'a': 'Typically scheduled production, reliable sea freight to Port Botany, Sydney, and rapid customs clearance and road delivery to Canberra. We confirm the exact date with every quote.'
            },
            {
                'q': 'Is there import duty on electropolished pipes from India to Australia?',
                'a': 'Indian-origin goods enter Australia duty-free under the India–Australia ECTA when shipped with a valid Certificate of Origin. Ask your customs broker to confirm the HS code (7306.40 welded or 7304.41 seamless) and whether any anti-dumping measures apply.'
            },
            {
                'q': 'Do your tubes meet AS 1528?',
                'a': 'Yes — we supply to AS 1528.1 dimensions for dairy, brewery and food lines as well as ASTM A270 outside diameters; send your specification and we will confirm compatibility before quoting.'
            },
            {
                'q': 'How do I order electropolished pipes for Canberra?',
                'a': 'Send the grade, OD × wall, finish, length and quantity through the RFQ form or to sales@steelmanufacturer.in. You will receive a quote within one business day (AEST).'
            }
        ]
    },
    'abu-dhabi-uae': {
        'pageTitle': 'Electropolished Pipes Manufacturer for Abu Dhabi, UAE | Sakshi Forge',
        'metaDescription': 'ASTM A270 / ASME BPE electropolished 316L & 304L tube shipped from Mumbai to Abu Dhabi. CEPA Certificate of Origin, EN 10204 3.1 MTC, Ra-tested. Request a quote.',
        'h1': 'Electropolished Pipes Manufacturer for Abu Dhabi, UAE',
        'primaryKeyword': 'electropolished pipes manufacturer abu dhabi, ASTM A270 tube abu dhabi, SS 316L EP pipe UAE',
        'topSecondaryKeywords': 'ASME BPE SF4, 0% duty, EN 10204 3.1 MTC, KEZAD industrial tube',
        'faqs': [
            {
                'q': 'Do you supply EN 10204 3.1 certified electropolished pipes to Abu Dhabi?',
                'a': 'Yes. Every shipment to the UAE carries EN 10204 3.1 MTCs with heat numbers, PMI results and Ra profilometer reports from a NABL-accredited lab. NABL is an ILAC-MRA signatory, like the UAE\'s EIAC.'
            },
            {
                'q': 'What surface roughness (Ra) finishes are available for pharma and biotech projects?',
                'a': 'We supply electropolished SF4 (Ra ≤ 0.38 µm / 15 µin) and SF5 (Ra ≤ 0.51 µm / 20 µin). Mechanically polished SF1 (Ra ≤ 0.51 µm) is available for non-product-contact lines.'
            },
            {
                'q': 'How long does delivery to Abu Dhabi take?',
                'a': 'Typically scheduled production, fast sea freight from Nhava Sheva to Khalifa Port or Jebel Ali, and rapid customs clearance and delivery. We confirm the exact date with every quote.'
            },
            {
                'q': 'Is there customs duty on electropolished pipes from India to the UAE?',
                'a': 'Under the India–UAE CEPA, qualifying Indian-origin goods enter the UAE at 0% customs duty instead of the standard 5%, when shipped with a valid CEPA Certificate of Origin. Steel products have strict origin rules, so we confirm CEPA eligibility for your order before shipping. Your clearing agent can confirm the HS code (7306.40 welded or 7304.41 seamless).'
            },
            {
                'q': 'Can you deliver to KEZAD and other free zones?',
                'a': 'Yes. We deliver to KEZAD, ICAD / Mussafah, Masdar City and mainland sites across Abu Dhabi. Tell us whether your site is in a free zone or on the mainland; the customs paperwork differs, and we prepare documents to match.'
            },
            {
                'q': 'Which currencies and payment terms do you accept?',
                'a': 'We quote in USD or AED and accept LC at sight or TT.'
            },
            {
                'q': 'How do I order electropolished pipes for Abu Dhabi?',
                'a': 'Send the grade, OD × wall, finish, length and quantity through the RFQ form, on WhatsApp, or to sales@steelmanufacturer.in. You will receive a quote within one business day.'
            }
        ]
    },
    'al-ain-uae': {
        'pageTitle': 'Electropolished Pipes Manufacturer for Al Ain, UAE | Sakshi Forge',
        'metaDescription': 'ASTM A270 / ASME BPE electropolished 316L & 304L tube for Al Ain dairy, water, food and pharma lines. QA-reviewed specs, EN 10204 3.1 MTC, CEPA CoO. Get a quote.',
        'h1': 'Electropolished Pipes Manufacturer for Al Ain, UAE',
        'primaryKeyword': 'electropolished pipes manufacturer al ain, sanitary tube supplier al ain, SS 316L EP pipe UAE',
        'topSecondaryKeywords': 'dairy & water tube, ASME BPE SF4, CEPA 0% duty, Al Ain Industrial City',
        'faqs': [
            {
                'q': 'Do you supply electropolished pipes to Al Ain?',
                'a': 'Yes. We supply ASTM A270 / ASME BPE tube to dairy, bottled-water, food, hospital and university sites across Al Ain, delivered by road from Khalifa Port or Jebel Ali.'
            },
            {
                'q': 'Which industries in Al Ain use electropolished vs mechanically polished tube?',
                'a': 'Al Ain has distinct sectors. Dairy, bottled-water, date-processing and beverage plants typically use mechanically polished 304L or 316L (SF1, Ra ≤ 0.51 µm) for cleanability at reasonable cost. Hospital pharmacy, sterile compounding and university biotech laboratories specify electropolished 316L (SF4, Ra ≤ 0.38 µm) for bio-film resistance.'
            },
            {
                'q': 'Can you supply electropolished tube with Ra ≤ 0.38 µm (SF4)?',
                'a': 'Yes. SF4 (Ra ≤ 0.38 µm internal, electropolished) is our standard pharma-grade finish. We also supply SF5 (Ra ≤ 0.51 µm EP) and mechanically polished SF1 (Ra ≤ 0.51 µm MP).'
            },
            {
                'q': 'How long does delivery to Al Ain take?',
                'a': 'Production time plus fast ocean freight from Nhava Sheva to Khalifa Port or Jebel Ali, followed by rapid customs clearance and road delivery to Al Ain. We confirm the date with every quote.'
            },
            {
                'q': 'Is there customs duty on electropolished pipes from India to the UAE?',
                'a': 'Under the India–UAE CEPA, qualifying Indian-origin goods enter the UAE at 0% customs duty instead of the standard 5%, when shipped with a valid CEPA Certificate of Origin. Steel products have strict origin rules, so we confirm CEPA eligibility for your order before shipping.'
            },
            {
                'q': 'How is the internal Ra measured and reported?',
                'a': 'We measure internal Ra with a stylus profilometer after electropolishing. Results appear in the Ra report and on the EN 10204 3.1 MTC against the ordered SF designation.'
            },
            {
                'q': 'Can we inspect the tube before it ships?',
                'a': 'Yes. Your own inspector or a third-party agency can witness inspection at our Mumbai plant before dispatch.'
            },
            {
                'q': 'How do I order electropolished tube for Al Ain?',
                'a': 'Send the grade, OD × wall, finish, length and quantity through the RFQ form, on WhatsApp, or to sales@steelmanufacturer.in. You will receive a quote within one business day.'
            }
        ]
    }
}

updated_count = 0
for city in cities:
    slug = city.get('slug')
    if slug in custom_data:
        data = custom_data[slug]
        city.update(data)
        updated_count += 1
        print(f"Updated city: {slug}")

with open(cities_path, 'w', encoding='utf-8') as f:
    json.dump(cities, f, indent=2, ensure_ascii=False)

print(f"Successfully updated {updated_count} cities in {cities_path}")
