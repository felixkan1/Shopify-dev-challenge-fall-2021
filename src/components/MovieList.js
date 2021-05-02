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
              <button 
                  onClick = {() => onClick(movie)}
                  disabled = {disabled}
                  className='btn-clear'
                  >
                    {buttonName === 'Nominate' && <img src='https://img.icons8.com/fluent/48/000000/pin3.png'/>}
                    {buttonName !== 'Nominate' && <img src="https://img.icons8.com/ios/30/000000/xbox-x.png"/>}
                </button>             
              <li className='movie-item'> 
                
                {Title} ({Year}) &nbsp; 
               
              </li>
            </MovieInfo>
        
        );

      })}
    </ul>
  );
}