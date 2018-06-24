import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navigation />
        <Route path='/' exact comopnent={} />
        <Route path='/signup' comopnent={} />
        <Route path='/signin' comopnent={} />
        <Route path='/signout' comopnent={} />
        <Route path='/seeker' comopnent={} />
        <Route path='/finder' comopnent={} />
        <Route path='/account' comopnent={} />
      </BrowserRouter>
    );
  }
}

export default App;
