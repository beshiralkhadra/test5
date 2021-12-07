import React, { Component } from "react";
import "../index.css";
class Mywork extends Component {
  render() {
    return (
      <div>
        <article class="container5">
          <div id="nav3"></div>
          <div class="text">
            <h1>My work</h1>
            <div class="abstract">
              Obviously I'm a Web devloper. Experienced with all stages of the
              development cycle for dynamic web projects.
            </div>
          </div>
          <div class="cards">
            <div class="card1">
              <div
                class="card-img1"
                style={{
                  background: `url(/firstweb.webp)`,
                  backgroundSize: "cover",
                }}
              ></div>
              <div class="card-text1">my first web page using html and css</div>
            </div>
            <div class="card2">
              <div
                class="card-img2"
                style={{
                  background: `  url(imagesexample.webp)`,
                  backgroundSize: "cover",
                }}
              ></div>
              <div class="card-text2">html and css example</div>
            </div>
            <div class="card3">
              <div
                class="card-img3"
                style={{
                  background: `url(bkalkhadra97png.png)`,
                  backgroundSize: "cover",
                }}
              ></div>
              <div class="card-text3">my own logo</div>
            </div>
          </div>
        </article>
      </div>
    );
  }
}

export default Mywork;
