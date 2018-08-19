import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from '../components/pages/HomePage';
import Categories from '../components/pages/Categories'

const Routes = () => (
  <Switch>
    <Route path='/' exact component={HomePage} />
    <Route path='/categorias' component={Categories} />
  </Switch>
);

export default Routes;
