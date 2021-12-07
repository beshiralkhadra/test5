import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../index.css";

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="container">
          <div className="logo">
            <Link to="/">
              <img src="/bkalkhadra97png.png" alt="logo" />
            </Link>
          </div>
          <button type="button" id="lightMode">
            <i className="fas fa-adjust"></i>
          </button>
          <div className="burger">
            <b id="toggleBtns" to="#">
              <i id="burgerToggle" className="fa-solid fa-bars"></i>
            </b>
          </div>
          <div id="navToggle" className="navbar">
            <ul>
              <li>
                <Link to="/">About Me</Link>
              </li>
              <li>
                <Link to="/">what i do</Link>
              </li>
              <li>
                <Link to="/myWork">MyWork</Link>
              </li>
              <li>
                <Link to="/">testimonials</Link>
              </li>
              <li>
                <Link to="/contactMe">contact Me</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
