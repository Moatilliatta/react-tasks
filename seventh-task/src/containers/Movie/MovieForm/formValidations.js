const validate = values => {
    const validUrl = /^https?:\/\/(?:[a-z0-9-]+\.)+[a-z]{2,6}(?:\/[^/#?]+)+\.(?:jpe?g|gif|png)$/;
    const errors = {};

    if (!values.genres.length) {
     errors.genres = 'Required at least one genre.';
    }

    if (!values.overview) {
     errors.overview = 'Required Overview';
    } else if (values.overview.length < 10) {
     errors.overview = 'Must be at least 10 characters.';
    }

    if (!values.poster_path) {
     errors.poster_path = 'Required Image URL';
    } else if (!validUrl.test(values.poster_path)) {
     errors.poster_path = 'Invalid URL.';
    }

    if (!values.release_date) {
     errors.release_date = 'Required Date.';
    }

    if(!+values.runtime){
     errors.runtime = 'Only numbers';
    }

    if (!values.title) {
     errors.title = 'Required';
    } else if (values.title.length > 42) {
     errors.title = 'Must be less than 42 characters';
    }

   return errors;
 };

 export default validate;