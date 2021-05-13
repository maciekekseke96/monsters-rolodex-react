import React, { Component } from "react";
import "./card.scss";

class Card extends Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <div className="card-container">
        <img
          src={`https://robohash.org/${this.props.monster.id}?set=set2&size=180x180`}
        ></img>
        <h2>{this.props.monster.name}</h2>
        <p>{this.props.monster.email}</p>
      </div>
    );
  }
}

export default Card;
