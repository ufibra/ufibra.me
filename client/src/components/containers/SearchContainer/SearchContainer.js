import React from 'react';
import SearchForm from '../../forms/SearchForm';

import './style.css';

class SearchContainer extends React.Component {

  onSubmit = data => {
    // TODO: Fetch data
    console.log(data)
  };

  render() {
    return (
      <div className="search-container">
        <SearchForm onSubmit={this.onSubmit} />
        <h4>
          Compare aqui os melhores suplementos das <br/> maiores lojas virtuais do Brasil
        </h4>
      </div>
    );
  }
}

export default SearchContainer;
