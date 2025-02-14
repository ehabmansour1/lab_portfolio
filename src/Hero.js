import React from "react";
import MyButton from "./MyButton";

class Hero extends React.Component {
  render() {
    return (
      <div className="hero">
        <h1 className="mainHeading"> Ehab Mansour</h1>
        <h3 style={{ color: "white" }}> FrontEnd Developer</h3>
        <MyButton text="Contact Me"></MyButton>
      </div>
    );
  }
}
export default Hero;
