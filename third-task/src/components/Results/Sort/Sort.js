import React from 'react';
import './Sort.css';

const Sort = (props) => {
  return (
    <div className="sort-by">
    	<label>sort by</label>
    	<select>
    		<option>Release Date</option>
    		<option>Title</option>
    	</select>
    </div>
  )
}

export default Sort;