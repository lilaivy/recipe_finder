import React, { Component } from 'react';
import './App.css';
import SearchBar from './SearchBar';
import api from './api/api';

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchQuery: '',
      searchList: [],
      recipe: null,
    }
    this.updatebox = this.updatebox.bind(this);
  }

  updatebox(value) {
    this.setState({searchQuery: value})
    let {searchQuery} = this.state;
    api.getLists(value)
    .then(res => {
      this.setState({searchList: res});
    })
    .catch(err => console.log(err));
    }
  }

  render() {
    return (
      <div className="App">
        <SearchBar updatebox={this.updatebox} value={this.state.searchQuery}/>
        <div className="SearchContainer">
        {this.state.searchList.map((recipeItem, i) => {
          return(
            <div key={i} className="RecipeItemContainer" data-recipe={recipeItem.id} onCLick={ e => {
              
              e.preventDefault();
              this.selectRecipe(e.target.getAttribute('data-recipe'));
              }}>
               <img src={`${recipeItem.thumbnail}`} className="RecipePic" data-recipe={recipeItem.id}/>
                <h4 className="RecipeTitle" data-recipe={recipeItem.id}>{recipeItem.title}</h4>
                <h4 className="Ingredients" data-recipe={recipeItem.id}>{recipeItem.ingredients}</h4>
              </div>
          )
        })}
          <h2>Welcome to Purepoint Recipe Finder</h2>
        </div>
        <p className="App-intro">
          To get started, enter your desired recipe:
        </p>
      </div>
    );
  }


export default App;
