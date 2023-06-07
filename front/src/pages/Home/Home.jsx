import React, { Component } from 'react'
import Slider from "./Composants/Slider";
import Bienvenu from "./Composants/Bienvenu";
import About from './Composants/About';
import Valeur from './Composants/Valeur';
import Produit from './Composants/Produit';
import Contact from './Composants/Contact';
import Footer from './Composants/Footer';
export default class Home extends Component {
  render() {
    return (
      <div>
        <Slider></Slider>
        <Bienvenu></Bienvenu>
        <About></About>
        <Valeur></Valeur>
        <Produit></Produit>
        <Contact></Contact>
        <Footer></Footer>
      </div>
    )
  }
}
