import React from 'react';
import './Spinner.scss';

const Spinner = (props) => {
  return (
  	<div className="spinner-container">
    	<img
    		alt="Loading"
    		src="http://cdn.lowgif.com/full/de538fab8eff340b-oxo-salad-spinner-target.gif"
    		/>
    </div>
  )
}

export default Spinner;