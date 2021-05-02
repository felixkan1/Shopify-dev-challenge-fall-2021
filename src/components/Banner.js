import React from 'react';
// import {FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon, RedditShareButton, RedditIcon} from 'react-share';


export function Banner ({nominatedMovies}) {
  console.log(nominatedMovies);
  return (
    <React.Fragment>
      <h1>You have nominated 5 movies!</h1>
      <div className='nominations-banner'>
        <ul className='flex-row'>
          {nominatedMovies.map((movie, index) => {
            return(
              <div key={index}>
                <img alt='Image Unavailable' src={movie.Poster}></img>
              </div>
            )
          })}
        </ul>

      </div>

    </React.Fragment>
  )
}