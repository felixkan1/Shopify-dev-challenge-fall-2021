import React, {Component} from 'react'
import './App.css';
import {Search} from './components/Search';
import {Result} from './components/Results';
import {Nominations} from './components/Nominations';
import {Banner} from './components/Banner';

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      searchTerm: '',
      nominatedMovies: [],
      displayBanner: false
    }

    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleAddNomination = this.handleAddNomination.bind(this);
    this.handleRemoveNominatio = this.handleRemoveNomination.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if(this.state.nominatedMovies.length !== prevState.nominatedMovies.length) {
      if(this.state.nominatedMovies.length === 5) {
        this.setState({
          displayBanner: true
        })
      }else {
        this.setState({
          displayBanner: false
        })
      }
    }
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

  handleRemoveNomination(remove) {
    if(this.state.nominatedMovies) {
      this.setState({
        nominatedMovies: this.state.nominatedMovies.filter((nominations) => {
          return remove !== nominations;
        })
      });
    }
  }
  
  
  render(){
    const {searchTerm, nominatedMovies, displayBanner} = this.state;


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
                onClick={this.handleAddNomination.bind(this)}
                nominatedMovies={nominatedMovies}
                disableAll={displayBanner}
              />
              <Nominations
                nominatedMovies={nominatedMovies}
                onClick={this.handleRemoveNomination.bind(this)}
              />
            </div>
            {displayBanner && <Banner/>}
          </div>
        </div>
      </React.Fragment>
    );
  }
}
