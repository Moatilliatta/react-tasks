import React, { useState, useEffect } from 'react';

import Search from '../../components/Search/Search';
import AddMovie from '../../components/Movie/AddMovie/AddMovie';

import Filter from '../Filter/Filter';
import Sort from '../../containers/Results/Sort/Sort';
import Count from '../../components/Results/Count/Count';
import Body from '../../components/Results/Body/Body';
import './AppBuilder.scss';

import BaseMovieForm from '../../components/Movie/BaseMovieForm/BaseMovieForm';
import Modal from '../../components/Movie/Modal/Modal';
import MovieInfo from '../../components/Movie/MovieInfo/MovieInfo';

import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/index';

const AppBuilder = ({ movieList, getMovies, currentMovie, onClearCurrentMovie }) => {
  const [isAddOpen, setIsAddOpen] = useState(false);

  const addMovieHandler = () => setIsAddOpen(true);
  const closeAddMovieHandler = () => setIsAddOpen(false);
  const hideMovieInfoHandler = () => onClearCurrentMovie();

  useEffect(()=>{
    getMovies();
  },[getMovies]);

  const styles = {
    backgroundImage: `url(${process.env.PUBLIC_URL+'background.jpg'})` 
  }

  return (
    <React.Fragment>
      <header style={styles}>
        { Object.keys(currentMovie).length > 0
          ? <MovieInfo movie={currentMovie} close={hideMovieInfoHandler} />
          : <React.Fragment>
              <AddMovie add={addMovieHandler}/>
              <Search />
              <Modal open={isAddOpen} close={closeAddMovieHandler}>
                <BaseMovieForm action="add" close={closeAddMovieHandler}/>
              </Modal>
            </React.Fragment>
        }
      </header>
      <section className="container">
        <div className="control">
          <Filter />
            <Sort />
        </div>
        <div className="results-list">
          <Count totalCount={movieList.length} />
          <Body movies={ movieList } />
        </div>
      </section>
    </React.Fragment>
  );
}

const mapStateToProps = (state) => {
  return {
    movieList: state.movieList,
    currentMovie: state.currentMovie
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    getMovies: () => dispatch(actionCreators.fetchMovies()),
    onClearCurrentMovie: () => dispatch(actionCreators.clearCurrentMovie())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(AppBuilder);