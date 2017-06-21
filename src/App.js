import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor() {
      super();
      const appUrl = 'http://naobcyouth.org/wp-json/wp/v2'; // Wordpress installation url

      this.pagesEndPoint = `${appUrl}/pages`; // Endpoint for getting Wordpress Pages
      this.postsEndPoint = `${appUrl}/posts`; // Endpoint for getting Wordpress Posts
      this.getPosts();
  }

  getPosts() {
    axios.get(this.postsEndPoint)
        .then((response) => {
            console.log(response.data);
            this.setState({
                posts: response.data
            });
        })
        .catch((error) => console.error(error))
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <ul>
            {this.state.posts.map((post) =>
                <li>
                    <h1>{post.title}</h1>
                    <p>{post.content.rendered}</p>
                </li>
            )}
        </ul>
      </div>
    );
  }
}

export default App;
