import React from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      monsters: [],
      searchValue: ''
    };
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => this.setState({monsters: response.data}));
  }

  handleChange = e => {
    this.setState({searchValue: e.target.value});
  };

  render() {
    const { monsters, searchValue } = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchValue.toLowerCase()));

    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox
          placeholder='Search monster'
          handleChange={(e) => this.handleChange(e)}
        />
        <CardList monster={filteredMonsters}/>
      </div>
    );
  };
}

export default App;
