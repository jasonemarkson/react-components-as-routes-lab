import React from 'react';
import { movies } from '../data';

const Movies = () => {
  console.log(movies)

  return (
    <div>
      <h1>Movies Page</h1>
          {
          movies.forEach(movie => {
          <div>
            {movie.title}
            {movie.theme}
            {
            movie.genres.forEach(g => {
              <ul>
                <li>g</li>
              </ul>
            })
            }
          </div>
          })
        }
    </div>
  );
};

export default Movies;
