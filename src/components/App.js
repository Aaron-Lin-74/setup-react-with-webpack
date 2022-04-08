import React, { Component } from 'react';
import { camelCase } from 'lodash';
import './App.css';
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: props.tab,
    };
  }
  handleClick() {
    this.setState({ tab: 'React 18!' });
  }
  render() {
    return (
      <div>
        <h1>Webpack + React setup</h1>
        <h2>{camelCase('Aaron Lin')}</h2>
        <h3>
          Setting up react app using Webpack and Babel without using create
          react app!
        </h3>
        <h4>We are at {this.state.tab}</h4>
        <button className='btn btn-primary' onClick={() => this.handleClick()}>
          Click me
        </button>
        <img src='/images/logo192.png' />
      </div>
    );
  }
}

export default App;
