import React, { Component } from "react";
import "./Slider.css";
import Popup from "reactjs-popup";
import { Outlet, Link } from "react-router-dom";
import axios from "axios";

import "reactjs-popup/dist/index.css";
import logo from "./../../../assets/image/logo25.png";
import slider6 from "./../../../assets/video/slider6.mp4";
import slider3 from "./../../../assets/video/slider4.mp4";
import slider2 from "./../../../assets/video/slider5.mp4";
import slider1 from "./../../../assets/video/slider1.mp4";
import slider4 from "./../../../assets/video/slider2.mp4";

export default class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }
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
              <a href="formulaire">Get start</a>
              <a href="products">Boutique en ligne</a>
              <Popup trigger={<a> Connexion</a>}>
                <div >
                  <div className="center">
                    <h1>Se connecter</h1>
                    <div>
                      <div className="inputbox">
                        <input
                          type="email"
                          required="required"
                          onChange={(e) => {
                            this.setState({ email: e.target.value });
                          }}
                        />
                        <span>Email</span>
                      </div>
                      <div className="inputbox">
                        <input
                          type="password"
                          required="required"
                          onChange={(e) => {
                            this.setState({ password: e.target.value });
                          }}
                        />
                        <span>Password</span>
                      </div>
                      <div className="inputbox">
                        <button className="button_con"
                          onClick={() => {
                            this.props.login(
                              this.state.email,
                              this.state.password
                            );
                          }}
                        >
                          Connexion
                        </button>
                      </div>
                      <div>
                        <Link to="/Signup" className="creer">Créer Compte</Link>
                      </div>
                    </div>
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
            src={slider4}
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
              Découvrez notre sélection de produits bio soigneusement choisis
              pour vous. Que vous ayez des allergies, des intolérances ou des
              restrictions alimentaires, nous avons ce qu'il vous faut. Notre
              équipe d'experts en nutrition vous propose une liste de produits
              qui vous aideront à respecter vos besoins alimentaires tout en
              vous régalant. Commandez facilement en ligne et faites-vous livrer
              à votre porte.
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
