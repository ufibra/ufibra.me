import React from 'react';
import PropTypes from 'prop-types';

import "./style.css";

class SearchForm extends React.Component {

  state = {
    data: {
      query: ''
    }
  };

  onSubmit = e => {
    e.preventDefault();
    const { data } = this.state;
    this.props.onSubmit({ ...data });
  }

  onChange = e => {
    this.setState({
      data: { ...this.state.data, query: e.target.value }
    });
  };

  render() {
    const { data } = this.state;

    return (
      <form onSubmit={this.onSubmit}>
	<div className="form-group">
	  <div className="input-group col-md-4 offset-md-4">
	    <input
	      className="form-control border-right-0 border"
	      onChange={this.onChange}
	      type="search"
	      value={data.query}
	      placeholder='Procure por produtos...'
	    />
	    <span className="input-group-append">
	      <button className="btn btn-outline-secondary border-left-0 border search-form__button" type="submit">
		<i className="fa fa-search"/>
	      </button>
	    </span>
	  </div>
	</div>
      </form>
    );
  }
}

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default SearchForm;
