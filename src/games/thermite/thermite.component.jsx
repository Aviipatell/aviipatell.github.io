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
    for (let y = 0; y < tiles.length; ++y) {
      let row = "";

      for (let x = 0; x < tiles[y].length; ++x) {
        if (tiles[y][x].isPattern) {
          row += "X";
        } else {
          row += "-";
        }

        if (x === tiles[y].length - 1) {
          row += " ";
        }
      }
      console.log(row);
    }
  };

  const initializeTiles = () => {
    for (let y = 0; y < tiles.length; ++y) {
      for (let x = 0; x < tiles[y].length; ++x) {
        tiles[y][x] = {
          isSelected: false,
          isPattern: false,
        };

        // console.log(`row: ${y}, column: ${x}`);
      }
    }

    setUpTiles();
  };

  const setUpTiles = () => {
    let randomPointsArray = generateRandomPointsArray(tiles, 10);

    console.log(randomPointsArray);

    for (let i = 0; i < randomPointsArray; ++i) {
      setTiles(
        (existingItems) =>
          (existingItems[randomPointsArray.row][
            randomPointsArray.col
          ].isPattern = true)
      );
    }

    console.log(tiles);
  };

  // pass in a two dimensional array and the unique numOfPoints you'd like returned as an array
  const generateRandomPointsArray = (arr, numOfPoints) => {
    let arrRows = arr.length;
    if (!arr.length > 0) {
      return arr;
    }

    let arrCols = arr[0].length;

    let numOfPointsGenerated = 0;

    let randomPointsArray = new Array(numOfPoints);

    while (numOfPointsGenerated !== numOfPoints) {
      let generatedY = Math.floor(Math.random() * arrRows);
      let generatedX = Math.floor(Math.random() * arrCols);

      if (isNewPoint(randomPointsArray, generatedY, generatedX)) {
        randomPointsArray[numOfPointsGenerated] = {
          row: generatedY,
          col: generatedX,
        };
        ++numOfPointsGenerated;
      }
    }

    return randomPointsArray;
  };

  const isNewPoint = (randomPointsArray, row, col) => {
    for (let i = 0; i < randomPointsArray.length; ++i) {
      if (
        randomPointsArray[i]?.col === col &&
        randomPointsArray[i]?.row === row
      ) {
        return false;
      }
    }
    return true;
  };

  initializeTiles();
  printTiles();

  const [testArr, setTestArr] = useState(new Array(10));

  const test = () => {
    console.log("Test function:");
    console.log(testArr);

    for (let x = 0; x < testArr.length; ++x) {
      testArr[x] = 0;
    }

    let newArr = [...testArr];

    console.log("test..");

    for (let x = 0; x < newArr.length; ++x) {
      newArr[x] = -1;
    }

    console.log("test..");

    setTestArr(newArr);

    console.log("test..");

    console.log(testArr);
  };

  test();

  return (
    <div className="thermite-container">
      <h2>Thermite</h2>

      <div className="box"></div>
    </div>
  );
};

export default Thermite;
