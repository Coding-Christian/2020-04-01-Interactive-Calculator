import React, { useState, useEffect } from 'react';

function SpeedCalculator(props) {
  const [time, setTime] = useState(0);
  const [startTime, setStartTime] = useState(0);
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    let interval;
    if (isActive) {
      setStartTime(Date.now() - time);
      interval = setInterval(() => setTime(startTime ? Date.now() - startTime : 0), 100);
    } else if (!isActive && time !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, startTime, time]);
  function toggle() {
    setIsActive(isActive => !isActive);
  }
  function reset() {
    setTime(0);
    setStartTime(0);
  }
  return (
    <div className="col-12 my-4">
      <h3>Test Your Reading Speed</h3>
      <p>
        Echidnas are medium-sized, solitary mammals covered with coarse hair
        and spines. Superficially, they resemble the anteaters of South
        America and other spiny mammals such as hedgehogs and porcupines. They
        are usually black or brown in color. There have been several reports
        of albino echidnas, their eyes pink and their spines white. They have
        elongated and slender snouts that function as both mouth and nose.
        Like the platypus, they are equipped with electrosensors, but while
        the platypus has 40,000 electroreceptors on its bill, the long-beaked
        echidna has only 2,000 electroreceptors, and the short-beaked echidna,
        which lives in a drier environment, has no more than 400 located at
        the tip of its snout.
      </p>
      <div>{Math.floor(time / 1000)} Seconds</div>
      <div>{time ? Math.floor(111 / (time / 60000)) : 0} WPM</div>
      <button onClick={toggle} className='mr-1 btn btn-primary'>{isActive ? 'Stop' : 'Start'}</button>
      <button onClick={reset} className='mr-1 btn btn-danger'>Reset</button>
    </div>
  );
}

export default SpeedCalculator;
