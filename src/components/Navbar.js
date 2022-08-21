import React, { Component } from 'react'
import { Link } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';
export default class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navClassMenu: "hidden justify-between items-center w-full md:flex md:w-auto md:order-1",
            openMenuBar: "w-6 h-6",
            closeMenuBar: "hidden w-6 h-6",
            ntProgress: 0
        };
      };
      showNavMenu = () => {
        if (this.state.navClassMenu === "hidden justify-between items-center w-full md:flex md:w-auto md:order-1"){
            this.setState({
                navClassMenu: "justify-between items-center w-full md:flex md:w-auto md:order-1",
                openMenuBar: "hidden w-6 h-6",
                closeMenuBar: "w-6 h-6"
            });
        }else{
            this.setState({
                navClassMenu: "hidden justify-between items-center w-full md:flex md:w-auto md:order-1",
                openMenuBar: "w-6 h-6",
                closeMenuBar: "hidden w-6 h-6"
            });
        }
      };
      clickNavClose = () => {
        this.setState({
            navClassMenu: "hidden justify-between items-center w-full md:flex md:w-auto md:order-1",
            openMenuBar: "w-6 h-6",
            closeMenuBar: "hidden w-6 h-6"
        });
      }
      clickLoadClose = () => {
        this.setState({ ntProgress: this.state.ntProgress+10 })
        this.setState({ ntProgress: this.state.ntProgress+20 })
        this.setState({
            navClassMenu: "hidden justify-between items-center w-full md:flex md:w-auto md:order-1",
            openMenuBar: "w-6 h-6",
            closeMenuBar: "hidden w-6 h-6"
        });
        this.setState({ ntProgress: this.state.ntProgress+40 })
        this.setState({ ntProgress: this.state.ntProgress+60 })
        this.setState({ ntProgress: this.state.ntProgress+100 })
      }

  render() {
    return (
      <>
      <LoadingBar color="#f11946" progress={this.state.ntProgress} onLoaderFinished={() => this.setState({ ntProgress:0 })} />
      <header className="fixed-tp-nav">
        <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-900">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <span className="flex items-center">
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            <Link className="flex items-center" to="/" onClick={this.clickNavClose}>
            <img src="logo192.png" className="mr-3 h-7 sm:h-9" alt="Trappist Logo" />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Trappist News</span>
            </Link>
            </span>
          </span>
          <div className="flex md:order-2">
              <Link to="/contact" onClick={this.clickLoadClose}>
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Contact Us
            </button>
            </Link>
            <button
              data-collapse-toggle="mobile-menu-4"
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu-4"
              aria-expanded="false"
              onClick={this.showNavMenu}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={this.state.openMenuBar}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
              <svg
                className={this.state.closeMenuBar}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          <div
            className={this.state.navClassMenu}
            id="mobile-menu-4"
          >
            <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
              <li>
                <Link to="/"
                  className="block py-2 pr-4 pl-3 text-gray-700 rounded md:bg-transparent md:text-white md:p-0 dark:text-white"
                  aria-current="page"
                  onClick={this.clickNavClose}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about"
                  onClick={this.clickLoadClose}
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  About
                </Link>
              </li>
              {/* popular categories */}
              <li>
                <Link to="/business"
                  onClick={this.clickNavClose}
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Business
                </Link>
              </li>
              <li>
                <Link to="/sports"
                  onClick={this.clickNavClose}
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Sports
                </Link>
              </li>
              <li>
                <Link to="/technology"
                  onClick={this.clickNavClose}
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Technology
                </Link>
              </li>
              <li>
                <Link to="/health"
                  onClick={this.clickNavClose}
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                 Health
                </Link>
              </li>
              <li>
                <Link to="/science"
                  onClick={this.clickNavClose}
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Science
                </Link>
              </li>
              <li>
                <Link to="/entertainment"
                  onClick={this.clickNavClose}
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Entertainment
                </Link>
              </li>
              {/* end popular categories */}
              <li>
                <Link to="/services"
                  onClick={this.clickLoadClose}
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Services
                </Link>
              </li>
  
            </ul>
          </div>
        </div>
      </nav>
      </header>
      <br /> <br />
      </>
    )
  }
}
