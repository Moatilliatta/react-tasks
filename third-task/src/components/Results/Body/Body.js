import React from 'react';
import MovieItem from '../../Movie/MovieItem';
import './Body.scss';

const Body = (props) => {

	// Import all images in image folder
	const importAll = (r) => {
	    let images = {};
	    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
	    return images;
	}
	const images = importAll(require.context('../../../../public', false, /\.(gif|jpe?g|svg)$/));

	const movieList = props.movies.map((item, key)=>{
		return <MovieItem
			key={item.id}
			imgSrc={images[`${item.id}.jpg`]}
			title={item.title}
			releaseDate={item.releaseDate}
			genre={item.genre}
		/>
	});

  return (
    <main className="body-list">
    	{ movieList }
    </main>
  )
}

export default Body;