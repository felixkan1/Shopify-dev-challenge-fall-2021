import React, {Component} from 'react'
import {getMovies} from '../utils/api'
import {MoviesList} from './MovieList'

export class Result extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchResult: null,
      searchError: null
    }

  this.handleClick = this.handleClick.bind(this)

  }

  //dont use componenet did mount
  componentDidUpdate(prevProps) {
    //if condition may have to change to nominationlist change 
    if(this.props.searchTerm !== prevProps.searchTerm) {
      const searchTerm = this.props.searchTerm.replace(/\s/g, '+');
      getMovies(searchTerm)
        .then((movies) => {
          if(movies.Response === 'True'){
            this.setState({
              searchError: !movies.Response,
              searchResult: movies.Search
            });
          }else {
            this.setState({
              searchError: `No Results for "${this.props.searchTerm}"`,
              searchResult: null
            })
          }
        });
    }

  }
  //nominate button
  handleClick(movie) {
    //const movie = (get button to pas movie obj)
    this.props.onClick(movie);
  }




  render() {
    const {searchResult, searchError} = this.state;
    const {searchTerm, nominatedMovies, disableAll} = this.props;

    return (
      <div className='result-container'>
        <h2>Results
          {searchResult && <span> for "{searchTerm}"</span>}
        </h2>

        {/* Put loading screen here */}

        {searchError && <p className='center-text'>{searchError}</p>}

        {searchResult && <MoviesList 
                            movies = {searchResult}
                            nominatedMovies = {nominatedMovies}
                            buttonName = "Nominate"
                            onClick = {this.handleClick}
                            resultList = {true}
                            disableAll = {disableAll}
                          />
        }
      </div>

    )
  }
}
