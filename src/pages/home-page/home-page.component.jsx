import React from "react";
import "./home-page.styles.scss";

import Hero from "../../components/hero/hero.component";
import FeaturedWork from "../../components/featured-work/featured-work.component";
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
    }
  }

  return (
    <div className="homePage" onClick={closeOverlay}>
      <Hero />
      <FeaturedWork />
      <ContactPrompt />
      <ContactPanel />
      <Footer />
    </div>
  );
};

export default HomePage;
