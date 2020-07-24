import React from 'react';

class BriefHistory extends React.PureComponent {
	state = {
		msg: '...'
	}

	render(){
		// Renders after 3 seconds and updates state.msg
		// Then since the message remains the same, it won't update
		// again.
		//
		// This is just to show that PureComponent Implements 
		// shouldComponentUpdate with a shallow props and state comparison.
		setTimeout(() => {
			this.setState({ msg: this.props.txt })
		}, 3000)

		return <p><i>{ this.state.msg }</i></p>
	}
}

export default BriefHistory;