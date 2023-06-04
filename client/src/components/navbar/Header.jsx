import React from "react";
import "./header.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Header() {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  function collapseMenu(e) {
    setShowMenu(!showMenu);
    e.stopPropagation();
  }

  function handleLogout(e) {
    e.preventDefault();
    localStorage.removeItem("token");
    navigate("/login");
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
          <a className="menu-item logout-link">
            <span onClick={(e, nav) => handleLogout(e, nav)}>Logout</span>
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
