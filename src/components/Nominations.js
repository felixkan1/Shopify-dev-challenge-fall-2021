import React, {Component} from 'react';
import {MoviesList} from './MovieList';


export class Nominations extends Component {
  constructor(props) {
    super(props);
    

    this.handleClick = this.handleClick.bind(this);
  }

 
  
  handleClick(movie) {
    this.props.onClick(movie);
  };

  render() {
    const {nominatedMovies} = this.props;

    return (
      <div className='nominations-container'>
        <h2>Nominations</h2>
        {nominatedMovies.length > 0 && <MoviesList
                                          movies={nominatedMovies}
                                          buttonName= "Remove"
                                          onClick={this.handleClick}
                                        /> 
        }
        {nominatedMovies.length === 0 && <p>&nbsp; You have not nomiated any movies! 🍿</p>}
        
      </div>

      
    )
  }
}