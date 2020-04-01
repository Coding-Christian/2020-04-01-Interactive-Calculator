import React from 'react';
import SpeedCalculator from './speedCalculator';
import TimeCalculator from './timeCalculator';

function App(props) {
  return (
    <div className="container">
      <div className="row border p-2 m-2">
        <TimeCalculator />
        <SpeedCalculator />
      </div>
    </div>
  );
}

export default App;
