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

  }

  //dont use componenet did mount
  componentDidUpdate(prevProps){
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
              searchError: "Invalid Search",
              searchResult: null
            })
          }
        });
    }

  }


  render() {
    const {searchResult, searchError} = this.state;
    const searchTerm = this.props.searchTerm;

    return (
      <div className='result-container'>
        <h2>Results
          {searchResult && <span> for "{searchTerm}"</span>}
        </h2>

        {/* Put loading screen here */}

        {searchError && <p className='center-text'>{searchError}</p>}

        {searchResult && <MoviesList 
                            movies = {searchResult}
                            buttonName = "Nominate"
                          />
        }
      </div>

    )
  }
}
