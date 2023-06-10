import React, { Component } from "react";
import image111 from "./../../../assets/image/image111.png";
import "./About.css";
export default class About extends Component {
  render() {
    return (
      <div className="grid-container3">
        <div className="item11">
          <img className="im" src={image111} />
        </div>
        <div className="item2">
        <h1 className="par1">votre santé est notre priorité</h1>
            <p  className="pargr1">
              Chez Rygimi, nous plaçons nos valeurs au cœur de notre entreprise.
              Nous croyons en une alimentation saine, respectueuse de
              l'environnement et source de bien-être. Notre engagement envers la
              qualité supérieure, la durabilité, la transparence et la santé
              guide toutes nos actions. Nous nous efforçons de vous offrir des
              produits bio d'une qualité exceptionnelle, en favorisant les
              pratiques agricoles durables et en vous fournissant toutes les
              informations dont vous avez besoin pour prendre des décisions
              éclairées. Rejoignez-nous dans notre mission de promouvoir une
              alimentation consciente, tant pour votre santé que pour la
              planète.
            </p>



          
        </div>
      </div>
    );
  }
}
