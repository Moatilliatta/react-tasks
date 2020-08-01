import React from 'react';
import ReactDOM from 'react-dom';

// SCSS
import styles from './assets/scss/app.module'
import './assets/scss/global'

const msg = "This is React code... (jsx)";

const newMsg = msg.split('').map((item, index)=>{
	return index % 2 == 0 ? item.toUpperCase() : item
}).join('');

ReactDOM.render(
	<h2 className={ styles.red }>{newMsg}</h2>,
	document.getElementById('app')
);