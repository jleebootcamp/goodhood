import "./header.css";
// import Navbar from "../navbar/navbar.js";
import React, { useState } from "react";

export default function Header({ currentPage, setCurrentPage }) {
  return (
    <div className="header">
      <a className="headerTitle">What's Good In Da Hood</a>
      <ul className="header-nav mr-auto">
        <li className="nav-item active">
          <a
            className="nav-link"
            name="top"
            aria-current="page"
            href="#Top"
            onClick={() => setCurrentPage("LogIn")}
          >
            LogIn
          </a>
        </li>
        <li className="nav-item active">
          <a
            className="nav-link"
            name="top"
            aria-current="page"
            href="#Top"
            onClick={() => setCurrentPage("LogIn")}
          >
            Forum
          </a>
        </li>
      </ul>
    </div>
  );
}
