import React from 'react';
import './Count.scss';

const Count = ({ totalCount }) => {
  return (
    <div className="count-container">
	    <label>{totalCount}</label> { totalCount === 1 ? 'Movie Found' : 'Movies Found'}
    </div>
  )
}

export default Count;