// ─── App.tsx ──────────────────────────────────────────────────────────────────
// Main application shell. Handles:
//  - Loading screen on initial mount
//  - Global layout components (Navbar, Footer, ScrollProgressBar, BackToTop, CustomCursor)
//  - All page sections in order
//  - react-hot-toast provider

import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Toaster } from 'react-hot-toast';

// Layout
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollProgressBar from './components/layout/ScrollProgressBar';
import BackToTop from './components/layout/BackToTop';
import CustomCursor from './components/layout/CustomCursor';
import LoadingScreen from './components/layout/LoadingScreen';

// Sections
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Achievements from './components/sections/Achievements';
import Contact from './components/sections/Contact';

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {/* Toast notifications */}
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: '#1e293b',
            color: '#f8fafc',
            border: '1px solid rgba(139,92,246,0.25)',
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.875rem',
            borderRadius: '0.75rem',
          },
        }}
      />

      {/* Custom cursor (desktop only — disables itself on touch devices) */}
      <CustomCursor />

      {/* Loading screen — shown once on initial mount */}
      <AnimatePresence>
        {loading && (
          <LoadingScreen key="loading" onComplete={() => setLoading(false)} />
        )}
      </AnimatePresence>

      {/* Main page — rendered behind loading screen, visible after load */}
      {!loading && (
        <>
          <ScrollProgressBar />
          <Navbar />

          <main>
            <Hero />
            <About />
            <Experience />
            <Projects />
            <Achievements />
            <Contact />
          </main>

          <Footer />
          <BackToTop />
        </>
      )}
    </>
  );
}
