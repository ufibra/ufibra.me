import React from 'react';
import { PageHeader } from 'react-bootstrap';

import SearchContainer from '../../containers/SearchContainer';

import './style.css';

const Header = () => (
	<PageHeader className='ufibra-header'>
		<small>Compare os melhores suplementos das maiores lojas do Brasil</small>
		<SearchContainer />
	</PageHeader>
);

export default Header;
