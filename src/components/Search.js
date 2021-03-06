import React from 'react';
import {Banner} from './Banner';
import {ThemeConsumer} from '../context/theme';



export class Search extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(evt) {
    const searchTerm = evt.target.value;
    this.props.onSearchChange(searchTerm);
  }
  render(){
    const {displayBanner} = this.props;
    return(
      
      <ThemeConsumer>
        {(value) => (
          <div className='search-container'>
            <h2>Movie Nominations</h2>
            {displayBanner && <Banner nominatedMovies={this.props.nominatedMovies}/>}
            {!displayBanner &&<p>Search for a movie and select your <span className='green'>Top 5</span> for nomination!</p>}
            <div className='search-bar'>
              <img src="https://img.icons8.com/android/24/000000/search.png" alt=""/>
                <input
                  type='text'
                  id='searchTerm'
                  className={`search-bar-${value}`}
                  placeholder='ie. Harry Potter'
                  autoComplete='off'
                  value={this.props.searchTerm}
                  onChange={this.handleChange}
                />
            </div>
          </div>
        )}
      </ThemeConsumer>
    );
  }
}