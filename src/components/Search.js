import React from 'react';



export class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: ''
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(evt) {
    //replace(/\s/g, '+'); move to results
    const searchTerm = evt.target.value;
    this.setState({searchTerm: searchTerm});
  }
  render(){
    return(
      <div className='search-container'>
        <h3>Movie Title</h3>
        <input
          type='text'
          id='searchTerm'
          className='search-bar'
          placeholder='Search for a Movie'
          autoComplete='off'
          value={this.state.searchTerm}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}