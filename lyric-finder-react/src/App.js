/**
 *  Author: CastleBomber
 *  Project: React-Lyric-Finder
 *  Date: January 20th, 2023
 *
 *  Acknowledgements: Traversy Media's Youtube Lyric Search app series
 *
 *  Tips:
 *  npm run start
 *  cmd+D will change opening and closing tag simultaneously
 */
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/layout/NavBar";
import React, { Component } from "react";
import Index from "./components/layout/Index";

function App() {
  return (
    <Router>
      <React.Fragment>
        <NavBar />
        <div className="container">
          <Routes>
            <Route exact path="/" element={<Index />} />
          </Routes>
        </div>
      </React.Fragment>
    </Router>
  );
}

export default App;
