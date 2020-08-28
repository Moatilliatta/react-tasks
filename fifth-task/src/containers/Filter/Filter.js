import React, { useState }from 'react';
import './Filter.scss';
import genresMockData from '../../mockData/genres';
import Spinner from '../../utils/Spinner';
import useFetchMockData from '../../utils/useFetchMockData';

const Filter = (props) => {
  const [filterOptions, setFilterOptions] = useState(['all']);

  useFetchMockData(genresMockData, setFilterOptions);

  const options = filterOptions.map((item, key)=>{
      return <button key={key}>{item}</button>
  });

  return (
    <div className="filter-list">
         { options.length > 1 ? options : <Spinner /> }
     </div>
  );
}

// export default React.memo(Filter);
export default Filter;