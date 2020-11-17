import React, { Component } from "react";
import "../search_box.css";

class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      result: {},
      loading: false,
      message: "",
    };
  }

  handleonchange = (e) => {
    const query = e.target.value;
    this.setState({ query });
  };

  render() {
    return (
      <div className="search-container">
        <label className="search-label">
          <input
            type="text"
            // value=""
            placeholder="Search ..."
            onChange={this.handleonchange}
          />
          <i class="fas fa-search search-icon" />
        </label>
        <p>my search box here</p>
      </div>
    );
  }
}

export default SearchBox;
