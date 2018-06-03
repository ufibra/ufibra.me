import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';

import './style.css';

const TopNavigation = () => (
	<Navbar className='ufibra-navbar'>
		<Navbar.Header>
			<Navbar.Brand>
				<Link to='/' className='ufibra-logo'>
					<img width={180} src='images/ufibra.png' alt='ufibra.me'/>
				</Link>
			</Navbar.Brand>
		</Navbar.Header>
	</Navbar>
);

export default TopNavigation;
