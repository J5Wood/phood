import React from "react";

export function Home() {
  function addPhoto(e) {
    e.preventDefault();
  }

  return (
    <div className="home-page">
      <div className="photo-method-selection">
        <span>
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
      <button className="home-page-button" onClick={(e) => addPhoto(e)}>
        ADD A PHOTO
      </button>

      <a href="/browse" className="home-page-button">
        LIBRARY
      </a>
    </div>
  );
}
