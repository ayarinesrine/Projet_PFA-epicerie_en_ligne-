import React, { Component } from "react";
import "./Home.css";
import FlipCard from "./FlipCard";
import Slider from "./Slider";
import Introduction from "./Introduction";
export default class Home extends Component {
  render() {
    return (
      <div>
        
        <Slider></Slider>
        <Introduction></Introduction>
        <FlipCard></FlipCard>
      </div>
    );
  }
}
