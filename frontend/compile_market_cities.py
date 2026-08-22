import openpyxl
import json
import re
import os

excel_path = os.path.join(os.path.dirname(__file__), 'Sakshi-Forge-EP-City-Pages-18-Markets.xlsx')
output_path = os.path.join(os.path.dirname(__file__), 'src', 'data', 'market_cities.json')

wb = openpyxl.load_workbook(excel_path, data_only=True)
ws = wb['02 CITY MASTER']

headers = [ws.cell(3, c).value for c in range(1, ws.max_column + 1)]
print(f"Total columns: {len(headers)}")
for idx, h in enumerate(headers):
    print(f"Col {idx + 1}: {h}")

compiled_cities = []

for r in range(4, ws.max_row + 1):
    page_id = ws.cell(r, 1).value
    if not page_id:
        continue

    # Create row dictionary mapping header to value
    row = {}
    for c in range(1, len(headers) + 1):
        h = headers[c - 1]
        if h:
            row[h] = ws.cell(r, c).value

    status = str(row.get('Status') or ws.cell(r, 7).value or '').strip()
    
    # We include all rows or verified rows according to verified status
    if status.upper() == 'VERIFIED':
        city_name = str(row.get('Display Name') or row.get('City') or '').strip()
        state = str(row.get('State / Region') or row.get('State') or '').strip()
        country = str(row.get('Country') or 'India').strip()
        tier = str(row.get('Tier') or 'A').strip()
        page_id_val = str(row.get('Page ID') or page_id).strip()

        estates = str(row.get('1. Industrial Estates (all real names)') or '').strip()
        lead_estate = str(row.get('2. Lead Estate (short)') or (estates.split(',')[0] if estates else city_name)).strip()
        industry_mix = str(row.get('3. Dominant Industry Mix') or '').strip()
        industry_tag = str(row.get('4. Short Industry Tag') or '').strip()
        gateway = str(row.get('5. Logistics Gateway') or 'ICD Dadri / Nhava Sheva').strip()
        transit_note = str(row.get('6. Transit Note') or '1-3 days road & rail logistics from Mumbai works').strip()
        local_std = str(row.get('7. Local Standard / Regulator') or 'ASME BPE SF4 / ASTM A270 S2').strip()
        proof_point = str(row.get('8. Local Proof Point (one true sentence)') or '').strip()

        url_slug = str(row.get('URL Slug') or row.get('Slug Override') or '').strip().strip('/')
        if not url_slug or url_slug.lower() == 'none':
            clean_city = re.sub(r'[^a-z0-9]+', '-', city_name.lower()).strip('-')
            url_slug = f"electropolished-pipes-supplier-{clean_city}"

        full_url = str(row.get('Full URL') or f"https://steelmanufacturer.in/market-area/{url_slug}/").strip()
        path = f"/market-area/{url_slug}"

        page_title = str(row.get('Title Override') or row.get('Title Tag') or f"Electropolished Pipes Manufacturer in {city_name} | Sakshi Forge").strip()
        meta_desc = str(row.get('Meta Description Override') or row.get('Meta Description') or f"Sakshi Forge is a leading manufacturer of electropolished stainless steel pipes (Ra <= 0.38 um) in {city_name}. Fast dispatch to {lead_estate}.").strip()
        h1 = str(row.get('H1') or f"Electropolished Stainless Steel Pipes Manufacturer in {city_name}").strip()

        keywords = str(row.get('Meta Keywords') or f"electropolished pipes manufacturer {city_name.lower()}, SS 316L EP pipes {city_name.lower()}").strip()

        faqs = [
            {
                'q': f'Do you supply EN 10204 3.1 certified electropolished pipes in {city_name}?',
                'a': f'Yes, Sakshi Forge supplies 100% EN 10204 3.1 MTC certified electropolished stainless steel pipes and fittings directly to industrial hubs across {lead_estate} in {city_name}.'
            },
            {
                'q': f'What surface roughness Ra finish is available for {city_name} pharma and bioprocess projects?',
                'a': f'We provide electropolished pipes meeting ASME BPE SF4 (Ra <= 0.38 um / 15 uin) and SF1 (Ra <= 0.51 um / 20 uin) with borescope inspection reports for high-purity bioprocess lines in {city_name}.'
            },
            {
                'q': f'What is the estimated delivery transit time to {city_name}?',
                'a': f'Shipments to {city_name} are dispatched via {gateway} with an average transit time of {transit_note}. Urgent air or express surface transport is available upon request.'
            }
        ]

        compiled_city = {
            'city': city_name,
            'state': state,
            'country': country,
            'tier': tier,
            'industrialCluster': lead_estate,
            'industrialAreas': estates,
            'keyIndustries': industry_mix,
            'roadTransitFromMumbai': transit_note,
            'dispatchLane': gateway,
            'transitLine': f"Direct Logistics Corridor ({gateway})",
            'freightBasis': "FOB Mumbai / Door Delivery",
            'projectRef': page_id_val,
            'slug': url_slug,
            'fullPageUrl': full_url,
            'path': path,
            'pageTitle': page_title,
            'metaDescription': meta_desc,
            'h1': h1,
            'canonicalUrl': full_url,
            'primaryKeyword': keywords,
            'topSecondaryKeywords': f"{industry_tag}, {local_std}",
            'faqs': faqs
        }

        compiled_cities.append(compiled_city)

print(f"Total compiled VERIFIED cities: {len(compiled_cities)}")

with open(output_path, 'w', encoding='utf-8') as f:
    json.dump(compiled_cities, f, indent=2, ensure_ascii=False)

print(f"Successfully saved {len(compiled_cities)} verified market cities into {output_path}!")
