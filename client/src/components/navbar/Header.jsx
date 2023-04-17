import React from "react";

export function Header() {
  return (
    <div className="header">
      <button id="main-logo" onClick={() => (window.location.href = "/home")}>
        <h1>PHOOD</h1>
      </button>
    </div>
  );
}
