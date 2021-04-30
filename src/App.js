import React, {Component} from 'react'
import './App.css';
import {Search} from './components/Search';
import {Result} from './components/Results';
import {Nominations} from './components/Nominations'

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      searchTerm: '',
      nominatedMovies: []
    }

    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleAddNomination = this.handleAddNomination.bind(this)
  }

  //methods to add nomination, remove nomination, handle search Change
  handleSearchChange(searchTerm) {
    this.setState({searchTerm});
  }

  handleAddNomination(movie) {
    this.setState({
      nominatedMovies: [...this.state.nominatedMovies, movie]
    })
  }

  handleRemoveNomination(movie) {
    
  }
  
  render(){
    const {searchTerm, nominatedMovies} = this.state;


    return (
      <React.Fragment>
        <div className="app">
          <div className="container">
            <h1>The Shoppies</h1>
              <Search
                searchTerm={searchTerm}
                onSearchChange={this.handleSearchChange}
              />
            <div className="flex-row">
              <Result
                searchTerm={searchTerm}
                onClick={this.handleAddNomination}
                nominatedMovies={nominatedMovies}
              />
              <Nominations
                nominatedMovies={nominatedMovies}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
