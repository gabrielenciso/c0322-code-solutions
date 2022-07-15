import React, { useState } from 'react';

function StopWatch() {
  const [timer, setTimer] = useState(0);
  const [activeInterval, setActiveInterval] = useState(null);

  function tick() {
    setTimer(prevTimer => prevTimer + 1);
  }

  function handleButton() {
    if (activeInterval) {
      clearInterval(activeInterval);
      setActiveInterval(null);
    } else {
      const newInterval = setInterval(tick, 1000);
      setActiveInterval(newInterval);
    }
  }

  function reset() {
    if (activeInterval) return;
    setTimer(0);
  }

  function getTime() {
    const secondsPerHour = 3600;
    const secondsPerMinute = 60;
    let seconds = timer;
    let hours = Math.floor(seconds / secondsPerHour);
    seconds -= (secondsPerHour * hours);
    let minutes = Math.floor(seconds / secondsPerMinute);
    seconds -= (secondsPerMinute * minutes);
    hours = hours.toString().padStart(2, '0');
    minutes = minutes.toString().padStart(2, '0');
    seconds = seconds.toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  }

  const buttonIcon = activeInterval ? 'fa-pause' : 'fa-play';

  return (
    <div className='container'>
      <div className='watch center-all' onClick={reset}>
        <h2>{getTime()}</h2>
      </div>
      <div className='icon center-all'>
        <i className={`fa - solid ${buttonIcon} fa-2xl`} onClick={handleButton}></i>
      </div>
    </div>
  );

}

export default StopWatch;
