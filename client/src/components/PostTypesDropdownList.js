import React, { Component } from 'react';

class PostTypesDropdownList extends Component {
  constructor(props) {
    super(props);
    this.state = {value: 'Select A Post Type'};
  }

  handleEventChange = (event) => {
    this.setState({ value: event.target.value});
    this.props.handleChange(event);
  }

  render() {
    return (
      <div>
        <label>Which type does the Post belong to:</label>
        <select className='dropdownList' name='postType' value={this.state.value} onChange={this.handleEventChange}>
          <option value='Select A Post Type' disabled hidden>Select A Post Type</option>
          <option value='Seeker'>Seeker</option>
          <option value='Finder'>Finder</option>
        </select>
      </div>
    );
  }
}

export default PostTypesDropdownList;