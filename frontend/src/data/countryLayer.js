// Country layer for foreign market-area pages (F2). Every fact below comes from the source
// listed with it; nothing here is about Sakshi Forge except the allowed facts (30-minute quote 24x7,
// ASTM A270/A269/A249/A312, SF1/SF4, dispatch and transit confirmed in writing).

const W = 'https://en.wikipedia.org/wiki/';
const SRC = {
  ist: { label: 'Indian Standard Time (Wikipedia)', url: `${W}Indian_Standard_Time` },
  ports: { label: 'List of busiest container ports (Wikipedia)', url: `${W}List_of_busiest_container_ports` },
  din: { label: 'DIN 11850 and EN 10357 (Alfa Laval)', url: 'https://www.alfalaval.com/products/fluid-handling/din-11850-en-10357/' },
  bs: { label: 'BS 4825-1 (BSI)', url: 'https://knowledge.bsigroup.com/products/stainless-steel-tubes-and-fittings-for-the-food-industry-and-other-hygienic-applications-specification-for-tubes' },
};
const tz = (page, label) => ({ label: `${label} (Wikipedia)`, url: `${W}${page}` });
const port = (page, label) => ({ label: `${label} (Wikipedia)`, url: `${W}${page}` });

const EU_DST = { name: 'summer time', rule: 'from the last Sunday in March to the last Sunday in October' };
const AU_DST = { name: 'daylight saving time', rule: 'from the first Sunday in October to the first Sunday in April' };
const US_DST = { name: 'daylight saving time', rule: '' }; // no dates: none were in the opened source

// Zone: std/dst are UTC offsets in hours; dst null = no clock change.
const Z = {
  CET: { name: 'Central European Time', std: 1, dst: 2, dstInfo: EU_DST },
  UK: { name: 'Greenwich Mean Time (British Summer Time in summer)', std: 0, dst: 1, dstInfo: EU_DST },
  USE: { name: 'US Eastern Time', std: -5, dst: -4, dstInfo: US_DST },
  USC: { name: 'US Central Time', std: -6, dst: -5, dstInfo: US_DST },
  USM: { name: 'US Mountain Time', std: -7, dst: -6, dstInfo: US_DST },
  USMA: { name: 'US Mountain Time (Arizona keeps it all year)', std: -7, dst: null },
  USP: { name: 'US Pacific Time', std: -8, dst: -7, dstInfo: US_DST },
  AEST: { name: 'Australian Eastern Standard Time', std: 10, dst: 11, dstInfo: AU_DST },
  AESTQ: { name: 'Australian Eastern Standard Time (Queensland keeps it all year)', std: 10, dst: null },
  ACST: { name: 'Australian Central Standard Time', std: 9.5, dst: 10.5, dstInfo: US_DST }, // source gives the switch dates for the south-east only
  ACSTN: { name: 'Australian Central Standard Time (the Northern Territory keeps it all year)', std: 9.5, dst: null },
  AWST: { name: 'Australian Western Standard Time', std: 8, dst: null },
  WIB: { name: 'Western Indonesia Time (WIB)', std: 7, dst: null },
  WITA: { name: 'Central Indonesia Time (WITA)', std: 8, dst: null },
  MY: { name: 'Malaysia time', std: 8, dst: null },
  SG: { name: 'Singapore time', std: 8, dst: null },
  VN: { name: 'Indochina Time', std: 7, dst: null },
  G3: { name: '', std: 3, dst: null },
  G4: { name: '', std: 4, dst: null },
};

