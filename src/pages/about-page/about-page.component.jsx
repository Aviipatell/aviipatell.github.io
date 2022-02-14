import React from "react";
import "./about-page.styles.scss";

import ProfilePicture from "../../assets/images/profile-picture.JPG";
import CustomButton from "../../components/custom-button/custom-button.component";
import Footer from "../../components/footer/footer.component";

import ContactPanel from "../../components/contact-panel/contact-panel.component";

import { ReactComponent as Triangle1 } from "../../assets/icons/triangle1.svg";
import { ReactComponent as Triangle2 } from "../../assets/icons/triangle2.svg";
import { ReactComponent as Triangle3 } from "../../assets/icons/triangle3.svg";
import { ReactComponent as Triangle4 } from "../../assets/icons/triangle4.svg";
import { ReactComponent as Triangle5 } from "../../assets/icons/triangle5.svg";
import { ReactComponent as Triangle6 } from "../../assets/icons/triangle6.svg";

import Resume from "../../assets/documents/Avi-Patel-Resume.pdf";

const AboutPage = () => {
  function handleContactPrompt(e) {
    e.preventDefault();
    console.log("Contact Button pressed");
    document.querySelector(".contactPanel").classList.toggle("visible");
    if (document.querySelector(".contactPanel").classList.contains("visible")) {
      document.querySelector(".imageSection").classList.add("darken");
      document.querySelector(".content").classList.add("darken");
    } else {
      document.querySelector(".imageSection").classList.remove("darken");
      document.querySelector(".content").classList.remove("darken");
    }
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
  return (
    <div className="aboutPage">
      <div className="imageSection">
        <h2 className="greeting">Hello!</h2>
        <div className="imageContainer">
          <img class="image" src={ProfilePicture} alt="Profile Picture" />
        </div>
        <Triangle4 className="triangle triangle3" />
        <Triangle3 className="triangle triangle4" />
      </div>

      <div className="content">
        <Triangle1 className="triangle triangle1" />
        <Triangle2 className="triangle triangle2" />
        <h3 className="heading">I'm Avi!</h3>
        <h5 className="tagline">Developer // Photographer</h5>
        <p>
          I’m a second year Computer Science student at the University of
          Waterloo and I love creating things and bringing my ideas to life. I
          am driven by the desire to create positive change and I love getting
          to know new people.
        </p>
        <p>
          Other passions of mine include coding, watching anime, taking pictures
          and going on long bike rides or road trips.
        </p>
        <p>
          Thanks for visiting, hope you enjoyed my site! If you have any
          questions or concerns or would like to get to know me better, feel
          free to reach out below!
        </p>
        <p>
          Email:{" "}
          <a className="accentLink" href="mailto:avipatel.dev@gmail.com">
            avipatel.dev@gmail.com
          </a>
        </p>

        <Triangle5 className="triangle triangle5" />
        <Triangle6 className="triangle triangle6" />

        <div className="buttonContainer">
          <a
            href="mailto:avipatel.dev@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <CustomButton giveMarginR accent resumeButton>
              Connect with Me
            </CustomButton>
          </a>
          <a href={Resume} target="_blank" rel="noreferrer">
            <CustomButton resumeButton>Resume</CustomButton>
          </a>
        </div>
      </div>
      <ContactPanel id="contactPanel" />
    </div>
  );
};

export default AboutPage;
