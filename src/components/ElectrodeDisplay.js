import * as React from 'react';

function ElectrodeDisplay({ number }) {
  return (
    <div className="electrode-item col-md-2">
      <canvas id="electrode{ number }"></canvas>
    </div>
  )
}

export default ElectrodeDisplay;