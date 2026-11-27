import { EP_PROCESS_VIDEO as V } from '../data/videos';

// Native <video preload="none">: only the ~20 KB poster loads until the visitor presses play.
export default function ProcessVideo() {
  return (
    <div style={{ marginBottom: '3rem' }}>
      <h2 style={{ fontSize: '1.75rem', fontWeight: 700, color: '#fff', marginBottom: '1rem' }}>
        Watch: How Our Electropolished Pipes Are Made
      </h2>
      <figure style={{ margin: 0 }}>
        <video
          controls
          preload="none"
          playsInline
          width={V.width}
          height={V.height}
          poster={V.thumbnailUrl}
          src={V.contentUrl}
          style={{ width: '100%', height: 'auto', aspectRatio: '16 / 9', display: 'block', borderRadius: '12px', border: '1px solid var(--border-color, #1e293b)', backgroundColor: '#020617' }}
        >
          <track kind="captions" srcLang="en" label="English" src={V.captionsUrl} />
        </video>
        <figcaption style={{ fontSize: '0.875rem', color: '#94a3b8', marginTop: '0.5rem' }}>{V.name} (0:47)</figcaption>
      </figure>
      <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: '#fff', margin: '1.25rem 0 0.75rem' }}>What the video shows</h3>
      <ol style={{ listStyle: 'decimal', paddingLeft: '1.25rem', color: '#cbd5e1', fontSize: '0.95rem', lineHeight: 1.6 }}>
        {V.steps.slice(1).map((s) => <li key={s} style={{ marginBottom: '0.35rem' }}>{s}</li>)}
      </ol>
    </div>
  );
}
