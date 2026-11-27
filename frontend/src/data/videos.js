// One source for the EP process video: the page component and the static VideoObject schema (prerender.js) both read it.
const STEPS = [
  'Where purity matters, the finish matters.',
  'We start with certified SS 304 and 316L stainless steel.',
  'Each pipe is cut, deburred and thoroughly degreased.',
  'In a controlled electrolytic bath, microscopic peaks are removed from the surface.',
  'Rinsed and passivated for superior corrosion resistance.',
  'Every pipe is tested for surface roughness and inner finish (borescope and visual inspection).',
  'Trusted by pharma, food, dairy and semiconductor industries.',
];

export const EP_PROCESS_VIDEO = {
  name: 'How Sakshi Forge Electropolishes Stainless Steel Pipes',
  description: 'A 47-second look at how Sakshi Forge electropolished stainless steel pipes are made: certified SS 304 and 316L raw material, cutting, deburring and degreasing, electropolishing in a controlled electrolytic bath, DI water rinse and passivation, then surface roughness, borescope and visual inspection.',
  contentUrl: '/videos/electropolished-pipes-process.mp4',
  thumbnailUrl: '/videos/electropolished-pipes-process.webp',
  captionsUrl: '/videos/electropolished-pipes-process.vtt',
  uploadDate: '2026-11-27T00:00:00+05:30',
  duration: 'PT47S',
  width: 1280,
  height: 720,
  steps: STEPS,
  transcript: STEPS.join(' ') + ' Sakshi Forge. Electropolished pipes, built for purity.',
  // Pages that show the video; the first is its main watch page.
  pages: [
    '/electropolished-pipes/',
    '/electropolished-tubes/',
    '/blog/electropolishing-stainless-steel-pipes-guide/',
    '/',
    '/gallery/',
  ],
};
