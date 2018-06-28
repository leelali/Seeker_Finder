import React, { Component } from 'react';

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
    })
  };

  render() {
    return (
      <form>
        {/* creates a dropdown menu of Post Types to choose from */}
        <div>
          <label>Which type does the Post belong to:</label>
          <select className='dropdownList' name='postType' onChange={this.handleInputChange}>
              <option value='' selected disabled>Select A Post Type</option>
              <option value='Seeker'>Seeker</option>
              <option value='Finder'>Finder</option>
          </select>
        </div>

        {/* creates a dropdown menu of missing items' types to choose from */}
        <div>
          <label>Which type does the Target belong to:</label>
          <select className='dropdownList' name='targetType' onChange={this.handleInputChange}>
              <option value='' selected disabled>Select A Item Type</option>
              <option value='Human Being'>Human Being</option>
              <option value='Pets'>Pets</option>
              <option value='Cards'>Cards</option>
              <option value='Clothes'>Clothes</option>
              <option value='Keys Wallet'>Keys Wallet</option>
              <option value='Toys'>Toys</option>
              <option value='Others'>Others</option>
          </select>
        </div>
        
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