import React from 'react';
import { actors } from '../data';

const Actors = () => {
  console.log(actors)
  return (
    <div>
      <h1>Actors Page</h1>
      {
        actors.map((actor, index) => {
          return(
            <div key={index}>
              <p><strong>{actor.name}</strong></p>
              Movies: 
              {actor.movies.map((m, index) => {
                return (<ul key={index}>
                  <li>{m}</li>
                </ul>)
              })}
            </div>
          )
        })
      }
    </div>
  );
};

export default Actors;
