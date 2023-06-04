import "./App.css";
import Home from "./pages/Home";

import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Home />} />
          <Route path="contact" element={<Home />} />
          <Route path="*" element={<Home></Home>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
