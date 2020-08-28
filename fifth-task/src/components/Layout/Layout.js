import React from 'react';
import DefaultErrorBoundary from '../../ErrorBoundary/DefaultErrorBoundary';

import './Layout.scss';

const layout = (props) => (
	<React.Fragment>
		<DefaultErrorBoundary>
			{props.children}
		</DefaultErrorBoundary>
		<footer>netflix roulette</footer>
	</React.Fragment>
);

export default layout