import React, {Component} from 'react'
import {getMovies} from '../utils/api'


export class Result extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: null,
      error: null
    }
  }


  componentDidMount(){
    getMovies('boogie')
      .then((m) => {
        this.setState({
          movies:m
        })
      })
  }


  render() {
    const {movies} = this.state;

    return (
      <React.Fragment>
        <h2>Result</h2>
        <h3></h3>
      </React.Fragment>
    )
  }
}
//{movies && movies.Search[0].title}