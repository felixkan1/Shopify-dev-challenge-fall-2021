import React, {Component} from 'react'
import './App.css';
import {Search} from './components/Search';
import {Result} from './components/Results';
import {Nominations} from './components/Nominations';
import {ThemeProvider} from './context/theme'

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      searchTerm: '',
      nominatedMovies: [],
      displayBanner: false,
      theme: 'light',
    }

    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleAddNomination = this.handleAddNomination.bind(this);
    this.handleRemoveNominatio = this.handleRemoveNomination.bind(this);
    this.toggleTheme = this.toggleTheme.bind(this);

  }
  

  componentDidUpdate(prevProps, prevState) {
    if(this.state.nominatedMovies.length !== prevState.nominatedMovies.length) {
      if(this.state.nominatedMovies.length === 5) {
        this.setState({
          displayBanner: true,
          theme: 'dark'
        });
      }else {
        this.setState({
          displayBanner: false,
          theme: 'light'
        });
      };
    };
  };


  toggleTheme() {
    this.setState(({theme}) => ({
      theme: theme === 'light' ? 'dark' : 'light'
    }));
  };

  handleSearchChange(searchTerm) {
    this.setState({searchTerm});
  };

  handleAddNomination(movie) {
    this.setState({
      nominatedMovies: [...this.state.nominatedMovies, movie]
    });
  };
  handleRemoveNomination(remove) {
    if(this.state.nominatedMovies) {
      this.setState({
        nominatedMovies: this.state.nominatedMovies.filter((nominations) => {
          return remove !== nominations;
        })
      });
    };
  };
  
  
  render(){
    const {searchTerm, nominatedMovies, displayBanner, theme} = this.state;


    return (
      <ThemeProvider value={this.state.theme}>
        <div className={this.state.theme}>
            <div className="container">
              <div className='header'>
                <h1>The Shoppies — </h1>
  
              </div>
                <Search
                  searchTerm={searchTerm} 
                  onSearchChange={this.handleSearchChange}
                  displayBanner={displayBanner}
                  nominatedMovies={nominatedMovies}
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
              
            </div>
          </div>
      </ThemeProvider>
   
    );
  }
}
