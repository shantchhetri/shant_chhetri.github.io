import { AnimatePresence, MotionConfig, motion } from 'framer-motion';
import { useEffect, type ReactNode } from 'react';
import { BackToTop } from './components/BackToTop';
import { CtaBanner, Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { trackPage } from './lib/analytics';
import { usePage, type Page } from './lib/router';
import { About } from './sections/About';
import { Asap } from './sections/Asap';
import { Contact } from './sections/Contact';
import { CV } from './sections/CV';
import { Expertise } from './sections/Expertise';
import { Gallery } from './sections/Gallery';
import { Hero } from './sections/Hero';
import { Impact } from './sections/Impact';
import { Journey } from './sections/Journey';
import { News } from './sections/News';
import { Publications } from './sections/Publications';

/** What each tab shows. Each tab is its own page. */
const PAGE_CONTENT: Record<Page, () => ReactNode> = {
  home: () => (
    <>
      <Hero />
      <CtaBanner />
    </>
  ),
  about: () => (
    <>
      <About />
      <Journey />
    </>
  ),
  research: () => <Expertise />,
  publications: () => (
    <>
      <Publications />
      <Impact />
    </>
  ),
  gallery: () => <Gallery />,
  news: () => <News />,
  asap: () => <Asap />,
  cv: () => <CV />,
  contact: () => <Contact />,
};

const TITLES: Record<Page, string> = {
  home: 'Shant Chhetri, PhD — Organic Electronics & Molecular Semiconductors',
  about: 'About — Shant Chhetri',
  research: 'Research — Shant Chhetri',
  publications: 'Publications — Shant Chhetri',
  gallery: 'Gallery — Shant Chhetri',
  news: 'News — Shant Chhetri',
  asap: 'ASAP Articles — Shant Chhetri',
  cv: 'CV — Shant Chhetri',
  contact: 'Contact — Shant Chhetri',
};

export default function App() {
  const page = usePage();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    document.title = TITLES[page];
    trackPage(page === 'home' ? '/' : `/${page}`, TITLES[page]);
  }, [page]);

  return (
    <MotionConfig reducedMotion="user">
      <Navbar page={page} />
      <AnimatePresence mode="wait" initial={false}>
        <motion.main
          id="main"
          key={page}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="min-h-[calc(100svh-4rem)] pt-16"
        >
          {PAGE_CONTENT[page]()}
        </motion.main>
      </AnimatePresence>
      <Footer />
      <BackToTop />
    </MotionConfig>
  );
}
