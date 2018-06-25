import React, { Component } from 'react';

class Seeker extends Component {
  constructor() {
    super();
    this.state = {
      itemType: '',
      uploadFileURL: '',
      description: '',
      address: '',
      zipCode: '',
      missingDate: '',
    };
  }

  handleInputChange = (e)=> {
    this.setState({
      [e.target.name]: e.target.value
    })
  };

  render() {
    return (
      <div>
        Which type the missing item belongs to:
        {/* creates a dropdown menu of missing items' types to choose from */}
        <select className='dropdownList' name='itemType' onChange={this.handleInputChange}>
              <option value='' selected disabled>Select A Item Type</option>
              <option value='Human Being'>Human Being</option>
              <option value='Pets'>Pets</option>
              <option value='Cards'>Cards</option>
              <option value='Clothes'>Clothes</option>
              <option value='Keys Wallet'>Keys Wallet</option>
              <option value='Toys'>Toys</option>
              <option value='Others'>Others</option>
          </select>
          <div>
            Please Choose Images or Videos for missing item:
            <input type='file' name='uploadFileURL' value={this.state.uploadFileURL} onChange={this.handleInputChange} placeholder='Enter Image/Video'></input>
          </div>
          <div>
            Please Add Description for the missing item:
            <input type='text' name='description' value={this.state.description} onChange={this.handleInputChange} placeholder='Enter Description for Missing Item'></input>
          </div>
          <div>Where did you last time see the missing item?</div>
          <div>
            Address:
            <input type='text' name='address' value={this.state.address} onChange={this.handleInputChange} placeholder='Enter the Address'></input>
          </div>
          <div>
            Zipcode:
            <input type='number' name='zipCode' value={this.state.zipCode} onChange={this.handleInputChange} placeholder='Enter Zip Code'></input>
          </div>
          <div>
            Missing Date:
            <input type='date' name='missingDate' value={this.state.missingDate} onChange={this.handleInputChange} placeholder='Enter Missing Date'></input>
          </div>
          <button>Submit</button>
      </div>
    );
  }
}

export default Seeker;