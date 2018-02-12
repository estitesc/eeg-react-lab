import * as React from 'react';

export default class DetailsPanel extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-3"><h4>dreamlabs</h4></div>
        <div className="col-md-3">Name: <span id="headset-name">unknown</span></div>
        <div className="col-md-3">Firmware: <span id="firmware-version">unknown</span></div>
        <div className="col-md-3">Hardware version: <span id="hardware-version">unknown</span></div>
      </div>
    )
  }
}