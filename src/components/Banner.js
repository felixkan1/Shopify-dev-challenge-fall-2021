import React, {useEffect} from 'react';
// import {FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon, RedditShareButton, RedditIcon} from 'react-share';


export function Banner ({nominatedMovies}) {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, []);
  
  return (
    <React.Fragment>
      <h1>You have nominated 5 movies:</h1>
      <p>Thanks for Participating!</p>
      <div className='nominations-banner'>
        
          {nominatedMovies.map((movie, index) => {
            return(
              <div key={index}>
                <img alt='Image Unavailable' src={movie.Poster}></img>
                <p className='banner-title'><span>{index+1}.</span> {movie.Title} ({movie.Year})</p>
              </div>
            );
          })}

      </div>

    </React.Fragment>
  )
}