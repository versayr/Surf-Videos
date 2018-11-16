import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm:  '',
    }
  }

  handleInputChange(searchTerm) {
    this.setState({searchTerm});
  }

  render() {
    return (
      <div className="search-bar">
        <input
          value={this.state.searchTerm}
          onChange={event => this.handleInputChange(event.target.value)} 
        />
        <button onClick={() => this.props.search(this.state.searchTerm)}>
          Go!
        </button>
      </div>
    );
  }
}

export default SearchBar;
