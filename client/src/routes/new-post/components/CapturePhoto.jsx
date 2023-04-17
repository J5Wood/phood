import React, { useEffect } from "react";
// import { mobileCheck } from "./helpers/MobileCheck";

// * Add an unready camera function to clean up useEffect and hopefully turn off camera

export function CapturePhoto({ dishName, setDishName, attachPostImage }) {
  function submitKeyFilter(e) {
    if (e.key === "Enter") {
      handleInputSubmit();
    }
  }

  function handleInputSubmit() {
    const canvas = document.getElementById("canvas");
    canvas.toBlob((blob) => {
      attachPostImage(blob);
    });
  }

  const constraints = {
    video: true,
  };

  useEffect(() => {
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
    canvasContainer.style.display = "flex";
  }

  function closeInspectionBlock(e) {
    if (e.target.classList.value !== "inspection-accept-button") {
      const container = document.querySelector(".canvas-container");
      container.style.display = "none";
      setDishName("");
    }
  }

  return (
    <div className="capture-page">
      <video id="player" autoPlay></video>
      <button id="capture">Capture</button>
      <div
        className="canvas-container"
        onClick={(e) => closeInspectionBlock(e)}
      >
        <canvas id="canvas"></canvas>
        <div
          className="dish-input-container"
          onClick={(e) => e.stopPropagation()}
        >
          <label htmlFor="dish-input">Dish Name:</label>
          <input
            type="text"
            name="dish-input"
            id="dish-input"
            value={dishName}
            onChange={(e) => setDishName(e.target.value)}
            onKeyUp={(e) => submitKeyFilter(e)}
          ></input>
        </div>
        <div className="canvas-button-container">
          <button
            className="inspection-accept-button"
            onClick={handleInputSubmit}
          >
            ✓
          </button>
          <button
            className="inspection-close-button"
            onClick={(e) => closeInspectionBlock(e)}
          >
            X
          </button>
        </div>
      </div>
    </div>
  );
}
