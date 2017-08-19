import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <div>
    <App />
  </div>
  , document.querySelector('#root'));
registerServiceWorker();
