import React from "react";
import "./contact-prompt.styles.scss";

import CustomButton from "../custom-button/custom-button.component";

const ContactPrompt = () => {
  function handleContactPrompt(e) {
    e.preventDefault();
    console.log("Contact Button pressed");
    document.querySelector(".contactPanel").classList.toggle("visible");
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  return (
    <section className="contactPrompt">
      <p className="sectionTitle">Feel free to reach out!</p>
      <div className="buttonContainer">
        <CustomButton id="contactButton" onClick={handleContactPrompt} accent>
          Contact
        </CustomButton>
      </div>
    </section>
  );
};

export default ContactPrompt;
