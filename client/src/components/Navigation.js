import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navigation extends Component {

  render() {
    return (
      <div>
        <Link key={1} to=''>Home</Link>
        <Link key={2} to='/seeker'>Seeker</Link>
        <Link key={3} to='/finder'>Finder</Link>
        <Link key={4} to='/signup'>Sign Up</Link>
        <Link key={5} to='/signin'>Sign In</Link>
        <Link key={6} to='/signout'>Sign Out</Link>
        <Link key={7} to='/account'>Account</Link>
      </div>
    );
  }
}

export default Navigation;