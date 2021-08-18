import React from 'react';
import { movies } from '../data';

const Movies = () => {
  console.log(movies)
  console.log("Hi")

  return (
    <div>
      <h1>Movies Page</h1>
          {
          movies.map((movie, index) => {
          
          return (<div key={index}>
            <p>Title: {movie.title}</p>
            <p>Time: {movie.time}</p>
            
            
            Genres: 
            <ul>{movie.genres.map( (g, index) => <li key={index}>
              {g}
              </li>)}</ul>
            
            

          </div>)
        })
        }
    </div>
  );
};

export default Movies;
