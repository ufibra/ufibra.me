import React from 'react';
import { Col } from 'react-bootstrap';

import SearchContainer from '../../containers/SearchContainer';

import './style.css';

const Header = () => (
  <div className="home-header">
    <Col xs={12} sm={12} md={12}>
      <h3>
        Compare aqui os melhores suplementos das <br/> maiores lojas virtuais do Brasil
      </h3>
    </Col>
    <Col xs={12} sm={12} md={12} className="center">
      <SearchContainer/>
    </Col>
  </div>
);

export default Header;
