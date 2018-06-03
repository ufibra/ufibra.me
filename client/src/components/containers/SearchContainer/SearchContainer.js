import React from 'react';
import SearchForm from '../../forms/SearchForm';

class SearchContainer extends React.Component {

  onSubmit = data => {
    // TODO: Fetch data
    console.log(data)
  };

  render() {
    return (
      <SearchForm
        onSubmit={this.onSubmit}
      />
    );
  }
}

export default SearchContainer;
