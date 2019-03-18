import React, { Component } from 'react';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      postType: '',
    };
  }

  handleBtnClick = (e) => {
    this.setState({
      postType: e.target.value
    });
  }

  render() {
    return (
      <div>
        <button value="Seeker" onClick={this.handleBtnClick}>Seeker</button>
        <button value="Finder" onClick={this.handleBtnClick}>Finder</button>
        {this.state.postType}
      </div>
    );
  }
}

export default Home;