import React, { Component } from 'react';
import PostTypesDropdownList from './PostTypesDropdownList';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      postType: '',
      zipCode: '',
    };
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    return (
      <form>
        {/* Dropdown List for Post type */}
        <PostTypesDropdownList handleChange={this.handleInputChange}/>

        <div>
          <input type='text' name='zipCode' value={this.state.zipCode} onChange={this.handleInputChange} placeholder='Enter Zip Code'></input>
        </div>
        
        <div>
          <button>Start</button>
        </div>  
      </form>
    );
  }
}

export default Home;