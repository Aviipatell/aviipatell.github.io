import React from "react";

import "./gaming-page.styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import GTALockPick from "../../games/gta-lock-pick/gta-lock-pick.component";
import Thermite from "../../games/thermite/thermite.component";

const GamingPage = () => {
  return (
    <div className="gaming-page">
      <div className="gaming-head">
        <h1 className="gaming-title">Games</h1>
      </div>
      <div className="gaming-container">
        <FontAwesomeIcon
          icon="fa-solid fa-screwdriver-wrench"
          className="construction-icon"
        />
        <p>
          Section full of games that users can play or interact with and opt in
          to login to save their highscores which will be displayed OR play as a
          guest instead, up to them.
        </p>
        <GTALockPick />
        <Thermite />
      </div>
    </div>
  );
};

export default GamingPage;
