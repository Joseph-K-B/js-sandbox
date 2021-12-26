import { useEffect, useState } from "react";


function Stopwatch() {
  const [time, setTime] = useState(5);
  const [running, setRunning] = useState(null);

  const startStop = () => {
    if (running) {
      clearInterval(running)
      setRunning(false);
    } else {
      const start = new Date(new Date() - time);
      setRunning(setInterval(() => {
        setTime((new Date() - start))
      }, 10));
    }
  }

  useEffect(startStop, []);

  return (
    <div className="Stopwatch">
      <h2>{(time / 1000).toFixed(2)}s</h2>
      <button onClick={startStop}>{running ? 'Stop' : (time ? 'Resume' : 'Start')}</button>
      {!!time && <button onClick={() => setTime(0)}>Reset</button>}   
    </div>
  );
}

export default Stopwatch;