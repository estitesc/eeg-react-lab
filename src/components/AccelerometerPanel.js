import * as React from 'react';

export default class AccelerometerPanel extends React.Component {
  render() {
    return (
      <div>
        Accelerometer: x=<span 
        id="accelerometer-x">?</span>, y=<span 
        id="accelerometer-y">?</span>, z=<span 
        id="accelerometer-z">?</span>
      </div>
    )
  }
}