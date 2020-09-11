import React, { useState }from 'react';
import './Filter.scss';
import genresMockData from '../../mockData/genres';
import Spinner from '../../utils/Spinner';
import useFetchMockData from '../../utils/useFetchMockData';

import {connect} from 'react-redux';
import * as actionCreators from '../../store/actions/index';

const Filter = (props) => {
  const [filterOptions, setFilterOptions] = useState(['all']);

  useFetchMockData(genresMockData, setFilterOptions);

  const clickGenre = (e) => {
    props.onClickGenre(e.target.innerText.toLowerCase());
  }

  const options = filterOptions.slice(0,5).map((item, key)=>{
      return <button onClick={clickGenre} key={key}>{item}</button>
  });

  return (
    <div className="filter-list">
         { options.length > 1 ? options : <Spinner /> }
     </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClickGenre: (genre) => dispatch(actionCreators.filterMoviesByGenre(genre))
  }
}

// export default React.memo(Filter);
export default connect(null, mapDispatchToProps)(Filter);