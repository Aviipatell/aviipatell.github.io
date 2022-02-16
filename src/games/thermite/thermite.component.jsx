import React, { useState } from "react";
import "./thermite.styles.scss";

const Thermite = () => {
  const [numTiles, setNumTiles] = useState(7);

  const [tiles, setTiles] = useState(
    Array.from({ length: numTiles }, () =>
      Array.from({ length: numTiles }, () => 0)
    )
  );

  const printTiles = () => {
    for (let x = 0; x < numTiles; ++x) {
      let row = "";

      for (let y = 0; y < numTiles; ++y) {
        row += tiles[x][y] + ",";
      }

      console.log(row);
    }
  };

  printTiles();

  return (
    <div className="thermite-container">
      <h2>Thermite</h2>

      <div className="box"></div>
    </div>
  );
};

export default Thermite;
