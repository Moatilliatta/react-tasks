
## Getting Started

Install dependencies: `npm install`

Run the app: `npm run start`

The app will start running at `http://localhost:3000`

Run tests: `npm test`

Create build for production: `npm run build`

## IMPORTANT
In order to simulate requests, two promises were used on `src\containers\AppBuilder.js` and `src\containers\Filter.js`, Wait **5 seconds** for each.

## Styiling
This will be a continous WIP in order to improve the look and feel.
`TODO: Improve mobile version.`

## Implement "Movie details" page.
`src\components\Movie\MovieInfo\MovieInfo.js` - Added a component that includes all the movie information, populated by the customHook `src\utils\useFetchMockData.js` and invoked into the `src\container\AppBuilder.js` container

## Usage of custom hooks and useCallback and useEffect.
`src\utils\useFetchMockData.js` - A file that simulates an API GET request with a custom promise that uses useCallback in order to avoid refreshing the function many times. It is consumed inside the useEffect. All this logic is within the custom hook.

## Any comment please contact me via MS Teams.
