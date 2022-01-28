import React from "react";
import "./project-card.styles.scss";

import LinkButton from "../link-button/link-button.component";
import BridgesMockup from "../../assets/images/project-mockup-bridges.png";
import PokemonMockup from "../../assets/images/project-mockup-pokemon.png";
import OkRxMockup from "../../assets/images/project-mockup-okrx.png";

const ProjectCard = ({
  key,
  otherInfo: {
    title,
    tools,
    summary,
    image,
    githubLink,
    liveLink,
    learnMoreLink,
  },
}) => (
  <div className="projectCard">
    <div className="projectImage">
      <img
        className="image"
        alt="Project Mockup"
        src={
          title === "Bridges to University"
            ? BridgesMockup
            : title === "OkRx"
            ? OkRxMockup
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
              className="accentLink githubLink"
              text="View on Github"
              url={githubLink}
            />
          </div>
        ) : null}
        {liveLink ? (
          <div className="liveLinkContainer">
            <LinkButton
              className="accentLink liveLink"
              text="View Live"
              url={liveLink}
            />
          </div>
        ) : null}
      </div>
    </div>
  </div>
);

export default ProjectCard;
