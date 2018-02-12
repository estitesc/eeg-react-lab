import * as React from 'react';
import * as ReactDOM from 'react-dom';
import MuseInterface from './containers/MuseInterface';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <MuseInterface />,
  document.getElementById('root')
);
registerServiceWorker();
