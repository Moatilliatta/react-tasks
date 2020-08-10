import React from 'react';
import './Count.css';

const Count = (props) => {
  return (
    <div className="count-container">
	    <label>{props.totalCount}</label> Movies Found
    </div>
  )
}

export default Count;