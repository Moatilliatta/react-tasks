


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

## Add 404 and 'No movies found' pages with markup.
`localhost:3000/search/nomovie`

## When new user enters the site using direct link with search parameters – show search results.
`localhost:3000/search/friday`

## When user clicks on a film item, redirect them to:  `localhost/film/id`
Go to `localhost:3000` and search, for instance, 'Friday' and click any movie. You can see that the movie data is displayed.

## Implement displaying 404 page for all invalid URLs
`localhost:3000/randomValueNotValid`

## By default, user lands on a new page with empty results page
`localhost:3000`

## When user performs a search on the page, change URL and show search results
Go to `localhost:3000` and search, for instance, 'Friday'.

## Any comment please contact me via MS Teams.