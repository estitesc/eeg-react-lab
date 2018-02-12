import * as React from 'react';

export default class BatteryPanel extends React.Component {
  render() {
    return (
      <div>
          Temperature: <span id="temperature">unknown</span>, Battery: <span id="batteryLevel">unknown</span>
      </div>
    )
  }
}