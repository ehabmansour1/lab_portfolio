import React from "react";

class Paragraph extends React.Component {
  constructor(props) {
    super();
    console.log(props);
  }

  render() {
    return <p className="paragraph">{this.props.text}</p>;
  }
}
export default Paragraph;
