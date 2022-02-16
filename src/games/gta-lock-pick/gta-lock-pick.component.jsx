import React, { useState, useEffect } from "react";
import "./gta-lock-pick.styles.scss";

const GTALockPick = () => {
  var canvas;
  var canvasContext;

  useEffect(() => {
    canvas = document.getElementById("gta-lock-pick-canvas");
    canvasContext = canvas.getContext("2d");

    drawBackground();
    lockPick();
  }, []);

  const drawBackground = () => {
    canvasContext.fillStyle = "white";
    drawRect(0, 0, 600, 400, "navyblue");
    canvasContext.fillRect(0, 0, 600, 400);
  };

  const clearCanvas = () => {
    canvasContext.clearRect(0, 0, 600, 400);
    drawBackground();
  };

  const lockPick = () => {
    drawCircle(300, 200, 60, 0, 2 * Math.PI, "lightpink");

    drawArc(300, 200, 50, 0, (2 * Math.PI) / 3, "lightgray", 20);

    drawCircle(300, 200, 50, 0, 2 * Math.PI, "lightblue");

    drawTick(300, 200, 2, -60, "red");

    // clearCanvas();
  };

  const drawTick = (x, y, length, height, color) => {
    canvasContext.fillStyle = color;
    canvasContext.fillRect(x, y, length, height);
  };

  const drawCircle = (x, y, radius, startAngle, endAngle, color) => {
    canvasContext.beginPath();
    canvasContext.arc(x, y, radius, startAngle, endAngle);

    canvasContext.fillStyle = color;
    canvasContext.fill();
  };

  const drawArc = (x, y, radius, startAngle, endAngle, color, weight) => {
    canvasContext.beginPath();
    canvasContext.arc(x, y, radius, startAngle, endAngle);

    canvasContext.strokeStyle = color;
    canvasContext.lineWidth = weight;
    canvasContext.stroke();
  };

  const drawRect = (x, y, length, height, color) => {
    canvasContext.fillStyle = color;
    canvasContext.fillRect(x, y, length, height);
  };

  return (
    <div className="gta-lock-pick">
      <h3>GTA Lockpick Game</h3>

      <canvas id="gta-lock-pick-canvas" width="600" height="400"></canvas>

      {/*
        <div className="outer-circle">
        <div className="inner-circle"></div>
      </div>

      <div className="demo-rectangle"></div>
      <div className="demo-circle"></div>
      */}
    </div>
  );
};

export default GTALockPick;
