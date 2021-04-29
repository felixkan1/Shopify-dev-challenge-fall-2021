import React from 'react';



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
    return(
      //use field set?
      <div className='search-container'>
        <h3>Movie Title</h3>
        <input
          type='text'
          id='searchTerm'
          className='search-bar'
          placeholder='Search for a Movie'
          autoComplete='off'
          value={this.props.searchTerm}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}