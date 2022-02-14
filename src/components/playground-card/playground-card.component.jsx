import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./playground-card.styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DefaultMockup from "../../assets/images/project-mockup-default.png";

const PlaygroundCard = ({
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
  const [isLoadingImage, setIsLoadingImage] = useState(true);

  const imageLoaded = () => {
    setIsLoadingImage(false);
  };

  return (
    <div className="playground-card">
      <Link className="image-container" to={readMoreLink}>
        <div className="image-container-inner">
          <img
            className={`image ${
              isLoadingImage ? "display-block" : "display-none"
            }`}
            alt="Project Mockup"
            src={DefaultMockup}
          />
          <img
            src={require(`../../assets/images/${image}`)}
            alt={title}
            className={`image ${
              isLoadingImage ? "display-none" : "display-block"
            }`}
            onLoad={imageLoaded}
          />
        </div>
      </Link>
      <div className="info-container">
        <h5 className="info-title">{title}</h5>
        {tags && tags.length > 0 ? (
          <ul className="info-tags">
            {tags.map((tag) => (
              <li className="info-tag">{tag}</li>
            ))}
          </ul>
        ) : null}
        <p className="info-summary">{summary}</p>
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

export default PlaygroundCard;
