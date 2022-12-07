import React, { useState } from "react";
import "./navbar.css";

export default function Navbar({ currentPage, setCurrentPage }) {
  const [toggleState, setToggleState] = useState("collapse");
  const handleClick = () => {
    if (toggleState === "collapse") {
      setToggleState("show");
    } else {
      setToggleState("collapse");
    }
  };
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <button
          onClick={handleClick}
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`${toggleState} navbar-collapse`}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                name="top"
                className="nav-link"
                aria-current="page"
                href="#Top"
                onClick={() => setCurrentPage("Home")}
              >
                Home
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
