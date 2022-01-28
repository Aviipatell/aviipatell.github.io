import React from "react";
import "./link-button.styles.scss";

import { Link } from "react-router-dom";

import { ReactComponent as LinkArrow } from "../../assets/icons/right-arrow.svg";

const LinkButton = ({ text, url }) => (
  <div className="linkButton">
    <a target="_blank" href={url} className="link">
      <span className="accentLink">{text}</span>{" "}
      <LinkArrow className="linkArrow" />
    </a>
  </div>
);

export default LinkButton;
