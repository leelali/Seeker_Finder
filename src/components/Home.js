import React, { Component } from 'react';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      userRole: '',
      zipCode: null,
    };
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    const userRoles = ['Seeker', 'Finder'];
    return (
      <div>
        <div>
          {/* creates a dropdown menu of Seeker/Finder to choose from */}
          <select className='dropdownList' name='userRole' onChange={this.handleInputChange}>
              <option value='' selected disabled>Select A User Role</option>
              <option value='Seeker'>Seeker</option>
              <option value='Finder'>Finder</option>
          </select>
        </div>
        <div>
          <input type='number' name='zipCode' value={this.state.zipCode} onChange={this.handleInputChange} placeholder='Enter Zip Code'></input>
        </div>
        <div>
          <button>Start</button>
        </div>
        
        
        
      </div>
    );
  }
}

export default Home;