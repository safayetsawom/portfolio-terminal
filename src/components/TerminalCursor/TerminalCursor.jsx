import { useEffect } from 'react';
import './TerminalCursor.module.css';

const TerminalCursor = () => {
  useEffect(() => {
    document.body.classList.add('terminalCursor');
    
    return () => {
      document.body.classList.remove('terminalCursor');
    };
  }, []);

  return null;
};

export default TerminalCursor;