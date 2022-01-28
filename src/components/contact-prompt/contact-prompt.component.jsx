import React from "react";
import "./contact-prompt.styles.scss";

import CustomButton from "../custom-button/custom-button.component";

import Resume from "../../assets/documents/Avi-Patel-Resume.pdf";

const ContactPrompt = () => {
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
    <section className="contactPrompt">
      <p className="sectionTitle">Feel free to reach out!</p>
      <div className="buttonContainer">
        <a
          href="mailto:avipatel.dev@gmail.com"
          rel="noreferrer"
          target="_blank"
        >
          <CustomButton giveMarginR bottomButton accent resumeButton>
            Connect with Me
          </CustomButton>
        </a>
        <a href={Resume} rel="noreferrer" target="_blank">
          <CustomButton giveMarginR bottomButton resumeButton>
            Resume
          </CustomButton>
        </a>
        <a
          href="https://www.linkedin.com/in/aviipatell/"
          rel="noreferrer"
          target="_blank"
        >
          <CustomButton giveMarginR bottomButton resumeButton>
            LinkedIn
          </CustomButton>
        </a>
        <a
          href="https://twitter.com/aviipatell"
          rel="noreferrer"
          target="_blank"
        >
          <CustomButton resumeButton bottomButton>
            Twitter
          </CustomButton>
        </a>
      </div>
    </section>
  );
};

export default ContactPrompt;
