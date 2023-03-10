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
 *  To get app running, affirm correct folder,
 *  npm run start
 *
 *  cmd+D will change opening and closing tag simultaneously
 *  cmd+D (+ D..) change multiple nearby instances of a name
 *  cors-heroku error: open https://cors-anywhere.herokuapp.com/corsdemo
 *
 *  Watch out for:
 *  In app, older syntax 'component', needs to be switched to 'element'
 *  older syntax of 'Switch', need to be 'Router' surrounding 'Route'
 */
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/layout/NavBar";
import Index from "./components/layout/Index";
import { Provider } from "./context";
import Lyrics from "./components/tracks/Lyrics";
import "./App.css";

function App() {
  return (
    <Provider>
      <Router>
        <React.Fragment>
          <NavBar />
          <div className="container">
            <Routes>
              <Route exact path="/" element={<Index/>} />
              <Route exact path="/lyrics/track/:id" element={<Lyrics/>} />
            </Routes>
          </div>
        </React.Fragment>
      </Router>
    </Provider>
  );
}

export default App;
