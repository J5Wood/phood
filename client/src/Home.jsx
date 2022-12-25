import React from "react";

export function Home() {
  function addPhoto(e) {
    e.preventDefault();
  }

  return (
    <div className="home-page">
      <button className="home-page-button" onClick={(e) => addPhoto(e)}>
        ADD A PHOTO
      </button>

      <a href="/browse" className="home-page-button">
        LIBRARY
      </a>
    </div>
  );
}
