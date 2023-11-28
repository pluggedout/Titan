import React from "react";
import { InfoBox } from "../InfoBox/InfoBox";
import "./style.css";

export const Box = (): JSX.Element => {
  return (
    <div className="box">
      <div className="info-box-2">
        <InfoBox className="property-up" property1="up" />
        <InfoBox className="property-no" property1="no-movement" />
        <InfoBox className="property-down" property1="down" />
      </div>
    </div>
  );
};
