import React, { Component } from 'react';

import "./Contact.css";
import image10 from "./../../../assets/image/image10.png";
import ContactForm from './ContactForm';

export default class Contact extends Component {
  render() {
    return (
      <div className="container1">
        <div className="row">
          <div className="column1">
            <img className="im" src={image10} />
          </div>
          <ContactForm></ContactForm>
        </div>

     

        <div className="floating-container">
          <div className="floating-button">+</div>
          <div className="element-container">
            <a>
              <span className="float-element tooltip-left">
                <i className="material-icons">mobile</i>
              </span>
            </a>
            <span className="float-element">
              <i className="material-icons">email</i>
            </span>
            <span className="float-element">
              <i className="material-icons">inscription</i>
            </span>
          </div>
        </div>
      </div>
    );
  }
}
