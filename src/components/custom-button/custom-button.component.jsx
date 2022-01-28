import React from "react";
import "./custom-button.styles.scss";

const CustomButton = ({ children, accent, giveMarginR, resumeButton, ...otherProps }) => (
  <button
    className={`${accent ? "accent" : ""} ${
      giveMarginR ? "giveMarginR" : ""
    } ${resumeButton ? "resumeButton" : ""} customButton`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
