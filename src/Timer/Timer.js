import React, { useEffect, useState } from "react";

export default function App() {
  const [mins, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [time, setTime] = useState({
    minutes: parseInt(mins),
    seconds: parseInt(seconds)
  });

  const [start, setStart] = useState(false);
  const [pause, setPause] = useState(false);
  const [over, setOver] = useState(false);
  const [active, setActive] = useState(false);

  useEffect(() => {
    let timer = setInterval(() => {
      if (pause) {
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
    }, 1000);
    return () => clearInterval(timer);
  });

  const handleMin = (e) => {
    setMinutes(e.target.value);
  };

  const handleSec = (e) => {
    setSeconds(e.target.value);
  };

  const startHandler = () => {
    setTime({
      minutes: seconds > 60 ? parseInt(mins) + 1 : parseInt(mins),
      seconds: seconds > 60 ? parseInt(seconds) - 60 : parseInt(seconds)
    });
    setStart(!start);
  };

  const pauseHandler = () => {
    setPause(!pause);
  };

  const resetHandler = () => {
    setTime({
      minutes: seconds > 60 ? parseInt(mins) + 1 : parseInt(mins),
      seconds: seconds > 60 ? parseInt(seconds) - 60 : parseInt(seconds)
    });
    setPause(false);
    setStart(false);
    setOver(false);
  };

  return (
    <div className="App">
      <div>
        <label>
          Minutes:
          <input type="number" onChange={handleMin} />
        </label>
        <label>
          Seconds:
          <input type="number" onChange={handleSec} />
        </label>
        <button onClick={startHandler}>start</button>
        <button onClick={pauseHandler}>Pause</button>
        <button onClick={resetHandler}>Reset</button>
        <h1>
          {`${time.minutes
            .toString()
            .padStart(2, "0")}:${time.seconds.toString().padStart(2, "0")}`}
        </h1>
      </div>
    </div>
  );
}
