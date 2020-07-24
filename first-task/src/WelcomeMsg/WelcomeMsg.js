import React from 'react';

const welcomeMsg = (props) => {
	let randomNum = Math.round(Math.random()*10) +1
	const message = randomNum % 2 ? props.textMsg : 'Hello World!'

	return (
		<div>
			<h1>{ message }</h1>
		</div>
	)
}

export default welcomeMsg;