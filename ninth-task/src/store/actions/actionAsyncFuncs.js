import * as actionCreators from './actionCreators';
import {
  baseMovieUrl,
  getLastMovies,
  getOptions,
  apiMsgs
} from '../../utils/sharedFunctions';

export const fetchMovieAPI = async (url=getLastMovies, options={method: 'GET'}) => {
  try {
  const movieList = await fetch(url, options)
    .then((response) => response.json())
    .then((result) => result);
  return movieList;
  } catch(err) {
    console.log(err)
  }
}

export const fetchMovies = () => { 
  return (dispatch) => {
    fetchMovieAPI()
      .then((resp)=>dispatch(actionCreators.getMovies(resp.data)))
      .catch(function(rej) {
        dispatch(actionCreators.getMovies(null));
      });
  }
}

export const fetchMovieById = (id) => { 
  return (dispatch) => {
    fetchMovieAPI(`${baseMovieUrl}/${id}`)
      .then((resp)=>dispatch(actionCreators.getMovieById(resp)))
      .catch(function(err) {
        console.log(err);
      });
  }
}

export const fetchMoviesByTitle = (title) => {
  return (dispatch) => {
    fetchMovieAPI(`${baseMovieUrl}?searchBy=title&search=${title}`)
      .then((resp) => {
        const result = resp?.data.length ? resp.data : null
        dispatch(actionCreators.getMoviesByTitle(result))
      })
      .catch(function(rej) {
        dispatch(actionCreators.getMovies(null));
      });
  }
}

export const editMovie = (movieData) => {
  return (dispatch) => {
    fetch(baseMovieUrl, getOptions('PUT', movieData)).then(({ status }) => {
      const msg = status === 200
        ? apiMsgs.movieUpdated
        : apiMsgs.err;
      
      dispatch(actionCreators.updateMovie({ msg: msg, status: status }));
    })
    .catch(function(rej) {
      console.log(rej)
    });
  }
}

export const createMovie = (movieData) => {
  return (dispatch) => {
    fetch(baseMovieUrl, getOptions('POST', movieData, true)).then(({status}) => {
      const msg = status === 201
        ? apiMsgs.movieCreated
        : apiMsgs.err;

        dispatch(actionCreators.addMovie({ msg: msg, status: status }));
    }).catch(function(rej) {
      console.log(rej)
    });
  }
}

export const removeMovie = (id) => {
  return (dispatch) => {
    fetch(`${baseMovieUrl}/${id}`, { method: 'DELETE' }).then(({ status }) => {
      const msg = status === 204
        ? apiMsgs.movieDeleted
        : apiMsgs.err;

        dispatch(actionCreators.deleteMovie({ msg: msg, status: status }));
    }).catch(function(rej) {
      console.log(rej)
    });
  }
}

export const sortMoviesBy = (sortBy, genre='', sortOrder='asc') => {
  const mapSortBy = {
    releaseDate: 'release_date',
    title: 'title', 
    id: 'id',
    rating: 'vote_average'
  }

  return (dispatch) => {
    const withGenre = genre
      ? `searchBy=genres&search=${genre}`
      : '';
    const url = `${baseMovieUrl}?sortBy=${mapSortBy[sortBy]}&sortOrder=${sortOrder}&${withGenre}`;

    fetchMovieAPI(url)
      .then((resp)=>dispatch(actionCreators.sortMovies(resp.data)))
      .catch(function(rej) {
        dispatch(actionCreators.getMovies(null));
      });
  }
}

export const filterMoviesByGenre = (genre) => {
  return (dispatch) => {
    const url = genre === 'all'
      ? getLastMovies
      : `${baseMovieUrl}?searchBy=genres&search=${genre}`

    fetchMovieAPI(url)
      .then((resp)=>dispatch(actionCreators.filterMovies(resp.data, genre)))
      .catch(function(rej) {
        dispatch(actionCreators.getMovies(null));
      });
  }
}
