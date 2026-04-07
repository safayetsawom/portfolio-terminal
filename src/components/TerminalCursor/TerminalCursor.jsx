import React, { useState, useEffect, useCallback } from 'react';
import styles from './TerminalCursor.module.css';

const TerminalCursor = () => {
  const [particles, setParticles] = useState([]);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Move chars array inside useCallback dependency
  const addParticle = useCallback((x, y) => {
    const chars = ['0', '1', '$', '#', '@', '&', '%', '>', '<', '/', '\\'];
    const id = Date.now() + Math.random();
    const char = chars[Math.floor(Math.random() * chars.length)];
    
    setParticles(prev => [...prev, { id, x, y, char }]);
    
    setTimeout(() => {
      setParticles(prev => prev.filter(p => p.id !== id));
    }, 800);
  }, []); // No external dependencies needed

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
  }, [addParticle]); // addParticle is now properly included

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