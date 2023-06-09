import React, { Component } from "react";
import "./Footer.css";
import logo5 from "./../../../assets/image/logo5.png";
export default class Footer extends Component {
  render() {
    return (
      <div class="grid-container1">
        <div className="titre">
          
          <img className="image11" src={logo5} />
          <p className="i1">
            
            notre équipe a décidé de créer un E-Shop pour bien présenter nos
            produits E-Shop pour bien présenter nos produit
          </p>
        </div>
        <div className="titre1">
          
          <h6 className="pm">Categories</h6>
          <ul class="footer-links">
            <li className="i1">
              <a>Get start</a>
            </li>
            <li className="i1">
              <a>Boutique en ligne</a>
            </li>
            <li className="i1">
              <a>se Connecter</a>
            </li>
            <li className="i1">
              <a>Livraison</a>
            </li>
            <li className="i1">
              <a>Contact</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
