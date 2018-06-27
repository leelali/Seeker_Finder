import React, { Component } from 'react';

class Finder extends Component {
  constructor() {
    super();
    this.state = {
      itemType: '',
      uploadFileURL: '',
      description: '',
      address: '',
      zipCode: '',
      foundDate: '',
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
        {/* creates a dropdown menu of found items' types to choose from */}
        <div>
          <label>Which type does the item belong to:</label>
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
        </div>

        <div>
          <label>Please Choose Images or Videos for this item:</label>
          <input type='file' name='uploadFileURL' value={this.state.uploadFileURL} onChange={this.handleInputChange} placeholder='Enter Image/Video'></input>
        </div>

        <div>
          <label>Please Add Description for the item:</label>
          <input type='text' name='description' value={this.state.description} onChange={this.handleInputChange} placeholder='Enter Description for Found Item'></input>
        </div>

        <div>Where did you find this item?</div>

        <div>
          <label>Address:</label>
          <input type='text' name='address' value={this.state.address} onChange={this.handleInputChange} placeholder='Enter the Address'></input>
        </div>

        <div>
          <label>Zipcode:</label>
          <input type='number' name='zipCode' value={this.state.zipCode} onChange={this.handleInputChange} placeholder='Enter Zip Code'></input>
        </div>

        <div>
          <label>Missing Date:</label>
          <input type='date' name='foundDate' value={this.state.foundDate} onChange={this.handleInputChange} placeholder='Enter Found Date'></input>
        </div>
        
        <button>Submit</button>
      </form>
    );
  }
}

export default Finder;