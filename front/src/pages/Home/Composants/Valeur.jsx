import React, { Component } from 'react'
import "./Valeur.css";
import avacato from "./../../../assets/image/avocato.png";
export default class Valeur extends Component {
  render() {
    return (
      <div className="contai">
      <div className="left-section"> <img className="ima1" src={avacato} /> </div>
      <div className="right-section"><h4> Qui somme nous</h4><p className='paragraphe2'>S’adressant à toutes les homme, votre magasin  en ligne, vous invite à 
        consulter son catalogue en ligne et à craquer pour vos pièces favorites. Boutique dealimentation pour tous categories en ligne, rygimie vous invite à découvrir un large choix de pièces de prêt-à-porter alliant confort, simplicité et élégance. En effet, la boutique est à l’affût des dernières tendances 
        et vous propose des aliemntation tant pour le quotidien que pour des évènements importants et plus formels.</p></div>
    </div>
    )
  }
}



