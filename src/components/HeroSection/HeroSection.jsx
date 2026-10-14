import React, { useState, useEffect } from 'react';
import styles from './HeroSection.module.css';

const HeroSection = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = '> whoamI??';

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.hero} id="hero">
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.imageWrapper}>
            <div className={styles.asciiBg}>
              <pre>{`{ } [ ] ( )`}</pre>
              <pre>{`$ > _`}</pre>
              <pre>{`<!-- -->`}</pre>
            </div>
            <div className={styles.hexagon}>
              <div className={styles.scanline}></div>
              <img 
                src="/profile.png" 
                alt="MD. Safayet Hossain Sawom"
                className={styles.profileImage}
              />
              <div className={styles.glitchBorder}></div>
            </div>
            <div className={styles.imageCaption}>
              <span className={styles.prompt}>$</span> file profile.png --info
            </div>
          </div>

          <div className={styles.description}>
            <div className={styles.terminalWindow}>
              <div className={styles.terminalHeader}>
                <span>safayet@portfolio:~/.profile</span>
              </div>
              <div className={styles.terminalBody}>
                <p className={styles.command}>
                  <span className={styles.prompt}>$</span> 
                  <span className={styles.typed}>{typedText}</span>
                  <span className={styles.cursor}>█</span>
                </p>
                <p className={styles.output}>Md.Safayet Hossain Sawom</p>
                
                <p className={styles.command}>
                  <span className={styles.prompt}>$</span> role --verbose
                </p>
                <p className={styles.output}>
                  I'm a BRAC University CSE graduate passionate about software development, AI research, and automation. <br />
                  With experience in Python, backend development, data analytics, and deep learning, I enjoy building <br />
                  intelligent applications and exploring AI-driven solutions to real-world problems. <br />
                  I combine development, research, and software testing to create reliable, efficient, and impactful solutions.
                </p>

                <p className={styles.command}>
                  <span className={styles.prompt}>$</span> cat philosophy.txt
                </p>
                <p className={styles.output}>
                  Learn by building. Test thoroughly. Document obsessively.
                </p>

                <p className={styles.command}>
                  <span className={styles.prompt}>$</span> status --current
                </p>
                <p className={styles.statusOutput}>
                  <span className={styles.blink}>●</span> Open to work | Graduated 2026
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;