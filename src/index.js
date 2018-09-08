import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';

import { THEME } from './utils/js/consts';
import App from './App';
import './utils/css/root.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <ThemeProvider theme={THEME}>
  <Router>
    <App />
  </Router>
  </ThemeProvider>,
  document.getElementById('root'),
);
registerServiceWorker();
