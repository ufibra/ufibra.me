import React from 'react';
import { PageHeader } from 'react-bootstrap';

import SearchContainer from '../../containers/SearchContainer';

import './style.css';

const Header = () => (
  <PageHeader className='ufibra-header'>
    <h3>Compare os melhores suplementos das maiores lojas virtuais do Brasil</h3>
    <SearchContainer />
  </PageHeader>
);

export default Header;
