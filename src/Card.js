import React from "react";

class Card extends React.Component {
  constructor(props) {
    super();
    console.log(props);
  }

  render() {
    return (
      <div
        className="card col-md-4 "
        style={{ backgroundColor: this.props.color }}
      >
        <h3 className="card-text">{this.props.text}</h3>
        <hr className="card-divider" />
      </div>
    );
  }
}
export default Card;
