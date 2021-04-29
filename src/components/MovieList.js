import React, {Component} from 'react'


export function MoviesList ({movies, buttonName}) {
  return(
    <ul className='movie-list'>
      {movies.map((movie, index) => {
        const{Title, Year} = movie;

        return (
          <li className='movie-item' key={ Title }> 
            { Title } ({ Year }) &nbsp; 
            <button>{buttonName}</button>
          </li>
        );

      })}
    </ul>
  );
}