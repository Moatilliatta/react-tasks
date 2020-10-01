import React from 'react';
import './PageNotFound.scss';
import { withRouter } from 'react-router-dom';
const PageNotFound = ({ history }) => {
  return (
    <div className="PageNotFound">
    	<label>page not found</label>
    	<div className="threeD">404</div>
    	<button onClick={() => history.push('/') }>
    		go back home
    	</button>
    </div>
  )
}

export default withRouter(PageNotFound);