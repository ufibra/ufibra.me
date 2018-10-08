import React from 'react';
import TopNavigation from './components/navigations/TopNavigation';
import PageFooter from './components/footers/PageFooter';
import Routes from './routes';

const App = () => (
  <div>
    <TopNavigation />
    <Routes />
    <PageFooter />
  </div>
);

export default App;
