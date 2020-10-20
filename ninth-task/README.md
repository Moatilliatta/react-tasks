


## Getting Started

Install dependencies: `npm install`

Run the app: `npm run start`

The app will start running at `http://localhost:3000`

Run tests: `npm test`

Create build for production: `npm run build`

## IMPORTANT

 1. In order to simulate genres request, a promises was used on `src\containers\Filter.js`, Wait **5 seconds** for it.
1. **From now on, a local API needs to be running**
	1. Go to `../MoviesAPI.ReactJS-master`
	1. Install dependencies: `npm install`
	1. Run the app: `npm run start`
	1. API docs in swagger: http://localhost:4000/api-docs

## Styiling
This will be a continous WIP in order to improve the look and feel.
`TODO: Improve mobile version.`
`(max-width: 640px)`
`(min-width: 641px) and (max-width: 800px)`
`(min-width: 801px) and (max-width: 1024px)`
`(min-width: 1025px)`

## Cover 1 simple presentational component with snapshot tests.
`src\components\Movie\MovieInfo\MovieInfo.test.js`

## Cover 1 reducer and all its actions with unit-tests.
` src/store/reducers/movies.test.js`

## Measure coverage level with coverage report
Execute `npm run jest-coverage` and it will be automatically displayed on command line and generated inside `eight-task` directory.

## Cover "Add movie" modal dialog components with unit-tests, mock all external dependencies using Jest mocks.

`src\components\Movie\AddMovie\AddMovie.test.js`
`src\components\Movie\BaseMovieForm\BaseMovieForm.test.js`
`src\components\Movie\MovieInfo\MovieInfo.test.js`
`src\containers\AppBuilder\AppBuilder.test.js`
`src\containers\Movie\MovieForm\MovieForm.test.js`
`src\containers\Movie\MovieItem\MovieItem.test.js`
`src\store\actions\actionAsyncFuncs.test.js`
`src\store\actions\actionCreators.test.js`
`src\store\reducers\movies.test.js`

Other testing files:

`src\components\Results\Body\Body.test.js`
`src\components\Results\PageNotFound\pageNotFound.test.js`
`src\components\Search\Search.test.js`
`src\containers\Movie\DeleteMovie\DeleteMovie.test.js`

## Any comment please contact me via MS Teams.