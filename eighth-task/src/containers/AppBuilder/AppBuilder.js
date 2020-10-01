import React, { useState, useEffect } from 'react';
import './AppBuilder.scss';

import Search from '../../components/Search/Search';
import AddMovie from '../../components/Movie/AddMovie/AddMovie';
import BaseMovieForm from '../../components/Movie/BaseMovieForm/BaseMovieForm';
import Modal from '../../components/Movie/Modal/Modal';
import MovieInfo from '../../components/Movie/MovieInfo/MovieInfo';
import Results from '../Results/Results';

import { backendHost } from '../../utils/sharedFunctions';

import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/index';
import { Route, useParams, withRouter } from 'react-router-dom';

const AppBuilder = ({
  currentMovie,
  onClearCurrentMovie,
  getMovieById,
  history,
  movieList
}) => {
  const [isAddOpen, setIsAddOpen] = useState(false);
  const addMovieHandler = () => setIsAddOpen(true);
  const closeAddMovieHandler = () => setIsAddOpen(false);

  const hideMovieInfoHandler = () => {
    onClearCurrentMovie();
    movieList.length > 0 ? history.goBack() : history.push('/');
  }

  let { id } = useParams();

  const styles = {
    backgroundImage: `url(${backendHost+'/background.jpg'})`
  }

  useEffect(()=>{
    if(id) {
      getMovieById(id);
    }
  },[id, getMovieById]);

  return (
    <React.Fragment>
      <header style={styles}>
        { Object.keys(currentMovie).length > 0
          ? <Route path="/film/:id?">
              <MovieInfo movie={currentMovie} close={hideMovieInfoHandler} />
            </Route>
          : <React.Fragment>
              <AddMovie add={addMovieHandler}/>
              <Search />
              <Modal open={isAddOpen} close={closeAddMovieHandler}>
                <BaseMovieForm action="add" close={closeAddMovieHandler}/>
              </Modal>
            </React.Fragment>
        }
      </header>
      <Route path="/search/:query?" component={Results} />
    </React.Fragment>
  );
}

const mapStateToProps = (state) => {
  return {
    currentMovie: state.currentMovie,
    movieList: state.movieList
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClearCurrentMovie: () => dispatch(actionCreators.clearCurrentMovie()),
    getMovieById: (id) => dispatch(actionCreators.fetchMovieById(id))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(AppBuilder));