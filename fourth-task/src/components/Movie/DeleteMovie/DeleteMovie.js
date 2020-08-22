import React from 'react';
import './DeleteMovie.scss';

const DeleteMovie = (props) => {
  return (
  	<div className="container-frm">
  		<label>delete movie</label>
		<div className="form">
			<div>
	    		<label>Are you sure you want to delete this movie?</label>
    		</div>
    		<div className="buttons-frm">
	    		<button>confirm</button>
    		</div>
		</div>
	</div>
  )
}

export default DeleteMovie;