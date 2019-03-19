import React, { Component } from 'react';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      postType: '',
      image: false,
      url: '',
    };
  }

  handleBtnClick = event => {
    this.setState({
      postType: event.target.value
    }); 
  }

  handleImagesUpload = event => {
    if (event.target.files[0]) {
      this.setState({ image: true, url: event.target.files[0].name });
    }  
  }

  render() {
    return (
      <div>
        <div className="postType">
          <button value="Seeker" onClick={this.handleBtnClick}>Seeker</button>
          <button value="Finder" onClick={this.handleBtnClick}>Finder</button>
        </div>

        <form className="postInfo">
          {/* upload images up to 3x3, these images could be resize */}
          <input type="file" name="images" onChange={this.handleImagesUpload} />

          {/* synopsis: few words about this item, like keys, furniture */}
          <label htmlFor="keywords">Keywords</label>
          <input type="text" name="keywords" id="keywords" />

          {/* description: more words about this item */}
          <label htmlFor="description">Description</label>
          <textarea id="description" rows="4" cols="5"></textarea>

          {/* location: share location or type in with zip code */}
          <label htmlFor="location">Location</label>
          <input type="text" name="location" id="location" />

          {/* button: submit to database */}
          <input type="submit" value="Upload Info"></input>
        </form>

        {/* <img src={this.state.images[0].name} alt="photos of kitten" /> */}
      </div>
      
    );
  }
}

export default Home;