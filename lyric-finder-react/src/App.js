/**
 *  Author: CastleBomber
 *  Project: React-Lyric-Finder
 *  Date: January 20th, 2023
 *
 *  Acknowledgements: Traversy Media's Youtube Lyric Search app series
 *
 *  Website Tools:
 *  MusixMatch - songs with lyrics
 * 
 *  Tips:
 *  affirm correct folder, npm run start
 *  cmd+D will change opening and closing tag simultaneously
 *  cmd+D (+ D..) change multiple nearby instances of a name
 */
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/layout/NavBar";
import React, { Component } from "react";
import Index from "./components/layout/Index";
import { Provider } from "./context";

function App() {
  return (
    <Provider>
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
    </Provider>
  );
}

export default App;
