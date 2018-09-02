import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

/* Pages */
import Home from '../components/pages/Home';
import NotFound from '../components/pages/NotFound';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='*' component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
