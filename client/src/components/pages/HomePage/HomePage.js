import React from 'react';

import HomeHeader from '../../headers/HomeHeader';
import HotContainer from '../../containers/HotContainer';

import './styles.css';

const HomePage = () => (
  <section className="home-page">
    <HomeHeader />
    <div className="container">
      <HotContainer />
    </div>
  </section>
);

export default HomePage;
