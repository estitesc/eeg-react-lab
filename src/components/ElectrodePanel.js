import * as React from 'react';
import ElectrodeRow from './ElectrodeRow'

function ElectrodePanel() {
  return (
    <div>
      <ElectrodeRow number={1} />
      <ElectrodeRow number={2} />
      <ElectrodeRow number={3} />
      <ElectrodeRow number={4} />
    </div>
  )
}

export default ElectrodePanel;