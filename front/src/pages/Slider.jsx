import React, { Component } from "react";
import "./Slider.css";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import logo from "./../assets/image/logo25.png";
import slider6 from "./../assets/video/slider6.mp4";
import slider3 from "./../assets/video/slider4.mp4";
import slider2 from "./../assets/video/slider5.mp4";
import slider1 from "./../assets/video/slider1.mp4";
export default class Slider extends Component {
  componentDidMount() {
    // JavaScript for responsive navigation menu
    const menuBtn = document.querySelector(".menu-btn");
    const navigation = document.querySelector(".navigation");
    menuBtn.addEventListener("click", () => {
      menuBtn.classList.toggle("active");
      navigation.classList.toggle("active");
    });

    // JavaScript for video slider navigation
    const btns = document.querySelectorAll(".nav-btn");
    const slides = document.querySelectorAll(".video-slide");
    const contents = document.querySelectorAll(".content");

    var sliderNav = function (manual) {
      if (btns[manual] && slides[manual] && contents[manual]) {
        btns.forEach((btn) => {
          btn.classList.remove("active");
        });
        slides.forEach((slide) => {
          slide.classList.remove("active");
        });
        contents.forEach((content) => {
          content.classList.remove("active");
        });

        btns[manual].classList.add("active");
        slides[manual].classList.add("active");
        contents[manual].classList.add("active");
      }
    };

    btns.forEach((btn, i) => {
      btn.addEventListener("click", () => {
        sliderNav(i);
      });
    });
  }

  render() {
    return (
      <div>
        <header>
          <a href="#" className="brand">
            <img className="logo2" src={logo} />
          </a>
          <div className="menu-btn"></div>
          <div className="navigation">
            <div className="navigation-items">
              <a href="#">Acceuil</a>
              <a href="#">Get start</a>
              <a href="#">Boutique en ligne</a>
              <a href="#">Contact</a>
              <Popup trigger={<button className="buttonPopup">Connecter</button>}>
                <div>
                  <div className="center">
                    <h1>Se connecter</h1>
                    <form className="formPopup">
                      <div className="inputbox">
                        <input type="email" required="required" />
                        <span>Email</span>
                      </div>
                      <div className="inputbox">
                        <input type="password" required="required" />
                        <span>Password</span>
                      </div>
                      <div className="inputbox">
                        <input type="button" value="Connexion" />
                      </div>
                      <div>créer un compte</div>
                    </form>
          
                  </div>
                </div>
              </Popup>
            </div>
          </div>
        </header>

        <section className="home">
          <video
            className="video-slide active"
            src={slider6}
            autoPlay
            muted
            loop
          ></video>
          <video
            className="video-slide"
            src={slider2}
            autoPlay
            muted
            loop
          ></video>
          <video
            className="video-slide"
            src={slider3}
            autoPlay
            muted
            loop
          ></video>
               <video
            className="video-slide"
            src={slider1}
            autoPlay
            muted
            loop
          ></video>
          <video
            className="video-slide"
            src={slider3}
            autoPlay
            muted
            loop
          ></video>

          <div className="content active">
            <h1>
              Rygimi
              <br />
              <span></span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <a href="#">Contactez-nous</a>
          </div>
          <div className="content">
            <h1>
              Rygimi
              <br />
              <span></span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <a href="#">Contactez-nous</a>
          </div>
          <div className="content">
            <h1>
              Rygimi
              <br />
              <span></span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <a href="#">Contactez-nous</a>
          </div>
          <div className="content">
            <h1>
              Rygimi
              <br />
              <span></span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <a href="#">Contactez-nous</a>
          </div>
          <div className="content">
            <h1>
              Rygimi
              <br />
              <span></span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <a href="#">Contactez-nous</a>
          </div>

          <div className="media-icons">
            <a href="#">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
          <div className="slider-navigation">
            <div className="nav-btn active"></div>
            <div className="nav-btn"></div>
            <div className="nav-btn"></div>
            <div className="nav-btn"></div>
            <div className="nav-btn"></div>
          </div>
        </section>
        <script src="js/jsslider.js"></script>
      </div>
    );
  }
}
