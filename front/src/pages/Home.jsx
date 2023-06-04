import React, { Component } from "react";
import "./Home.css";

import FlipCard from "./FlipCard";
import Slider from "./Slider";
export default class Home extends Component {
  render() {
    return (
      <div>
        <Slider></Slider>
       
        <FlipCard></FlipCard>
      </div>
    );
  }
}
