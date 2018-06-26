import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';

// TODO: Implement dropdown
const TopNavigation = () => (
  <div className="top-navigation">
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light">
        <Link className="navbar-brand" to="/">
          <img
            width={180}
            src='images/ufibra.png'
            alt='ufibra.me'
          />
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link disabled" to="/categorias">Categorias</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link disabled" to="/marcas">Marcas</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </div>
);

export default TopNavigation;
