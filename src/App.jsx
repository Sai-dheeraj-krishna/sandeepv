import { lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AnimatedBackground from './components/AnimatedBackground';
import Hero from './sections/Hero';

// Lazy-load below-the-fold sections so they don't block the initial JS parse
const About         = lazy(() => import('./sections/About'));
const Education     = lazy(() => import('./sections/Education'));
const Projects      = lazy(() => import('./sections/Projects'));
const Skills        = lazy(() => import('./sections/Skills'));
const Certifications = lazy(() => import('./sections/Certifications'));
const Contact       = lazy(() => import('./sections/Contact'));

// Minimal skeletal fallback – invisible so there's no layout shift
function SectionFallback() {
  return <div className="min-h-[200px]" aria-hidden="true" />;
}

export default function App() {
  return (
    <div className="relative min-h-screen text-slate-200 overflow-x-hidden">
      <AnimatedBackground />
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={<SectionFallback />}>
          <About />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Education />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Projects />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Skills />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Certifications />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
