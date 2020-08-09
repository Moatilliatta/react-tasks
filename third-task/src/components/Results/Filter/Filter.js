import React from 'react';
import './Filter.css';

const Filter = (props) => {
  return (
  	<div className="filter-list">
    	<a href="#">all</a>
    	<a href="#">documentary</a>
    	<a href="#">comedy</a>
    	<a href="#">horror</a>
    	<a href="#">crime</a>
	</div>	
  )
}

export default Filter;