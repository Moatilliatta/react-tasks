import React from 'react';
import './EditDots.scss';

const EditDots = (props) => {
  return (
    <div className="edit-dots" onClick={props.clicked}>
		<button>&middot;&middot;&middot;</button>
	</div>
  )
}

export default EditDots;