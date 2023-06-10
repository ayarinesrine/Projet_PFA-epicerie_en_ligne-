import React, { Component } from 'react'
import"./Steps.css"
import ic1 from "./../../../assets/image/ic1.gif";
import ic2 from "./../../../assets/image/ic2.gif";
import ic3 from "./../../../assets/image/ic3.gif";
export default class Steps extends Component {
  render() {
    return (
      <div id="timeline">
      <h1>Les etapes </h1>
      <p className="leader"></p>
      <div className="demo-card-wrapper">
        <div className="demo-card demo-card--step1">
          <div className="head">
            <div className="number-box">
              <span>01</span>
            </div>
            <h3><span className="small">rygimi  </span>  Remplissez le formulaire personnalisé</h3>
            
          </div>
          <div className="body">
            <p>Renseignez vos préférences alimentaires, allergies et restrictions dans notre formulaire en ligne.</p>
            <img  className="im1" src={ic1} />
          </div>
        </div>
        
    
        <div className="demo-card demo-card--step2">
          <div className="head">
            <div className="number-box">
              <span>02</span>
            </div>
            <h3><span className="small">rygimi</span>Recevez votre régime alimentaire personnalisé </h3>
          </div>
          <div className="body">
            <p>Notre équipe d'experts en nutrition vous enverra par e-mail une liste de produits adaptés à votre régime alimentaire spécifique.</p>
            <img  className="im1" src={ic2} />
          </div>
        </div>
    
        <div className="demo-card demo-card--step3">
          <div className="head">
            <div className="number-box">
              <span>03</span>
            </div>
            <h3><span className="small">Rygimi</span> Explorez notre sélection de produits</h3>
            
          </div>
          <div className="body">
            <p> Parcourez notre gamme de produits bio, comprenant des fruits et légumes, produits laitiers, viandes et poissons, céréales et produits secs.</p>
            <img  className="im1" src={ic3} />
          </div>
        </div>
    
        <div className="demo-card demo-card--step4">
          <div className="head">
            <div className="number-box">
              <span>04</span>
            </div>
            <h3><span className="small">Rygimi</span> Ajoutez les produits à votre panier</h3>
          </div>
          <div className="body">
            <p> Sélectionnez les produits qui vous intéressent et ajoutez-les à votre panier.</p>
            <img  className="im1" src={ic1} />
          </div>
        </div>
    
        <div className="demo-card demo-card--step5">
          <div className="head">
            <div className="number-box">
              <span>05</span>
            </div>
            <h3><span className="small">Rygimi</span> Finalisez votre commande</h3>
          </div>
          <div className="body">
            <p> Procédez au paiement en utilisant nos options sécurisées et vérifiez les détails de votre commande avant de la valider.</p>
            <img  className="im1" src={ic2} />
          </div>
        </div>
        
      </div>
    </div>
    )
  }
}
