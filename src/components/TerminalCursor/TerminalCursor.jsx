import React, { useState, useEffect, useCallback } from 'react';
import styles from './TerminalCursor.module.css';

// Move chars outside component so it's stable
const CHARS = ['0', '1', '$', '#', '@', '&', '%', '>', '<', '/', '\\'];

const TerminalCursor = () => {
  const [particles, setParticles] = useState([]);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const addParticle = useCallback((x, y) => {
    const id = Date.now() + Math.random();
    const char = CHARS[Math.floor(Math.random() * CHARS.length)];
    
    setParticles(prev => [...prev, { id, x, y, char }]);
    
    setTimeout(() => {
      setParticles(prev => prev.filter(p => p.id !== id));
    }, 800);
  }, []);

  useEffect(() => {
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      setIsTouchDevice(true);
      return;
    }

    let lastMove = 0;
    const handleMouseMove = (e) => {
      const now = Date.now();
      if (now - lastMove > 50) {
        addParticle(e.clientX, e.clientY);
        lastMove = now;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [addParticle]);

  if (isTouchDevice) return null;

  return (
    <>
      {particles.map(p => (
        <span
          key={p.id}
          className={styles.matrixChar}
          style={{
            left: `${p.x}px`,
            top: `${p.y}px`,
          }}
        >
          {p.char}
        </span>
      ))}
    </>
  );
};

export default TerminalCursor;