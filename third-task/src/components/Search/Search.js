import React from 'react';
import './Search.css';

const Search = (props) => {
  return (
    <section className="search-section">
    	<input
    		type="text"
    		placeholder="What do you want to watch?"
    		/>
    	<button>Search</button>
    </section>
  )
}

export default Search;