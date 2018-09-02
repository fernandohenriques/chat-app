import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './config/Routes';
import registerServiceWorker from './registerServiceWorker';

const App = () => <Routes />;

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
