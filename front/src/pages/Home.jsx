import React, { Component } from "react";
import Header from "../templates/Header";
import Div3 from "../templates/Div3";
import Div from "../templates/Div";
import Div2 from "../templates/Div2";
import Div22 from "../templates/Div22";
import Char from "../templates/Char";
import Product from "../templates/Product";
import Contact from "../templates/Contact";

export default class Home extends Component {
  render() {
    return (
      <div>    
      <Header></Header>
      <Div22></Div22>
      <Char></Char>
      <Product></Product>
      <Div></Div>
      <Div2></Div2>
      <Div3></Div3>
      <Contact></Contact>
      </div>
    );
  }
}
