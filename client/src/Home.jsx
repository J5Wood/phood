import React from "react";
import { mobileCheck } from "./helpers/MobileCheck";

export function Home() {
  function addPhoto() {
    const uploadSelector = document.querySelector(".selection-block");
    uploadSelector.style.display = "flex";
  }

  function closeSelectionBlock() {
    const uploadSelector = document.querySelector(".selection-block");
    uploadSelector.style.display = "none";
  }

  function accessCamera() {
    console.log(mobileCheck);
    if (mobileCheck) {
      console.log("Accessing Mobile Camera...");
    } else {
      console.log("Accessing desktop camera");
    }
  }

  return (
    <>
      <div className="selection-block" onClick={closeSelectionBlock}>
        <div
          className="photo-method-selection"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="selection-close-button"
            onClick={(e) => closeSelectionBlock(e)}
          >
            X
          </button>
          <span onClick={(e) => accessCamera(e)}>
            <h4>Take Photo</h4>
            <div className="icon">
              <div className="camera-outer-ring">
                <div className="camera-inner-ring">
                  <div className="camera-lens-flare"></div>
                </div>
              </div>
            </div>
          </span>
          <span>
            <h4>Add From Files</h4>
            <div className="icon">
              <div className="file-upper-tab-container">
                <div className="file-upper-tab"></div>
              </div>
              <div className="file-main-body"></div>
            </div>
          </span>
        </div>
      </div>
      <div className="home-page">
        <button className="home-page-button" onClick={addPhoto}>
          ADD A PHOTO
        </button>

        <a href="/browse" className="home-page-button">
          LIBRARY
        </a>
      </div>
    </>
  );
}
