import React, { Component } from 'react'
import "./Service.css";
import image111 from "./../../../assets/image/image111.png";
import icon1 from "./../../../assets/image/icon1.gif";
import icon2 from "./../../../assets/image/icon2.gif";
import icon3 from "./../../../assets/image/icon3.gif";
import icon4 from "./../../../assets/image/icon4.gif";
import icon5 from "./../../../assets/image/icon5.gif";
export default class Service extends Component {
  render() {
    return (
      <div>  
  <h2 className='titre3'> Nos <span className='s'>services </span></h2>
<div className="grid-container">
 <div className="grid-item"><img className="image11" src={icon1} />  </div>
  <div className="grid-item"><img className="image11" src={icon2} /> </div>
  <div className="grid-item"><img className="image11" src={icon3} /> </div>  
   <div className="grid-item"><img className="image11" src={icon4} /></div>
   <div className="grid-item"><img className="image11" src={icon5} /></div>
  
   </div>
   <div className="grid-container">
 <div className="grid-item"><span className='ti'>Qualite </span> </div>
  <div className="grid-item"> <span className='ti'>Experience </span></div>
  <div className="grid-item"> <span className='ti'>Livraison Rapide</span></div>  
   <div className="grid-item"><span className='ti'> Disponiblite</span></div>
   <div className="grid-item"><span className='ti'> Disponiblite</span></div>
  
   </div>
</div>
    )
  }
}
