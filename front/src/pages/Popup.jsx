import React, { useState } from 'react';

const Popup = ({ handleClose, show }) => {
  const showHideClassName = show ? 'popup display-block' : 'popup display-none';

  return (
    <div className={showHideClassName}>
      <div className="popup-content">
        <button className="close-button" onClick={handleClose}>X</button>
        <h2>Popup Content</h2>
        <p>Ce contenu apparaît dans la fenêtre modale.</p>
      </div>
    </div>
  );
};

const App = () => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div className="app">
      <h1>Exemple de Popup React</h1>
      <button onClick={togglePopup}>Afficher le Popup</button>
      <Popup handleClose={togglePopup} show={showPopup} />
    </div>
  );
};

export default App;
