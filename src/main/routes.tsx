import React from 'react';
import {
  BrowserRouter, Switch, Route, RouteComponentProps,
} from 'react-router-dom';

import Profile from '../profile/profile';
import Home from '../home/home';

interface MatchParams {
  summonerName: string,
  region: string
}

type MatchProps = RouteComponentProps<MatchParams>

export default () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      {/* <Route path="/profile/:region/:summonerName" render={( {match}: MatchProps) => (
        <Profile name={match.params} /> )} /> */}

      <Route
        path="/profile/:region/:summonerName"
        render={({ match }: MatchProps) => (
          <Profile summonerName={match.params.summonerName} region={match.params.region} />)}
      />
    </Switch>
  </BrowserRouter>
);
