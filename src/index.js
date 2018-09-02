import React from 'react';
import ReactDOM from 'react-dom';
import { injectGlobal } from 'styled-components';
import Routes from './config/Routes';
import registerServiceWorker from './registerServiceWorker';

injectGlobal`
  body {
    font-family: 'Roboto', sans-serif;
    letter-spacing: 0.2px;
  }
`;

const App = () => <Routes />;

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
