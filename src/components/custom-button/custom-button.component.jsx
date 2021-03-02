import React from "react";
import "./custom-button.styles.scss";

const CustomButton = ({ children, accent, giveMarginR, ...otherProps }) => (
  <button
    className={`${accent ? "accent" : ""} ${
      giveMarginR ? "giveMarginR" : ""
    } customButton`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
