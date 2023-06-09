import React, { Component } from 'react'
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
        <h3 className='titre1'>Bienvenu</h3>
        <h1>votre santé est notre priorité</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
          <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
          <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
          <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
          <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
          <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
        </div>
        
      </div>
    </div>
    )
  }
}
