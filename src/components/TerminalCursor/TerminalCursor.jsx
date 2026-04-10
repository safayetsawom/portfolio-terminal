import React, { useEffect } from 'react';
import styles from './TerminalCursor.module.css';

const TerminalCursor = () => {
  useEffect(() => {
    // Add terminal-style cursor to entire page
    document.body.classList.add(styles.terminalCursor);
    
    return () => {
      document.body.classList.remove(styles.terminalCursor);
    };
  }, []);

  return null; // No visible element needed - cursor is pure CSS
};

export default TerminalCursor;