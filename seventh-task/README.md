

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

## Implementation of "Add movie".
**Add movie button:** `src\components\Movie\AddMovie\AddMovie.js`.
**Add Movie Form:** It is contained inside a modal that populates a base form.
`src\containers\AppBuilder\AppBuilder.js:42`
**Base movie form:** `src\components\Movie\BaseMovieForm\BaseMovieForm.js`

Finally, the form with the fields, it's validation and implementation relies on: `src\containers\Movie\MovieForm\MovieForm.js`.

## Implementation of "Edit movie".
**Edit movie option:** If we hover over the movie image, a 3-dot-option appears, which allow us to edit/modify the movie. `src\components\Movie\EditOptions\EditOptions.js`. Once clicked, it loads the Edit Movie Form.

**Edit Movie Form:** It is contained inside a modal that populates a base form.
`src\containers\Movie\MovieItem\MovieItem.js:60`.

**Base movie form:** `src\components\Movie\BaseMovieForm\BaseMovieForm.js`

Finally, the form with the fields, it's validation and implementation relies on: `src\containers\Movie\MovieForm\MovieForm.js`.

## Use hooks from formik.
A general input was created to better solve Formik's functions: `src\UI\Form\Input\Input.js` it returns the desired input tag with its properties.

## Form with validation.
Based on formik implementation, a validate callback which contains all the rules was created. It is placed on `src\containers\Movie\MovieForm\formValidations.js`.

## Any comment please contact me via MS Teams.