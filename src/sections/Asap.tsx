import { useEffect, useRef, useState } from 'react';
import { Section } from '../components/Section';
import { asset } from '../lib/utils';

/**
 * "ASAP Articles" tab: the live literature feed from public/tools/asap-articles.html
 * (newest articles from selected journals via Crossref, abstracts via OpenAlex).
 * It runs in an iframe that reports its height, so the page scrolls normally.
 */
export function Asap() {
  const frame = useRef<HTMLIFrameElement>(null);
  const [height, setHeight] = useState(900);

  useEffect(() => {
    const onMsg = (e: MessageEvent) => {
      if (e.origin !== window.location.origin || e.source !== frame.current?.contentWindow) return;
      if (e.data?.type === 'asap-height' && typeof e.data.h === 'number') setHeight(Math.max(600, Math.ceil(e.data.h)));
      if (e.data?.type === 'asap-top') {
        const top = (frame.current?.getBoundingClientRect().top ?? 0) + window.scrollY - 90;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    };
    // tell the feed which part of it is on screen (so its Journals pop-up opens where the visitor is)
    const NAV_H = 64;
    const sendViewport = () => {
      const f = frame.current;
      if (!f?.contentWindow) return;
      const r = f.getBoundingClientRect();
      // visible slice of the frame: from below the menu bar to the bottom of the screen (or the frame's end)
      const visTop = Math.max(NAV_H, r.top);
      const visH = Math.max(0, Math.min(window.innerHeight, r.bottom) - visTop);
      f.contentWindow.postMessage({ type: 'asap-viewport', top: visTop - r.top, h: visH }, window.location.origin);
    };
    window.addEventListener('message', onMsg);
    window.addEventListener('scroll', sendViewport, { passive: true });
    window.addEventListener('resize', sendViewport);
    const f = frame.current;
    f?.addEventListener('load', sendViewport);
    return () => {
      window.removeEventListener('message', onMsg);
      window.removeEventListener('scroll', sendViewport);
      window.removeEventListener('resize', sendViewport);
      f?.removeEventListener('load', sendViewport);
    };
  }, []);

  return (
    <Section
      id="asap"
      eyebrow="ASAP Articles"
      title={
        <>
          Latest <em>ASAP</em> articles
        </>
      }
      intro="Newly published articles from leading materials and chemistry journals, updated live. Sort by organic-electronics relevance, choose journals, and save articles to read later."
    >
      <iframe
        ref={frame}
        src={asset('tools/asap-articles.html?embed=1')}
        title="Latest ASAP articles"
        loading="lazy"
        style={{ height }}
        className="block w-full border-0"
      />
    </Section>
  );
}
