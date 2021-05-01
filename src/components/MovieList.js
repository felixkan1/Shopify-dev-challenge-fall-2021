import React from 'react';
import {MovieInfo} from './MovieInfo';

export function MoviesList ({movies, buttonName, onClick, nominatedMovies, resultList, disableAll=false}) {
  // const nominatedIDs = nominatedMovies.map((movie) => {
  //   return movie.imdbID;
  // })
  let nominatedIDs = [];
  if(nominatedMovies) {
    nominatedIDs = nominatedMovies.map((movie) => {
      return movie.imdbID;
    })
  }


  return (
    <ul className='movie-list'>
      {movies.map((movie, index) => {
        const{Title, Year, imdbID} = movie;
        const disabled = (nominatedIDs.includes(imdbID) && resultList) || disableAll;
        return (
            <MovieInfo resultList={resultList} movie={movie} key={index}> 
            <li className='movie-item'> 
                {Title} ({Year}) &nbsp; 
                <button 
                  onClick = {() => onClick(movie)}
                  disabled = {disabled}
                  className='btn-clear'
                  >
                    {buttonName}
                  </button>
              </li>
            </MovieInfo>
        
        );

      })}
    </ul>
  );
}