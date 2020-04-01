import React from 'react';
import SpeedCalculator from './speedCalculator';
import TimeCalculator from './timeCalculator';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      readingSpeed: 0,
      pages: 0,
      bookSize: 0
    };
  }
  render() {
    return (
      <div className="container">
        <div className="row border p-2 m-2">
          <TimeCalculator />
          <SpeedCalculator />
        </div>
      </div>
    );
  }
}

export default App;
