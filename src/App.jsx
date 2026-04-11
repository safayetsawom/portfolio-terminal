// App.jsx
import React, { useEffect, useState, useRef } from 'react';
import styles from './App.module.css';
import HeroSection from './components/HeroSection/HeroSection';
import Education from './components/Education/Education';
import Skills from './components/Skills/Skills';
import Thesis from './components/Thesis/Thesis';
import Projects from './components/Projects/Projects';
import Certifications from './components/Certifications/Certifications';
import Extracurricular from './components/Extracurricular/Extracurricular';
import SoftSkills from './components/SoftSkills/SoftSkills';
import Contact from './components/Contact/Contact';
import TerminalCursor from './components/TerminalCursor/TerminalCursor';

const NAV_ITEMS = [
  { id: 'hero',           label: 'home' },
  { id: 'education',      label: 'edu' },
  { id: 'skills',         label: 'skills' },
  { id: 'thesis',         label: 'thesis' },
  { id: 'projects',       label: 'projects' },
  { id: 'certifications', label: 'certs' },
  { id: 'extracurricular',label: 'extra' },
  { id: 'softskills',     label: 'soft' },
  { id: 'contact',        label: 'contact' },
];

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [scrolled, setScrolled]           = useState(false);
  const [headerVisible, setHeaderVisible] = useState(false);
  const [footerText, setFooterText]       = useState('');
  const footerFull = '© 2026 Md.Safayet Hossain Sawom | All rights reserved';

  /* ── mount animation ── */
  useEffect(() => {
    const t = setTimeout(() => setHeaderVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  /* ── footer typewriter ── */
  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      setFooterText(footerFull.slice(0, i + 1));
      i++;
      if (i >= footerFull.length) clearInterval(id);
    }, 40);
    return () => clearInterval(id);
  }, []);

  /* ── scroll spy + header shadow ── */
  useEffect(() => {
    const HEADER_OFFSET = 80;
    const onScroll = () => {
      setScrolled(window.scrollY > 10);

      let current = NAV_ITEMS[0].id;
      for (const { id } of NAV_ITEMS) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= HEADER_OFFSET) {
          current = id;
        }
      }
      setActiveSection(current);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className={styles.app}>
      <div className={styles.scanlines} aria-hidden="true" />
      <div className={styles.orb1} aria-hidden="true" />
      <div className={styles.orb2} aria-hidden="true" />

      <TerminalCursor />

      <header className={`${styles.header} ${scrolled ? styles.headerScrolled : ''} ${headerVisible ? styles.headerVisible : ''}`}>
        <div className={styles.terminalBar}>
          <div className={styles.dots}>
            <span className={`${styles.terminalDot} ${styles.dotRed}`}   />
            <span className={`${styles.terminalDot} ${styles.dotYellow}`}/>
            <span className={`${styles.terminalDot} ${styles.dotGreen}`} />
          </div>

          <span className={styles.terminalPath}>
            safayet@portfolio:~
          </span>

          <div className={styles.headerAccent} aria-hidden="true">
            {/* <span className={styles.pingDot} />
            <span className={styles.pingLabel}>ONLINE</span> */}
          </div>

          <nav className={styles.nav} aria-label="Portfolio navigation">
            {NAV_ITEMS.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`${styles.navItem} ${activeSection === id ? styles.navItemActive : ''}`}
                aria-current={activeSection === id ? 'true' : undefined}
              >
                <span className={styles.navPrompt}>$</span>
                <span className={styles.navLabel}>{label}</span>
                {activeSection === id && <span className={styles.activeBar} />}
              </button>
            ))}
          </nav>
        </div>

        <div className={styles.progressTrack} aria-hidden="true">
          <div
            className={styles.progressBar}
            style={{
              width: `${(NAV_ITEMS.findIndex(n => n.id === activeSection) + 1) / NAV_ITEMS.length * 100}%`
            }}
          />
        </div>
      </header>

      <main className={styles.main}>
        <HeroSection />
        <Education />
        <Skills />
        <Thesis />
        <Projects />
        <Certifications />
        <Extracurricular />
        <SoftSkills />
        <Contact />
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerLine} aria-hidden="true" />
        <p className={styles.footerText}>
          <span className={styles.prompt}>$</span>
          <span className={styles.footerCmd}>echo </span>
          <span className={styles.footerQuote}>"</span>
          <span className={styles.footerContent}>{footerText}</span>
          <span className={styles.footerCaret} aria-hidden="true">▌</span>
          <span className={styles.footerQuote}>"</span>
        </p>
      </footer>
    </div>
  );
}

export default App;