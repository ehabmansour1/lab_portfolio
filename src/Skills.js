import React from "react";
import Heading from "./Heading";
import Paragraph from "./Paragraph";
import Progress from "./Progress";

class Skills extends React.Component {
  render() {
    return (
      <div className="skills ">
        <div className="container">
          <Heading text="Skills" color="white" />
          <Paragraph text="I'm Ehab Mansour, a dedicated React Frontend Developer with a strong foundation in both computer software and hardware. My journey in web development has equipped me with a diverse skill set, and I'm constantly expanding my expertise with the goal of becoming a proficient Full Stack Web Developer" />

          <div className="row py-5">
            <div className="focus-container col-md-6">
              <h3 className="focus-title">MY FOCUS</h3>
              <hr className="focus-divider" />
              <ul className="focus-list">
                <li>UI/UX Design</li>
                <li>Responsive Design</li>
                <li>Web Design</li>
                <li>Mobile App Design</li>
              </ul>
            </div>
            <div className="progresses col-md-6">
              <Progress skill="Html" percentage="40" />
              <Progress skill="Css" percentage="70" />
              <Progress skill="React" percentage="60" />
              <Progress skill="Bootstrap" percentage="80" />
              <Progress skill="Angular" percentage="90" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Skills;
