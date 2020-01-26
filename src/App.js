import React, {Component} from 'react';
import CardList from './components/CardList/CardList';

import './App.css';

class App extends Component  {
  constructor() {
    super()
    this.state = {
      monsters: [],
      searchText: ''
    }
  }

  handleChange = (event) => {
    this.setState({searchText: event.target.value})
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(monsters => this.setState({monsters: monsters}))
  }

  render() {
    const {monsters, searchText} = this.state
    const filteredMonsters = monsters.filter( monster => 
      monster.name.toLowerCase().includes(searchText.toLowerCase()))
    return (
      <div className="app">
        <h1>Moster Finder</h1>
        <input type="search" className="input-search" 
          placeholder = "search monster" onChange={this.handleChange} />
        <CardList monsters={filteredMonsters} />
      </div>
    )
  }
}

export default App;
