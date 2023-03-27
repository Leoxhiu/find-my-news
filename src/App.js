import React from "react";
import {
  BrowserRouter as Router,
  Route, Routes
} from "react-router-dom";
import Login from "./components/Login.js";
import Header from "./components/Header.js";
import Home from "./components/Home.js";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" name="Leox" element={<Login/>}/>
        <Route path="/home" element={<Home/>}/>
      </Routes>
    </Router>
  );
}

export default App;
