import React from "react";
import "./hero.styles.scss";

import CustomButton from "../custom-button/custom-button.component";

import { ReactComponent as Triangle1 } from "../../assets/icons/triangle1.svg";
import { ReactComponent as Triangle2 } from "../../assets/icons/triangle2.svg";
import { ReactComponent as Triangle3 } from "../../assets/icons/triangle3.svg";
import { ReactComponent as Triangle4 } from "../../assets/icons/triangle4.svg";
import { ReactComponent as Triangle5 } from "../../assets/icons/triangle3.svg";

import { ReactComponent as ScrollAniContainer } from "../../assets/icons/scrollAniContainer.svg";
import { ReactComponent as ScrollAniCircle } from "../../assets/icons/ScrollAniCircle.svg";
import Resume from "../../assets/documents/Avi-Patel-Resume.pdf";

import { HashLink } from "react-router-hash-link";

const Hero = () => {
  function handleContactPrompt(e) {
    e.preventDefault();
    console.log("Contact Button pressed");
    document.querySelector(".contactPanel").classList.toggle("visible");
    if (document.querySelector(".contactPanel").classList.contains("visible")) {
      document.querySelector(".hero").classList.add("darken");
      document.querySelector(".featureSection").classList.add("darken");
      document.querySelector(".contactPrompt").classList.add("darken");
    } else {
      document.querySelector(".hero").classList.remove("darken");
      document.querySelector(".featureSection").classList.remove("darken");
      document.querySelector(".contactPrompt").classList.remove("darken");
    }
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  return (
    <div className="hero">
      <div className="heroTitle ">
        <h1>Hi, I'm Avi.</h1>
      </div>
      <div className="heroText">
        <p className="description">
          Software developer experienced in full stack development and machine
          learning.
        </p>
        <p className="tagline">
          Currently seeking Summer 2022 co&#x2011;op opportunities.
        </p>
      </div>
      <div className="heroButtons">
        <a
          href="mailto:avipatel.dev@gmail.com"
          rel="noreferrer"
          target="_blank"
        >
          <CustomButton giveMarginR accent resumeButton>
            Connect with Me
          </CustomButton>
        </a>
        <a href={Resume} rel="noreferrer" target="_blank">
          <CustomButton resumeButton>Resume</CustomButton>
        </a>
      </div>
      <HashLink to="/#work" smooth={true} duration={800} className="scrollAni">
        <ScrollAniContainer className="container" />
        <ScrollAniCircle className="circle" />
      </HashLink>
      <Triangle1 className="triangle triangle1" />
      <Triangle2 className="triangle triangle2" />
      <Triangle3 className="triangle triangle3" />
      <Triangle4 className="triangle triangle4" />
      <Triangle5 className="triangle triangle5" />
    </div>
  );
};

export default Hero;
