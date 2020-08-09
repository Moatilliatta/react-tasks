import React, { Component } from 'react';

class DefaultErrorBoundary extends Component {
	state = {
		hasError: false,
		errorMsg: ''
	}

	componentDidCatch = (error, info) => {
		this.setState({
			hasError: true,
			errorMsg: error
		})
	}

	render() {
		if(this.state.hasError) {
			return <h1>{ this.state.errorMsg.message }</h1>
		}

		return this.props.children;
	}
}

export default DefaultErrorBoundary;