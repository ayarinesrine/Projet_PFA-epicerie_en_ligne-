import React, { Component } from "react";
import "./Singup.css";
import MyForm from "./composants/MyForm";
export default class Singup extends Component {
  render() {
    return (
      <div className="container">
        <div className="form">
        <MyForm></MyForm>
        </div>
        
      </div>
    );
  }
}
