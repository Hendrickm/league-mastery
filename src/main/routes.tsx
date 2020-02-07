import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Profile from '../profile/profile';
import Home from '../home/home';

export default () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/profile" component={Profile} />
    </Switch>
  </BrowserRouter>
);
