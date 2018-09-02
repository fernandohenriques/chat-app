import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './config/Routes';
import { injectGlobal } from 'styled-components';
import registerServiceWorker from './registerServiceWorker';

injectGlobal`
  *, *::after, *::before {
    margin: 0;
    padding: 0;
  }
  body {
    font-family: 'Roboto', sans-serif;
    letter-spacing: 0.2px;
  }
`;

const App = () => <Routes />;

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
