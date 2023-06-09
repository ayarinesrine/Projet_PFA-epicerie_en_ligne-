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
      <p className="leader">lorem upsuim </p>
      <div className="demo-card-wrapper">
        <div className="demo-card demo-card--step1">
          <div className="head">
            <div className="number-box">
              <span>01</span>
            </div>
            <h2><span className="small">rygimi  </span>  Formulaire </h2>
            
          </div>
          <div className="body">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta reiciendis deserunt doloribus consequatur, laudantium odio dolorum laboriosam.</p>
            <img  className="im1" src={ic1} />
          </div>
        </div>
        
    
        <div className="demo-card demo-card--step2">
          <div className="head">
            <div className="number-box">
              <span>02</span>
            </div>
            <h2><span className="small">rygimi</span> Formulaire</h2>
          </div>
          <div className="body">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta reiciendis deserunt doloribus consequatur, laudantium odio dolorum laboriosam.</p>
            <img  className="im1" src={ic2} />
          </div>
        </div>
    
        <div className="demo-card demo-card--step3">
          <div className="head">
            <div className="number-box">
              <span>03</span>
            </div>
            <h2><span className="small">Rygimi</span> Formulaire s</h2>
            
          </div>
          <div className="body">
            <p>Saisir vos informations de santé pour nous informer quels sont les besoins nutritionnels selon votre maladie</p>
            <img  className="im1" src={ic3} />
          </div>
        </div>
    
        <div className="demo-card demo-card--step4">
          <div className="head">
            <div className="number-box">
              <span>04</span>
            </div>
            <h2><span className="small">Rygimi</span> alimentation </h2>
          </div>
          <div className="body">
            <p>nous choisissons les produits à se nourrir avec des aliments les plus naturels possible pour votre maladie</p>
            <img  className="im1" src={ic1} />
          </div>
        </div>
    
        <div className="demo-card demo-card--step5">
          <div className="head">
            <div className="number-box">
              <span>05</span>
            </div>
            <h2><span className="small">Rygimi</span> inscription</h2>
          </div>
          <div className="body">
            <p>clique dans boutons</p>
         
          </div>
        </div>
        
      </div>
    </div>
    )
  }
}
