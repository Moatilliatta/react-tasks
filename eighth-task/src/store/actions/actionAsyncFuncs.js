import * as actionCreators from './actionCreators';

const baseHostPort = 'http://localhost:4000';
const baseMovieUrl = `${baseHostPort}/movies`;
const getLastMovies = `${baseMovieUrl}?sortBy=id&sortOrder=desc`;

const fetchHeaders = {
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json;charset=UTF-8'
  }
};

const fetchMovieAPI = async (url=getLastMovies, options={method: 'GET'}) => {
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
      .then((resp)=>dispatch(actionCreators.getMovieById(resp)));
  }
}

export const fetchMoviesByTitle = (title) => {
  return (dispatch) => {
    fetchMovieAPI(`${baseMovieUrl}?searchBy=title&search=${title}`)
      .then((resp)=>dispatch(actionCreators.getMoviesByTitle(resp.data)))
      .catch(function(rej) {
        dispatch(actionCreators.getMovies(null));
      });
  }
}

export const editMovie = (movieData) => {
  const options = {
    method: 'PUT', 
    body: movieData,
    ...fetchHeaders
  };

  return (dispatch) => {
    fetch(baseMovieUrl, options).then(response => {
      const msg = response.status === 200
        ? 'Movie Updated'
        : 'Something went wrong, please check your data and try again';
      
      fetchMovieAPI()
        .then((resp)=>dispatch(actionCreators.updateMovie(msg, resp.data)));
    });
  }
}

export const createMovie = (movieData) => {
  const options = {
    method: 'POST',
    body: JSON.stringify(movieData),
    ...fetchHeaders
  };

  return (dispatch) => {
    fetch(baseMovieUrl, options).then(response => {
      const msg = response.status === 201
        ? 'New Movie Added'
        : 'Something went wrong, please check your data and try again';

      fetchMovieAPI()
        .then((resp)=>dispatch(actionCreators.addMovie(msg, resp.data)));
    });
  }
}

export const removeMovie = (id) => {
  return (dispatch) => {
    fetch(`${baseMovieUrl}/${id}`, { method: 'DELETE' }).then(response => {
      const msg = response.status === 204
        ? 'Movie Deleted.'
        : 'Something went wrong, please check your data and try again';

      fetchMovieAPI()
        .then((resp)=>dispatch(actionCreators.deleteMovie(msg, resp.data)));
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
      .then((resp)=>dispatch(actionCreators.sortMovies(resp.data)));
  }
}

export const filterMoviesByGenre = (genre) => {
  return (dispatch) => {
    const url = genre === 'all'
      ? getLastMovies
      : `${baseMovieUrl}?searchBy=genres&search=${genre}`

    fetchMovieAPI(url)
      .then((resp)=>dispatch(actionCreators.filterMovies(resp.data, genre)));
  }
}
