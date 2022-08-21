import React, { Component } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Contact from './components/Contact';
import Home from "./components/Home";
import Navbar from './components/Navbar';
import PopularBlogs from './components/PopularBlogs';
import Services from './components/Services';
import LoadingBar from 'react-top-loading-bar'
export default class App extends Component {
  pageSize=5;
  apiKey=process.env.REACT_APP_NEWS_API
  state = {
    progress: 0
  }
  setProgress = (progress) => {
    this.setState({progress: progress})
  }
  render() {
    return (
      <>
      <div>
        <Router>
        <LoadingBar
        color='#f11946'
        progress={this.state.progress}
      />
          <Navbar />
          
          <div className="App grid place-items-center" id="App">
            <Routes>
              <Route path="/general" element={<Home setProgress={this.setProgress} apiKey={this.apiKey}  pageSize={this.pageSize} key="general" category="general" country="in"/>} />
              {/* start categories */}
              <Route path="/business" element={<Home setProgress={this.setProgress} apiKey={this.apiKey}  pageSize={this.pageSize} key="business"category="business" country="in"/>} />
              <Route path="/sports" element={<Home setProgress={this.setProgress} apiKey={this.apiKey}  pageSize={this.pageSize} key="sports" category="sports" country="in"/>} />
              <Route path="/technology" element={<Home setProgress={this.setProgress} apiKey={this.apiKey}  pageSize={this.pageSize} category="technology" key="technology" country="in"/>} />
              <Route path="/health" element={<Home setProgress={this.setProgress} apiKey={this.apiKey} pageSize={this.pageSize} category="health" key="health" country="in"/>} />
              <Route path="/science" element={<Home setProgress={this.setProgress} apiKey={this.apiKey}  pageSize={this.pageSize} key="science" category="science" country="in"/>} />
              <Route path="/entertainment" element={<Home setProgress={this.setProgress} apiKey={this.apiKey}  pageSize={this.pageSize} key="entertainment" category="entertainment" country="in"/>} />
               {/* end categories */}
              <Route path="/about" element={<About setProgress={this.setProgress} />}/>
              <Route path="/contact" element={<Contact setProgress={this.setProgress}/>}/>
              <Route path="/services" element={<Services setProgress={this.setProgress}/>}/>
              <Route path="/" element={<PopularBlogs setProgress={this.setProgress} per_page={5}/>}/>
            </Routes>
          </div>
        </Router>
      </div>
      </>
    )
  }
}
