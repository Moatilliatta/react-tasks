import React from 'react';

const movieContext = React.createContext({
	setSelectedMovie: () => {}
});

export default movieContext