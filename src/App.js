import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Navigation from './components/Navigation';
import Home from './components/Home';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Signout from './components/Signout';
import Seeker from './components/Seeker';
import Finder from './components/Finder';
import Account from './components/Account';


import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navigation />
        <Route path='/' exact comopnent={Home} />
        <Route path='/signup' comopnent={Signup} />                 
        <Route path='/signin' comopnent={Signin} />
        <Route path='/signout' comopnent={Signout} />
        <Route path='/seeker' comopnent={Seeker} />
        <Route path='/finder' comopnent={Finder} />
        <Route path='/account' comopnent={Account} />
      </BrowserRouter>
    );
  }
}

export default App;
