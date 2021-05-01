import React from 'react';
import PropTypes from 'prop-types';
import {Hover} from './Hover'

//put CSS styling here
const styles = {
  container: {
    position: 'relative',
    display: 'flex',
 
  },
  movieInfo: {
    position: 'absolute',
    width: '84px',
    height: '130px',
    borderRadius: '10px',
    backgroundColor: 'hsla(0, 0%, 20%, 0.5)',
    padding:'7px',
    color:'black',
    textAlign: 'center',
    fontSize: '14px',
    top: '10px',
    left: '90%',
    marginLeft: '-80px',

  },
  movieImage: {
    width: '84px',
    height: '130px'
  }
}


export function MovieInfo ({children, resultList, movie}) { 
  const {Poster} = movie;
  return(
    <Hover>
      {(hovering) => (
        <div style={styles.container}>
          {(hovering && resultList) && 
          <div style={styles.movieInfo}>
            {Poster !== 'N/A' && <img style={styles.movieImage} src={Poster}></img>}
            {Poster === 'N/A' && <div>Image Unavailable</div>}
          </div>
          }
          {children}
        </div>
      )}
    </Hover>
  )
}