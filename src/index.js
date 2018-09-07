import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';

import { THEME } from './utils/js/consts';
import App from './App.jsx';
import './utils/css/root.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <ThemeProvider theme={THEME}>
    <App />
  </ThemeProvider>
, document.getElementById('root'));
registerServiceWorker();
