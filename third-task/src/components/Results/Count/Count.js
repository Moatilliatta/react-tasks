import React from 'react';
import './Count.scss';

const Count = (props) => {
  return (
    <div className="count-container">
	    <label>{props.totalCount}</label> Movies Found
    </div>
  )
}

export default Count;