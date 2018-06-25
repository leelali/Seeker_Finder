import React, { Component } from 'react';

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      confirmPW: '',
    };
  }

  handleInputChange = (e)=> {
    this.setState({
      [e.target.name]: e.target.value
    })
  };

  handleSubmit = e => {
    e.preventDefault();
    
    if (this.state.username===''||this.state.password===''||this.state.confirmPW==='') {
      alert('Please enter all required fields');
      return;
    }
 
    if (this.state.password !== this.state.confirmPW) {
      alert('Password and confirmed Password do not match!!! Please enter one more time.');
    } else {
      alert('Sign up successfully');
    }

    this.setState({
      username: '',
      password: '',
      confirmPW: '',
    }); 
  }

  render() {
    return (
      <div className='component'>
        <div className='title'>Sign Up</div>
        <form onSubmit={this.handleSubmit}>
          <div><input type="text" name='username' value={this.state.username} onChange={this.handleInputChange} placeholder="Email Address" required/></div>
          <div><input type="password" name='password' value={this.state.password} onChange={this.handleInputChange} placeholder="Password" required/></div> 
          <div><input type="password" name='confirmPW' value={this.state.confirmPW} onChange={this.handleInputChange} placeholder="Re-enter Password" required/></div>
          <button onClick={this.handleSubmit}>Submit</button> 
        </form>
      </div>
    );
  }
}

export default Signup;