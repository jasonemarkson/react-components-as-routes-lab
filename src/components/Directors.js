import React from 'react';
import { directors } from '../data';

const Directors = () => {
  console.log(directors)
  return (
    <div>
    <h1>Directors Page</h1>
      {
        directors.map((director, index) => {
          return (
          <div key={index}>
            <p><strong>{director.name}</strong></p>
            {
              director.movies.map((m, index) => {
                return (<ul key={index}>
                  <li>{m}</li>
                </ul>)
              })
            }
          </div>)
        })
      }
    </div>
  )
}

export default Directors
