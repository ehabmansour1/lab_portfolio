import React from "react";
import Heading from "./Heading";
import Paragraph from "./Paragraph";

class About extends React.Component {
  render() {
    return (
      <div className="about">
        <div className="container ">
          <div className="row">
            <div className="col-md-4">
              <Heading text="About Me" color="black" />
            </div>
            <div className="col-md-8">
              <Paragraph text="   I'm Ehab Mansour, a dedicated React Frontend Developer with a strong foundation in both computer software and hardware. My journey in web development has equipped me with a diverse skill set, and I'm constantly expanding my expertise with the goal of becoming a proficient Full Stack Web Developer. With over 35 projects completed, I’m passionate about creating dynamic and responsive web applications that provide seamless user experiences." />
              <a
                download
                href="Ehab Mansour Mohamed cv.pdf"
                className="download-button"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default About;
