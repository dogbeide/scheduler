import { useState } from 'react';

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  function transition(mode, replace = false){
    setMode(mode);
    setHistory(replace ? [...history.slice(0,-1), mode] : [...history, mode]);
  }

  function back() {
    if (mode !== 'FIRST') {
      setMode(history[history.length - 2])
      setHistory(history.slice(0, -1));
    }
  }

  return { mode, history, transition, back };
}