import React, { useEffect } from 'react';

import Filter from '../Filter/Filter';
import Sort from '../../containers/Results/Sort/Sort';
import Count from '../../components/Results/Count/Count';
import Body from '../../components/Results/Body/Body';
import NoResults from '../../components/Results/NoResults/NoResults';
import Spinner from '../../utils/Spinner';

import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/index';

import { useParams } from 'react-router-dom';

const Results = ({ movieList, onSearch, getMovies }) => {
	let { query } = useParams();

  useEffect(()=>{
    query ? onSearch(query) : getMovies();
  },[query, onSearch, getMovies]);

  return (
    <section className="container">
        <div className="control">
          <Filter />
          <Sort />
        </div>
        <div className="results-list">
        {
          Array.isArray(movieList)
          ? (
            movieList.length > 0 
              ? (
                <React.Fragment>
                  <Count totalCount={ movieList.length } />
                  <Body movies={ movieList } />
                </React.Fragment>
                )
              : <Spinner />
            )
          : <NoResults />
        }
        </div>
    </section>
  )
}

const mapStateToProps = (state) => {
  return {
    movieList: state.movieList
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    getMovies: () => dispatch(actionCreators.fetchMovies()),
    onSearch: (title) => dispatch(actionCreators.fetchMoviesByTitle(title))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Results);