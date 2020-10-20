import React, { useState } from 'react';
import { withRouter } from 'react-router';
import './Search.scss';

const Search = ({ history }) => {
  const [searchText, setSearchText] = useState('');
  const doSearch = () => history.push(`/search/${searchText}`);
  const handleSearch = (e) => {
    if (e.charCode ===13) {
      doSearch();
    }
  }

  return (
    <section className="search-section">
        <label>find your movie</label>
        <div className="search-box">
            <input
                type="text"
                placeholder="What do you want to watch?"
                onChange={(e) => setSearchText(e.target.value)}
                value={searchText}
                onKeyPress={handleSearch}
            />
            <button onClick={doSearch}>search</button>
        </div>
    </section>
  )
}

export default withRouter(Search);