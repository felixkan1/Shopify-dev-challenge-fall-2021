import React, {Component} from 'react'
import {getMovies} from '../utils/api'


export class Result extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searcTerm: '8+mile',
      movies: null,
      error: null
    }
  }

  componentDidMount(){
    getMovies(this.state.searcTerm)
      .then((movies) => {
        if(movies.Response === 'True'){
          this.setState({
            error: !movies.Response,
            movies: movies.Search
          });
        }
      });
  }


  render() {
    const {movies, error, searcTerm} = this.state;


    return (
  
        <div className='result-container'>
          <h2>Results
            {movies && <span> for "{searcTerm}"</span>}
          </h2>

          {/* Put loading screen hear */}

          {error && <p className='center-text'>Error loading</p>}

          {movies && <MoviesList movies = {movies}/>}
        </div>

    )
  }
}

//export this function?
function MoviesList ({movies}) {
  return(
    <ul className='movie-list'>
      {movies.map((movie, index) => {
        const{Title, Year} = movie;

        return (
          <li className='movie-item' key={ Title }> 
            { Title } ({ Year }) &nbsp; 
            <button>Nominate</button>
          </li>
        );

      })}
    </ul>
  );
}