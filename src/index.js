import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { injectGlobal } from 'styled-components';
import Routes from './config/Routes';
import { store, persistor } from './store/';
import registerServiceWorker from './registerServiceWorker';

injectGlobal`
  body {
    font-family: 'Roboto', sans-serif;
    letter-spacing: 0.2px;
  }
`;

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Routes />
    </PersistGate>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
