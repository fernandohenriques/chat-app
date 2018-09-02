import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

/* Pages */
import Home from '../components/pages/Home';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Home} />
    </Switch>
  </BrowserRouter>
);

export default Router;
