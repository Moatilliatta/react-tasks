

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

## Make your components perform real AJAX requests. Implement data fetches as async actions and pass data to your components with redux.
Actions and reducers stuff: `src/store/`
Redux Setup: `src/index.js`
All containers are now Redux's subscriptors: `src/containers` 
	
## Implement creating, editing and updating films according to the design operations as redux actions.
Actions and reducers stuff: 
`src/store/`

Used in:
`src/containers/AppBuilder`
`src/containers/Movie`

## Implement filtering and sorting (by genre, rating, and release date) as redux actions.
Actions and reducers stuff: 
`src/store/`

Used in:
`src/containers/Filter`
`src/containers/Results/Sort`

## Any comment please contact me via MS Teams.