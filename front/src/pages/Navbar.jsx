import React, { Component } from "react";
import "./Navbar.css";
import logo from "./../assets/image/logo23.png";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
export default class Navbar extends Component {
  render() {
    return (
      <div>
        <header>
          <a href="#" className="brand">
            <img className="logo2" src={logo} alt="Logo" />
          </a>
          <div className="menu-btn"></div>
          <div className="navigation">
            <div className="navigation-items">
              <a href="#">Acceuil</a>
              <a href="#">Get start</a>
              <a href="#">Boutique en ligne</a>
              <a href="#">Contact</a>
              <Popup trigger={<button> Trigger</button>}>
                <div>
                  <div className="center">
                    <h1>Se connecter</h1>
                    <form>
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
                    </form>
                  </div>
                </div>
              </Popup>
            </div>
          </div>
            
        </header>
      </div>
    );
  }
}
