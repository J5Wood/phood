import React from "react";
import { saveImage } from "./actions/PostActions";
// import { mobileCheck } from "./helpers/MobileCheck";

export function CapturePhoto() {
  // const [image, setImage] = React.useState(null);

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

    navigator.mediaDevices
      .getUserMedia(constraints)
      .then((stream) => {
        player.srcObject = stream;
      })
      .catch((err) => {
        console.error(`An error occurred: ${err}`);
      });
  }

  function imageInspection() {
    // Draw image to canvas
    const canvas = document.getElementById("canvas");
    const context = canvas.getContext("2d");
    context.drawImage(player, 0, 0, canvas.width, canvas.height);

    // Show container
    const canvasContainer = canvas.parentElement;
    canvasContainer.addEventListener("click", (e) => closeInspectionBlock(e));
    canvasContainer.style.display = "flex";
  }

  function grabImage(e) {
    const canvas = document.getElementById("canvas");
    canvas.toBlob((blob) => {
      saveImage(blob);
      // const img = new Image();
      // Object URLs only released on document unload, release or they could eat up memory.
      // img.src = window.URL.createObjectURL(blob);
      // debugger;
    });
    // const img = new Image();
    // img.src = window.URL.createObjectUrl(blob);
  }

  function closeInspectionBlock(e) {
    const container = document.querySelector(".canvas-container");
    container.style.display = "none";
  }

  return (
    <div className="capture-page">
      <video id="player" autoPlay></video>
      <button id="capture">Capture</button>
      <div className="canvas-container">
        <button
          className="inspection-accept-button"
          onClick={(e) => grabImage(e)}
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
