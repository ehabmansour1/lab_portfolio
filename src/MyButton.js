import React from "react";

class MyButton extends React.Component {
  constructor(props) {
    super();
    console.log(props);
  }

  render() {
    return (
      <button className="MyButton" style={{ colot: this.props.color }}>
        {this.props.text}
      </button>
    );
  }
}
export default MyButton;
