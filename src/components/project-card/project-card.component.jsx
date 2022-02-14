import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./project-card.styles.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import DefaultMockup from "../../assets/images/project-mockup-default.png";

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
      <Link className="projectImage" to={readMoreLink ? readMoreLink : "/"}>
        <div className="projectImageContainer">
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
      </Link>
      <div className="projectInfo">
        <h5 className="title">
          {title} <i className="fa-brands fa-github-square"></i>
        </h5>
        <div className="projectTags">
          {tags && tags.length > 0 ? (
            <ul className="">
              {tags.map((tag, index) => (
                <li key={index} className="projectTag">
                  {tag}
                </li>
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
