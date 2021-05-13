import React, { Component } from "react";
import "./search-box.scss";

class SearchBox extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <input
        className="search"
        type="search"
        placeholder={this.props.placeholder}
        onChange={this.props.handleChange}
      ></input>
    );
  }
}

export default SearchBox;
