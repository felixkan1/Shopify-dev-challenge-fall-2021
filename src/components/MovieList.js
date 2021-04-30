import React from 'react';


export function MoviesList ({movies, buttonName, onClick, nominatedMovies, resultList, disableAll}) {
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
      {movies.map((movie) => {
        const{Title, Year, imdbID} = movie;
        const disabled = nominatedIDs.includes(imdbID) && resultList || disableAll;
        return (
          <li className='movie-item' key={imdbID}> 
            {Title} ({Year}) &nbsp; 
            <button 
              onClick = {() => onClick(movie)}
              disabled = {disabled}
              >
                {buttonName}
              </button>
          </li>
        );

      })}
    </ul>
  );
}