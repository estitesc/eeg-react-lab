import * as React from 'react';
import ElectrodeDisplay from './ElectrodeDisplay'
import ElectrodeOsc from './ElectrodeOsc'

function ElectrodeRow({ number }) {
  return (
    <div className="row">
      <div className="col-md-1">Electrode { number }</div>
      <ElectrodeOsc number = {number} />
      <ElectrodeDisplay number={number} />
    </div>
  )
}

export default ElectrodeRow;