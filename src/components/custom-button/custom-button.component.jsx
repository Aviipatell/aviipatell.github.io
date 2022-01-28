import React from "react";
import "./custom-button.styles.scss";

const CustomButton = ({
  children,
  accent,
  giveMarginR,
  resumeButton,
  bottomButton,
  headerButton,
  ...otherProps
}) => (
  <button
    className={`${accent ? "accent" : ""} ${giveMarginR ? "giveMarginR" : ""} ${
      bottomButton ? "bottomButton" : ""
    } ${headerButton ? "headerButton" : ""}
    ${resumeButton ? "resumeButton" : ""} customButton`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
