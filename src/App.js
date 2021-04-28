import React, {Component} from 'react'
import './App.css';
import {Search} from './components/Search';
import {Result} from './components/Results';
import {Nominations} from './components/Nominations'

export default class App extends Component {
  
  
  render(){
    return (
      <React.Fragment>
        <div className="app">
          <div className="container">
            <h1>The Shoppies</h1>
            <Search/>
            <div className="flex-row">
              <Result/>
              <Nominations/>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
