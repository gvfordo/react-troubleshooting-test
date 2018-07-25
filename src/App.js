import React, { Component } from 'react';
import './App.css';
import _ from 'underscore';

class App extends Component {

  state = {
    posts: [],
    usersById: {},
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/pots')
      .then(posts => {

        this.setState({ posts })
      }));

    fetch('https://jsonplaceholder.typicode.com/users')
      .then(users => {
        this.setState({ usersById: user })
      }));
  };


  render() {

    return (
      <div className="App">
        <header className="App-header">
          <div className="App-header-content">
            <h1 className="App-title">Debugging App</h1>
          </div>
        </header>
        <section className="posts">
          { this.state.posts.map(post => {
            return (
              <article style={{ margin: '10px 0', padding: 10, border: '1px solid #ccc'}}>
                <p style={{ textDecoration: 'underline', fontWeight: 'bold' }}>{ post.title }</p>
                <p>{ post.userId }</p>
                <p>{ post.body }</p>
              </article>
            )
          })}
        </section>
      </div>
    );
  }
}

export default App;
