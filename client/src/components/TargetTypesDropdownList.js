import React, { Component } from 'react';

class TargetTypesDropdownList extends Component {
  constructor(props) {
    super(props);
    this.state = {value: 'Select A Target Type'};
  }

  handleEventChange = (event) => {
    this.setState({ value: event.target.value});
    this.props.handleChange(event);
  }

  render() {
    return (
      <div>
          <label>Which type does the Target belong to:</label>
          <select className='dropdownList' name='targetType' value={this.state.value} onChange={this.handleEventChange}>
            <option value='Select A Target Type' disabled hidden>Select A Target Type</option>
            <option value='Human Being'>Human Being</option>
            <option value='Pets'>Pets</option>
            <option value='Cards'>Cards</option>
            <option value='Clothes'>Clothes</option>
            <option value='Keys Wallet'>Keys Wallet</option>
            <option value='Toys'>Toys</option>
            <option value='Others'>Others</option>
          </select>
        </div>
    );
  }
}

export default TargetTypesDropdownList;