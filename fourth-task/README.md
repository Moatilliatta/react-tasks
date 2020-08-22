
## Getting Started

Install dependencies: `npm install`

Run the app: `npm run start`

The app will start running at `http://localhost:3000`

Run tests: `npm test`

Create build for production: `npm run build`

## IMPORTANT
In order to simulate requests, two promises were used on `src\containers\AppBuilder.js` and `src\containers\Filter.js`.

- Wait **3 seconds** for filter options.
- Wait **5 seconds** for movie list.

## Styiling
This will be a continous WIP in order to improve the look and feel.
`TODO: Improve mobile version.`

## Implementation of markup and styles
Moved files structure and added movie components (BaseMovieForm, Modal, EditDots, EditOptions) in order to ease the new modals.

## Stateful approach
- `src\containers` folder.

## Stateless approach
- `src\components` folder.

## LifeCycle Methods
`src\containers\AppBuilder.js`
- **componentDidMount:** used to retrieve mock API data.

`src\containers\Filter.js`
- **componentDidMount:** used to retrieve mock API data.
- **shouldComponentUpdate:** used to update only if filterOptions was updated.

## Synthetic Events

`src\components\Movie\AddMovie\AddMovie.js`,
`src\components\Movie\EditDots\EditDots.js`,
`src\components\Movie\EditOptions\EditOptions.js`,
`src\components\Movie\Modal\Modal.js`

- **onClick:** used to detect when the component was clicked.

## Any comment please contact me via MS Teams.
