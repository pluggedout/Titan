/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

interface Props {
  property1: "up" | "no-movement" | "down";
  className: any;
}

export const InfoBox = ({ property1, className }: Props): JSX.Element => {
  return (
    <div className={`info-box ${className}`}>
      <div className="header">
        <img
          className="icon"
          alt="Icon"
          src={
            property1 === "no-movement" ? "/img/icon-4.svg" : property1 === "down" ? "/img/icon-2.svg" : "/img/icon.svg"
          }
        />
        <div className="status">
          <div className="up-from">
            {property1 === "up" && <>Up +0.40% from yesterday</>}

            {property1 === "no-movement" && <>No movement from yesterday</>}

            {property1 === "down" && <>Down -1.40% from yesterday</>}
          </div>
        </div>
      </div>
      <div className="content">
        <div className="text-wrapper">Sentiment</div>
        <p className="div">Based on all available sources</p>
      </div>
    </div>
  );
};

InfoBox.propTypes = {
  property1: PropTypes.oneOf(["up", "no-movement", "down"]),
};