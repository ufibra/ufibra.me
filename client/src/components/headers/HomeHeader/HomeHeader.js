import React from 'react';
import SearchContainer from '../../containers/SearchContainer';

import './style.css';

const Header = () => (
  <header className="default-header">
    <div className="d-flex h-100">
      <div className="col text-center justify-content-center align-self-center">
        <SearchContainer />
      </div>
    </div>
  </header>
);

export default Header;
