//import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import Header from "./components/header/header.js";
import Footer from "./components/footer/footer.js";
import Home from "./pages/home/home.js";
// import Forum from "./pages/forum/forum.js";

function App() {
  const [currentPage, setCurrentPage] = useState("Home");

  return (
    <div className="App">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {currentPage === "Home" && <Home />}
      {/* {currentPage === "Forum" && <Forum />} */}

      <Footer />
    </div>
  );
}

export default App;
