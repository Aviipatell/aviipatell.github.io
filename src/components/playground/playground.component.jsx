import React from "react";

import "./playground.styles.scss";

import PLAYGROUND_DATA from "./playground.data";

import PlaygroundCard from "../playground-card/playground-card.component";

const Playground = () => {
  return (
    <div className="playground-container">
      <h3 className="playground-title">Playground</h3>
      <div className="playground-grid">
        {PLAYGROUND_DATA.map(({ id, ...otherInfo }) => (
          <PlaygroundCard key={id} otherInfo={otherInfo} />
        ))}
      </div>
    </div>
  );
};

export default Playground;
