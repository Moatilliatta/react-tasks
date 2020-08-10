import React from 'react';
import './Filter.scss';

const Filter = (props) => {
	const filterOptions = [
		'all', 'documentary', 'comedy', 'horror', 'crime'
	];

	const options = filterOptions.map((item)=>{
		return <button>{item}</button>
	});

  return (
  	<div className="filter-list">
  		{ options }
	</div>	
  )
}

export default Filter;