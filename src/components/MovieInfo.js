import React from 'react';
import PropTypes from 'prop-types';
import {Hover} from './Hover'

//put CSS styling here
const styles = {
  container: {
    position: 'relative',
    display: 'flex',
    marginLeft: '30px'
  },
  movieInfo: {
    position: 'absolute',
    width: '150px',
    height: '220px',
    borderRadius: '10px',
    backgroundColor: 'hsla(0, 0%, 20%, 0.5)',
    padding:'7px',
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
  return(
    <Hover resultList={resultList}>
      {(hovering) => (
        <div style={styles.container}>
          {(hovering && resultList) && 
          <div style={styles.movieInfo} className='hovering'>
            {Poster !== 'N/A' && <img style={styles.movieImage} src={Poster}></img>}
            {Poster === 'N/A' && <div><strong>Image Unavailable</strong></div>}
          </div>
          }
          {children}
        </div>
      )}
    </Hover>
  )
}