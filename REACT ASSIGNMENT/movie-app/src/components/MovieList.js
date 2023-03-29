import React from 'react';

const MovieList = (props) => {
	const FavouriteComponent = props.favouriteComponent;

	return (
		<>
			{props.movies.map((movie, index) => (

				<div className='image-container d-flex justify-content-start m-3'>
					<img src={movie.Poster} alt='movie'></img>
					<li className='list-content'>
					<h3 className='content'>Title:{movie.Title}</h3>
					<h3 className='content'>Year:{movie.Year}</h3>
					<h3 className='content'>Type:{movie.Type}</h3>
					<h3 className='content'>imdbID:{movie.imdbID}</h3>
					</li>
					
					<div
						onClick={() => props.handleFavouritesClick(movie)}
						className='overlay d-flex align-items-center justify-content-center'
					>
						<FavouriteComponent />
					</div>
				</div>
			))}
		</>
	);
};

export default MovieList;