import React, { Component } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Contact from './components/Contact';
// import Home from "./components/Home";
import Navbar from './components/Navbar';
// import PopBlogsFunc from './components/PopBlogsFunc';
import PopularBlogs from './components/PopularBlogs';
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
              {/* <Route path="/news" element={<Home pageSize={5} />} /> */}
              <Route path="/about" element={<About />}/>
              <Route path="/contact" element={<Contact />}/>
              <Route path="/services" element={<Services />}/>
              <Route path="/" element={<PopularBlogs per_page={5}/>}/>
            </Routes>
          </div>
        </Router>
      </div>
      </>
    )
  }
}
