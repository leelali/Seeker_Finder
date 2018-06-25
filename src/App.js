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
        <div>
          <Navigation />
          <Route path='/' exact component={Home} />
          <Route path='/signup' component={Signup} />                 
          <Route path='/signin' component={Signin} />
          <Route path='/signout' component={Signout} />
          <Route path='/seeker' component={Seeker} />
          <Route path='/finder' component={Finder} />
          <Route path='/account' component={Account} /> 
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
