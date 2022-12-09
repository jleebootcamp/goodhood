//import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/header.js";
import Footer from "./components/footer/footer.js";
import Login from "./pages/login";
import Home from "./pages/home/home.js";

function App() {
  const [currentPage, setCurrentPage] = useState("Login");
  console.log(11, currentPage);

  return (
    <Router>
      <div className="flex-column justify-flex-start min-100-vh">
        <Header />
        <div className="container">
          <Routes>
            <Route path="/Login" element={<Login />} />

            <Route path="/Home" element={<Home />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