const US_STATE = {
  Massachusetts: 'USE', 'New Jersey': 'USE', Pennsylvania: 'USE', 'North Carolina': 'USE', 'New York': 'USE', Georgia: 'USE',
  Maryland: 'USE', Ohio: 'USE', 'South Carolina': 'USE', Virginia: 'USE', Florida: 'USE', Indiana: 'USE', Kentucky: 'USE', Michigan: 'USE',
  Illinois: 'USC', Texas: 'USC', Minnesota: 'USC', Alabama: 'USC', Iowa: 'USC', Missouri: 'USC', Tennessee: 'USC', Wisconsin: 'USC', Louisiana: 'USC', Nebraska: 'USC',
  Colorado: 'USM', Utah: 'USM', Idaho: 'USM', Arizona: 'USMA',
  California: 'USP', Oregon: 'USP', Washington: 'USP', Nevada: 'USP',
};
// States split between zones: the city's own zone was checked on its Wikipedia page (utc_offset),
// 28 Nov 2026: Boise -7, Indianapolis -5, Louisville -5, Nashville -6, Memphis -6, Detroit -5,
// Las Vegas -8, Portland -8, Omaha -6, Miami/Orlando/Tampa -5, Austin/Houston/Dallas -6, Phoenix -7.
// Any US city whose state is not in US_STATE gets no time block.

const AU_STATE = {
  'New South Wales': 'AEST', Victoria: 'AEST', Tasmania: 'AEST', ACT: 'AEST', Queensland: 'AESTQ',
  'South Australia': 'ACST', 'Northern Territory': 'ACSTN', 'Western Australia': 'AWST',
};
const ID_STATE = {
  'West Java': 'WIB', Banten: 'WIB', 'DKI Jakarta': 'WIB', 'Central Java': 'WIB', 'East Java': 'WIB', 'North Sumatra': 'WIB',
  'South Sumatra': 'WIB', Riau: 'WIB', 'Riau Islands': 'WIB', 'East Kalimantan': 'WITA', 'South Sulawesi': 'WITA',
};

