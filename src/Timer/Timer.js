import React, { useState, useEffect } from "react";

export default function Timer() {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setActive] = useState(false);

  // 因为
  useEffect(() => {
    let timer;
    if (isActive) {
      timer = setTimeout(() => {
        if (seconds < 59) {
          setSeconds(seconds + 1);
        } else {
          setMinutes(minutes + 1);
          setSeconds(0);
        }
      }, 1000);
    } else if (!isActive) {
      clearTimeout(timer);
    }
  });

  const handleChange1 = (e) => {
    setMinutes(e.target.value);
  };
  const handleChange2 = (e) => {
    setSeconds(e.target.value);
  };

  const handleStart = () => {
    setActive(!isActive);
  };

  const handlePause = () => {
    setActive(false);
  };

  const handleReset = () =>{
    setMinutes(0);
    setSeconds(0);
  }

  return (
    <div>
      <span>minutes</span>
      <input type="number" value={minutes} onChange={handleChange1} />
      <span>seconds</span>
      <input type="number" value={seconds} onChange={handleChange2} />
      <div>
        <button onClick={handleStart}>start</button>
        <button onClick={handlePause}>pause</button>
        <button onClick={handleReset}>reset</button>
      </div>
      {minutes}:{seconds}
    </div>
  );
}
