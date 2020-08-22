import React from 'react';
import './EditOptions.scss';

const EditOptions = (props) => {
  return (
	<div className="edit-opt">
		<span onClick={props.closed}>x</span>
		<span onClick={props.editClicked}>edit</span>
		<span onClick={props.deleteClicked}>delete</span>
	</div>
  )
}

export default EditOptions;