import React from 'react';
import './Search.scss';

const Search = (props) => {
  return (
    <section className="search-section">
    	<label>find your movie</label>
    	<div className="search-box">
    		<input
    			type="text"
    			placeholder="What do you want to watch?"
    		/>
    		<button>search</button>
    	</div>
    </section>
  )
}

export default Search;