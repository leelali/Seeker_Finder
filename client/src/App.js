import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Navigation from './components/Navigation';
import Home from './components/Home';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Signout from './components/Signout';
import DashBoard from './components/DashBoard';


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
          <Route path='/dashboard' component={DashBoard} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
