import React, { Component } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Contact from './components/Contact';
import Home from "./components/Home";
import Navbar from './components/Navbar';
import Services from './components/Services';

export default class App extends Component {
  render() {
    return (
      <>
      <div>
        <Router>
          <Navbar />
          <div className="App grid place-items-center" id="App">
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/about" element={<About />}></Route>
              <Route path="/contact" element={<Contact />}></Route>
              <Route path="/services" element={<Services />}></Route>
            </Routes>
          </div>
        </Router>
      </div>
      </>
    )
  }
}
