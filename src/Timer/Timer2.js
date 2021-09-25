import "./styles.css";
import React, { useState, useEffect } from "react";

const App1 = () => {
  const [mins, setMins] = useState(0);
  const [sec, setSec] = useState(0);
  const [time, setTime] = useState({
    minutes: parseInt(mins),
    seconds: parseInt(sec)
  });
  const [start, setStart] = useState(false);
  const [pause, setPause] = useState(false);
  const [over, setOver] = useState(false);

  useEffect(() => {
    if ((sec == 0 && mins == 0) || !start) return;
    let timer = setInterval(() => tick(), 1000);
    return () => clearInterval(timer);
  });
  const tick = () => {
    if (pause || over) {
      return;
    }
    if (time.minutes === 0 && time.seconds === 0) {
      setOver(true);
    } else if (time.seconds === 0) {
      setTime({
        minutes: time.minutes - 1,
        seconds: 59
      });
    } else {
      setTime({
        minutes: time.minutes,
        seconds: time.seconds - 1
      });
    }
  };
  const reset = () => {
    setTime({
      minutes: sec > 60 ? parseInt(mins) + 1 : parseInt(mins),
      seconds: sec > 60 ? parseInt(sec - 60) : parseInt(sec)
    });
    setPause(false);
    setOver(false);
    setStart(false);
  };

  const handleStart = () => {
    setTime({
      minutes: sec > 60 ? parseInt(mins) + 1 : parseInt(mins),
      seconds: sec > 60 ? parseInt(sec - 60) : parseInt(sec)
    });
    setStart(!start);
  };

  const handleMin = (e) => {
    setMins(e.target.value);
  };

  const handleSec = (e) => {
    setSec(e.target.value);
  };
  return (
    <div>
      <label>
        Minutes
        <input type="number" value={mins} onChange={handleMin} />
      </label>
      <label>
        Seconds
        <input type="number" value={sec} onChange={handleSec} />
      </label>
      <button onClick={handleStart}>Start</button>
      <button onClick={() => setPause(!pause)}>Pause / resume</button>
      <button onClick={() => reset()}>Reset</button>

      <h1>{`${time.minutes
        .toString()
        .padStart(2, "0")} : ${time.seconds.toString().padStart(2, "0")}`}</h1>
    </div>
  );
};
export default App1;
