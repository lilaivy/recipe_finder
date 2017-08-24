import React, { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component {
  render() {
    let { updatebox} = this.props;
    return (
      <form onChange={e => {
        e.preventDefault();
        updatebox(e.target.value);
      }}>
        <input type="text" placeholder="Search Recipes or Ingredients"/>
      </form>
    );
  }
}

export default SearchBar;