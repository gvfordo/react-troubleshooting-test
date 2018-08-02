import React, { Component } from 'react';
import './App.css';
import _ from 'underscore';

class App extends Component {

  state = {
    posts: [],
    usersById: {},
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(posts => this.setState({ posts }));

    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(users => this.setState({ usersById: _.indexBy(users, 'id') }));
  };


  render() {
    const { usersById, posts } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <div className="App-header-content">
            <h1 className="App-title">Debugging App</h1>
          </div>
        </header>
        <section className="posts">
          { posts.map(post => {
            return (
              <article key={`post-${post.id}`} style={{ margin: '10px 0', padding: 10, border: '1px solid #ccc'}}>
                <p style={{ textDecoration: 'underline', fontWeight: 'bold' }}>{ post.title }</p>
                <p>{ usersById[ post.userId ].username || 'Unknown' }</p>
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
