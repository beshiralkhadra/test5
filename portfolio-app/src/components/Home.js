import React, { Component } from "react";
import "../index.css";

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        {/* <!-- jumper --> */}
        <div className="jump">
          <a href="#jumplink">
            <i className="fa-solid fa-arrow-up"></i>
          </a>
        </div>
        <div id="jumplink"></div>

        {/* <!-- nav sidebar --> */}
        <aside id="navSide">
          <ul>
            <li>
              <a href="#nav1">About Me</a>
            </li>
            <li>
              <a href="#nav2">what i do</a>
            </li>
            <li>
              <a href="myWorkindex.html">MyWork</a>
            </li>
            <li>
              <a href="#nav4">testimonials</a>
            </li>
            <li>
              <a href="contactMeIndex.html">contact Me</a>
            </li>
          </ul>
        </aside>
        {/* <!-- mainsection  --> */}
        <div
          className="whole"
          style={{ background: ` rgba(0, 0, 0, 0.7) url("/station.jpg")` }}
        >
          <section className="container2">
            <div className="picture">
              <img src="profile.png" alt="profile image" />
            </div>
            <div id="nav1"></div>
            <div className="about">
              <div className="subhead">
                <h1>About Me</h1>
              </div>
              <p>
                Obviously I'm a Web developer. Experienced with all stages of
                the development cycle for dynamic web projects.
              </p>
              <div className="buttons">
                <input
                  type="submit"
                  value="Download CV"
                  className="btn btn-primary"
                />
                <a href="#nav5">
                  <input
                    type="submit"
                    value="Contact"
                    className="btn btn-primary"
                  />
                </a>
              </div>
            </div>
          </section>

          {/* <!-- WhatIDo --> */}
          <div className="container3" id="beshir">
            <div id="nav2"></div>
            <div className="question">
              <h1>What I Do</h1>
            </div>
            <div className="services">
              <div className="box1">
                {" "}
                <h2>
                  <i className="fa-solid fa-pen"></i> copyright
                </h2>
                <section>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                  veniam dolores aut impedit tenetur voluptatibus.
                </section>
              </div>

              <div className="box2">
                <h2>
                  <i className="fa-solid fa-house-chimney"></i> Ecommerce
                </h2>
                <section>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Assumenda tenetur, provident fugit consequuntur est
                  blanditiis?
                </section>
              </div>
              <div className="box3">
                <h2>
                  <i className="fa-solid fa-globe"></i> web design
                </h2>
                <section>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Eveniet maiores sunt iste aspernatur exercitationem hic?
                </section>
              </div>
              <div className="box4">
                <h2>
                  <i className="fa-solid fa-bullhorn"></i> marketing
                </h2>
                <section>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Labore atque possimus reiciendis eaque. Nesciunt, hic!
                </section>
              </div>
            </div>
          </div>

          {/* <!-- testimonials  --> */}
          <div className="container6">
            <div id="nav4"></div>
            <div className="testimonials">
              <h1>testimonials</h1>
              <ul>
                <li>
                  <div className="testi1">
                    <img src="omarkh.png" alt="person" />
                    <blockquote>
                      "10/10 would work with again, Professional, came through
                      and delivered on a tight schedule.{" "}
                    </blockquote>
                    <cite>Omar</cite>
                  </div>
                </li>
                <li>
                  <div className="testi2">
                    <img src="mohammed.webp" alt="person" />
                    <blockquote>
                      "Working with Beshir has been a pleasure.
                    </blockquote>
                    <cite>Mohammad</cite>
                  </div>
                </li>
                <li>
                  <div className="testi3">
                    <img src="yazan.WebP" alt="person" />
                    <blockquote>
                      "A friend recommended him to me, at first I was skeptical
                      but he outpreformed my expectations, although he is a
                      little pricey but his work is worth every penny.{" "}
                    </blockquote>
                    <cite>Yazan</cite>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Home;
