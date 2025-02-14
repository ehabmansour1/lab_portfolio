import React from "react";

class Progress extends React.Component {
  constructor(props) {
    super();
    console.log(props);
  }

  render() {
    return (
      <div className="progress-bar-container">
        <span className="skill-name">{this.props.skill}</span>
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${this.props.percentage}%` }}
          ></div>
        </div>
      </div>
    );
  }
}
export default Progress;
