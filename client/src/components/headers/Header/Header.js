import React from 'react';
import { PageHeader, Col } from 'react-bootstrap';

import SearchContainer from '../../containers/SearchContainer';

import './style.css';

const Header = () => (
  <Col xs={12} sm={12} md={12}>
    <PageHeader className='ufibra-header'>

      <small>Compare os melhores suplementos das maiores lojas virtuais do Brasil</small>

      <SearchContainer />
    </PageHeader>
  </Col>
);

export default Header;
