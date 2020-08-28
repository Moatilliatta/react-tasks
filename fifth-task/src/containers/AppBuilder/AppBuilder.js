import React, { useState } from 'react';

import Search from '../../components/Search/Search';
import AddMovie from '../../components/Movie/AddMovie/AddMovie';

import Filter from '../Filter/Filter';
import Sort from '../../components/Results/Sort/Sort';
import Count from '../../components/Results/Count/Count';
import Body from '../../components/Results/Body/Body';
import './AppBuilder.scss';

import BaseMovieForm from '../../components/Movie/BaseMovieForm/BaseMovieForm';
import Modal from '../../components/Movie/Modal/Modal';
import moviesMockList from '../../mockData/movies';
import MovieContext from '../../context/movieContext';
import MovieInfo from '../../components/Movie/MovieInfo/MovieInfo';
import useFetchMockData from '../../utils/useFetchMockData';

const AppBuilder = (props) => {
  const [movies, setMovies] = useState([]);
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const addMovieHandler = () => setIsAddOpen(true);
  const closeAddMovieHandler = () => setIsAddOpen(false);
  const hideMovieInfoHandler = () => setSelectedMovie(null);

  useFetchMockData(moviesMockList, setMovies);

  const styles = {
    backgroundImage: `url(${process.env.PUBLIC_URL+'background.jpg'})` 
  }

  return (
    <React.Fragment>
      <header style={styles}>
        { selectedMovie
          ? <MovieInfo movie={selectedMovie} close={hideMovieInfoHandler} />
          : <React.Fragment>
              <AddMovie add={addMovieHandler}/>
              <Search />
              <Modal open={isAddOpen} close={closeAddMovieHandler}>
                <BaseMovieForm action="add" />
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
          <MovieContext.Provider value={{
              setSelectedMovie
            }}>
          <Count totalCount={movies.length} />
          <Body movies={ movies } />
          </MovieContext.Provider>
        </div>
      </section>
    </React.Fragment>
  );
}

export default AppBuilder;