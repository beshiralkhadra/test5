import React, { Component } from "react";
import "../index.css";
class Footer extends Component {
  render() {
    return (
      <div class="container8">
        <footer>
          <div class="socialmedia">
            <a href=" https://www.linkedin.com/in/beshir-alkhadra/">
              <i class="fa-brands fa-linkedin-in" />
            </a>{" "}
            <a href="https://twitter.com/beshiralkh97">
              <i class="fa-brands fa-twitter" />
            </a>{" "}
            <a href="https://github.com/beshiralkhadra">
              <i class="fa-brands fa-github" />
            </a>
          </div>
          <div class="copyright">&copy; 2021 all rights reserved</div>
        </footer>
      </div>
    );
  }
}

export default Footer;
