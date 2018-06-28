import React, { Component } from 'react';
import PostTypesDropdownList from './PostTypesDropdownList';
import TargetTypesDropdownList from './TargetTypesDropdownList';

class PostForm extends Component {
  constructor() {
    super();
    this.state = {
      postType: '',
      targetType: '',
      description: '',
      zipCode: '',
      userID: '',
    };
  }

  handleInputChange = (e)=> {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <form>
        {/* Dropdown List for Post type */}
        <PostTypesDropdownList handleChange={this.handleInputChange}/>
        
        {/* Dropdown List for Target type */}
        <TargetTypesDropdownList handleChange={this.handleInputChange}/>
        
        {/* <div>
          <label>Please Choose Images or Videos for missing item:</label>
          <input type='file' name='uploadFileURL' value={this.state.uploadFileURL} onChange={this.handleInputChange} placeholder='Enter Image/Video'></input>
        </div> */}

        <div>
          <label>Please Add Description for the Target:</label>
          <input type='text' name='description' value={this.state.description} onChange={this.handleInputChange} placeholder='Enter Description for Missing Item'></input>
        </div>

        <div>Where did you last time see the Target?</div>

        {/* <div>
          <label>Address:</label>
          <input type='text' name='address' value={this.state.address} onChange={this.handleInputChange} placeholder='Enter the Address'></input>
        </div> */}

        <div>
          <label>Zipcode:</label>
          <input type='number' name='zipCode' value={this.state.zipCode} onChange={this.handleInputChange} placeholder='Enter Zip Code'></input>
        </div>

        {/* <div>
          <label>Missing Date:</label>
          <input type='date' name='missingDate' value={this.state.missingDate} onChange={this.handleInputChange} placeholder='Enter Missing Date'></input>
        </div> */}

        <button>Submit</button>
      </form>
    );
  }
}

export default PostForm;