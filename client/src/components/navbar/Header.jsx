import React from "react";
import "./header.css";
import { useState } from "react";

export function Header() {
  const [showMenu, setShowMenu] = useState(false);

  function collapseMenu() {
    setShowMenu(!showMenu);
  }

  function handleLogout(e) {
    e.preventDefault();
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
          <a className="menu-item" href="/home">
            <span>Home</span>
          </a>
          <a className="menu-item" href="/library">
            <span>Library</span>
          </a>
          <a className="menu-item" href="/browse">
            <span>Browse</span>
          </a>
          <a className="menu-item">
            <button className="logout-button" onClick={(e) => handleLogout(e)}>
              Logout
            </button>
          </a>
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
