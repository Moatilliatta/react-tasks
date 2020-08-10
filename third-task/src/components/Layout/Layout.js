import React from 'react';
import Search from '../Search/Search';
import AddMovie from '../Movie/AddMovie';
import DefaultErrorBoundary from '../../ErrorBoundary/DefaultErrorBoundary';

import './Layout.css';

const styles = {
	width: "100%",
  	height: "400px",
	backgroundColor: "rgba(255, 0, 0, 0.2)" //`url(${process.env.PUBLIC_URL+'search-background.jpg'})` 
}

const layout = (props) => (
	<React.Fragment>
		<DefaultErrorBoundary>
			<header style={styles}>
				<AddMovie />
				<Search />
			</header>
			{props.children}
		</DefaultErrorBoundary>
		<footer>something</footer>
	</React.Fragment>
);

export default layout