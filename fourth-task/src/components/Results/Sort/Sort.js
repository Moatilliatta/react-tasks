import React from 'react';
import './Sort.scss';

const Sort = (props) => {
  return (
    <div className="sort-by">
    	<label>sort by</label>
    	<select>
    		<option>release date</option>
    		<option>title</option>
    	</select>
    </div>
  )
}

export default Sort;