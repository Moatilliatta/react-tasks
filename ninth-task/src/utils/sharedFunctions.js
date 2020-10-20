export const getReleaseYear = (releaseDate) => parseInt(releaseDate.slice(0,4));
export const backendHost = `//${window.location.host}`;

/*API*/
export const baseHostPort = 'http://localhost:4000';
export const baseMovieUrl = `${baseHostPort}/movies`;
export const getLastMovies = `${baseMovieUrl}?sortBy=id&sortOrder=desc`;

const fetchHeaders = {
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json;charset=UTF-8'
  }
};

export const getOptions = (method='GET', body={}, stringify=false) => {
  return {
    method: method,
    body: stringify ? JSON.stringify(body) : body,
    ...fetchHeaders
  };
}

export const apiMsgs = {
  movieUpdated: 'Movie Updated',
  movieCreated: 'Movie Added',
  movieDeleted: 'Movie Deleted',
  err: 'Something went wrong, please check your data and try again'
}