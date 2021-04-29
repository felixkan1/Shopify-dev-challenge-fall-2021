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
  }

  //methods to add nomination, remove nomination, handle search Change
  handleSearchChange(searchTerm) {
    this.setState({searchTerm});
  }
  
  render(){
    const {searchTerm} = this.state;


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
              />
              <Nominations/>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
