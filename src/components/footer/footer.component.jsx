import React from "react";
import "./footer.styles.scss";

import { ReactComponent as LinkedInLogo } from "../../assets/icons/linkedin.svg";
import { ReactComponent as GithubLogo } from "../../assets/icons/github.svg";
import { ReactComponent as TwitterLogo } from "../../assets/icons/twitter.svg";

const Footer = () => (
  <section className="footerSection">
    <div className="footerLogo">
      <h6 className="logo">avi patel</h6>
    </div>
    <div className="footerLinks">
      <ul>
        <li className="linkContainer">
          <LinkedInLogo className="linkedIn" />
        </li>
        <li className="linkContainer">
          <GithubLogo className="github" />
        </li>
        <li className="linkContainer">
          <TwitterLogo className="twitter" />
        </li>
      </ul>
    </div>
  </section>
);

export default Footer;
