import React from "react";
import "./home-page.styles.scss";

import Hero from "../../components/hero/hero.component";
import FeaturedWork from "../../components/featured-work/featured-work.component";
import Playground from "../../components/playground/playground.component";
import ContactPrompt from "../../components/contact-prompt/contact-prompt.component";
import ContactPanel from "../../components/contact-panel/contact-panel.component";
import Footer from "../../components/footer/footer.component";

const HomePage = () => {
  function closeOverlay(e) {
    // console.log(e);
    if (
      e.target.id == "contactButton" ||
      e.target.classList.contains("contactPanel") ||
      e.target.parentNode.classList.contains("contactPanel")
    ) {
    } else {
      var contactPanel = document.querySelector(".contactPanel");
      if (contactPanel.classList.contains("visible"))
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
  }

  return (
    <div className="homePage" onClick={closeOverlay}>
      <Hero />
      <FeaturedWork />
      <Playground />
      <ContactPrompt />
      <ContactPanel />
    </div>
  );
};

export default HomePage;
