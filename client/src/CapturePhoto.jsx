import React from "react";
// import { mobileCheck } from "./helpers/MobileCheck";

export function CapturePhoto() {
  const constraints = {
    video: true,
  };

  React.useEffect(() => {
    readyCamera();
  }, []);

  function readyCamera() {
    // if (mobileCheck) {
    //   console.log("Mobile Camera");
    //   return;
    // }
    const player = document.getElementById("player");
    const captureButton = document.getElementById("capture");

    captureButton.addEventListener("click", (e) => {
      imageInspection(e);
    });

    navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
      player.srcObject = stream;
    });
  }

  function imageInspection() {
    const canvas = document.getElementById("canvas");
    const context = canvas.getContext("2d");
    context.drawImage(player, 0, 0, canvas.width, canvas.height);
    const canvasContainer = canvas.parentElement;
    canvasContainer.style.display = "flex";
    // debugger;
  }

  function saveImage(e) {}

  function closeInspectionBlock() {}

  return (
    <div className="capture-page">
      <video id="player" controls autoPlay></video>
      <button id="capture">Capture</button>
      <div className="canvas-container">
        <button
          className="inspection-accept-button"
          onClick={(e) => saveImage(e)}
        >
          ✓
        </button>
        <button
          className="inspection-close-button"
          onClick={(e) => closeInspectionBlock(e)}
        >
          X
        </button>
        <canvas id="canvas"></canvas>
      </div>
    </div>
  );
}
