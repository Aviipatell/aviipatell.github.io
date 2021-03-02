import React from "react";

import "./contact-panel.styles.scss";

import CustomButton from "../custom-button/custom-button.component";

import { ReactComponent as LinkedInLogo } from "../../assets/icons/linkedin.svg";
import { ReactComponent as GithubLogo } from "../../assets/icons/github.svg";
import { ReactComponent as TwitterLogo } from "../../assets/icons/twitter.svg";

const ContactPanel = () => {
  function closeOverlay() {
    var contactPanel = document.querySelector(".contactPanel");
    contactPanel.classList.remove("visible");
    if (document.querySelector(".aboutPage") != null) {
      document.querySelector(".imageSection").classList.remove("darken");
      document.querySelector(".content").classList.remove("darken");
    } else if (document.querySelector(".homePage") != null) {
      document.querySelector(".hero").classList.remove("darken");
      document.querySelector(".featureSection").classList.remove("darken");
      document.querySelector(".contactPrompt").classList.remove("darken");
    }
  }

  return (
    <div className="contactPanel">
      <h4 className="title">Get in touch!</h4>
      <p className="tagline">
        Coffee? Food? Chess? Anime? Collaboration? You name it!
      </p>

      <p className="message">
        Feel free to reach out of any of my socials! I'd love to chat and get
        learn to more about you.
      </p>

      <ul className="otherLinks">
        <li className="linkContainer">
          <a
            className="emailLink"
            href="mailto:avipatel.dev@gmail.com?subject=Hey!&body=Let%27s%20chat!"
          >
            avipatel.dev@gmail.com
          </a>
        </li>
      </ul>
      <ul className="socialLinks">
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

      <CustomButton onClick={closeOverlay} accent>
        Close
      </CustomButton>
    </div>
  );
};

export default ContactPanel;
