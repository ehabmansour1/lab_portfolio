import React from "react";

class Heading extends React.Component {
  constructor(props) {
    super();
    console.log(props);
  }

  render() {
    return (
      <h1
        className="heading"
        style={{ color: this.props.color, fontSize: this.props.size }}
      >
        {this.props.text}
      </h1>
    );
  }
}
export default Heading;
