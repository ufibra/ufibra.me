import React from 'react';
import { Link } from 'react-router-dom';
import { Col } from 'react-bootstrap';

import './style.css';

const TopNavigation = () => (
  <Col md={12} className="ufibra-topNav">
    <Link to='/' className='ufibra-logo'>
      <img width={180} src='images/ufibra.png' alt='ufibra.me'/>
    </Link>
  </Col>
);

export default TopNavigation;
