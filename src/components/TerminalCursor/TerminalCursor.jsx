import React, { useState, useEffect, useCallback } from 'react';
import styles from './TerminalCursor.module.css';

const TerminalCursor = () => {
  const [particles, setParticles] = useState([]);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const chars = ['0', '1', '$', '#', '@', '&', '%', '>', '<', '/', '\\', '|', '~', '*'];

  const addParticle = useCallback((x, y) => {
    const id = Date.now() + Math.random();
    const char = chars[Math.floor(Math.random() * chars.length)];
    
    setParticles(prev => [...prev, { id, x, y, char }]);
    
    // Slower fade - particles stay for 1.5 seconds
    setTimeout(() => {
      setParticles(prev => prev.filter(p => p.id !== id));
    }, 1500);
  }, []);

  useEffect(() => {
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      setIsTouchDevice(true);
      return;
    }

    let lastMove = 0;
    const handleMouseMove = (e) => {
      const now = Date.now();
      // Slower generation - only create particle every 120ms (was 50ms)
      if (now - lastMove > 120) {
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
      {particles.map((p, index) => (
        <span
          key={p.id}
          className={styles.matrixChar}
          style={{
            left: `${p.x}px`,
            top: `${p.y}px`,
            animationDelay: `${index * 10}ms`,
          }}
        >
          {p.char}
        </span>
      ))}
    </>
  );
};

export default TerminalCursor;