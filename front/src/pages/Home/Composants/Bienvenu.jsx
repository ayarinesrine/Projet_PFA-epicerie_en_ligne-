import React, { Component } from "react";
import "./Bienvenu.css";
import im15 from "./../../../assets/image/im15.png";
export default class Bienvenu extends Component {
  render() {
    return (
      <div class="container1">
        <div className="row">
          <div className="column1">
            <img className="im" src={im15} />
          </div>
          <div className="column2">
            <h3 className="titre1">Bienvenu</h3>
            <h1>votre santé est notre priorité</h1>
            <p className="pargr1">
              Nous sommes là pour vous offrir une alimentation saine et
              équilibrée grâce à notre sélection de produits biologiques de
              qualité supérieure. Faites confiance à Rygimi pour prendre soin de
              vous et profitez de chaque bouchée en toute tranquillité.
              Découvrez notre gamme de produits soigneusement choisis pour vous
              aider à atteindre vos objectifs de bien-être et à adopter un mode
              de vie sain.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
