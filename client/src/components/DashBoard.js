import React, { Component } from 'react';

import PostForm from './PostForm';

class DashBoard extends Component {
  render() {
    return (
      <div>
        <div>Welcome to DashBoard</div>
        <PostForm />
      </div>
      
    );
  }
}

export default DashBoard;