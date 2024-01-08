/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Intro = ({ property1, className, groupClassName, ellipseClassName, rectangleClassName }) => {
  return (
    <div className={`intro ${property1} ${className}`}>
      <div className="overlap-22">
        <div className="frame">
          <div className="animation-part">
            <div className="div" />
            <div className="group">
              {property1 === "default" && (
                <div className="overlap">
                  <button className="contact">
                    <button className="button-child-frame">
                      <div className="overlap-group">
                        <div className="text">Register</div>
                      </div>
                    </button>
                  </button>
                  <p className="learn-professional">
                    Learn Professional Software Development and Medical Coding with <br />
                    <br />
                    Training Center
                  </p>
                  <div className="text-wrapper">RE-HUNT</div>
                </div>
              )}

              {property1 === "variant-2" && (
                <>
                  <div className="frame-2" />
                  <div className={`overlap-group-wrapper ${groupClassName}`}>
                    <div className="overlap-group-2">
                      <p className="p">
                        Learn Professional Software Development and Medical Coding with <br />
                        <br />
                        Training Center
                      </p>
                      <div className="text-wrapper-2">RE-HUNT</div>
                      <div className="button" />
                      <div className="text-2">Register</div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
        <div className="ellipse" />
        {property1 === "variant-2" && (
          <>
            <div className={`ellipse-2 ${ellipseClassName}`} />
            <div className={`rectangle ${rectangleClassName}`} />
            <div className="header">
              <div className="LOGO">
                <div className="overlap-group-3">
                  <img
                    className="img"
                    alt="Logo"
                    src="https://cdn.animaapp.com/projects/6590bd8030c8f2f1d5f46587/releases/659515869858eaa89a1ee5ba/img/logo.png"
                  />
                  <div className="text-wrapper-3">TRAINING CENTER</div>
                </div>
                <div className="text-wrapper-4">RE-HUNT</div>
              </div>
              <div className="navigation-menus">
                <div className="text-wrapper-5">Home</div>
                <div className="text-wrapper-6">About Us</div>
                <div className="text-wrapper-7">Courses</div>
                <div className="text-wrapper-6">Blogs</div>
              </div>
              <div className="div-wrapper">
                <div className="text-3">Contact Us</div>
              </div>
            </div>
          </>
        )}
      </div>
      {property1 === "default" && (
        <div className="header-2">
          <button className="button-child-frame-wrapper">
            <button className="button-child-frame-2">
              <div className="overlap-group-4">
                <div className="button-2" />
                <div className="text-4">Contact Us</div>
              </div>
            </button>
          </button>
          <div className="LOGO">
            <div className="overlap-group-3">
              <img
                className="img"
                alt="Logo"
                src="https://cdn.animaapp.com/projects/6590bd8030c8f2f1d5f46587/releases/659515869858eaa89a1ee5ba/img/logo.png"
              />
              <div className="text-wrapper-3">TRAINING CENTER</div>
            </div>
            <div className="text-wrapper-4">RE-HUNT</div>
          </div>
          <div className="navigation-menus">
            <div className="text-wrapper-8">Home</div>
            <div className="text-wrapper-9">About Us</div>
            <div className="text-wrapper-10">Courses</div>
            <div className="text-wrapper-9">Blogs</div>
          </div>
        </div>
      )}
    </div>
  );
};

Intro.propTypes = {
  property1: PropTypes.oneOf(["variant-2", "default"]),
};

export default Intro;