const LIST_NOTE = "named in Wikipedia's list of the world's busiest container ports";
const COUNTRIES = {
  Germany: { zone: 'CET', tzSrc: tz('Time_in_Germany', 'Time in Germany'), din: true,
    ports: { list: ['Hamburg', 'Bremerhaven/Bremen'] } },
  Netherlands: { zone: 'CET', tzSrc: tz('Time_in_the_Netherlands', 'Time in the Netherlands'), din: true,
    ports: { list: ['Rotterdam'] } },
  Italy: { zone: 'CET', tzSrc: tz('Time_in_Italy', 'Time in Italy'), din: true,
    ports: { list: ['Gioia Tauro'] } },
  Spain: { zone: 'CET', tzSrc: tz('Time_in_Spain', 'Time in Spain'), din: true,
    tzNote: 'mainland Spain', ports: { list: ['Valencia', 'Algeciras', 'Barcelona'] } },
  UK: { zone: 'UK', tzSrc: tz('Time_in_the_United_Kingdom', 'Time in the United Kingdom'), bs: true,
    ports: { list: ['Felixstowe'] } },
  USA: { zoneOf: (c) => US_STATE[c.state], tzSrc: tz('Time_in_the_United_States', 'Time in the United States'),
    ports: { list: ['Los Angeles', 'Long Beach', 'New York/New Jersey', 'Savannah', 'Houston', 'Oakland', 'Virginia', 'Charleston', 'Tacoma', 'Seattle'] } },
  Australia: { zoneOf: (c) => AU_STATE[c.state], tzSrc: tz('Time_in_Australia', 'Time in Australia'),
    ports: { list: ['Melbourne'] } },
  Indonesia: { zoneOf: (c) => ID_STATE[c.state], tzSrc: tz('Time_in_Indonesia', 'Time in Indonesia'),
    ports: { list: ['Tanjung Priok', 'Tanjung Perak'] } },
  Malaysia: { zone: 'MY', tzSrc: tz('Time_in_Malaysia', 'Time in Malaysia'),
    ports: { list: ['Port Klang', 'Tanjung Pelepas'] } },
  Singapore: { zone: 'SG', tzSrc: tz('Time_in_Singapore', 'Time in Singapore'),
    ports: { list: ['Singapore'] } },
  Vietnam: { zone: 'VN', tzSrc: tz('Time_in_Vietnam', 'Time in Vietnam'),
    ports: { list: ['Ho Chi Minh City (Saigon)', 'Hai Phong', 'Cai Mep'] } },
  'Saudi Arabia': { zone: 'G3', tzSrc: tz('Saudi_Arabia_Standard_Time', 'Saudi Arabia Standard Time'),
    ports: { text: ['Jeddah Islamic Port is the largest port of Saudi Arabia.', 'King Abdulaziz Port in Dammam runs two container terminals.'],
      src: [port('Jeddah_Islamic_Port', 'Jeddah Islamic Port'), port('King_Abdulaziz_Port', 'King Abdulaziz Port')] } },
  UAE: { zone: 'G4', tzSrc: tz('Time_in_the_United_Arab_Emirates', 'Time in the UAE'),
    ports: { text: ['Jebel Ali is described as the biggest and busiest port in the Middle East.', "Khalifa Port handles all of Abu Dhabi emirate's container traffic."],
      src: [port('Port_of_Jebel_Ali', 'Port of Jebel Ali'), port('Khalifa_Port', 'Khalifa Port')] } },
  Oman: { zone: 'G4', tzSrc: tz('Time_in_Oman', 'Time in Oman'),
    ports: { text: ['The Port of Salalah is the largest port in Oman and has a container terminal.', 'SOHAR Port and Freezone is a deep-sea port.'],
      src: [port('Port_of_Salalah', 'Port of Salalah'), port('Port_of_Sohar', 'SOHAR Port')] } },
  Qatar: { zone: 'G3', tzSrc: tz('Time_in_Qatar', 'Time in Qatar'),
    ports: { text: ["Hamad Port, south of Doha, is Qatar's main seaport."], src: [port('Hamad_Port', 'Hamad Port')] } },
  Kuwait: { zone: 'G3', tzSrc: tz('Time_in_Kuwait', 'Time in Kuwait'),
    ports: { text: ["Shuwaikh Port in Kuwait City is the country's most important commercial port."], src: [port('Shuwaikh_Port', 'Shuwaikh Port')] } },
  Bahrain: { zone: 'G3', tzSrc: tz('Time_in_Bahrain', 'Time in Bahrain'),
    ports: { text: ['Khalifa Bin Salman Port at Hidd, Muharraq, is the principal deep-water commercial port of Bahrain and its main gateway for containerised cargo.'],
      src: [port('Khalifa_Bin_Salman_Port', 'Khalifa Bin Salman Port')] } },
};

const IST = 5.5;
const utc = (h) => {
  const s = h < 0 ? '−' : '+';
  const a = Math.abs(h);
  return `UTC${s}${String(Math.floor(a)).padStart(2, '0')}:${a % 1 ? '30' : '00'}`;
};
const gap = (h) => {
  const a = Math.abs(h);
  const hh = Math.floor(a);
  const mm = a % 1 ? 30 : 0;
  return `${hh} h${mm ? ` ${mm} min` : ''}`;
};
// Mumbai clock time when it is 10:00 in a zone at UTC offset `off`.
export const mumbaiAt10 = (off) => {
  const m = (((10 - off + IST) * 60) % 1440 + 1440) % 1440;
  const hh = Math.floor(m / 60);
  const next = 10 - off + IST >= 24 ? ' the next day' : 10 - off + IST < 0 ? ' the day before' : '';
  return `${String(hh).padStart(2, '0')}:${String(m % 60).padStart(2, '0')}${next}`;
};
const ahead = (off, city) => {
  const d = IST - off;
  return d === 0 ? `Mumbai and ${city} show the same time` : d > 0 ? `Mumbai is ${gap(d)} ahead of ${city}` : `Mumbai is ${gap(d)} behind ${city}`;
};

