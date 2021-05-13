import React, { Component } from "react";
import Card from "./../card/card";
import "./card-list.scss";

class CardList extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div className="card-list">
        {this.props.monsters.map((monster) => (
          <Card monster={monster} key={monster.id} />
        ))}
      </div>
    );
  }
}

export default CardList;
