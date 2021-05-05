import React from 'react';
import PropTypes from 'prop-types';
import {Hover} from './Hover'

//put CSS styling here
const styles = {
  container: {
    position: 'relative',
    display: 'flex',
    marginLeft: '15px'
  },
  movieInfo: {
    position: 'absolute',
    width: '150px',
    height: '220px',
    borderRadius: '10px',
    boxShadow: '10px 5px 5px gray',
    color:'black',
    textAlign: 'center',
    fontSize: '14px',
    top: '-20px',
    left: '130%',
    marginLeft: '-80px',

  },
  movieImage: {
    width: '150px',
    height: '220px'
  }
}


export function MovieInfo ({children, resultList, movie}) { 
  const {Poster} = movie;
  let mql = window.matchMedia('(min-width: 768px)');
  return(
    <Hover resultList={resultList}>
      {(hovering) => (
        <div style={styles.container}>
          {(hovering && resultList && mql.matches) && 
          <div style={styles.movieInfo} className='hovering'>
            {Poster !== 'N/A' && <img style={styles.movieImage} src={Poster} alt=''></img>}
            {Poster === 'N/A' && <div><strong>Image Unavailable</strong></div>}
          </div>
          }
          {children}
        </div>
      )}
    </Hover>
  )
}