function timeBlock(city, z, note) {
  const where = note ? ` (${note})` : '';
  const paras = [];
  if (z.dst === null) {
    paras.push(`${city}${where} is on ${z.name ? `${z.name}, ` : ''}${utc(z.std)} and does not change its clocks during the year. Mumbai is on Indian Standard Time, ${utc(IST)}, and India does not observe daylight saving time either. So ${ahead(z.std, city)} on every day of the year.`);
    paras.push(`An RFQ sent from ${city} at 10:00 local time reaches Mumbai at ${mumbaiAt10(z.std)}.`);
  } else {
    const rule = z.dstInfo.rule ? ` ${z.dstInfo.rule}` : '';
    paras.push(`${city}${where} is on ${z.name}: ${utc(z.std)} in standard time and ${utc(z.dst)} during ${z.dstInfo.name}${rule}. Mumbai stays on Indian Standard Time, ${utc(IST)}, all year, because India does not observe daylight saving time. So ${ahead(z.std, city)} in standard time, and the gap is ${gap(IST - z.dst)} during ${z.dstInfo.name}.`);
    paras.push(`An RFQ sent from ${city} at 10:00 local time reaches Mumbai at ${mumbaiAt10(z.std)} in standard time, or ${mumbaiAt10(z.dst)} during ${z.dstInfo.name}.`);
  }
  paras.push(`Quotes go out within 30 minutes, 24×7, so the Mumbai hour does not matter: a 10:00 enquiry from ${city} is answered by 10:30 your time.`);
  return { title: `${city} time vs Mumbai time`, paras };
}

const THE = { USA: 'the USA', UK: 'the UK', UAE: 'the UAE', Netherlands: 'the Netherlands' };
function portBlock(country, p) {
  const paras = p.text
    ? [p.text.join(' ')]
    : [`In ${country}, ${p.list.length > 1 ? `${p.list.slice(0, -1).join(', ')} and ${p.list[p.list.length - 1]} are` : `${p.list[0]} is`} ${LIST_NOTE}.`];
  paras.push('Write your port of discharge on the RFQ. Dispatch from Mumbai and transit are confirmed in writing with each quotation.');
  return { title: `Main container ports in ${country}`, paras };
}

const std = (names) => ({
  title: `If your drawing names ${names}`,
  last: `We quote electropolished tube to ASTM A270, or A269, A249 or A312 where the line calls for them, finished SF1 or SF4. We do not supply to ${names}. Ask your engineer to confirm that the ASTM size and wall can replace the tube on the drawing before you order.`,
});

export function buildCountryNotes(cityData) {
  const c = cityData && COUNTRIES[cityData.country];
  if (!c) return null;
  const city = cityData.city;
  const blocks = [];
  const sources = [];
  const zoneKey = c.zone || c.zoneOf(cityData);
  if (zoneKey) {
    blocks.push(timeBlock(city, Z[zoneKey], c.tzNote));
    sources.push(c.tzSrc, SRC.ist);
  }
  blocks.push(portBlock(THE[cityData.country] || cityData.country, c.ports));
  sources.push(...(c.ports.src || [SRC.ports]));
  if (c.din) {
    const s = std('DIN 11850 or EN 10357');
    blocks.push({ title: s.title, paras: [
      'DIN 11850 is a German standard for hygienic stainless steel tubes used in the food, dairy and beverage industries. According to Alfa Laval, the European standard EN 10357 replaced it at the beginning of 2014, and there are still minor differences between the two.',
      s.last,
    ] });
    sources.push(SRC.din);
  }
  if (c.bs) {
    const s = std('BS 4825-1');
    blocks.push({ title: s.title, paras: [
      'BS 4825-1:1991+A2:2009 is the British Standard specification for stainless steel tubes for the food industry and other hygienic applications. BSI lists it as current.',
      s.last,
    ] });
    sources.push(SRC.bs);
  }
  return { heading: `Ordering from ${city}: ${c.din || c.bs ? 'time zone, ports and tube standards' : 'time zone and ports'}`, blocks, sources };
}

export const _test = { COUNTRIES, US_STATE, AU_STATE, ID_STATE, Z };
