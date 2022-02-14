import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./project-card.styles.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import DefaultMockup from "../../assets/images/project-mockup-default.png";
import LinkButton from "../link-button/link-button.component";
import BridgesMockup from "../../assets/images/project-mockup-bridges.png";
import PokemonMockup from "../../assets/images/project-mockup-pokemon.png";
import OkRxMockup from "../../assets/images/project-mockup-okrx.png";

const ProjectCard = ({
  otherInfo: {
    title,
    tags,
    tools,
    summary,
    image,
    readMoreLink,
    githubLink,
    liveLink,
  },
}) => {
  console.log(tags);

  const [isLoadingImage, setIsLoadingImage] = useState(true);

  const imageLoaded = () => {
    setIsLoadingImage(false);
  };

  return (
    <div className="projectCard">
      <div className="projectImage">
        <img
          className={`image ${
            isLoadingImage ? "display-block" : "display-none"
          }`}
          alt="Project Mockup"
          src={DefaultMockup}
        />
        <img
          className={`image ${
            isLoadingImage ? "display-none" : "display-block"
          }`}
          alt="Project Mockup"
          src={require(`../../assets/images/${image}`)}
          onLoad={imageLoaded}
        />
      </div>
      <div className="projectInfo">
        <h5 className="title">
          {title} <i className="fa-brands fa-github-square"></i>
        </h5>
        <div className="projectTags">
          {tags && tags.length > 0 ? (
            <ul className="">
              {tags.map((tag) => (
                <li className="projectTag">{tag}</li>
              ))}
            </ul>
          ) : null}
        </div>
        <p className="summary">{summary}</p>
        {readMoreLink ? (
          <div className="projectLinks">
            <div className="projectLinks-left">
              <Link className="readMoreLink" to={readMoreLink}>
                Read more
              </Link>
            </div>
            <div className="projectLinks-right">
              {liveLink && (
                <a
                  className="liveLink"
                  href={liveLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon="fa-solid fa-link" />
                </a>
              )}
              {githubLink && (
                <a
                  className="githubLink"
                  href={githubLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon="fa-brands fa-github" />
                </a>
              )}
            </div>
          </div>
        ) : (
          <div className="projectLinks only-right">
            <div className="projectLinks-right">
              {liveLink && (
                <a
                  className="liveLink"
                  href={liveLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon="fa-solid fa-link" />
                </a>
              )}
              {githubLink && (
                <a
                  className="githubLink"
                  href={githubLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon="fa-brands fa-github" />
                </a>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
