import React from "react";
import "./project-card.styles.scss";

import LinkButton from "../link-button/link-button.component";
import BridgesMockup from "../../assets/images/project-mockup-bridges-old.png";
import PokemonMockup from "../../assets/images/project-mockup-pokemon.png";

const ProjectCard = ({
  key,
  otherInfo: { title, tools, summary, image, githubLink, learnMore },
}) => (
  <div className="projectCard">
    <div className="projectImage">
      <img
        className="image"
        alt="Project Image"
        src={
          title == "Bridges to University Website"
            ? BridgesMockup
            : PokemonMockup
        }
      />
    </div>
    <div className="projectInfo">
      <h5 className="title">{title}</h5>
      <p className="tools">{tools}</p>
      <p className="summary">{summary}</p>
      <div className="projectLinks">
        {githubLink ? (
          <div className="githubLinkContainer">
            <LinkButton
              className="githubLink"
              text="View on Github"
              url={githubLink}
            />
          </div>
        ) : null}
        {learnMore ? (
          <div className="learnMoreLinkContainer">
            <LinkButton
              className="learnMoreLink"
              text="Learn more"
              url={learnMore}
            />
          </div>
        ) : null}
      </div>
    </div>
  </div>
);

export default ProjectCard;
