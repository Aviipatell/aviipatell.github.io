import React, { useState } from "react";
import "./featured-work.styles.scss";

import PROJECTS_DATA from "./featured-work.data";

import ProjectCard from "../project-card/project-card.component";

function FeaturedWork() {
  //   const [projects, setProjects] = useState(PROJECTS_DATA);

  return (
    <section className="featureSection" id="work">
      <h3 className="sectionTitle">Featured Work</h3>
      <div className="sectionContent">
        {PROJECTS_DATA.map(({ id, ...otherInfo }) => (
          <ProjectCard key={id} otherInfo={otherInfo} />
        ))}
      </div>
    </section>
  );
}

export default FeaturedWork;
