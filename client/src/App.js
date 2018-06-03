import React from 'react';
import { Grid } from 'react-bootstrap';

import TopNavigation from './components/navigations/TopNavigation';
import Header from './components/headers/Header';
import Routes from './routes';

const App = () => (
  <Grid>
    <TopNavigation />
    <Header />
    <Routes />
  </Grid>
);

export default App;
