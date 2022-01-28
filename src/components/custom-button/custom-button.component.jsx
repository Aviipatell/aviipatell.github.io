import React from "react";
import "./custom-button.styles.scss";

const CustomButton = ({
  children,
  accent,
  giveMarginR,
  resumeButton,
  bottomButton,
  ...otherProps
}) => (
  <button
    className={`${accent ? "accent" : ""} ${giveMarginR ? "giveMarginR" : ""} ${
      bottomButton ? "bottomButton" : ""
    } ${resumeButton ? "resumeButton" : ""} customButton`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
