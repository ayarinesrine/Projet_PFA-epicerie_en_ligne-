import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import "./App.css";
import Singup from "./pages/creerCompte/Singup";
import Boutique from "./pages/Boutique/Boutique"
import Formulaire from "./pages/Formulaire/Formulaire"
import Basket from "./pages/Basket/Basket";
function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<Home />} />
          <Route path="signup" element={<Singup/>} />
          <Route path="products" element={<Boutique/>} />
          <Route path="formulaire" element={<Formulaire/>} />
          <Route path="basket" element={<Basket/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;