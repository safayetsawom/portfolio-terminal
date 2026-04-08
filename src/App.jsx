import React from 'react';
import styles from './App.module.css';
import HeroSection from './components/HeroSection/HeroSection';
import Education from './components/Education/Education';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Certifications from './components/Certifications/Certifications';
import Extracurricular from './components/Extracurricular/Extracurricular';
import SoftSkills from './components/SoftSkills/SoftSkills';
import Contact from './components/Contact/Contact';
import TerminalCursor from './components/TerminalCursor/TerminalCursor';

function App() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className={styles.app}>
      <TerminalCursor />
      
      <header className={styles.header}>
        <div className={styles.terminalBar}>
          <span className={styles.terminalDot}></span>
          <span className={styles.terminalDot}></span>
          <span className={styles.terminalDot}></span>
          <span className={styles.terminalPath}>safayet@portfolio:~</span>
          
          <nav className={styles.nav}>
            <button onClick={() => scrollToSection('hero')} className={styles.navItem}>
              <span className={styles.navPrompt}>$</span> home
            </button>
            <button onClick={() => scrollToSection('education')} className={styles.navItem}>
              <span className={styles.navPrompt}>$</span> edu
            </button>
            <button onClick={() => scrollToSection('skills')} className={styles.navItem}>
              <span className={styles.navPrompt}>$</span> skills
            </button>
            <button onClick={() => scrollToSection('projects')} className={styles.navItem}>
              <span className={styles.navPrompt}>$</span> projects
            </button>
            <button onClick={() => scrollToSection('certifications')} className={styles.navItem}>
              <span className={styles.navPrompt}>$</span> certs
            </button>
            <button onClick={() => scrollToSection('extracurricular')} className={styles.navItem}>
              <span className={styles.navPrompt}>$</span> extra
            </button>
            <button onClick={() => scrollToSection('softskills')} className={styles.navItem}>
              <span className={styles.navPrompt}>$</span> soft
            </button>
            <button onClick={() => scrollToSection('contact')} className={styles.navItem}>
              <span className={styles.navPrompt}>$</span> contact
            </button>
          </nav>
        </div>
      </header>

      <main className={styles.main}>
        <HeroSection />
        <Education />
        <Skills />
        <Projects />
        <Certifications />
        <Extracurricular />
        <SoftSkills />
        <Contact />
      </main>

      <footer className={styles.footer}>
        <span className={styles.prompt}>$</span> echo "© 2026 Safayet Hossain Sawom | All rights reserved"
      </footer>
    </div>
  );
}

export default App;