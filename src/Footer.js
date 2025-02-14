import React from "react";
import MyButton from "./MyButton";

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-4 text-center text-md-start">
              <h5 className="mb-3">GET IN TOUCH</h5>
              <p className="mb-1">
                <i className="bi bi-envelope me-2"></i>kr12@hotmail.com
              </p>
              <p>
                <i className="bi bi-telephone me-2"></i>01119216865
              </p>
            </div>

            <div className="col-md-4 text-center">
              <MyButton text='Contact Me'/>
            </div>

            <div className="col-md-4 text-center text-md-end">
              <div className="mb-3">
                <a href="#d" className="text-white me-3">
                  <i className="bi bi-linkedin"></i>
                </a>
                <a href="#d" className="text-white me-3">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="#d" className="text-white">
                  <i className="bi bi-twitter"></i>
                </a>
              </div>
              <p className="mb-0">&copy; 2025 KR</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Footer;
