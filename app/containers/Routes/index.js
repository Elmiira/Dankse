import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Demo from 'containers/Demo/index';
import Routes from './Routes.json';

export const PublicRoutes = () => (
  <Switch>
    <Route key={Routes.Demo} path={Routes.Demo} component={Demo} />,
  </Switch>
);
