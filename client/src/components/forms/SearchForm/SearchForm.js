import React from 'react';
import PropTypes from 'prop-types';
import {
	Button,
	Form,
	FormControl,
	FormGroup,
	Glyphicon,
} from 'react-bootstrap';

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
			<Form inline onSubmit={this.onSubmit}>
				<FormGroup role='form'>
					<FormControl
						type='text'
						value={data.query}
						placeholder='Procure por produtos...'
						onChange={this.onChange}
					/>
					<Button type='submit'>
						<Glyphicon glyph='search' />
					</Button>
				</FormGroup>
			</Form>
		);
	}
}

SearchForm.propTypes = {
	onSubmit: PropTypes.func.isRequired
};

export default SearchForm;
