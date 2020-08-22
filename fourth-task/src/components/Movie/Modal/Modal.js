import React from 'react';
import './Modal.scss';
import ReactDOM from 'react-dom';

const Modal = (props) => {
	if (!props.open) {
    return null;
  }

  return ReactDOM.createPortal(
    <React.Fragment>
      <div className="Overlay"></div>
      <div className="Modal">
        <span className="close-modal" onClick={props.close}>x</span>
      	{props.children}
      </div>
    </React.Fragment>,
    document.getElementById('modal-portal')
  )
}

export default Modal;