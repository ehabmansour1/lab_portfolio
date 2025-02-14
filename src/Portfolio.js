import React from "react";
import Heading from "./Heading";
import Card from "./Card";

class Portfolio extends React.Component {
  render() {
    return (
      <div className="portfolio">
        <div className="container ">
          <Heading text="Portfolio" color="black" />
          <div className="cards row ">
            <Card text="WEB DESIGN" />
            <Card text="MOBILE DESIGN" color="#404040" />
            <Card text="LOGO DESIGN" />
            <Card text="WEB APPLICATION DEVELOPMENT" color="#404040" />
            <Card text="MOBILE APPLICATION DEVELOPMENT" />
            <Card text="PWA DEVELOPMENT" color="#404040" />
          </div>
        </div>
      </div>
    );
  }
}
export default Portfolio;
