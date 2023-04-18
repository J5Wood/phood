import React from "react";
import "./header.css";
import { useState } from "react";

export function Header() {
  const [showMenu, setShowMenu] = useState(false);

  function collapseMenu() {
    setShowMenu(!showMenu);
  }

  function displayMenu() {
    if (!showMenu) {
      return (
        <div className="closed-menu">
          <div className="menu-line"></div>
          <div className="menu-line"></div>
          <div className="menu-line"></div>
        </div>
      );
    } else {
      return (
        <div className="open-menu">
          <span className="menu-item">Home</span>
          <span className="menu-item">Library</span>
          <span className="menu-item">Browse</span>
          <span className="menu-item">Logout</span>
        </div>
      );
    }
  }

  return (
    <div className="header">
      <button id="main-logo" onClick={() => (window.location.href = "/home")}>
        <h1>PHOOD</h1>
      </button>

      <div className="menu-button" onClick={(e) => collapseMenu(e)}>
        {displayMenu()}
      </div>
    </div>
  );
}
