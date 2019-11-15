import React, { Component } from 'react';


import get from 'lodash/get';

import 'styles/App.css';

interface Props {};

interface State {
  images: unknown[];
};

class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      images: []
    }
  }

  componentDidMount() {
    new Promise((resolve, reject) => {
      fetch(
        'https://api.giphy.com/v1/gifs/trending?api_key=5DYyxYScARZshsn38FrpiLbFGVFLHcrb&limit=1',
        {
          method: 'GET',
          headers: {'Content-Type': 'application/json'}
        }
      )
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          reject(`Request rejected with status ${res.status}`);
        }
        
      }) 
      .then(data => {
        this.setState({images: data.data})
      })
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <a className="App-link" href="https://github.com/sanctuarycomputer">Spiritfish: react-typescript</a>
          {this.state.images.map((image, i) => (
            <img key={get(image, 'url', i)} src={get(image, 'images.downsized_large.url', '')} alt={`${get(image, 'title', '')}`} />
          ))}
        </header>
      </div>
    );
  }
}

export default App;
