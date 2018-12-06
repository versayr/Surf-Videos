import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm:  '',
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(searchTerm) {
    this.setState({searchTerm});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.search(`surf ${this.state.searchTerm}`);
    this.setState({ searchTerm: '' });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="search-bar">
        <input
          value={this.state.searchTerm}
          onChange={event => this.handleInputChange(event.target.value)} 
        />
        <button type="submit">
          Go!
        </button>
      </form>
    );
  }
}

export default SearchBar;
