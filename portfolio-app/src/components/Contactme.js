import React, { Component } from "react";
import "../index.css";
class Contactme extends Component {
  render() {
    return (
      <div>
        <address class="container7">
          <div class="text97">
            <h1>Contact Me</h1>
            <section>
              Obviously I'm a Web developer. Experienced with all stages of the
              development cycle for dynamic web projects.
            </section>
          </div>
          <div class="big">
            <div class="information">
              <div class="information1">
                <h3>
                  <i class="fa-solid fa-phone" /> phone
                </h3>
                <a id="lightNumber">+962-79-6308616</a>
              </div>

              <div class="information2">
                <h3>
                  <i class="fa-solid fa-envelope" /> Email
                </h3>
                <a id="lightEmail">beshiralkhadra@gmail.com</a>
              </div>
              <div class="information3">
                <h3>
                  <i class="fa-solid fa-location-dot" /> Location
                </h3>
                <a id="lightLocation">Jordan-Amman</a>
              </div>
            </div>
            <div class="form97">
              <form>
                <h2 id="demo">request demo</h2>

                <div class="form">
                  <input
                    id="lightName"
                    type="text"
                    name="name"
                    placeholder="name"
                    required
                  />
                  <div class="field">
                    <input
                      id="lightEmail2"
                      style={{ textTransform: "lowercase" }}
                      type="email"
                      name="email"
                      placeholder="your email"
                      required
                    />

                    <div class="icons">
                      <i class="fas fa-check-circle" />
                      <i class="fas fa-exclamation-circle" />
                    </div>
                  </div>

                  <textarea
                    name="message"
                    id="message"
                    cols="30"
                    rows="10"
                    placeholder="your message"
                  />
                  <input type="submit" value="send" class="btn btn-primary" />
                </div>
              </form>
            </div>
          </div>
        </address>
      </div>
    );
  }
}

export default Contactme;
