import React from 'react';
import { Link, Route } from 'react-router-dom'

const MovieList = props => {
  return (
    <div className="movie-list">
      {props.movies.map(movie => (
        <MovieDetails key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

function MovieDetails({ movie }) {
  const { title, director, metascore, id } = movie;

  return (
    <div>
    <Link to ={`/movies/${id}`}>
    <div className="movie-card">
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
    </div>
    </Link>
    <Route path = {`/movies/${id}`} />
    </div>
  );
}

export default MovieList;
