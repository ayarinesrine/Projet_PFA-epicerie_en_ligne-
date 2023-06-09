import React from 'react';
import"./ContactForm.css";
const ContactForm = () => {
  const addClass = () => {
    document.body.classList.add("sent");
  }

  return (
    <div>
  
      <div className="wrapper1 centered">
        <article className="letter">
          <div className="side">
            <h1 className="h1">Contact us</h1>
            <p className="p">
              <input className="input1" type="text" placeholder="Your name" required />
            </p>
            <p className="p">
              <input className="input1" type="email" placeholder="Your email" required/>
            </p>
           
          </div>
          <div className="side">
          <p className="p">
              <textarea className="textarea" placeholder="Your message" required></textarea>
            </p>
            <p className="p">
              <button className="button1" id="sendLetter" onClick={addClass}>Send</button>
            </p>
          </div>
        </article>

        <p  className="result-message ">Merci pour votre message</p>
      </div>
     
    </div>
  );
}

export default ContactForm;
