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
    const canvas = document.getElementById("canvas");
    const context = canvas.getContext("2d");
    const captureButton = document.getElementById("capture");

    captureButton.addEventListener("click", () => {
      context.drawImage(player, 0, 0, canvas.width, canvas.height);
    });

    navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
      player.srcObject = stream;
    });
  }

  return (
    <div>
      <video id="player" controls autoPlay></video>
      <button id="capture">Capture</button>
      <canvas id="canvas" width="320" height="240"></canvas>
    </div>
  );
}
