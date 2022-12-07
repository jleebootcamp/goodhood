import "./header.css";
import React from "react";

export default function Header({ currentPage, setCurrentPage }) {
  return (
    <div className="container-fluidHeader">
      <a className="headerTitle">What's Good In The Hood</a>
      {/* <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} /> */}
    </div>
  );
}
